import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useRef } from "react";
import { useWeddingConfig, type FamilySide } from "@/lib/wedding-config";

type Rel = "father" | "mother" | "brother" | "sister";
const RELS: Rel[] = ["father", "mother", "brother", "sister"];

const RELATION_LABEL: Record<"bride" | "groom", Record<Rel, string>> = {
  bride: {
    father: "Father of the Bride",
    mother: "Mother of the Bride",
    brother: "Brother of the Bride",
    sister: "Sister of the Bride",
  },
  groom: {
    father: "Father of the Groom",
    mother: "Mother of the Groom",
    brother: "Brother of the Groom",
    sister: "Sister of the Groom",
  },
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

function RelIcon({ rel }: { rel: Rel }) {
  const stroke = "#E8C766";
  const cls = "w-6 h-6 transition-transform duration-300 group-hover:rotate-[15deg]";
  switch (rel) {
    case "father":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round">
          <path d="M3 17l2-9 4 4 3-6 3 6 4-4 2 9z" />
          <path d="M3 17h18v2H3z" fill={stroke} />
          <circle cx="6" cy="7" r="1" fill={stroke} />
          <circle cx="12" cy="4" r="1" fill={stroke} />
          <circle cx="18" cy="7" r="1" fill={stroke} />
        </svg>
      );
    case "mother":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill={stroke}>
          <circle cx="12" cy="12" r="2" />
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (i * Math.PI) / 3;
            const x = 12 + Math.cos(a) * 5;
            const y = 12 + Math.sin(a) * 5;
            return <ellipse key={i} cx={x} cy={y} rx="2.5" ry="1.5" transform={`rotate(${i * 60} ${x} ${y})`} />;
          })}
        </svg>
      );
    case "brother":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round">
          <path d="M12 3l3 4-2 2 5 5-2 2-5-5-2 2-4-3z" />
          <circle cx="12" cy="3" r="0.8" fill={stroke} />
        </svg>
      );
    case "sister":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round">
          <path d="M16 4a8 8 0 100 16 6 6 0 010-16z" fill={stroke} fillOpacity="0.3" />
          <path d="M6 6l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill={stroke} />
        </svg>
      );
  }
}

