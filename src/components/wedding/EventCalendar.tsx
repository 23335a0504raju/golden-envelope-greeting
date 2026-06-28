import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useWeddingConfig, type EventInfo } from "@/lib/wedding-config";

const GOLD = "#C9A84C";
const BURGUNDY = "#6B0F1A";

type EventKey = "mehendi" | "haldi" | "wedding" | "reception";

const EVENT_META: { key: EventKey; label: string; color: string }[] = [
  { key: "mehendi", label: "Mehendi", color: "#1f9e63" },
  { key: "haldi", label: "Haldi", color: "#d99a16" },
  { key: "wedding", label: "Wedding", color: "#6B0F1A" },
  { key: "reception", label: "Reception", color: "#8a4fbf" },
];

/** Parse loose date strings like "13 Feb 2026" or ISO "2026-02-15" → Date (local, midnight). */
function parseDate(s?: string): Date | null {
  if (!s) return null;
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return null;
  // normalise to local midnight so day-cell matching is exact
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export function EventCalendar() {
  const { config } = useWeddingConfig();

  const events = useMemo(() => {
    return EVENT_META.map((m) => {
      const info = config[m.key] as EventInfo | undefined;
      const date =
        m.key === "wedding"
          ? parseDate(config.weddingDateISO) ?? parseDate(info?.date)
          : parseDate(info?.date);
      return { ...m, date, info };
    }).filter((e): e is typeof e & { date: Date } => e.date instanceof Date);
  }, [config]);

  const weddingMonth =
    parseDate(config.weddingDateISO) ??
    events.find((e) => e.key === "wedding")?.date ??
    new Date();

  const [month, setMonth] = useState<Date>(weddingMonth);
  const [selected, setSelected] = useState<Date | undefined>(
    events.find((e) => e.key === "wedding")?.date,
  );

  const modifiers = useMemo(
    () => Object.fromEntries(events.map((e) => [e.key, [e.date]])),
    [events],
  );

  const modifiersStyles = useMemo(
    () =>
      Object.fromEntries(
        events.map((e) => [
          e.key,
          {
            background: e.color,
            color: "#fff",
            borderRadius: "9999px",
            fontWeight: 700,
            boxShadow: `0 4px 12px ${e.color}66`,
          } as CSSProperties,
        ]),
      ),
    [events],
  );

  const selectedEvent = selected
    ? events.find((e) => sameDay(e.date, selected))
    : undefined;

  return (
    <div className="mx-auto mt-16 max-w-4xl px-4 md:mt-24">
      <h3
        className="text-center text-[1.5rem] text-[#6B0F1A] md:text-[2rem]"
        style={{ fontFamily: "'Cinzel Decorative', serif" }}
      >
        Mark Your Calendar
      </h3>
      <p
        className="mt-1 text-center italic text-[#C9A84C]"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem" }}
      >
        All our celebrations, at a glance
      </p>

      <div className="mt-8 grid items-start gap-8 md:grid-cols-[auto_1fr]">
        {/* Calendar panel */}
        <div
          className="mx-auto rounded-3xl bg-white p-4 md:p-5"
          style={{
            border: `1.5px solid ${GOLD}55`,
            boxShadow: `0 16px 50px ${BURGUNDY}1f`,
          }}
        >
          <Calendar
            mode="single"
            selected={selected}
            onSelect={setSelected}
            month={month}
            onMonthChange={setMonth}
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
            showOutsideDays
            className="[--cell-size:2.5rem]"
          />
        </div>

        {/* Legend + selected-day detail */}
        <div className="flex flex-col gap-4">
          <div
            className="rounded-2xl p-5"
            style={{ background: "#fffdf7", border: `1px solid ${GOLD}40` }}
          >
            <p
              className="mb-3 text-sm uppercase tracking-[0.18em] text-[#6B0F1A]"
              style={{ fontFamily: "'Cinzel Decorative', serif" }}
            >
              Celebrations
            </p>
            <ul className="space-y-2.5">
              {events.map((e) => (
                <li key={e.key}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelected(e.date);
                      setMonth(e.date);
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-[#6B0F1A]/5"
                  >
                    <span
                      className="h-3.5 w-3.5 shrink-0 rounded-full"
                      style={{ background: e.color }}
                    />
                    <span
                      className="flex-1 text-[#2a1216]"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontWeight: 600 }}
                    >
                      {e.label}
                    </span>
                    <span
                      className="text-[#6B0F1A]"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem" }}
                    >
                      {e.date.toLocaleDateString("en-US", { day: "numeric", month: "short" })}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Selected-day detail card */}
          {selectedEvent && (
            <div
              className="rounded-2xl p-5 text-white"
              style={{
                background: `linear-gradient(135deg, ${selectedEvent.color}, ${selectedEvent.color}cc)`,
                boxShadow: `0 12px 36px ${selectedEvent.color}40`,
              }}
            >
              <p
                className="text-[1.3rem]"
                style={{ fontFamily: "'Cinzel Decorative', serif" }}
              >
                {selectedEvent.label}
              </p>
              <p className="mt-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem" }}>
                {selectedEvent.date.toLocaleDateString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                {selectedEvent.info?.time ? ` · ${selectedEvent.info.time}` : ""}
              </p>
              {selectedEvent.info?.venue && (
                <p className="mt-2 opacity-90" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}>
                  📍 {selectedEvent.info.venue}
                  {selectedEvent.info.address ? `, ${selectedEvent.info.address}` : ""}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
