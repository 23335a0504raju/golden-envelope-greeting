import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWeddingConfig } from "@/lib/wedding-config";

const GOLD = "#C9A84C";
const GOLD_LIGHT = "#F5E6A3";
const BURGUNDY = "#6B0F1A";
const BURGUNDY_DEEP = "#4a0a12";
const CREAM = "#FDF6EC";

type Wish = { id: string; name: string; message: string; time: string };

const sampleWishes: Wish[] = [
  { id: "w1", name: "Rajesh Uncle", message: "Wishing you a lifetime of love and happiness! 🌸", time: "2 mins ago" },
  { id: "w2", name: "Anitha Aunty", message: "May God bless this beautiful couple always. Congratulations! 🙏", time: "5 mins ago" },
  { id: "w3", name: "Karthik", message: "So happy for both of you! Wishing you joy forever 🎉", time: "8 mins ago" },
  { id: "w4", name: "Divya & Family", message: "Our heartfelt blessings to the lovely couple ❤️", time: "12 mins ago" },
  { id: "w5", name: "Suresh Mama", message: "May your bond grow stronger with each passing day 🪔", time: "15 mins ago" },
  { id: "w6", name: "Preethi", message: "Beautiful couple! Wishing you all the happiness in the world 🌺", time: "20 mins ago" },
];

// Pre-computed non-overlapping desktop positions (x%, y%) for 6 cards inside 480px container
const desktopPositions = [
  { left: "2%", top: "8%" },
  { left: "30%", top: "4%" },
  { left: "58%", top: "12%" },
  { left: "5%", top: "55%" },
  { left: "34%", top: "58%" },
  { left: "62%", top: "52%" },
];

const floatDurations = [4, 5, 6, 4.5, 5.5, 6.5];
const floatDelays = [0, 0.5, 1, 1.5, 2, 2.5];

function FloatingCard({ wish, index }: { wish: Wish; index: number }) {
  const pos = desktopPositions[index % desktopPositions.length];
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="absolute"
      style={{
        left: pos.left,
        top: pos.top,
        width: "min(220px, 44%)",
        animation: `bc-float-${index % 6} ${floatDurations[index % 6]}s ease-in-out ${floatDelays[index % 6]}s infinite`,
      }}
    >
      <div
        className="rounded-[14px] bg-white px-5 py-4"
        style={{
          border: `1px solid ${GOLD}40`,
          boxShadow: `0 4px 20px ${BURGUNDY}14`,
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full"
            style={{
              background: `linear-gradient(135deg, ${BURGUNDY}, ${BURGUNDY_DEEP})`,
              color: GOLD,
              fontFamily: "var(--font-royal)",
              fontSize: "0.95rem",
            }}
          >
            {wish.name.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate" style={{ fontFamily: "var(--font-royal)", color: BURGUNDY, fontSize: "0.82rem", fontWeight: 700 }}>
              {wish.name}
            </div>
          </div>
          <div className="shrink-0" style={{ fontFamily: "var(--font-serif-elegant)", color: "#888", fontSize: "0.7rem" }}>
            {wish.time}
          </div>
        </div>
        <p
          className="mt-2 italic"
          style={{
            fontFamily: "var(--font-serif-elegant)",
            color: "#2C1810",
            fontSize: "0.92rem",
            lineHeight: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {wish.message}
        </p>
        <div className="mt-2 flex gap-1" style={{ color: GOLD, fontSize: "0.7rem" }}>
          <span>❤</span><span>❤</span><span>❤</span>
        </div>
      </div>
    </motion.div>
  );
}

function HandsIcon() {
  return (
    <motion.svg
      viewBox="0 0 80 80"
      width="64"
      height="64"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.path
        d="M20 65 Q15 50 22 35 Q26 25 32 22 L36 40 L40 50 L40 65 Z"
        fill="none"
        stroke={GOLD}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <motion.path
        d="M60 65 Q65 50 58 35 Q54 25 48 22 L44 40 L40 50 L40 65 Z"
        fill="none"
        stroke={GOLD}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <motion.path d="M40 50 L40 22" stroke={GOLD} strokeWidth="1.5" fill="none" />
    </motion.svg>
  );
}

function LotusDivider() {
  return (
    <div className="my-4 flex items-center justify-center gap-3">
      <div style={{ width: 60, height: 1, background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
      <span style={{ color: GOLD, fontSize: "1rem" }}>❋</span>
      <div style={{ width: 60, height: 1, background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
    </div>
  );
}

function PeacockPair() {
  return (
    <svg viewBox="0 0 240 80" width="200" height="70" style={{ display: "block", margin: "0 auto" }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.path
          key={`l${i}`}
          d={`M70 60 Q${60 - i * 8} ${50 - i * 6} ${50 - i * 10} ${60 - i * 4}`}
          stroke={GOLD}
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 * i }}
        />
      ))}
      <circle cx="72" cy="55" r="5" fill={GOLD} />
      <path d="M72 60 Q72 70 65 70" stroke={GOLD} strokeWidth="1.5" fill="none" />
      <text x="120" y="50" textAnchor="middle" fill={GOLD} fontSize="22" fontFamily="serif">ॐ</text>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.path
          key={`r${i}`}
          d={`M170 60 Q${180 + i * 8} ${50 - i * 6} ${190 + i * 10} ${60 - i * 4}`}
          stroke={GOLD}
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 * i }}
        />
      ))}
      <circle cx="168" cy="55" r="5" fill={GOLD} />
      <path d="M168 60 Q168 70 175 70" stroke={GOLD} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function Diya({ delay = 0 }: { delay?: number }) {
  return (
    <div className="relative" style={{ width: 24, height: 36 }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-b-full" style={{ width: 24, height: 10, background: `linear-gradient(180deg, ${GOLD}, ${BURGUNDY_DEEP})` }} />
      <div
        className="w-flicker absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: 10,
          width: 8,
          height: 18,
          background: `radial-gradient(circle at 50% 70%, ${GOLD_LIGHT}, ${GOLD} 60%, transparent 80%)`,
          borderRadius: "50% 50% 50% 50% / 70% 70% 30% 30%",
          animationDelay: `${delay}s`,
        }}
      />
    </div>
  );
}

