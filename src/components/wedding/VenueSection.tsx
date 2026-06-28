import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useWeddingConfig } from "@/lib/wedding-config";

const BURGUNDY = "#6B0F1A";
const BURGUNDY_DEEP = "#4a0a13";
const GOLD = "#C9A84C";
const GOLD_LIGHT = "#F5E6A3";
const CREAM = "#FDF6EC";

const VENUE_PHONE = "+919876543210";

function LotusDivider() {
  return (
    <svg width="120" height="22" viewBox="0 0 120 22" className="mx-auto" aria-hidden>
      <line x1="0" y1="11" x2="44" y2="11" stroke={GOLD} strokeWidth="1" />
      <line x1="76" y1="11" x2="120" y2="11" stroke={GOLD} strokeWidth="1" />
      <path d="M60 4 C66 8 66 14 60 18 C54 14 54 8 60 4 Z" fill={GOLD} />
      <circle cx="60" cy="11" r="1.5" fill={BURGUNDY} />
    </svg>
  );
}

function Gopuram() {
  return (
    <motion.svg
      width="64"
      height="40"
      viewBox="0 0 64 40"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto"
      aria-hidden
    >
      <g fill="none" stroke={GOLD} strokeWidth="1.5">
        <rect x="6" y="30" width="52" height="8" />
        <polygon points="10,30 32,4 54,30" />
        <polygon points="16,30 32,12 48,30" />
        <line x1="32" y1="2" x2="32" y2="6" />
        <circle cx="32" cy="1.5" r="1.5" fill={GOLD} />
        <line x1="14" y1="38" x2="14" y2="40" />
        <line x1="50" y1="38" x2="50" y2="40" />
      </g>
    </motion.svg>
  );
}

function MandalaBg() {
  return (
    <motion.svg
      viewBox="0 0 400 400"
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
      style={{ width: "min(140vw, 1200px)", height: "min(140vw, 1200px)", filter: "blur(2px)" }}
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <g fill="none" stroke={GOLD} strokeWidth="0.6">
        {Array.from({ length: 24 }).map((_, i) => (
          <line key={i} x1="200" y1="200" x2="200" y2="20"
            transform={`rotate(${(i * 360) / 24} 200 200)`} />
        ))}
        <circle cx="200" cy="200" r="60" />
        <circle cx="200" cy="200" r="100" />
        <circle cx="200" cy="200" r="140" />
        <circle cx="200" cy="200" r="180" />
        {Array.from({ length: 12 }).map((_, i) => (
          <path key={`p${i}`} d="M200 60 C220 100 220 140 200 180 C180 140 180 100 200 60 Z"
            transform={`rotate(${(i * 360) / 12} 200 200)`} />
        ))}
      </g>
    </motion.svg>
  );
}

function Particles() {
  const items = useMemo(
    () =>
      Array.from({ length: 12 }).map(() => ({
        x: Math.random() * 100,
        d: 6 + Math.random() * 8,
        delay: Math.random() * 6,
        size: 2 + Math.random() * 3,
      })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: -10,
            width: p.size,
            height: p.size,
            background: GOLD_LIGHT,
            boxShadow: `0 0 8px ${GOLD}`,
          }}
          animate={{ y: ["0vh", "-110vh"], opacity: [0, 1, 0] }}
          transition={{ duration: p.d, repeat: Infinity, ease: "linear", delay: p.delay }}
        />
      ))}
    </div>
  );
}

function GlassCard({
  children,
  className = "",
  style = {},
  fromLeft = true,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  fromLeft?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ x: fromLeft ? -80 : 80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={`relative rounded-[20px] p-6 sm:p-8 ${className}`}
      style={{
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(16px)",
        border: `1.5px solid ${GOLD}59`,
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

function ShimmerPill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`relative inline-flex overflow-hidden rounded-full px-3 py-1 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`,
        color: BURGUNDY,
        fontFamily: "var(--font-royal)",
        fontSize: "0.7rem",
        letterSpacing: "0.15em",
      }}
    >
      <span className="relative z-10 uppercase">{children}</span>
      <motion.span
        className="absolute inset-y-0 left-0 w-1/3"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
        }}
        animate={{ x: ["-120%", "320%"] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </span>
  );
}

