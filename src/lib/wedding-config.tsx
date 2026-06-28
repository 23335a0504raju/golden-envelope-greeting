import { createContext, useContext, useState, type ReactNode } from "react";

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
    bride: { father: string; mother: string; brother: string; sister: string };
    groom: { father: string; mother: string; brother: string; sister: string };
  };
  photos: string[];
};

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
      father: "Ramesh Sharma",
      mother: "Lakshmi Sharma",
      brother: "Karthik Sharma",
      sister: "Divya Sharma",
    },
    groom: {
      father: "Suresh Reddy",
      mother: "Padma Reddy",
      brother: "Vikram Reddy",
      sister: "Sneha Reddy",
    },
  },
  photos: ["", "", "", "", "", ""],
};

type Ctx = {
  config: WeddingConfig;
  setConfig: React.Dispatch<React.SetStateAction<WeddingConfig>>;
};

const WeddingConfigContext = createContext<Ctx | null>(null);

export function WeddingConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<WeddingConfig>(defaultWeddingConfig);
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

// Back-compat for any module still importing `weddingConfig` directly.
export const weddingConfig = defaultWeddingConfig;