function BlessingForm({ onSubmit, count }: { onSubmit: (w: Wish) => void; count: number }) {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const emojis = ["🙏", "❤️", "🌸", "🎉", "🪔", "💍", "🌺", "✨"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Please enter your name";
    if (!message.trim()) newErrors.message = "Please share a blessing";
    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 700));
    onSubmit({
      id: `w-${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      time: "just now",
    });
    setStatus("success");
    setTimeout(() => {
      setName("");
      setRelation("");
      setMessage("");
      setStatus("idle");
    }, 1200);
  };

  const charCount = message.length;
  const overLimit = charCount > 130;

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mt-8 max-w-[560px] rounded-[16px] bg-white p-7"
      style={{ border: `1.5px solid ${GOLD}4d`, boxShadow: `0 8px 32px ${BURGUNDY}14` }}
    >
      <div className="text-center">
        <h3 style={{ fontFamily: "var(--font-royal)", color: BURGUNDY, fontSize: "1.2rem" }}>
          Leave Your Blessings ✨
        </h3>
        <p className="italic" style={{ fontFamily: "var(--font-serif-elegant)", color: GOLD, fontSize: "0.9rem" }}>
          Your wishes will appear on the wall above
        </p>
        <p className="mt-2 italic" style={{ fontFamily: "var(--font-serif-elegant)", color: GOLD, fontSize: "0.95rem" }}>
          <motion.span
            key={count}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 0.3 }}
            style={{ display: "inline-block", fontWeight: 700 }}
          >
            {count}
          </motion.span>{" "}
          blessings received
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-5 space-y-3">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name..."
            className="w-full rounded-lg px-4 py-3 outline-none transition"
            style={{
              background: "#FDFAF5",
              border: `1px solid ${errors.name ? "#c33" : GOLD + "66"}`,
              fontFamily: "var(--font-serif-elegant)",
              color: "#2C1810",
              fontSize: "1rem",
            }}
            onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 3px ${GOLD}33`)}
            onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
          />
          {errors.name && <p className="mt-1 text-xs" style={{ color: "#c33" }}>{errors.name}</p>}
        </div>
        <input
          type="text"
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
          placeholder="e.g. Friend of Groom, Cousin of Bride..."
          className="w-full rounded-lg px-4 py-3 outline-none"
          style={{
            background: "#FDFAF5",
            border: `1px solid ${GOLD}66`,
            fontFamily: "var(--font-serif-elegant)",
            color: "#2C1810",
            fontSize: "1rem",
          }}
        />
        <div className="relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, 150))}
            placeholder="Share your heartfelt wishes for the couple..."
            rows={4}
            className="w-full resize-none rounded-lg px-4 py-3 outline-none"
            style={{
              background: "#FDFAF5",
              border: `1px solid ${errors.message ? "#c33" : GOLD + "66"}`,
              fontFamily: "var(--font-serif-elegant)",
              color: "#2C1810",
              fontSize: "1rem",
            }}
          />
          <div
            className="absolute bottom-2 right-3 text-xs"
            style={{ fontFamily: "var(--font-serif-elegant)", color: overLimit ? BURGUNDY : GOLD }}
          >
            {charCount} / 150
          </div>
          {errors.message && <p className="mt-1 text-xs" style={{ color: "#c33" }}>{errors.message}</p>}
        </div>

        <div className="flex flex-wrap gap-2">
          {emojis.map((em) => (
            <button
              key={em}
              type="button"
              onClick={() => setMessage((m) => (m + em).slice(0, 150))}
              className="flex h-9 w-9 items-center justify-center rounded-full text-base transition hover:scale-110"
              style={{ background: `${GOLD}1a`, border: `1px solid ${GOLD}33` }}
              aria-label={`Add ${em}`}
            >
              {em}
            </button>
          ))}
        </div>

        <button
          type="submit"
          disabled={status !== "idle"}
          className="relative w-full overflow-hidden rounded-full px-6 py-3 transition"
          style={{
            background:
              status === "success"
                ? "linear-gradient(90deg, #2d8f4a, #1f6f37)"
                : `linear-gradient(90deg, ${BURGUNDY}, #8B1A2A)`,
            color: GOLD_LIGHT,
            fontFamily: "var(--font-royal)",
            fontSize: "1rem",
          }}
        >
          {status === "loading" && (
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-[#F5E6A3] border-t-transparent align-middle" />
          )}
          {status === "success" && "✓ Blessings Sent!"}
          {status === "idle" && "Send Blessings 🙏"}
          {status === "loading" && " Sending..."}
        </button>
      </form>
    </motion.div>
  );
}

