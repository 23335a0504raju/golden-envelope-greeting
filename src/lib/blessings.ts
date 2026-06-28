import { supabase } from "./supabase";

// ─────────────────────────────────────────────────────────────
// Wall of Blessings — Supabase persistence
//
// Run this SQL once in your Supabase dashboard (SQL editor):
//
//   create table if not exists public.wedding_blessings (
//     id uuid primary key default gen_random_uuid(),
//     name text not null,
//     relation text,
//     message text not null,
//     created_at timestamptz not null default now()
//   );
//   alter table public.wedding_blessings enable row level security;
//   create policy "blessings_read"   on public.wedding_blessings for select using (true);
//   create policy "blessings_insert" on public.wedding_blessings for insert with check (true);
//
// (Optional, for live updates) enable Realtime on the table:
//   alter publication supabase_realtime add table public.wedding_blessings;
// ─────────────────────────────────────────────────────────────

export type Blessing = {
  id: string;
  name: string;
  relation?: string | null;
  message: string;
  created_at: string;
};

const TABLE = "wedding_blessings";

/** Fetch every blessing, newest first. Returns [] on any error. */
export async function fetchBlessings(): Promise<Blessing[]> {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .order("created_at", { ascending: false });
    if (error || !data) return [];
    return data as Blessing[];
  } catch {
    return [];
  }
}

/** Insert a blessing and return the saved row (with its DB id + timestamp). */
export async function addBlessing(input: {
  name: string;
  relation?: string;
  message: string;
}): Promise<Blessing | null> {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .insert({
        name: input.name,
        relation: input.relation?.trim() ? input.relation.trim() : null,
        message: input.message,
      })
      .select()
      .single();
    if (error || !data) return null;
    return data as Blessing;
  } catch {
    return null;
  }
}

/** Subscribe to new blessings inserted by other guests. Returns an unsubscribe fn. */
export function subscribeBlessings(onInsert: (b: Blessing) => void): () => void {
  try {
    const channel = supabase
      .channel("wedding_blessings_rt")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: TABLE },
        (payload) => onInsert(payload.new as Blessing),
      )
      .subscribe();
    return () => {
      try {
        supabase.removeChannel(channel);
      } catch {
        /* ignore */
      }
    };
  } catch {
    return () => {};
  }
}

/** Human-friendly "x mins ago" from an ISO timestamp. */
export function timeAgo(iso: string): string {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return "";
  const secs = Math.max(0, Math.floor((Date.now() - then) / 1000));
  if (secs < 45) return "just now";
  const mins = Math.floor(secs / 60);
  if (mins < 60) return `${mins} min${mins === 1 ? "" : "s"} ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} hour${hrs === 1 ? "" : "s"} ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
