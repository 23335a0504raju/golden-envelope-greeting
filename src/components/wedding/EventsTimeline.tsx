import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useRef } from "react";
import { useWeddingConfig, type EventInfo } from "@/lib/wedding-config";

type EventDef = {
  key: "mehendi" | "haldi" | "wedding" | "reception";
  name: string;
  icon: "mehendi" | "haldi" | "diya" | "sparkles";
  isMain?: boolean;
  showDirections?: boolean;
};

const EVENTS: EventDef[] = [
  { key: "mehendi", name: "Mehendi Ceremony", icon: "mehendi" },
  { key: "haldi", name: "Haldi Ceremony", icon: "haldi" },
  { key: "wedding", name: "Wedding Day", icon: "diya", isMain: true, showDirections: true },
  { key: "reception", name: "Reception", icon: "sparkles", showDirections: true },
];

function EventIcon({ type, isMain }: { type: EventDef["icon"]; isMain?: boolean }) {
  const stroke = isMain ? "#E8C766" : "#C9A84C";
  switch (type) {
    case "mehendi":
      return (
        <svg viewBox="0 0 48 48" className="w-7 h-7 md:w-9 md:h-9" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 42c-6-6-10-12-10-19a10 10 0 0120 0c0 7-4 13-10 19z" />
          <path d="M24 14v18M19 22c2 2 3 5 3 8M29 22c-2 2-3 5-3 8" />
          <circle cx="24" cy="14" r="1.5" fill={stroke} />
        </svg>
      );
    case "haldi":
      return (
        <svg viewBox="0 0 48 48" className="w-7 h-7 md:w-9 md:h-9" fill="none" stroke={stroke} strokeWidth="1.6">
          <circle cx="24" cy="24" r="4" fill={stroke} />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            const x = 24 + Math.cos(a) * 10;
            const y = 24 + Math.sin(a) * 10;
            return <ellipse key={i} cx={x} cy={y} rx="4" ry="2.4" transform={`rotate(${(i * 45)} ${x} ${y})`} />;
          })}
        </svg>
      );
    case "diya":
      return (
        <svg viewBox="0 0 48 48" className="w-8 h-8 md:w-10 md:h-10" fill="none">
          <path d="M10 30c2 6 8 9 14 9s12-3 14-9z" fill="#C9A84C" stroke="#E8C766" strokeWidth="1.2" />
          <path d="M8 30h32" stroke="#E8C766" strokeWidth="1.4" strokeLinecap="round" />
          <g style={{ transformOrigin: "24px 22px", animation: "diyaFlicker 1.2s ease-in-out infinite alternate" }}>
            <ellipse cx="24" cy="20" rx="3.2" ry="6" fill="url(#flameG)" />
            <ellipse cx="24" cy="21" rx="1.6" ry="3.4" fill="#FFE7A8" />
          </g>
          <defs>
            <radialGradient id="flameG" cx="0.5" cy="0.7" r="0.6">
              <stop offset="0%" stopColor="#FFF1B8" />
              <stop offset="60%" stopColor="#FFB84D" />
              <stop offset="100%" stopColor="#E94E1B" stopOpacity="0.4" />
            </radialGradient>
          </defs>
        </svg>
      );
    case "sparkles":
      return (
        <svg viewBox="0 0 48 48" className="w-7 h-7 md:w-9 md:h-9" fill={stroke}>
          <path d="M24 6l2.4 7.2L34 16l-7.6 2.8L24 26l-2.4-7.2L14 16l7.6-2.8z" />
          <path d="M38 28l1.4 4 4 1.4-4 1.4L38 39l-1.4-4.2-4-1.4 4-1.4z" />
          <path d="M12 30l1.2 3.4 3.4 1.2-3.4 1.2L12 39l-1.2-3.2-3.4-1.2 3.4-1.2z" />
        </svg>
      );
  }
}

function BottomMotif({ gold = "#C9A84C" }: { gold?: string }) {
  return (
    <svg className="w-full h-3 mt-4" viewBox="0 0 200 12" preserveAspectRatio="none">
      <defs>
        <pattern id={`motif-${gold}`} x="0" y="0" width="20" height="12" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="6" r="1.2" fill={gold} />
          <path d="M10 2l2 4-2 4-2-4z" fill={gold} opacity="0.85" />
          <circle cx="16" cy="6" r="1.2" fill={gold} />
        </pattern>
      </defs>
      <rect width="200" height="12" fill={`url(#motif-${gold})`} />
    </svg>
  );
}