function GoldButton({
  children,
  href,
  onClick,
  outlined = false,
  full = false,
  type = "button",
  disabled = false,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  outlined?: boolean;
  full?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const cls = `group relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold tracking-[0.15em] uppercase transition disabled:opacity-60 ${
    full ? "w-full" : ""
  }`;
  const style: React.CSSProperties = outlined
    ? {
        border: `1.5px solid ${GOLD}`,
        color: GOLD_LIGHT,
        background: "transparent",
        fontFamily: "var(--font-royal)",
      }
    : {
        background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`,
        color: BURGUNDY,
        border: `1.5px solid ${BURGUNDY}`,
        fontFamily: "var(--font-royal)",
      };
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls} style={style}>
      {inner}
    </button>
  );
}

function DiamondChain() {
  return (
    <svg width="100%" height="10" viewBox="0 0 200 10" preserveAspectRatio="none" className="my-4" aria-hidden>
      <defs>
        <pattern id="diamondP" width="14" height="10" patternUnits="userSpaceOnUse">
          <path d="M7 1 L13 5 L7 9 L1 5 Z" fill={GOLD} opacity="0.85" />
        </pattern>
      </defs>
      <rect width="200" height="10" fill="url(#diamondP)" />
    </svg>
  );
}

function TransportCard({
  icon,
  title,
  primary,
  distance,
  tip,
  cta,
  href,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  primary: string;
  distance?: string;
  tip: string;
  cta: string;
  href: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className="flex shrink-0 snap-start flex-col items-center gap-2 rounded-[14px] p-5 text-center"
      style={{
        background: `${GOLD}14`,
        border: `1px solid ${GOLD}40`,
        minWidth: 220,
      }}
    >
      <div style={{ color: GOLD }}>{icon}</div>
      <h4 style={{ fontFamily: "var(--font-royal)", color: GOLD, fontSize: "1rem" }}>{title}</h4>
      <p style={{ color: CREAM, fontFamily: "var(--font-serif-elegant)", fontSize: "0.9rem" }}>
        {primary}
      </p>
      {distance && (
        <p style={{ color: CREAM, fontFamily: "var(--font-serif-elegant)", fontSize: "0.85rem", opacity: 0.85 }}>
          {distance}
        </p>
      )}
      <p
        className="italic"
        style={{ color: CREAM, fontFamily: "var(--font-serif-elegant)", fontSize: "0.85rem", opacity: 0.8 }}
      >
        {tip}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] transition hover:bg-[#C9A84C]/10"
        style={{ border: `1px solid ${GOLD}`, color: GOLD, fontFamily: "var(--font-royal)" }}
      >
        {cta}
      </a>
    </motion.div>
  );
}

const CarIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M6 22 L8 14 H28 L30 22 V28 H6 Z" />
    <circle cx="11" cy="28" r="2.5" fill="currentColor" />
    <circle cx="25" cy="28" r="2.5" fill="currentColor" />
    <line x1="9" y1="22" x2="27" y2="22" />
  </svg>
);
const TrainIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="8" y="6" width="20" height="22" rx="4" />
    <line x1="8" y1="18" x2="28" y2="18" />
    <circle cx="13" cy="23" r="1.5" fill="currentColor" />
    <circle cx="23" cy="23" r="1.5" fill="currentColor" />
    <line x1="11" y1="30" x2="7" y2="34" />
    <line x1="25" y1="30" x2="29" y2="34" />
  </svg>
);
const PlaneIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 20 L32 12 L28 22 L18 22 L14 30 L12 30 L13 22 L4 22 Z" fill="currentColor" fillOpacity="0.15" />
  </svg>
);
const CompassIcon = () => (
  <motion.svg
    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.6"
    initial={{ rotate: 0 }}
    whileInView={{ rotate: 360 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    aria-hidden
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="12,5 14,12 12,19 10,12" fill={GOLD} />
  </motion.svg>
);
const SareeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke={GOLD} strokeWidth="1.6">
    <path d="M20 4 L24 10 L34 36 H6 L16 10 Z" />
    <path d="M14 18 Q20 22 26 18" />
    <circle cx="20" cy="7" r="1.5" fill={GOLD} />
  </svg>
);
const EnvelopeIcon = () => (
  <motion.svg
    width="36" height="36" viewBox="0 0 36 36" fill="none" stroke={GOLD} strokeWidth="1.6"
    animate={{ y: [0, -4, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    aria-hidden
  >
    <rect x="4" y="8" width="28" height="20" rx="2" />
    <path d="M4 10 L18 20 L32 10" />
    <path d="M18 22 L18 26" />
  </motion.svg>
);
const HastamelapIcon = () => (
  <motion.svg
    width="80" height="50" viewBox="0 0 80 50" fill="none" stroke={GOLD} strokeWidth="1.5"
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1.6, ease: "easeOut" }}
    aria-hidden
  >
    <motion.path d="M10 35 Q20 15 32 25 L40 30 L48 25 Q60 15 70 35"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
      viewport={{ once: true }} transition={{ duration: 1.6 }} />
    <motion.path d="M32 25 L36 18 M40 30 L40 18 M48 25 L44 18"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
      viewport={{ once: true }} transition={{ duration: 1.6, delay: 0.3 }} />
  </motion.svg>
);

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 40 }).map(() => ({
        x: Math.random() * 100,
        d: 1.6 + Math.random() * 1.4,
        delay: Math.random() * 0.6,
        color: Math.random() > 0.5 ? GOLD : BURGUNDY,
        rot: Math.random() * 360,
      })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: -10,
            width: 6,
            height: 10,
            background: p.color,
            transform: `rotate(${p.rot}deg)`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: "120vh", opacity: [0, 1, 1, 0], rotate: p.rot + 360 }}
          transition={{ duration: p.d, delay: p.delay, ease: "easeIn" }}
        />
      ))}
    </div>
  );
}

function RsvpForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("Just me");
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.08)",
    border: `1px solid ${GOLD}66`,
    borderRadius: 8,
    color: CREAM,
    fontFamily: "var(--font-serif-elegant)",
    padding: "12px 14px",
    width: "100%",
    minHeight: 44,
    outline: "none",
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErr("Please enter your name");
      return;
    }
    setErr(null);
    setLoading(true);
    setTimeout(() => {
      // TODO: Connect to backend/email API
      console.log("RSVP", { name, phone, guests, attending, message });
      setLoading(false);
      setDone(true);
    }, 1500);
  };

  if (done) {
    return (
      <div className="relative py-8 text-center">
        <Confetti />
        <div style={{ fontSize: "2rem" }}>✅</div>
        <p
          className="mt-2 italic"
          style={{ color: GOLD, fontFamily: "var(--font-serif-elegant)", fontSize: "1rem" }}
        >
          Thank you! We can't wait to celebrate with you!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-5 space-y-3" noValidate>
      <style>{`
        .rsvp-input::placeholder { color: ${GOLD}66; }
        .rsvp-input:focus { border-color: ${GOLD} !important; box-shadow: 0 0 0 3px ${GOLD}33; }
        .rsvp-input:focus-visible { outline: 2px solid ${GOLD}; outline-offset: 2px; }
      `}</style>

      <label className="sr-only" htmlFor="rsvp-name">Your Name</label>
      <input id="rsvp-name" className="rsvp-input" style={{ ...inputStyle, borderColor: err ? "#ef4444" : `${GOLD}66` }}
        placeholder="Enter your name..." value={name} onChange={(e) => setName(e.target.value)} maxLength={100} required />
      {err && <p className="text-xs" style={{ color: "#fca5a5" }}>{err}</p>}

      <label className="sr-only" htmlFor="rsvp-phone">Phone or WhatsApp Number</label>
      <input id="rsvp-phone" type="tel" className="rsvp-input" style={inputStyle}
        placeholder="Phone / WhatsApp number" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={20} />

      <label className="sr-only" htmlFor="rsvp-guests">Number of Guests</label>
      <select id="rsvp-guests" className="rsvp-input" style={inputStyle}
        value={guests} onChange={(e) => setGuests(e.target.value)}>
        {["Just me", "2", "3", "4", "5+"].map((g) => (
          <option key={g} value={g} style={{ background: BURGUNDY_DEEP, color: CREAM }}>{g}</option>
        ))}
      </select>

      <fieldset className="space-y-2">
        <legend className="mb-1 text-sm" style={{ color: CREAM, fontFamily: "var(--font-serif-elegant)" }}>
          Will you attend?
        </legend>
        {[
          { v: "yes", l: "Joyfully Attending" },
          { v: "no", l: "Unable to Attend" },
        ].map((o) => (
          <label key={o.v} className="flex cursor-pointer items-center gap-3" style={{ color: CREAM, fontFamily: "var(--font-serif-elegant)" }}>
            <span
              className="grid h-5 w-5 place-items-center rounded-full"
              style={{ border: `2px solid ${GOLD}` }}
            >
              {attending === o.v && <span className="h-2.5 w-2.5 rounded-full" style={{ background: GOLD }} />}
            </span>
            <input type="radio" name="attend" className="sr-only" value={o.v}
              checked={attending === o.v} onChange={() => setAttending(o.v as "yes" | "no")} />
            {o.l}
          </label>
        ))}
      </fieldset>

      <label className="sr-only" htmlFor="rsvp-msg">Message to the couple</label>
      <textarea id="rsvp-msg" rows={3} className="rsvp-input" style={{ ...inputStyle, resize: "vertical" }}
        placeholder="Share your blessings..." value={message} onChange={(e) => setMessage(e.target.value)} maxLength={500} />

      <button
        type="submit"
        disabled={loading}
        className="group relative mt-2 flex w-full items-center justify-center overflow-hidden rounded-full disabled:opacity-70"
        style={{
          background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`,
          color: BURGUNDY,
          border: `1.5px solid ${BURGUNDY}`,
          fontFamily: "var(--font-royal)",
          height: 52,
        }}
      >
        <span className="relative z-10">
          {loading ? (
            <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-[#6B0F1A] border-t-transparent" />
          ) : (
            "Send My RSVP 💌"
          )}
        </span>
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </button>
    </form>
  );
}