function MemberCard({
  side,
  rel,
  name,
  photo,
  index,
}: {
  side: "bride" | "groom";
  rel: Rel;
  name: string;
  photo: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.25, once: true });
  const xFrom = side === "bride" ? -50 : 50;

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, x: xFrom }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="group flex w-full items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-[3px]"
      style={{
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(201,168,76,0.3)",
      }}
    >
      <div
        className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(201,168,76,0.6)] sm:h-[72px] sm:w-[72px] md:h-[88px] md:w-[88px]"
        style={{ border: "3px solid #C9A84C" }}
      >
        {photo ? (
          <img
            src={photo}
            alt={`${rel} of the ${side}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="grid h-full w-full place-items-center"
            style={{
              background:
                "linear-gradient(135deg, #C9A84C 0%, #F5E6A3 50%, #C9A84C 100%)",
              color: "#6B0F1A",
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "1.2rem",
            }}
          >
            {initials(name) || "?"}
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span
          className="italic"
          style={{
            color: "#E8C766",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.85rem",
          }}
        >
          {RELATION_LABEL[side][rel]}
        </span>
        <span
          className="truncate"
          style={{
            color: "#FDF6EC",
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "1.1rem",
          }}
        >
          {name}
        </span>
      </div>

      <div className="shrink-0">
        <RelIcon rel={rel} />
      </div>
    </m.div>
  );
}

function ColumnHeader({
  side,
  fullName,
}: {
  side: "bride" | "groom";
  fullName: string;
}) {
  const isBride = side === "bride";
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, x: isBride ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full rounded-2xl p-5 text-center"
      style={{
        background: isBride
          ? "linear-gradient(135deg, #C9A84C 0%, #F5E6A3 50%, #C9A84C 100%)"
          : "linear-gradient(135deg, #6B0F1A 0%, #8B1A2A 50%, #6B0F1A 100%)",
        border: `2px solid ${isBride ? "#6B0F1A" : "#E8C766"}`,
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      }}
    >
      <div className="mx-auto mb-2 grid h-10 w-10 place-items-center">
        {isBride ? (
          <svg viewBox="0 0 32 32" className="h-8 w-8" fill="#6B0F1A">
            <circle cx="16" cy="16" r="3" />
            {Array.from({ length: 8 }).map((_, i) => {
              const a = (i * Math.PI) / 4;
              const x = 16 + Math.cos(a) * 7;
              const y = 16 + Math.sin(a) * 7;
              return <ellipse key={i} cx={x} cy={y} rx="3.4" ry="2" transform={`rotate(${i * 45} ${x} ${y})`} />;
            })}
          </svg>
        ) : (
          <svg viewBox="0 0 32 32" className="h-8 w-8">
            <path d="M6 20c1 4 5 6 10 6s9-2 10-6z" fill="#E8C766" />
            <path d="M4 20h24" stroke="#E8C766" strokeWidth="1.4" />
            <ellipse cx="16" cy="14" rx="2" ry="4" fill="#FFB84D" />
          </svg>
        )}
      </div>
      <h3
        style={{
          color: isBride ? "#6B0F1A" : "#E8C766",
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: "1.4rem",
        }}
      >
        {isBride ? "Bride's Family" : "Groom's Family"}
      </h3>
      <p
        className="mt-1"
        style={{
          color: isBride ? "#6B0F1A" : "#E8C766",
          fontFamily: "'Great Vibes', cursive",
          fontSize: "1.6rem",
          lineHeight: 1.1,
        }}
      >
        {fullName}
      </p>
    </m.div>
  );
}

function FloatingDots() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 14 }).map((_, i) => {
        const left = (i * 73) % 100;
        const top = (i * 37) % 100;
        const dur = 14 + (i % 5) * 3;
        const size = 3 + (i % 3);
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              background: "#E8C766",
              opacity: 0.5,
              boxShadow: "0 0 8px rgba(232,199,102,0.7)",
              animation: `familyDrift ${dur}s ease-in-out ${i * 0.4}s infinite alternate`,
            }}
          />
        );
      })}
    </div>
  );
}

function Rings() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: true });
  return (
    <svg
      ref={ref}
      viewBox="0 0 140 80"
      className="mx-auto h-16 w-32"
      fill="none"
      stroke="#E8C766"
      strokeWidth="2.5"
    >
      <circle
        cx="55"
        cy="40"
        r="26"
        strokeDasharray="170"
        strokeDashoffset={inView ? 0 : 170}
        style={{ transition: "stroke-dashoffset 1.4s ease-out" }}
      />
      <circle
        cx="90"
        cy="40"
        r="26"
        strokeDasharray="170"
        strokeDashoffset={inView ? 0 : 170}
        style={{ transition: "stroke-dashoffset 1.4s ease-out 0.4s" }}
      />
    </svg>
  );
}

export function FamilySection() {
  const { config } = useWeddingConfig();
  const headRef = useRef<HTMLDivElement>(null);
  const headIn = useInView(headRef, { amount: 0.3, once: true });

  const renderColumn = (side: "bride" | "groom") => {
    const fam: FamilySide = config.family[side];
    return (
      <div className="flex w-full flex-col gap-4">
        <ColumnHeader
          side={side}
          fullName={side === "bride" ? config.brideName : config.groomName}
        />
        {RELS.map((rel, i) => (
          <MemberCard
            key={rel}
            side={side}
            rel={rel}
            name={fam[rel]}
            photo={fam[`${rel}Photo` as keyof FamilySide] as string}
            index={i}
          />
        ))}
      </div>
    );
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="family"
        className="relative w-full overflow-hidden py-20 md:py-[120px]"
        style={{ background: "#6B0F1A" }}
      >
        {/* gold geometric pattern */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.05,
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><g fill='none' stroke='%23E8C766' stroke-width='0.8'><path d='M50 5l45 45-45 45L5 50z'/><circle cx='50' cy='50' r='20'/><path d='M5 50h90M50 5v90'/></g></svg>\")",
            backgroundSize: "140px 140px",
            animation: "familyPattern 60s linear infinite",
          }}
        />
        <FloatingDots />

        {/* Header */}
        <div ref={headRef} className="relative text-center px-4 mb-12 md:mb-16">
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={headIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-3 h-8 w-12"
          >
            <svg viewBox="0 0 48 32" fill="#E8C766">
              <path d="M4 28h40v-4l-8-6 4-8-6 4-6-10-6 10-6-4 4 8-8 6z" />
              <circle cx="24" cy="6" r="2" />
            </svg>
          </m.div>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[1.8rem] md:text-[2.8rem]"
            style={{ color: "#E8C766", fontFamily: "'Cinzel Decorative', serif" }}
          >
            Families of the Blessed Union
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={headIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-2 italic"
            style={{ color: "#FDF6EC", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
          >
            With the blessings of our beloved families
          </m.p>
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headIn ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-3"
          >
            <svg viewBox="0 0 60 30" className="mx-auto h-7 w-14" fill="none" stroke="#E8C766" strokeWidth="1.3" strokeLinecap="round">
              <path d="M30 24c-7 0-12-3-12-9 0 6 5 9 12 9s12-3 12-9c0 6-5 9-12 9z" />
              <path d="M30 24V8" />
              <circle cx="30" cy="6" r="1.4" fill="#E8C766" />
            </svg>
          </m.div>
        </div>

        {/* Columns */}
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-[60px]">
            {renderColumn("bride")}

            {/* Desktop center bridge */}
            <div className="relative hidden md:flex flex-col items-center">
              <span
                aria-hidden
                className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px]"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, #C9A84C 12%, #E8C766 50%, #C9A84C 88%, transparent)",
                }}
              />
              <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center">
                <div
                  className="grid h-[120px] w-[120px] place-items-center rounded-full"
                  style={{
                    border: "2px dashed #E8C766",
                    background: "rgba(0,0,0,0.25)",
                    animation: "ringSpin 20s linear infinite",
                  }}
                >
                  <svg viewBox="0 0 80 80" className="h-16 w-16" style={{ animation: "ringSpin 20s linear infinite reverse" }}>
                    <g fill="#E8C766">
                      <circle cx="28" cy="32" r="8" />
                      <path d="M20 60c0-8 4-14 8-14s8 6 8 14z" />
                      <circle cx="52" cy="32" r="8" />
                      <path d="M44 60c0-8 4-14 8-14s8 6 8 14z" />
                    </g>
                  </svg>
                </div>
                <p
                  className="mt-3 text-center"
                  style={{
                    color: "#E8C766",
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "1.2rem",
                  }}
                >
                  United by Love
                </p>
              </div>
            </div>

            {/* Mobile bridge divider */}
            <div className="flex items-center gap-3 md:hidden">
              <span className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
              <span
                style={{
                  color: "#E8C766",
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "1.4rem",
                }}
              >
                ❝ United by Love ❞
              </span>
              <span className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
            </div>

            {renderColumn("groom")}
          </div>
        </div>

        {/* Footer */}
        <div className="relative mt-16 px-4 text-center md:mt-24">
          <Rings />
          <p
            className="mt-3 italic"
            style={{ color: "#FDF6EC", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
          >
            With the blessings of both families
          </p>
        </div>

        <style>{`
          @keyframes familyDrift {
            0% { transform: translateY(0) translateX(0); opacity: 0.35; }
            100% { transform: translateY(-30px) translateX(12px); opacity: 0.9; }
          }
          @keyframes familyPattern {
            0% { background-position: 0 0; }
            100% { background-position: 140px 140px; }
          }
          @keyframes ringSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </section>
    </LazyMotion>
  );
}