import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useWeddingConfig } from "@/lib/wedding-config";
import { Diya, OmSymbol } from "./MandalaBorder";

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