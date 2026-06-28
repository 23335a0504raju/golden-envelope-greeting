import { createContext, useContext, useState, type ReactNode } from "react";
import { supabase } from "./supabase";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export type EventInfo = { date: string; time: string; venue: string; address?: string };

export type WeddingConfig = {
  brideName: string;
  groomName: string;
  bridePhoto: string;
  groomPhoto: string;
  weddingDate: string;
  weddingDateISO: string; // YYYY-MM-DD for countdown
  weddingTime: string;
  venue: string;
  venueAddress: string;
  mehendi: EventInfo;
  haldi: EventInfo;
  wedding: EventInfo;
  reception: EventInfo;
  family: {
    bride: FamilySide;
    groom: FamilySide;
  };
  photos: string[];
};

export type FamilySide = {
  father: string; fatherPhoto: string;
  mother: string; motherPhoto: string;
  brother: string; brotherPhoto: string;
  sister: string; sisterPhoto: string;
};

// ─────────────────────────────────────────────────────────────
// Default config (used as fallback when Supabase has no data)
// ─────────────────────────────────────────────────────────────

export const defaultWeddingConfig: WeddingConfig = {
  brideName: "Priya Sharma",
  groomName: "Arjun Reddy",
  bridePhoto: "",
  groomPhoto: "",
  weddingDate: "15 February 2026",
  weddingDateISO: "2026-02-15",
  weddingTime: "10:00 AM",
  venue: "Sri Kalyana Mandapam",
  venueAddress: "MG Road, Visakhapatnam, Andhra Pradesh",
  mehendi: { date: "13 Feb 2026", time: "4:00 PM", venue: "Bride's Residence", address: "" },
  haldi: { date: "14 Feb 2026", time: "9:00 AM", venue: "Bride's Residence", address: "" },
  wedding: { date: "15 Feb 2026", time: "10:00 AM", venue: "Sri Kalyana Mandapam", address: "MG Road, Visakhapatnam" },
  reception: { date: "15 Feb 2026", time: "7:00 PM", venue: "Grand Kakatiya Hall", address: "" },
  family: {
    bride: {
      father: "Ramesh Sharma", fatherPhoto: "",
      mother: "Lakshmi Sharma", motherPhoto: "",
      brother: "Karthik Sharma", brotherPhoto: "",
      sister: "Divya Sharma", sisterPhoto: "",
    },
    groom: {
      father: "Suresh Reddy", fatherPhoto: "",
      mother: "Padma Reddy", motherPhoto: "",
      brother: "Vikram Reddy", brotherPhoto: "",
      sister: "Sneha Reddy", sisterPhoto: "",
    },
  },
  photos: [
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900",
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900",
  ],
};

// ─────────────────────────────────────────────────────────────
// Supabase persistence helpers
// ─────────────────────────────────────────────────────────────

const CONFIG_TABLE = "wedding_config";
const CONFIG_ROW_ID = 1;
const PHOTO_BUCKET = "wedding-photos";

/** Fetch the saved wedding config from Supabase. Falls back to defaultWeddingConfig on error. */
export async function fetchWeddingConfig(): Promise<WeddingConfig> {
  try {
    const { data, error } = await supabase
      .from(CONFIG_TABLE)
      .select("config")
      .eq("id", CONFIG_ROW_ID)
      .single();

    if (error || !data?.config || Object.keys(data.config).length === 0) {
      return defaultWeddingConfig;
    }

    // Merge with defaults so new keys added in future are never undefined
    return { ...defaultWeddingConfig, ...data.config } as WeddingConfig;
  } catch {
    return defaultWeddingConfig;
  }
}

/** Save (upsert) the entire wedding config to Supabase. */
export async function saveWeddingConfig(config: WeddingConfig): Promise<void> {
  const { error } = await supabase.from(CONFIG_TABLE).upsert({
    id: CONFIG_ROW_ID,
    config,
    updated_at: new Date().toISOString(),
  });
  if (error) throw error;
}

/**
 * Upload a photo file to Supabase Storage.
 * @param file  The File object to upload.
 * @param pathKey  A unique slug used to build the storage path (e.g. "bride-photo").
 * @returns The permanent public URL of the uploaded image.
 */
export async function uploadPhoto(file: File, pathKey: string): Promise<string> {
  const ext = file.name.split(".").pop() ?? "jpg";
  const fileName = `${pathKey.replace(/[^a-zA-Z0-9-]/g, "-")}-${Date.now()}.${ext}`;

  const { error } = await supabase.storage
    .from(PHOTO_BUCKET)
    .upload(fileName, file, { upsert: true, contentType: file.type });

  if (error) throw error;

  const { data } = supabase.storage.from(PHOTO_BUCKET).getPublicUrl(fileName);
  return data.publicUrl;
}

// ─────────────────────────────────────────────────────────────
// React Context
// ─────────────────────────────────────────────────────────────

type Ctx = {
  config: WeddingConfig;
  setConfig: React.Dispatch<React.SetStateAction<WeddingConfig>>;
};

const WeddingConfigContext = createContext<Ctx | null>(null);

/**
 * Wrap your page in this provider. Pass `initialConfig` (fetched from Supabase)
 * so the invitation renders with live data from the first paint.
 */
export function WeddingConfigProvider({
  children,
  initialConfig,
}: {
  children: ReactNode;
  initialConfig?: WeddingConfig;
}) {
  const [config, setConfig] = useState<WeddingConfig>(initialConfig ?? defaultWeddingConfig);
  return (
    <WeddingConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </WeddingConfigContext.Provider>
  );
}

export function useWeddingConfig() {
  const ctx = useContext(WeddingConfigContext);
  if (!ctx) throw new Error("useWeddingConfig must be used inside WeddingConfigProvider");
  return ctx;
}

// Back-compat alias
export const weddingConfig = defaultWeddingConfig;