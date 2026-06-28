import { useEffect, useState, useRef, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useWeddingConfig } from "@/lib/wedding-config";
import { OmSymbol } from "./MandalaBorder";

/* -------- Floral mandala SVG (kolam-inspired) -------- */
function FloralMandala({ inner = false }: { inner?: boolean }) {
  const petals = 16;
  return (
    <svg viewBox="0 0 600 600" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`mg-${inner ? "i" : "o"}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5E6A3" />
          <stop offset="100%" stopColor="#8a6f24" />
        </linearGradient>
      </defs>
      <g fill="none" stroke={`url(#mg-${inner ? "i" : "o"})`} strokeWidth="0.9" strokeLinecap="round">
        <circle cx="300" cy="300" r={inner ? 60 : 110} />
        <circle cx="300" cy="300" r={inner ? 100 : 200} strokeDasharray="2 6" />
        {!inner && <circle cx="300" cy="300" r="270" strokeDasharray="1 10" />}
        {Array.from({ length: petals }).map((_, i) => (
          <g key={i} transform={`rotate(${(i * 360) / petals} 300 300)`}>
            {/* outer lotus petal */}
            <path
              d={`M300 ${inner ? 110 : 30} C 320 ${inner ? 170 : 110}, 320 ${inner ? 220 : 200}, 300 ${inner ? 250 : 270}
                 C 280 ${inner ? 220 : 200}, 280 ${inner ? 170 : 110}, 300 ${inner ? 110 : 30} Z`}
            />
            {/* inner stamen */}
            <path d={`M300 ${inner ? 150 : 90} L 300 ${inner ? 230 : 250}`} strokeDasharray="2 4" />
            {/* dots */}
            <circle cx="300" cy={inner ? 130 : 60} r="2.2" fill="#E8C766" stroke="none" />
          </g>
        ))}
        {Array.from({ length: petals / 2 }).map((_, i) => (
          <g key={`p-${i}`} transform={`rotate(${(i * 360) / (petals / 2) + 11.25} 300 300)`}>
            <path
              d="M300 300 C 330 330, 360 360, 380 410 C 340 380, 310 350, 300 300 Z"
              opacity="0.6"
            />
          </g>
        ))}
        {/* center floret */}
        <circle cx="300" cy="300" r="14" fill="#E8C766" stroke="none" />
        <circle cx="300" cy="300" r="6" fill="#6B0F1A" stroke="none" />
      </g>
    </svg>
  );
}

/* -------- Animated diya (flickering flame) -------- */
function DiyaFlicker({ size = 28 }: { size?: number }) {
  const s = size;
  return (
    <svg viewBox="0 0 48 48" width={s} height={s} aria-hidden="true">
      <defs>
        <radialGradient id="flameAmber" cx="0.5" cy="0.7" r="0.6">
          <stop offset="0%" stopColor="#FFF1B8" />
          <stop offset="55%" stopColor="#FFB84D" />
          <stop offset="100%" stopColor="#E94E1B" stopOpacity="0.4" />
        </radialGradient>
      </defs>
      <path d="M8 32c2 6 8 9 16 9s14-3 16-9z" fill="#C9A84C" stroke="#E8C766" strokeWidth="1" />
      <path d="M6 32h36" stroke="#E8C766" strokeWidth="1.4" strokeLinecap="round" />
      <g
        style={{
          transformOrigin: "24px 22px",
          animation: "heroFlame 1.5s ease-in-out infinite",
        }}
      >
        <ellipse cx="24" cy="20" rx="3.4" ry="7" fill="url(#flameAmber)" />
        <ellipse cx="24" cy="22" rx="1.6" ry="3.6" fill="#FFE7A8" />
      </g>
    </svg>
  );
}

/* -------- Floating particles (diamonds, stars, petals) -------- */
type Particle = {
  type: "diamond" | "star" | "petal";
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

function FloatingParticles() {
  const particles = useMemo<Particle[]>(() => {
    const types: Particle["type"][] = [
      ...Array(8).fill("diamond"),
      ...Array(6).fill("star"),
      ...Array(5).fill("petal"),
    ];
    return types.map((type, i) => ({
      type,
      left: (i * 53) % 100,
      size: 4 + ((i * 7) % 7),
      duration: 14 + ((i * 3) % 12),
      delay: (i * 0.7) % 9,
      drift: ((i % 5) - 2) * 6,
      opacity: 0.3 + ((i * 11) % 30) / 100,
    }));
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-[-20px] grid place-items-center"
          style={{
            left: `${p.left}%`,
            width: p.size * 2,
            height: p.size * 2,
            opacity: p.opacity,
            color: "#E8C766",
            fontSize: p.size * 2,
            ["--drift" as any]: `${p.drift}px`,
            animation: `heroDrift ${p.duration}s linear ${p.delay}s infinite`,
            textShadow: "0 0 6px rgba(232,199,102,0.7)",
          }}
        >
          {p.type === "diamond" && "◆"}
          {p.type === "star" && "✦"}
          {p.type === "petal" && (
            <svg viewBox="0 0 10 14" width={p.size * 1.6} height={p.size * 2}>
              <path
                d="M5 0 C 9 4, 9 10, 5 14 C 1 10, 1 4, 5 0 Z"
                fill="#E8C766"
              />
            </svg>
          )}
        </span>
      ))}
    </div>
  );
}

