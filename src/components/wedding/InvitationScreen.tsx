import { useEffect, useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, BellOff } from "lucide-react";
import { useWeddingConfig, type WeddingConfig } from "@/lib/wedding-config";
import { MandalaBorder, OmSymbol, Diya } from "./MandalaBorder";

const GoldParticles = lazy(() =>
  import("./GoldParticles").then((m) => ({ default: m.GoldParticles })),
);

type Phase = "envelope" | "opening" | "card-sliding" | "card-open" | "revealed";

export function InvitationScreen({ onReveal }: { onReveal?: () => void } = {}) {
  const { config } = useWeddingConfig();
  const [phase, setPhase] = useState<Phase>("envelope");
  const [audioOn, setAudioOn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t1 = setTimeout(() => setPhase("opening"), 1500);
    const t2 = setTimeout(() => setPhase("card-sliding"), 2600);
    const t3 = setTimeout(() => setPhase("card-open"), 3700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const trigger = () => {
    if (phase === "envelope") setPhase("opening");
  };

  const flapOpen = phase !== "envelope";
  const cardOut = phase === "card-sliding" || phase === "card-open";
  const cardOpen = phase === "card-open";

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #6B0F1A 0%, #4a0a12 55%, #2a060c 100%)",
      }}
    >
      {/* particles */}
      {mounted && (
        <Suspense fallback={null}>
          <GoldParticles />
        </Suspense>
      )}

      {/* subtle vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* audio toggle */}
      <button
        onClick={() => setAudioOn((v) => !v)}
        className="absolute right-4 top-4 z-50 grid h-11 w-11 place-items-center rounded-full border border-[var(--w-gold)]/50 bg-[var(--w-burgundy-deep)]/70 text-[var(--w-gold-light)] backdrop-blur transition hover:scale-105 hover:border-[var(--w-gold)] sm:right-6 sm:top-6"
        aria-label={audioOn ? "Mute music" : "Play music"}
      >
        {audioOn ? <Bell className="h-5 w-5" /> : <BellOff className="h-5 w-5" />}
        {audioOn && (
          <audio autoPlay loop>
            <source src="/audio/wedding-ambient.mp3" type="audio/mpeg" />
          </audio>
        )}
      </button>

      {/* stage */}
      <div
        className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10"
        style={{ perspective: "1600px" }}
      >
        {/*
          ENVELOPE STAGE — a single fixed-ratio box. Everything (envelope body,
          letter, flap) is an absolutely-positioned layer inside it, so the
          z-index order is reliable and the letter genuinely emerges from behind
          the envelope's front pocket.
        */}
        <div
          className="relative w-[min(78vw,360px)] md:w-[min(58vw,440px)] lg:w-[500px]"
          style={{ aspectRatio: "1.5 / 1", transformStyle: "preserve-3d" }}
          onClick={trigger}
        >
          {/* ── Layer 1 (z:1): envelope back ── */}
          <div
            className="absolute inset-0 rounded-md shadow-2xl"
            style={{
              background:
                "linear-gradient(150deg, #7a1320 0%, #5a0d18 60%, #3d0810 100%)",
              border: "1px solid rgba(201,168,76,0.5)",
              boxShadow:
                "0 30px 60px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.25) inset",
              zIndex: 1,
            }}
          />

          {/* ── Layer 2 (z:10): THE LETTER — slides up out of the envelope ──
              Anchored to the envelope's bottom edge. The letter is only a
              little taller than the envelope, so when it rises it overlaps the
              envelope (no gap) and stays fully on-screen. */}
          <motion.div
            className="absolute left-1/2 bottom-0"
            style={{
              width: "62%",
              x: "-50%",
              zIndex: 10,
              transformOrigin: "bottom center",
            }}
            initial={{ y: "6%", scaleY: 0.55, opacity: 0 }}
            animate={
              cardOut
                ? { y: cardOpen ? "-44%" : "-28%", scaleY: 1, opacity: 1 }
                : { y: "6%", scaleY: 0.55, opacity: 0 }
            }
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Letter open={cardOpen} config={config} />
          </motion.div>

          {/* ── Layer 3 (z:20): envelope FRONT POCKET — hides the letter's base ── */}
          <div
            className="pointer-events-none absolute inset-0 rounded-md"
            style={{
              background:
                "linear-gradient(180deg, #6e1220 0%, #5a0d18 55%, #3d0810 100%)",
              clipPath: "polygon(0 42%, 50% 88%, 100% 42%, 100% 100%, 0 100%)",
              borderLeft: "1px solid rgba(201,168,76,0.4)",
              borderRight: "1px solid rgba(201,168,76,0.4)",
              borderBottom: "1px solid rgba(201,168,76,0.4)",
              boxShadow: "0 -6px 18px -6px rgba(0,0,0,0.6)",
              zIndex: 20,
            }}
          />
          {/* gold seam where the two front folds meet */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ zIndex: 21 }}
          >
            <div
              className="absolute left-0 top-[42%] h-px w-1/2"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201,168,76,0.55))",
                transform: "rotate(28deg)",
                transformOrigin: "left center",
              }}
            />
            <div
              className="absolute right-0 top-[42%] h-px w-1/2"
              style={{
                background:
                  "linear-gradient(270deg, transparent, rgba(201,168,76,0.55))",
                transform: "rotate(-28deg)",
                transformOrigin: "right center",
              }}
            />
          </div>

          {/* ── Layer 4 (z:30 closed / z:5 open): TOP FLAP ── */}
          <motion.div
            className="absolute left-0 right-0 top-0"
            style={{
              height: "58%",
              transformStyle: "preserve-3d",
              transformOrigin: "top center",
              zIndex: flapOpen ? 5 : 30,
            }}
            initial={{ rotateX: 0 }}
            animate={{ rotateX: flapOpen ? -178 : 0 }}
            transition={{ duration: 1, ease: [0.6, 0, 0.3, 1] }}
          >
            {/* flap front */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                background:
                  "linear-gradient(180deg, #8a1424 0%, #6B0F1A 60%, #4a0a12 100%)",
                border: "1px solid rgba(201,168,76,0.5)",
                backfaceVisibility: "hidden",
              }}
            />
            {/* flap back (visible once opened) */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                background:
                  "linear-gradient(180deg, #3a0810 0%, #5a0d18 60%, #7a1320 100%)",
                transform: "rotateX(180deg)",
                backfaceVisibility: "hidden",
              }}
            />

            {/* WAX SEAL on flap front */}
            <div
              className="absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2"
              style={{ backfaceVisibility: "hidden" }}
            >
              <motion.div
                className="relative grid place-items-center rounded-full"
                style={{
                  width: "clamp(52px, 13vw, 78px)",
                  height: "clamp(52px, 13vw, 78px)",
                  background:
                    "radial-gradient(circle at 35% 30%, #e7c66a 0%, #C9A84C 45%, #8a6f24 100%)",
                  boxShadow:
                    "0 6px 14px rgba(0,0,0,0.55), inset 0 2px 6px rgba(255,255,255,0.35), inset 0 -4px 8px rgba(0,0,0,0.35)",
                  border: "2px solid #6B0F1A",
                }}
                animate={
                  phase === "envelope"
                    ? { scale: [1, 1.05, 1], opacity: 1 }
                    : { scale: 0.85, opacity: 0 }
                }
                transition={{
                  duration: phase === "envelope" ? 2.4 : 0.3,
                  repeat: phase === "envelope" ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                <OmSymbol className="h-3/4 w-3/4" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <AnimatePresence>
        {phase === "card-open" && (
          <motion.div
            className="absolute bottom-8 left-1/2 z-40 -translate-x-1/2 sm:bottom-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <button
              onClick={() => onReveal?.()}
              className="group relative overflow-hidden rounded-full px-7 py-3 text-sm tracking-[0.2em] uppercase shadow-[0_10px_30px_-10px_rgba(201,168,76,0.7)] transition hover:scale-[1.04] sm:px-9 sm:py-4 sm:text-base"
              style={{
                background:
                  "linear-gradient(135deg, #6B0F1A 0%, #8a1424 50%, #6B0F1A 100%)",
                border: "1.5px solid #C9A84C",
                color: "#F5E6A3",
                fontFamily: "var(--font-serif-elegant)",
              }}
            >
              <span className="relative z-10">View Invitation →</span>
              <span className="absolute inset-0 w-shimmer opacity-0 transition group-hover:opacity-100" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

/**
 * The letter / message that slides out of the envelope.
 * A single clean cream card — no fragile folding panels.
 */
function Letter({ open, config }: { open: boolean; config: WeddingConfig }) {
  return (
    <div
      className="relative mx-auto overflow-hidden rounded-sm"
      style={{
        width: "100%",
        aspectRatio: "0.82 / 1",
        background:
          "linear-gradient(180deg, #fff8e8 0%, #FDF6EC 50%, #f3e6c8 100%)",
        boxShadow:
          "0 30px 60px -15px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(201,168,76,0.35)",
      }}
    >
      <MandalaBorder className="absolute inset-0 h-full w-full" />
      <Diya className="absolute left-2 top-2 h-6 w-6 sm:left-3 sm:top-3 sm:h-8 sm:w-8" />
      <Diya className="absolute right-2 top-2 h-6 w-6 sm:right-3 sm:top-3 sm:h-8 sm:w-8" />
      <Diya className="absolute bottom-2 left-2 h-6 w-6 sm:bottom-3 sm:left-3 sm:h-8 sm:w-8" />
      <Diya className="absolute bottom-2 right-2 h-6 w-6 sm:bottom-3 sm:right-3 sm:h-8 sm:w-8" />

      <motion.div
        className="relative flex h-full flex-col items-center justify-center px-5 text-center sm:px-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ delay: open ? 0.55 : 0, duration: 0.6 }}
      >
        <OmSymbol className="h-8 w-8 sm:h-10 sm:w-10" />
        <div
          className="mt-2 h-px w-12"
          style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
        />
        <p
          className="mt-3 italic"
          style={{
            fontFamily: "var(--font-serif-elegant)",
            color: "var(--w-ink)",
            fontSize: "clamp(0.7rem, 1.9vw, 0.95rem)",
            letterSpacing: "0.08em",
          }}
        >
          You are cordially invited
        </p>
        <p
          className="mt-1 uppercase tracking-[0.35em]"
          style={{
            color: "var(--w-burgundy)",
            fontFamily: "var(--font-serif-elegant)",
            fontSize: "clamp(0.55rem, 1.3vw, 0.7rem)",
          }}
        >
          to the wedding of
        </p>

        <h1
          className="mt-3 leading-none"
          style={{
            fontFamily: "var(--font-script)",
            color: "var(--w-burgundy)",
            fontSize: "clamp(1.7rem, 5.5vw, 2.6rem)",
            textShadow: "0 1px 0 rgba(255,255,255,0.6)",
          }}
        >
          {config.brideName}
        </h1>
        <p
          className="my-1"
          style={{
            fontFamily: "var(--font-royal)",
            color: "var(--w-gold)",
            fontSize: "clamp(0.75rem, 1.9vw, 0.95rem)",
            letterSpacing: "0.3em",
          }}
        >
          &amp;
        </p>
        <h1
          className="leading-none"
          style={{
            fontFamily: "var(--font-script)",
            color: "var(--w-burgundy)",
            fontSize: "clamp(1.7rem, 5.5vw, 2.6rem)",
            textShadow: "0 1px 0 rgba(255,255,255,0.6)",
          }}
        >
          {config.groomName}
        </h1>

        <div
          className="mt-4 h-px w-16"
          style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
        />
        <p
          className="mt-2"
          style={{
            fontFamily: "var(--font-serif-elegant)",
            color: "var(--w-ink)",
            fontSize: "clamp(0.65rem, 1.7vw, 0.8rem)",
            letterSpacing: "0.12em",
          }}
        >
          {config.weddingDate}
        </p>
        <p
          className="mt-1 px-2"
          style={{
            fontFamily: "var(--font-serif-elegant)",
            color: "var(--w-ink)",
            opacity: 0.75,
            fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
          }}
        >
          {config.venue}
        </p>
      </motion.div>
    </div>
  );
}