function MiniLotus() {
  return (
    <svg viewBox="0 0 60 30" className="w-16 h-8 mx-auto" fill="none" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round">
      <path d="M30 26c-8 0-14-4-14-10 0 6 6 10 14 10s14-4 14-10c0 6-6 10-14 10z" />
      <path d="M30 26V8M22 22c-2-4 0-10 8-14M38 22c2-4 0-10-8-14" />
      <circle cx="30" cy="6" r="1.6" fill="#C9A84C" />
    </svg>
  );
}

function EventCard({ def, info, side, index }: { def: EventDef; info: EventInfo; side: "left" | "right"; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: true });
  const isMain = !!def.isMain;

  const xFrom = side === "left" ? -80 : 80;

  return (
    <div
      ref={ref}
      className={`relative w-full md:w-1/2 flex ${
        side === "left"
          ? "md:justify-end md:pr-12"
          : "md:justify-start md:pl-12 md:ml-auto"
      } pl-12 md:pl-0`}
    >
      {/* Timeline node */}
      <span
        aria-hidden
        className="absolute top-10 left-[12px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#E8C766] shadow-[0_0_14px_4px_rgba(232,199,102,0.6)] animate-pulse"
      />

      <m.article
        initial={{ opacity: 0, x: 0, y: 60 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
        style={{ ["--x-from" as any]: `${xFrom}px` }}
      >
        <m.div
          initial={{ opacity: 0, x: 0 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: xFrom }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileTap={{ scale: 0.98 }}
          className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5
            ${isMain
              ? "w-[92vw] md:w-[462px] border-2 border-[#E8C766] shadow-[0_10px_50px_rgba(107,15,26,0.35),0_0_30px_rgba(232,199,102,0.35)]"
              : "w-[92vw] md:w-[420px] border border-[rgba(201,168,76,0.4)] shadow-[0_8px_40px_rgba(107,15,26,0.10)] hover:shadow-[0_14px_50px_rgba(107,15,26,0.18)] hover:border-[rgba(201,168,76,0.8)]"}
          `}
          style={
            isMain
              ? {
                  background:
                    "linear-gradient(120deg, #6B0F1A 0%, #7d1422 40%, #6B0F1A 100%)",
                }
              : {
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #FFFDF5 50%, #ffffff 100%)",
                }
          }
        >
          {isMain && (
            <>
              <span
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-60"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 30%, rgba(232,199,102,0.25) 50%, transparent 70%)",
                  backgroundSize: "200% 100%",
                  animation: "mainShimmer 4s linear infinite",
                }}
              />
              <span
                className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] md:text-xs font-medium bg-[#E8C766] text-[#6B0F1A] -rotate-2 shadow"
                style={{ fontFamily: "'Cinzel Decorative', serif" }}
              >
                ✦ Main Event ✦
              </span>
            </>
          )}

          <div className="relative p-6 md:p-8 flex flex-col items-center text-center">
            {/* Icon */}
            <m.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.15 }}
              className={`w-12 h-12 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mb-4
                ${isMain ? "bg-[#4a0a13] ring-2 ring-[#E8C766]" : "bg-[#6B0F1A] ring-2 ring-[#C9A84C]"}`}
            >
              <EventIcon type={def.icon} isMain={isMain} />
            </m.div>

            {/* Name */}
            <h3
              className={`text-[1.3rem] md:text-[1.6rem] leading-tight ${isMain ? "text-[#E8C766]" : "text-[#6B0F1A]"}`}
              style={{ fontFamily: "'Cinzel Decorative', serif" }}
            >
              {def.name}
            </h3>
            <m.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block h-[2px] w-10 bg-[#C9A84C] mt-2 mb-4 origin-center"
            />

            {/* Date & time */}
            <div
              className={`flex items-center justify-center gap-4 ${isMain ? "text-[#FDF6EC]" : "text-[#2a1216]"}`}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
            >
              <span>📅 {info.date}</span>
              <span className={isMain ? "text-[#E8C766]" : "text-[#C9A84C]"}>|</span>
              <span>🕐 {info.time}</span>
            </div>

            {/* Venue */}
            <div className="mt-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <p className={`text-base md:text-lg font-semibold ${isMain ? "text-[#E8C766]" : "text-[#C9A84C]"}`}>
                📍 {info.venue}
              </p>
              {info.address && (
                <p className={`text-[0.9rem] mt-1 ${isMain ? "text-[#FDF6EC]/80" : "text-[#2a1216]/70"}`}>
                  {info.address}
                </p>
              )}
            </div>

            <BottomMotif gold={isMain ? "#E8C766" : "#C9A84C"} />

            {def.showDirections && (
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent((info.venue || "") + " " + (info.address || ""))}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 inline-flex items-center justify-center w-full md:w-auto px-6 py-2.5 rounded-full text-xs md:text-sm tracking-widest uppercase transition-colors duration-300
                  ${isMain
                    ? "bg-[#E8C766] text-[#6B0F1A] hover:bg-[#FDF6EC]"
                    : "bg-gradient-to-r from-[#6B0F1A] to-[#8a1422] text-[#E8C766] hover:bg-none hover:bg-[#E8C766] hover:text-[#6B0F1A]"}
                `}
                style={{ fontFamily: "'Cinzel Decorative', serif" }}
              >
                📍 Get Directions
              </a>
            )}
          </div>
        </m.div>
      </m.article>
    </div>
  );
}