/* -------- Lotus divider (kept) -------- */
function Lotus() {
  const petals = Array.from({ length: 8 });
  return (
    <motion.svg
      viewBox="0 0 200 120"
      className="mx-auto h-20 w-40 sm:h-24 sm:w-48"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lotusGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5E6A3" />
          <stop offset="100%" stopColor="#8a6f24" />
        </linearGradient>
      </defs>
      {petals.map((_, i) => {
        const a = -90 + (i - (petals.length - 1) / 2) * 18;
        return (
          <motion.ellipse
            key={i}
            cx="100"
            cy="110"
            rx="10"
            ry="44"
            fill="url(#lotusGold)"
            opacity={0.85}
            transform={`rotate(${a} 100 110)`}
            variants={{
              hidden: { scaleY: 0, opacity: 0 },
              show: { scaleY: 1, opacity: 0.9, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            style={{ transformOrigin: "100px 110px" }}
          />
        );
      })}
      <circle cx="100" cy="108" r="6" fill="#C9A84C" />
    </motion.svg>
  );
}

/* -------- Couple photo circle -------- */
function CoupleCircle({
  src,
  name,
  from,
  delay,
}: {
  src: string;
  name: string;
  from: "left" | "right";
  delay: number;
}) {
  const initial = (name?.[0] ?? "?").toUpperCase();
  return (
    <motion.div
      initial={{ opacity: 0, x: from === "left" ? -60 : 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-full transition-transform duration-300 hover:scale-[1.06]"
      style={{
        width: "clamp(150px, 30vw, 200px)",
        height: "clamp(150px, 30vw, 200px)",
      }}
    >
      {/* outer ring */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(201,168,76,0.55)]"
        style={{ border: "3px solid #C9A84C" }}
      />
      {/* inner ring (with 4px gap) */}
      <span
        aria-hidden
        className="absolute rounded-full"
        style={{
          inset: 7,
          border: "1.5px solid rgba(201,168,76,0.5)",
        }}
      />
      {/* photo */}
      <div
        className="absolute overflow-hidden rounded-full"
        style={{
          inset: 9,
          background: "radial-gradient(circle, #8B1A2A 0%, #6B0F1A 100%)",
          boxShadow: "inset 0 0 20px rgba(201,168,76,0.2)",
        }}
      >
        {src ? (
          <img src={src} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div
            className="grid h-full w-full place-items-center"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: "#F5E6A3",
              fontSize: "clamp(2.8rem, 7vw, 4.5rem)",
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            }}
          >
            {initial}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* -------- Countdown with flip-on-change -------- */
function useCountdown(targetISO: string, time: string) {
  // Combine date with time. Default "10:00 AM" → 10:00:00.
  const target = useMemo(() => {
    let hh = 10, mm = 0;
    const match = /^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i.exec(time.trim());
    if (match) {
      hh = parseInt(match[1], 10) % 12;
      mm = parseInt(match[2], 10);
      if (/PM/i.test(match[3] || "")) hh += 12;
    }
    const iso = `${targetISO}T${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:00`;
    return new Date(iso).getTime();
  }, [targetISO, time]);

  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

function FlipCell({ value, label }: { value: number; label: string }) {
  const text = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center" style={{ perspective: 600 }}>
      <div
        className="grid place-items-center"
        style={{
          minWidth: "clamp(72px, 18vw, 90px)",
          padding: "12px 8px",
          background: "rgba(201,168,76,0.12)",
          border: "1px solid rgba(201,168,76,0.4)",
          borderRadius: 10,
          color: "#F5E6A3",
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={text}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(2rem, 5vw, 2.8rem)",
              fontWeight: 700,
              display: "inline-block",
              transformOrigin: "center",
            }}
          >
            {text}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        className="mt-1.5 uppercase"
        style={{
          color: "#FDF6EC",
          fontFamily: "'Cormorant Garamond', serif",
          letterSpacing: "0.2em",
          fontSize: "0.65rem",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function CountdownSeparator() {
  return (
    <span
      className="self-start pt-[18px]"
      style={{ color: "#C9A84C", fontSize: "1.5rem", fontFamily: "'Cinzel Decorative', serif" }}
    >
      :
    </span>
  );
}

export function HeroSection() {
  const { config } = useWeddingConfig();
  const { d, h, m, s } = useCountdown(config.weddingDateISO, config.weddingTime);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const scrollToNext = () => {
    const el = document.getElementById("events");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen w-full flex-col items-center overflow-hidden px-4 py-12 sm:py-16"
      style={{
        background:
          "radial-gradient(ellipse at top, #7a1320 0%, #6B0F1A 40%, #3d0810 100%)",
      }}
    >
      {/* Outer mandala */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center" style={{ opacity: 0.12 }}>
        <motion.div
          className="h-[130vmin] w-[130vmin]"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <FloralMandala />
        </motion.div>
      </div>
      {/* Inner counter-rotating mandala */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center" style={{ opacity: 0.06 }}>
        <motion.div
          className="h-[80vmin] w-[80vmin]"
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          <FloralMandala inner />
        </motion.div>
      </div>

      {/* Particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute inset-0"
      >
        <FloatingParticles />
      </motion.div>

      {/* shimmer overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(245,230,163,0.08), transparent 60%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        <Lotus />

        {/* Diya + "Together Forever" */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <DiyaFlicker size={32} />
          <p
            className="mt-1 italic"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#E8C766",
              fontSize: "clamp(0.95rem, 2.4vw, 1.2rem)",
              letterSpacing: "0.1em",
            }}
          >
            Together Forever
          </p>
        </motion.div>

        {/* Names */}
        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10">
          <motion.h1
            initial={{ opacity: 0, x: -40, rotateY: 25 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
            className="leading-none"
            style={{
              fontFamily: "var(--font-script)",
              color: "#F5E6A3",
              fontSize: "clamp(3.5rem, 11vw, 6rem)",
              textShadow: "0 4px 18px rgba(0,0,0,0.6)",
              maxWidth: "100%",
              wordBreak: "break-word",
              transformPerspective: 800,
            }}
          >
            {config.groomName}
          </motion.h1>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 14 }}
            className="grid place-items-center rounded-full"
            style={{
              width: "clamp(40px, 10vw, 56px)",
              height: "clamp(40px, 10vw, 56px)",
              background: "linear-gradient(135deg, #6B0F1A, #4a0a12)",
              border: "2px solid #C9A84C",
              color: "#F5E6A3",
              fontFamily: "var(--font-script)",
              fontSize: "clamp(1.4rem, 4vw, 2rem)",
              boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
            }}
          >
            &amp;
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: 40, rotateY: -25 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
            className="leading-none"
            style={{
              fontFamily: "var(--font-script)",
              color: "#F5E6A3",
              fontSize: "clamp(3.5rem, 11vw, 6rem)",
              textShadow: "0 4px 18px rgba(0,0,0,0.6)",
              maxWidth: "100%",
              wordBreak: "break-word",
              transformPerspective: 800,
            }}
          >
            {config.brideName}
          </motion.h1>

          <motion.svg
            width="220" height="6" viewBox="0 0 220 6"
            className="mt-2 w-2/3 max-w-xs"
            aria-hidden="true"
          >
            <motion.line
              x1="0" y1="3" x2="220" y2="3"
              stroke="#C9A84C" strokeWidth="1.2"
              strokeDasharray="220"
              initial={{ strokeDashoffset: 220 }}
              animate={inView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.1, ease: "easeOut" }}
            />
          </motion.svg>
        </div>

        {/* Couple photo circles */}
        <div className="relative mt-10 flex items-center justify-center sm:mt-12">
          <CoupleCircle src={config.groomPhoto} name={config.groomName} from="left" delay={2.4} />
          <div className="-ml-6">
            <CoupleCircle src={config.bridePhoto} name={config.brideName} from="right" delay={2.6} />
          </div>
          {/* beating heart */}
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 3, duration: 0.5 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ animation: "heroHeart 0.8s ease-in-out infinite" }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#E8C766" style={{ filter: "drop-shadow(0 0 4px rgba(232,199,102,0.7))" }}>
              <path d="M12 21s-7-4.35-9.5-9C.8 8.5 3 4 7 4c2 0 3.5 1.2 5 3 1.5-1.8 3-3 5-3 4 0 6.2 4.5 4.5 8-2.5 4.65-9.5 9-9.5 9z" />
            </svg>
          </motion.span>
        </div>

        {/* Saving the Date badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2.8, type: "spring", stiffness: 180, damping: 16 }}
          className="mt-10 sm:mt-12"
        >
          <div
            className="flex items-center gap-3 rounded-full px-6 py-3 sm:gap-4 sm:px-8 sm:py-3.5"
            style={{
              background:
                "linear-gradient(90deg, #C9A84C 0%, #F5E6A3 40%, #C9A84C 60%, #C9A84C 100%)",
              backgroundSize: "200% auto",
              animation: "heroShimmer 3s linear infinite",
              border: "1px solid rgba(255,255,255,0.5)",
              boxShadow:
                "0 18px 40px -16px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.5)",
            }}
          >
            <DiyaFlicker size={28} />
            <div className="flex flex-col items-center">
              <span
                className="uppercase"
                style={{
                  color: "#4a0a12",
                  fontFamily: "'Cinzel Decorative', serif",
                  letterSpacing: "0.25em",
                  fontSize: "0.7rem",
                }}
              >
                Saving the Date
              </span>
              <span
                style={{
                  color: "#3d0810",
                  fontFamily: "'Cinzel Decorative', serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.05rem, 3.4vw, 1.3rem)",
                  letterSpacing: "0.08em",
                }}
              >
                {config.weddingDate}
              </span>
            </div>
            <DiyaFlicker size={28} />
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 3.1, duration: 0.7 }}
          className="mt-8 flex items-start justify-center gap-2.5 sm:mt-10"
        >
          <FlipCell value={d} label="Days" />
          <CountdownSeparator />
          <FlipCell value={h} label="Hours" />
          <CountdownSeparator />
          <FlipCell value={m} label="Mins" />
          <CountdownSeparator />
          <FlipCell value={s} label="Secs" />
        </motion.div>

        {/* Om footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 3.4, duration: 0.7 }}
          className="mt-10"
        >
          <OmSymbol className="mx-auto h-10 w-10 opacity-80" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 4, duration: 0.8 }}
        className="relative z-10 mt-12 flex flex-col items-center sm:mt-16"
        aria-label="Scroll to next section"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "#C9A84C" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.span>
        <span
          className="mt-1 italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#C9A84C",
            fontSize: "0.85rem",
            letterSpacing: "0.1em",
          }}
        >
          Scroll to explore
        </span>
      </motion.button>

      <style>{`
        @keyframes heroFlame {
          0%, 100% { transform: scaleY(1) scaleX(1); }
          25% { transform: scaleY(1.15) scaleX(0.95); }
          50% { transform: scaleY(0.95) scaleX(1.05); }
          75% { transform: scaleY(1.1) scaleX(0.98); }
        }
        @keyframes heroShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes heroHeart {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }
        @keyframes heroDrift {
          0% { transform: translate3d(0, 0, 0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translate3d(var(--drift, 0px), -110vh, 0); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

function Lotus() {
  const petals = Array.from({ length: 8 });
  return (
    <motion.svg
      viewBox="0 0 200 120"
      className="mx-auto h-20 w-40 sm:h-24 sm:w-48"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lotusGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5E6A3" />
          <stop offset="100%" stopColor="#8a6f24" />
        </linearGradient>
      </defs>
      {petals.map((_, i) => {
        const a = -90 + (i - (petals.length - 1) / 2) * 18;
        return (
          <motion.ellipse
            key={i}
            cx="100"
            cy="110"
            rx="10"
            ry="44"
            fill="url(#lotusGold)"
            opacity={0.85}
            transform={`rotate(${a} 100 110)`}
            variants={{
              hidden: { scaleY: 0, opacity: 0 },
              show: { scaleY: 1, opacity: 0.9, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            style={{ transformOrigin: "100px 110px" }}
          />
        );
      })}
      <circle cx="100" cy="108" r="6" fill="#C9A84C" />
    </motion.svg>
  );
}

function Avatar({ src, name, side }: { src: string; name: string; side: "left" | "right" }) {
  return (
    <div
      className="group relative"
      style={{ marginLeft: side === "right" ? "-20px" : 0 }}
    >
      <div
        className="relative grid place-items-center overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105"
        style={{
          width: "clamp(120px, 32vw, 200px)",
          height: "clamp(120px, 32vw, 200px)",
          border: "4px solid #C9A84C",
          boxShadow:
            "0 0 0 6px rgba(107,15,26,0.85), 0 0 0 8px rgba(201,168,76,0.45), 0 20px 50px -20px rgba(0,0,0,0.7)",
          background: "linear-gradient(135deg, #7a1320, #4a0a12)",
        }}
      >
        {src ? (
          <img src={src} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span
            style={{
              fontFamily: "var(--font-script)",
              color: "#F5E6A3",
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            {name?.[0] ?? "?"}
          </span>
        )}
      </div>
      {/* dotted ring */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          border: "1.5px dotted rgba(245,230,163,0.6)",
          transform: "scale(1.12)",
        }}
      />
    </div>
  );
}

function useCountdown(targetISO: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const target = new Date(targetISO).getTime();
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

function FlipCell({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ rotateX: -90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="grid place-items-center rounded-md"
        style={{
          minWidth: "clamp(60px, 16vw, 88px)",
          padding: "10px 8px",
          background: "linear-gradient(180deg, #7a1320, #4a0a12)",
          border: "1px solid rgba(201,168,76,0.55)",
          boxShadow:
            "0 10px 24px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
          color: "#F5E6A3",
          fontFamily: "var(--font-royal)",
          fontSize: "clamp(1.2rem, 4vw, 2rem)",
          fontWeight: 700,
          perspective: "600px",
        }}
      >
        {String(value).padStart(2, "0")}
      </motion.div>
      <span
        className="mt-1 uppercase"
        style={{
          color: "#C9A84C",
          fontFamily: "var(--font-serif-elegant)",
          letterSpacing: "0.25em",
          fontSize: "clamp(0.55rem, 1.5vw, 0.7rem)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function HeroSection() {
  const { config } = useWeddingConfig();
  const { d, h, m, s } = useCountdown(config.weddingDateISO);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen w-full flex-col items-center overflow-hidden px-4 py-12 sm:py-16"
      style={{
        background:
          "radial-gradient(ellipse at top, #7a1320 0%, #6B0F1A 40%, #3d0810 100%)",
      }}
    >
      {/* Rotating mandala backdrop */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center opacity-25">
        <motion.svg
          viewBox="0 0 600 600"
          className="h-[120vmin] w-[120vmin] max-h-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="mGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F5E6A3" />
              <stop offset="100%" stopColor="#8a6f24" />
            </linearGradient>
          </defs>
          <g stroke="url(#mGold)" strokeWidth="0.8" fill="none">
            {Array.from({ length: 24 }).map((_, i) => (
              <g key={i} transform={`rotate(${(i * 360) / 24} 300 300)`}>
                <ellipse cx="300" cy="160" rx="14" ry="90" />
              </g>
            ))}
            <circle cx="300" cy="300" r="80" />
            <circle cx="300" cy="300" r="140" strokeDasharray="3 6" />
            <circle cx="300" cy="300" r="220" />
            <circle cx="300" cy="300" r="280" strokeDasharray="2 8" />
          </g>
        </motion.svg>
      </div>

      {/* shimmer overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(245,230,163,0.08), transparent 60%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        <Lotus />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-1 italic"
          style={{
            fontFamily: "var(--font-serif-elegant)",
            color: "#C9A84C",
            fontSize: "clamp(0.9rem, 2.4vw, 1.15rem)",
            letterSpacing: "0.1em",
          }}
        >
          Together Forever
        </motion.p>

        {/* Names */}
        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10">
          <motion.h1
            initial={{ opacity: 0, x: -60, rotateY: 15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="leading-none"
            style={{
              fontFamily: "var(--font-script)",
              color: "#F5E6A3",
              fontSize: "clamp(3.5rem, 11vw, 6rem)",
              textShadow: "0 4px 18px rgba(0,0,0,0.6)",
              maxWidth: "100%",
              wordBreak: "break-word",
            }}
          >
            {config.groomName}
          </motion.h1>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.4, type: "spring", stiffness: 180, damping: 14 }}
            className="grid place-items-center rounded-full"
            style={{
              width: "clamp(40px, 10vw, 56px)",
              height: "clamp(40px, 10vw, 56px)",
              background: "linear-gradient(135deg, #6B0F1A, #4a0a12)",
              border: "2px solid #C9A84C",
              color: "#F5E6A3",
              fontFamily: "var(--font-script)",
              fontSize: "clamp(1.4rem, 4vw, 2rem)",
              boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
            }}
          >
            &amp;
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: 60, rotateY: -15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="leading-none"
            style={{
              fontFamily: "var(--font-script)",
              color: "#F5E6A3",
              fontSize: "clamp(3.5rem, 11vw, 6rem)",
              textShadow: "0 4px 18px rgba(0,0,0,0.6)",
              maxWidth: "100%",
              wordBreak: "break-word",
            }}
          >
            {config.brideName}
          </motion.h1>

          {/* drawing divider */}
          <motion.svg
            width="220" height="6" viewBox="0 0 220 6"
            className="mt-2 w-2/3 max-w-xs"
            aria-hidden="true"
          >
            <motion.line
              x1="0" y1="3" x2="220" y2="3"
              stroke="#C9A84C" strokeWidth="1.2"
              strokeDasharray="220"
              initial={{ strokeDashoffset: 220 }}
              animate={inView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
            />
          </motion.svg>
        </div>

        {/* Photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-8 flex items-center justify-center sm:mt-10"
        >
          <Avatar src={config.bridePhoto} name={config.brideName} side="left" />
          <Avatar src={config.groomPhoto} name={config.groomName} side="right" />
        </motion.div>

        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="mt-8 sm:mt-10"
        >
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3 rounded-xl px-5 py-3 sm:gap-4 sm:px-7 sm:py-4"
            style={{
              background:
                "linear-gradient(135deg, #e7c66a 0%, #C9A84C 50%, #8a6f24 100%)",
              border: "1px solid rgba(255,255,255,0.4)",
              boxShadow:
                "0 18px 40px -16px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            <Diya className="h-7 w-7 shrink-0 sm:h-9 sm:w-9" />
            <div className="flex flex-col items-center">
              <span
                className="uppercase"
                style={{
                  color: "#4a0a12",
                  fontFamily: "var(--font-serif-elegant)",
                  letterSpacing: "0.3em",
                  fontSize: "clamp(0.55rem, 1.5vw, 0.7rem)",
                }}
              >
                Saving the Date
              </span>
              <span
                style={{
                  color: "#3d0810",
                  fontFamily: "var(--font-royal)",
                  fontWeight: 700,
                  fontSize: "clamp(1rem, 3.4vw, 1.6rem)",
                  letterSpacing: "0.08em",
                }}
              >
                {config.weddingDate}
              </span>
            </div>
            <Diya className="h-7 w-7 shrink-0 sm:h-9 sm:w-9" />
          </motion.div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="mt-6 flex flex-wrap items-start justify-center gap-2 sm:mt-8 sm:gap-3"
        >
          <FlipCell value={d} label="Days" />
          <FlipCell value={h} label="Hours" />
          <FlipCell value={m} label="Mins" />
          <FlipCell value={s} label="Secs" />
        </motion.div>

        {/* Om footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.9, duration: 0.7 }}
          className="mt-10"
        >
          <OmSymbol className="mx-auto h-10 w-10 opacity-80" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 mt-12 flex flex-col items-center sm:mt-16">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "#C9A84C" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
        <span
          className="mt-1 italic"
          style={{
            fontFamily: "var(--font-serif-elegant)",
            color: "#C9A84C",
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
          }}
        >
          Scroll to explore
        </span>
      </div>
    </section>
  );
}