function BlessingsWall() {
  const [wishes, setWishes] = useState<Wish[]>(sampleWishes);

  const addWish = (w: Wish) => {
    setWishes((prev) => [w, ...prev].slice(0, 6));
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: CREAM, padding: "80px 0 60px" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #C9A84C 1px, transparent 2px), radial-gradient(circle at 80% 60%, #C9A84C 1px, transparent 2px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <HandsIcon />
          <h2
            className="mt-2"
            style={{
              fontFamily: "var(--font-royal)",
              color: BURGUNDY,
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Wall of Blessings
          </h2>
          <p
            className="italic"
            style={{ fontFamily: "var(--font-serif-elegant)", color: GOLD, fontSize: "1.1rem" }}
          >
            Your love and blessings mean the world to us
          </p>
          <LotusDivider />
        </motion.div>

        <div
          className="relative mx-auto mt-8 w-full overflow-hidden rounded-[20px] bg-white"
          style={{
            height: "min(480px, 80vw)",
            maxHeight: 480,
            minHeight: 360,
            border: `1.5px solid ${GOLD}4d`,
            boxShadow: `inset 0 0 60px ${GOLD}0d`,
          }}
        >
          <AnimatePresence>
            {wishes.map((wish, idx) => (
              <FloatingCard key={wish.id} wish={wish} index={idx} />
            ))}
          </AnimatePresence>
        </div>

        <BlessingForm onSubmit={addWish} count={wishes.length} />
      </div>

      <style>{`
        @keyframes bc-float-0 { 0%,100% { transform: translateY(0) rotate(0); } 33% { transform: translateY(-12px) rotate(0.5deg); } 66% { transform: translateY(-6px) rotate(-0.5deg); } }
        @keyframes bc-float-1 { 0%,100% { transform: translateY(0) rotate(0); } 33% { transform: translateY(-10px) rotate(-0.4deg); } 66% { transform: translateY(-4px) rotate(0.4deg); } }
        @keyframes bc-float-2 { 0%,100% { transform: translateY(0) rotate(0); } 33% { transform: translateY(-14px) rotate(0.6deg); } 66% { transform: translateY(-7px) rotate(-0.3deg); } }
        @keyframes bc-float-3 { 0%,100% { transform: translateY(0) rotate(0); } 33% { transform: translateY(-8px) rotate(-0.3deg); } 66% { transform: translateY(-12px) rotate(0.5deg); } }
        @keyframes bc-float-4 { 0%,100% { transform: translateY(0) rotate(0); } 33% { transform: translateY(-11px) rotate(0.4deg); } 66% { transform: translateY(-5px) rotate(-0.4deg); } }
        @keyframes bc-float-5 { 0%,100% { transform: translateY(0) rotate(0); } 33% { transform: translateY(-9px) rotate(-0.5deg); } 66% { transform: translateY(-13px) rotate(0.3deg); } }
      `}</style>
    </section>
  );
}

function ClosingMessage() {
  const config = useWeddingConfig().config;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const shareText = `You're invited to ${config.groomName} & ${config.brideName}'s wedding!`;
  const whatsappHref = typeof window !== "undefined"
    ? `https://wa.me/?text=${encodeURIComponent(`${shareText} ${window.location.href}`)}`
    : `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: BURGUNDY, padding: "80px 0" }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at center, transparent 40%, rgba(201,168,76,0.08) 41%, transparent 42%), radial-gradient(circle at center, transparent 60%, rgba(201,168,76,0.06) 61%, transparent 62%)",
          backgroundSize: "100% 100%",
        }}
      />
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "-20%", opacity: [0, 0.8, 0] }}
          transition={{ duration: 10 + i, repeat: Infinity, delay: i * 0.7, ease: "linear" }}
          style={{
            left: `${(i * 13) % 100}%`,
            color: GOLD,
            fontSize: "0.8rem",
          }}
        >
          ✦
        </motion.span>
      ))}

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto w-[92vw] max-w-[700px] rounded-[24px] p-8 md:p-12"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(10px)",
          border: `2px solid ${GOLD}80`,
        }}
      >
        <PeacockPair />

        <p
          className="mt-4 text-center italic"
          style={{ fontFamily: "var(--font-serif-elegant)", color: CREAM, fontSize: "1.1rem" }}
        >
          With joy in our hearts and blessings of the Almighty,
        </p>

        <p
          className="mt-4 text-center"
          style={{
            fontFamily: "var(--font-script)",
            color: GOLD,
            fontSize: "clamp(3rem, 6vw, 4rem)",
            lineHeight: 1.1,
            backgroundImage: `linear-gradient(90deg, ${GOLD} 0%, ${GOLD_LIGHT} 50%, ${GOLD} 100%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% 100%",
            animation: "w-shimmer 6s linear infinite",
          }}
        >
          {config.groomName} &amp; {config.brideName}
        </p>

        <p className="mt-3 text-center italic" style={{ fontFamily: "var(--font-serif-elegant)", color: CREAM, fontSize: "1rem" }}>
          together with their families,
        </p>
        <p className="text-center italic" style={{ fontFamily: "var(--font-serif-elegant)", color: CREAM, fontSize: "1rem" }}>
          joyfully invite you to be a part of their
        </p>

        <p
          className="mt-3 text-center"
          style={{
            fontFamily: "var(--font-royal)",
            color: GOLD,
            fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
            letterSpacing: "0.1em",
          }}
        >
          Sacred Wedding Celebration
        </p>

        <div className="my-6" style={{ height: 1, background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
        <p className="text-center" style={{ fontFamily: "var(--font-serif-elegant)", color: CREAM, fontSize: "1.05rem" }}>
          📅 {config.weddingDate} &nbsp;&nbsp; 🕐 {config.weddingTime}
        </p>
        <p className="mt-1 text-center" style={{ fontFamily: "var(--font-serif-elegant)", color: GOLD, fontSize: "1rem" }}>
          📍 {config.venue}, {config.venueAddress}
        </p>
        <div className="my-6" style={{ height: 1, background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />

        <p className="text-center" style={{ color: GOLD, fontSize: "1.2rem", fontFamily: "'Noto Sans Devanagari', serif" }}>
          ॐ सर्वे भवन्तु सुखिनः
        </p>
        <p className="text-center italic" style={{ fontFamily: "var(--font-serif-elegant)", color: CREAM, opacity: 0.7, fontSize: "0.85rem" }}>
          (May all beings be happy)
        </p>

        <div className="mt-6 flex justify-center gap-4 md:gap-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <Diya key={i} delay={i * 0.2} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p style={{ fontFamily: "var(--font-royal)", color: GOLD, fontSize: "0.9rem", letterSpacing: "0.1em" }}>
            SHARE THIS INVITATION
          </p>
          <div className="mt-3 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full px-5 transition hover:opacity-90"
              style={{
                background: "#25D366",
                color: "white",
                fontFamily: "var(--font-royal)",
                fontSize: "0.85rem",
              }}
            >
              Share on WhatsApp
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex h-11 items-center justify-center rounded-full px-5 transition hover:opacity-90"
              style={{
                background: GOLD,
                color: BURGUNDY,
                fontFamily: "var(--font-royal)",
                fontSize: "0.85rem",
              }}
            >
              {copied ? "✓ Copied!" : "📋 Copy Link"}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function AnimatedFooter() {
  const config = useWeddingConfig().config;
  const links = useMemo(
    () => [
      { label: "Our Story", id: "hero" },
      { label: "Events", id: "events" },
      { label: "Family", id: "family" },
      { label: "Gallery", id: "gallery" },
      { label: "Venue", id: "venue" },
    ],
    [],
  );

  const scrollTo = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden" style={{ background: "#1A0508", padding: "40px 0 24px" }}>
      {[
        { top: 16, left: 16 },
        { top: 16, right: 16 },
        { bottom: 60, left: 16 },
        { bottom: 60, right: 16 },
      ].map((p, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute"
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: 2 + i * 0.4, repeat: Infinity }}
          style={{ ...p, color: GOLD, fontSize: "1rem" }}
        >
          ✦
        </motion.span>
      ))}

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 150 }}
          className="relative flex items-center justify-center"
          style={{ width: 160, height: 120 }}
        >
          <motion.svg
            viewBox="0 0 160 160"
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="80" cy="80" r="60" fill="none" stroke={GOLD + "66"} strokeWidth="1" strokeDasharray="2 6" />
            {[0, 60, 120, 180, 240, 300].map((deg) => {
              const r = 60;
              const x = 80 + r * Math.cos((deg * Math.PI) / 180);
              const y = 80 + r * Math.sin((deg * Math.PI) / 180);
              return <rect key={deg} x={x - 2.5} y={y - 2.5} width={5} height={5} fill={GOLD} transform={`rotate(45 ${x} ${y})`} />;
            })}
          </motion.svg>
          <div className="relative flex items-baseline" style={{ fontFamily: "var(--font-script)", color: GOLD, fontSize: "clamp(4rem, 8vw, 5rem)", lineHeight: 1 }}>
            <span>{config.groomName.charAt(0)}</span>
            <span style={{ marginLeft: "-0.4em", opacity: 0.85 }}>{config.brideName.charAt(0)}</span>
          </div>
        </motion.div>

        <p className="mt-2" style={{ fontFamily: "var(--font-script)", color: GOLD, fontSize: "1.8rem" }}>
          {config.groomName} &amp; {config.brideName}
        </p>
        <p style={{ fontFamily: "var(--font-royal)", color: CREAM, opacity: 0.6, fontSize: "0.85rem", letterSpacing: "0.15em" }}>
          {config.weddingDate}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-4 flex items-center gap-2"
          style={{ color: GOLD, fontSize: "0.8rem" }}
        >
          <span>✦</span><span>—</span><span>❋</span><span>—</span><span>✦</span><span>—</span><span>❋</span><span>—</span><span>✦</span>
        </motion.div>

        <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 md:flex md:gap-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="transition hover:text-[#C9A84C]"
              style={{
                fontFamily: "var(--font-royal)",
                color: `${CREAM}b3`,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
              }}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="mt-6 flex justify-center">
          <Diya />
        </div>

        <div className="mt-6 w-full" style={{ height: 1, background: `${GOLD}33` }} />
        <div className="mt-4 flex w-full flex-col items-center justify-between gap-2 md:flex-row">
          <p className="italic" style={{ fontFamily: "var(--font-serif-elegant)", color: `${CREAM}80`, fontSize: "0.8rem" }}>
            Crafted with ❤ for {config.groomName} &amp; {config.brideName}
          </p>
          <p className="italic" style={{ fontFamily: "var(--font-serif-elegant)", color: `${CREAM}80`, fontSize: "0.8rem" }}>
            © 2026 Wedding Invitation
          </p>
        </div>
      </div>
    </footer>
  );
}

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[9999] h-[3px] w-full" style={{ background: "transparent", pointerEvents: "none" }}>
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT}, ${GOLD})`,
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 left-6 z-[60] grid h-12 w-12 place-items-center rounded-full transition hover:opacity-90"
      style={{
        background: BURGUNDY,
        color: GOLD,
        border: `1px solid ${GOLD}80`,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s",
      }}
    >
      <span style={{ fontSize: "1.2rem" }}>↑</span>
    </button>
  );
}

export function BlessingsClosing() {
  return (
    <>
      <BlessingsWall />
      <ClosingMessage />
      <AnimatedFooter />
    </>
  );
}