function Connector({ variant }: { variant: "lotus" | "diamond" }) {
  return (
    <div className="relative md:hidden pl-12 my-2">
      <span className="block w-5 h-5" style={{ animation: "connectorPulse 2s ease-in-out infinite" }}>
        {variant === "lotus" ? (
          <svg viewBox="0 0 20 20" fill="#C9A84C">
            <path d="M10 17c-4 0-7-2-7-5 0 3 3 5 7 5s7-2 7-5c0 3-3 5-7 5z" />
            <path d="M10 17V5" stroke="#C9A84C" strokeWidth="1.2" />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" fill="#C9A84C">
            <path d="M10 2l5 8-5 8-5-8z" />
          </svg>
        )}
      </span>
    </div>
  );
}

export function EventsTimeline() {
  const { config } = useWeddingConfig();
  const headRef = useRef<HTMLDivElement>(null);
  const headIn = useInView(headRef, { amount: 0.4, once: true });

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="events"
        className="relative w-full overflow-hidden py-20 md:py-[120px]"
        style={{ background: "#FDF6EC" }}
      >
        {/* Paisley/damask overlay */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.1,
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='%23C9A84C' stroke-width='1'><path d='M60 10c20 10 30 30 20 50s-30 30-50 20-30-30-20-50 30-30 50-20z'/><circle cx='60' cy='60' r='6'/><path d='M30 60c10-20 50-20 60 0M30 60c10 20 50 20 60 0'/></g></svg>\")",
            backgroundSize: "180px 180px",
          }}
        />

        {/* Header */}
        <div ref={headRef} className="relative text-center px-4 mb-14 md:mb-20">
          <m.span
            initial={{ scaleX: 0 }}
            animate={headIn ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="block h-[2px] w-10 bg-[#C9A84C] mx-auto origin-center"
          />
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-[2rem] md:text-[3rem] text-[#6B0F1A]"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Our Sacred Celebrations
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={headIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-2 italic text-[#C9A84C] text-[1.1rem]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Every moment is a blessing
          </m.p>
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headIn ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4"
          >
            <MiniLotus />
          </m.div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Vertical line */}
          <span
            aria-hidden
            className="absolute top-0 bottom-0 left-[20px] md:left-1/2 md:-translate-x-1/2 w-[2px] md:w-[3px]"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, #C9A84C 8%, #E8C766 50%, #C9A84C 92%, transparent 100%)",
            }}
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {EVENTS.map((e, i) => {
              const side: "left" | "right" = i % 2 === 0 ? "left" : "right";
              const info = config[e.key];
              return (
                <div key={e.key} className="relative">
                  <EventCard def={e} info={info} side={side} index={i} />
                  {i < EVENTS.length - 1 && <Connector variant={i % 2 === 0 ? "lotus" : "diamond"} />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="relative text-center mt-16 md:mt-24 px-4">
          <p
            className="italic text-[1.2rem] text-[#6B0F1A]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            We look forward to celebrating with you
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-2xl">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                style={{
                  color: "#E8C766",
                  animation: `twinkle 1.6s ease-in-out ${i * 0.2}s infinite`,
                  textShadow: "0 0 8px rgba(232,199,102,0.6)",
                }}
              >
                ⭐
              </span>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes diyaFlicker {
            0% { transform: scale(1) translateY(0); opacity: 1; }
            100% { transform: scale(1.08) translateY(-1px); opacity: 0.92; }
          }
          @keyframes mainShimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          @keyframes connectorPulse {
            0%, 100% { transform: scale(1); opacity: 0.85; }
            50% { transform: scale(1.2); opacity: 1; }
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.35; transform: scale(0.9); }
            50% { opacity: 1; transform: scale(1.15); }
          }
        `}</style>
      </section>
    </LazyMotion>
  );
}