export function VenueSection() {
  const { config } = useWeddingConfig();
  const fullAddress = `${config.venue} ${config.venueAddress}`;
  const mapsQ = encodeURIComponent(fullAddress);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQ}`;
  const embedSrc = `https://maps.google.com/maps?q=${mapsQ}&output=embed&z=15`;

  const highlights = [
    { i: "🏛️", t: "Grand Ceremonial Hall" },
    { i: "🌿", t: "Lush Garden for Outdoor Rituals" },
    { i: "🍽️", t: "Traditional South Indian Feast" },
    { i: "🎶", t: "Live Nadaswaram & Thavil Music" },
  ];

  return (
    <section
      id="venue"
      className="relative w-full overflow-hidden px-4 py-20 sm:px-6 md:px-10 md:py-[120px]"
      style={{ background: BURGUNDY }}
    >
      <style>{`
        @keyframes borderShimmer {
          0%, 100% { box-shadow: 0 0 0 1px ${GOLD}, 0 0 12px ${GOLD}55; }
          50% { box-shadow: 0 0 0 1px ${GOLD_LIGHT}, 0 0 28px ${GOLD}aa; }
        }
        .rsvp-card { animation: borderShimmer 2s ease-in-out infinite; }
      `}</style>

      <MandalaBg />
      <Particles />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.2 } } }}
          className="text-center"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
            <Gopuram />
          </motion.div>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="mt-3"
            style={{
              fontFamily: "var(--font-royal)",
              color: GOLD,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              lineHeight: 1.1,
            }}
          >
            The Sacred Venue
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            className="mt-2 italic"
            style={{ fontFamily: "var(--font-serif-elegant)", color: CREAM, fontSize: "1.1rem" }}
          >
            Where two souls become one
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="mt-3">
            <LotusDivider />
          </motion.div>
        </motion.div>

        {/* Row 1 */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Venue Info */}
          <GlassCard fromLeft>
            <ShimmerPill>Main Celebration</ShimmerPill>
            <h3
              className="mt-4"
              style={{
                fontFamily: "var(--font-royal)",
                color: GOLD,
                fontSize: "clamp(1.6rem, 3vw, 2rem)",
                lineHeight: 1.15,
              }}
            >
              {config.venue}
            </h3>
            <motion.svg height="3" viewBox="0 0 200 3" preserveAspectRatio="none" className="mt-2 block w-full max-w-[220px]" aria-hidden>
              <motion.line x1="0" y1="1.5" x2="200" y2="1.5" stroke={GOLD} strokeWidth="2"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut" }} />
            </motion.svg>

            <p
              className="mt-4"
              style={{ color: CREAM, fontFamily: "var(--font-serif-elegant)", fontSize: "1rem", lineHeight: 1.6 }}
            >
              📍 {config.venueAddress}
            </p>

            <div className="mt-3 flex flex-wrap gap-6">
              <span style={{ color: CREAM, fontFamily: "var(--font-serif-elegant)" }}>
                <span style={{ color: GOLD }}>📅</span> {config.weddingDate}
              </span>
              <span style={{ color: CREAM, fontFamily: "var(--font-serif-elegant)" }}>
                <span style={{ color: GOLD }}>🕐</span> {config.weddingTime}
              </span>
            </div>

            <DiamondChain />

            <ul className="space-y-2">
              {highlights.map((h, i) => (
                <motion.li
                  key={h.t}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="flex items-center gap-3"
                  style={{ color: CREAM, fontFamily: "var(--font-serif-elegant)" }}
                >
                  <span style={{ color: GOLD, fontSize: "1.2rem" }}>{h.i}</span>
                  <span>{h.t}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <GoldButton href={mapsLink} full>📍 Get Directions</GoldButton>
              <GoldButton href={`tel:${VENUE_PHONE}`} outlined full>📞 Call Venue</GoldButton>
            </div>
          </GlassCard>

          {/* Map */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[20px]"
            style={{
              border: `2px solid ${GOLD}66`,
              height: "var(--map-h, 380px)",
            }}
          >
            <style>{`@media (max-width: 767px){ .venue-map{--map-h:240px;} } @media (min-width:768px){ .venue-map{--map-h:380px;} }`}</style>
            <div className="venue-map h-full w-full">
              <iframe
                title="Wedding Venue Location"
                src={embedSrc}
                className="h-full w-full"
                style={{ border: 0, filter: "sepia(20%) saturate(1.2)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <motion.div
              className="absolute right-3 top-3 rounded-full px-3 py-1"
              style={{
                background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`,
                color: BURGUNDY,
                fontFamily: "var(--font-royal)",
                fontSize: "0.75rem",
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              📌 We're here!
            </motion.div>

            <div
              className="absolute bottom-3 left-3 max-w-[80%] rounded-[10px] px-4 py-3"
              style={{
                background: "rgba(107,15,26,0.8)",
                backdropFilter: "blur(8px)",
                border: `1px solid ${GOLD}4d`,
              }}
            >
              <div style={{ color: GOLD, fontFamily: "var(--font-royal)", fontSize: "0.9rem" }}>
                📍 {config.venue}
              </div>
              <div style={{ color: CREAM, fontFamily: "var(--font-serif-elegant)", fontSize: "0.8rem" }}>
                {config.venueAddress}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2 — How To Reach (full width) */}
        <div className="mt-6">
          <GlassCard fromLeft delay={0.2}>
            <div className="mb-4 flex items-center gap-3">
              <CompassIcon />
              <h3 style={{ fontFamily: "var(--font-royal)", color: GOLD, fontSize: "1.3rem" }}>
                How To Reach
              </h3>
            </div>
            <div className="-mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
              <TransportCard
                icon={<CarIcon />}
                title="By Car"
                primary="2.5 km from City Center"
                tip="Ample parking available on-site"
                cta="Open in Maps"
                href={mapsLink}
                delay={0}
              />
              <TransportCard
                icon={<TrainIcon />}
                title="By Train"
                primary="Visakhapatnam Railway Station"
                distance="8 km from venue — 20 min"
                tip="Auto-rickshaws available at station exit"
                cta="View Route"
                href={`https://www.google.com/maps/dir/Visakhapatnam+Railway+Station/${mapsQ}`}
                delay={0.15}
              />
              <TransportCard
                icon={<PlaneIcon />}
                title="By Flight"
                primary="Visakhapatnam Airport (VTZ)"
                distance="12 km — 25 min by cab"
                tip="Pre-book Ola/Uber from airport"
                cta="Book Cab"
                href="https://m.uber.com/"
                delay={0.3}
              />
            </div>
          </GlassCard>
        </div>

        {/* Row 3 — Dress Code + RSVP */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="rounded-[20px] p-7"
              style={{
                background: `linear-gradient(160deg, ${GOLD}26, ${GOLD}0d)`,
                border: `1.5px solid ${GOLD}66`,
              }}
            >
              <div className="text-center">
                <div className="mx-auto"><SareeIcon /></div>
                <h3 className="mt-2" style={{ fontFamily: "var(--font-royal)", color: GOLD, fontSize: "1.3rem" }}>
                  Dress Code
                </h3>
                <p className="italic" style={{ fontFamily: "var(--font-serif-elegant)", color: CREAM, fontSize: "1rem" }}>
                  Traditional Indian Attire
                </p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 style={{ color: GOLD, fontFamily: "var(--font-royal)", fontSize: "0.95rem" }}>Ladies 👗</h4>
                  <p style={{ color: CREAM, fontFamily: "var(--font-serif-elegant)", fontSize: "0.95rem" }}>Saree or Salwar Kameez</p>
                  <p style={{ color: CREAM, fontFamily: "var(--font-serif-elegant)", fontSize: "0.95rem", opacity: 0.9 }}>Colors: Bright silks welcome</p>
                </div>
                <div>
                  <h4 style={{ color: GOLD, fontFamily: "var(--font-royal)", fontSize: "0.95rem" }}>Gentlemen 👔</h4>
                  <p style={{ color: CREAM, fontFamily: "var(--font-serif-elegant)", fontSize: "0.95rem" }}>Dhoti &amp; Kurta or Suits</p>
                  <p style={{ color: CREAM, fontFamily: "var(--font-serif-elegant)", fontSize: "0.95rem", opacity: 0.9 }}>Colors: Pastels &amp; Whites preferred</p>
                </div>
              </div>
              <p className="mt-5 text-center italic" style={{ color: GOLD, fontFamily: "var(--font-serif-elegant)", fontSize: "0.85rem" }}>
                🙏 Please avoid black and white as per tradition
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              className="rsvp-card relative rounded-[20px] p-7"
              style={{
                background: `linear-gradient(160deg, ${BURGUNDY_DEEP}, #7a1424)`,
                border: `2px solid ${GOLD}`,
              }}
            >
              <div className="flex items-start gap-3">
                <EnvelopeIcon />
                <div>
                  <h3 style={{ fontFamily: "var(--font-royal)", color: GOLD, fontSize: "1.4rem" }}>
                    Kindly RSVP
                  </h3>
                  <p className="italic" style={{ fontFamily: "var(--font-serif-elegant)", color: CREAM, fontSize: "0.95rem" }}>
                    We'd love to know you're coming!
                  </p>
                </div>
              </div>
              <RsvpForm />
            </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-16 flex flex-col items-center text-center">
          <HastamelapIcon />
          <p
            className="mt-3"
            style={{ fontFamily: "var(--font-royal)", color: GOLD, fontSize: "1.1rem" }}
          >
            Sri {config.groomName} weds Smt {config.brideName}
          </p>
        </div>
      </div>
    </section>
  );
}