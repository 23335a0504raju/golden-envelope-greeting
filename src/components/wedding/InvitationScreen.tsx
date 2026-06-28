import { useEffect, useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, BellOff } from "lucide-react";
import { weddingConfig } from "@/lib/wedding-config";
import { MandalaBorder, OmSymbol, Diya } from "./MandalaBorder";

const GoldParticles = lazy(() =>
  import("./GoldParticles").then((m) => ({ default: m.GoldParticles })),
);

type Phase = "envelope" | "opening" | "card-sliding" | "card-open" | "revealed";

export function InvitationScreen() {
  const [phase, setPhase] = useState<Phase>("envelope");
  const [revealed, setRevealed] = useState(false);
  const [audioOn, setAudioOn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t1 = setTimeout(() => setPhase("opening"), 1500);
    const t2 = setTimeout(() => setPhase("card-sliding"), 2400);
    const t3 = setTimeout(() => setPhase("card-open"), 3800);
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
  const cardOut = phase === "card-sliding" || phase === "card-open" || phase === "revealed";
  const cardOpen = phase === "card-open" || phase === "revealed";

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
        {/* audio placeholder */}
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
        <div
          className="relative"
          style={{
            width: "min(90vw, 440px)",
            transformStyle: "preserve-3d",
          }}
          onClick={trigger}
        >
          {/* ENVELOPE */}
          <motion.div
            className="relative mx-auto"
            style={{
              width: "100%",
              aspectRatio: "1.55 / 1",
              transformStyle: "preserve-3d",
            }}
            animate={
              cardOut
                ? { y: 40, scale: 0.92, opacity: 0.95 }
                : { y: 0, scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* back */}
            <div
              className="absolute inset-0 rounded-md shadow-2xl"
              style={{
                background:
                  "linear-gradient(150deg, #7a1320 0%, #5a0d18 60%, #3d0810 100%)",
                border: "1px solid rgba(201,168,76,0.5)",
                boxShadow:
                  "0 30px 60px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.25) inset",
              }}
            />
            {/* body front (lower triangle pocket) */}
            <div
              className="absolute inset-0 rounded-md"
              style={{
                background:
                  "linear-gradient(180deg, transparent 48%, #5a0d18 48%, #3d0810 100%)",
                clipPath:
                  "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
                borderLeft: "1px solid rgba(201,168,76,0.4)",
                borderRight: "1px solid rgba(201,168,76,0.4)",
                borderBottom: "1px solid rgba(201,168,76,0.4)",
              }}
            />
            {/* side flaps decoration */}
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute left-0 top-1/2 h-px w-1/2 -translate-y-1/2"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(201,168,76,0.6))",
                  transform: "translateY(-50%) rotate(28deg)",
                  transformOrigin: "left center",
                }}
              />
              <div
                className="absolute right-0 top-1/2 h-px w-1/2 -translate-y-1/2"
                style={{
                  background:
                    "linear-gradient(270deg, transparent, rgba(201,168,76,0.6))",
                  transform: "translateY(-50%) rotate(-28deg)",
                  transformOrigin: "right center",
                }}
              />
            </div>

            {/* FLAP */}
            <motion.div
              className="absolute left-0 right-0 top-0 origin-top"
              style={{
                height: "62%",
                transformStyle: "preserve-3d",
                transformOrigin: "top center",
                zIndex: flapOpen ? 5 : 30,
              }}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: flapOpen ? -175 : 0 }}
              transition={{ duration: 1.1, ease: [0.6, 0, 0.3, 1] }}
            >
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
              {/* flap back side */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  background:
                    "linear-gradient(180deg, #4a0a12 0%, #6B0F1A 60%, #8a1424 100%)",
                  transform: "rotateX(180deg)",
                  backfaceVisibility: "hidden",
                }}
              />

              {/* WAX SEAL - sits on flap front */}
              <div
                className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2"
                style={{ backfaceVisibility: "hidden" }}
              >
                <motion.div
                  className="relative grid place-items-center rounded-full"
                  style={{
                    width: "clamp(56px, 14vw, 84px)",
                    height: "clamp(56px, 14vw, 84px)",
                    background:
                      "radial-gradient(circle at 35% 30%, #e7c66a 0%, #C9A84C 45%, #8a6f24 100%)",
                    boxShadow:
                      "0 6px 14px rgba(0,0,0,0.55), inset 0 2px 6px rgba(255,255,255,0.35), inset 0 -4px 8px rgba(0,0,0,0.35)",
                    border: "2px solid #6B0F1A",
                  }}
                  animate={
                    phase === "envelope"
                      ? { scale: [1, 1.05, 1] }
                      : { scale: 0.9, opacity: 0.95 }
                  }
                  transition={{
                    duration: 2.4,
                    repeat: phase === "envelope" ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                >
                  <OmSymbol className="h-3/4 w-3/4" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* CARD - emerges from envelope */}
          <AnimatePresence>
            {cardOut && (
              <motion.div
                key="card"
                className="absolute left-1/2 top-1/2 -translate-x-1/2"
                style={{
                  width: "min(88vw, 420px)",
                  zIndex: 20,
                  transformStyle: "preserve-3d",
                  perspective: "1400px",
                }}
                initial={{ y: 60, opacity: 0, scale: 0.85 }}
                animate={{
                  y: cardOpen ? "-50%" : "-30%",
                  opacity: 1,
                  scale: cardOpen ? 1 : 0.9,
                }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <CardContent open={cardOpen} />
              </motion.div>
            )}
          </AnimatePresence>
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
              onClick={() => setRevealed(true)}
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
              <span className="absolute inset-0 w-shimmer opacity-0 transition group-hover:opacity-100 w-shimmer" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CURTAIN REVEAL */}
      <AnimatePresence>
        {revealed && (
          <>
            <motion.div
              className="fixed inset-y-0 left-0 z-[60] w-1/2"
              style={{
                background:
                  "linear-gradient(90deg, #4a0a12 0%, #6B0F1A 80%, #8a1424 100%)",
                boxShadow: "inset -20px 0 40px rgba(0,0,0,0.5)",
              }}
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1], delay: 0.2 }}
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-[60] w-1/2"
              style={{
                background:
                  "linear-gradient(270deg, #4a0a12 0%, #6B0F1A 80%, #8a1424 100%)",
                boxShadow: "inset 20px 0 40px rgba(0,0,0,0.5)",
              }}
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1], delay: 0.2 }}
            />
            <motion.div
              className="fixed inset-0 z-[70] grid place-items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              style={{ background: "var(--w-cream)" }}
            >
              <div className="px-6 text-center" style={{ color: "var(--w-ink)" }}>
                <p
                  className="text-sm uppercase tracking-[0.4em]"
                  style={{ color: "var(--w-burgundy)", fontFamily: "var(--font-serif-elegant)" }}
                >
                  Welcome
                </p>
                <h2
                  className="mt-4 text-3xl sm:text-5xl"
                  style={{ fontFamily: "var(--font-script)", color: "var(--w-burgundy)" }}
                >
                  {weddingConfig.brideName} &amp; {weddingConfig.groomName}
                </h2>
                <p
                  className="mt-4 text-base sm:text-lg"
                  style={{ fontFamily: "var(--font-serif-elegant)" }}
                >
                  The main invitation continues here…
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function CardContent({ open }: { open: boolean }) {
  return (
    <div
      className="relative mx-auto"
      style={{
        aspectRatio: "0.72 / 1",
        width: "100%",
        perspective: "1400px",
      }}
    >
      {/* center spine */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background:
            "linear-gradient(180deg, #fff8e8 0%, #FDF6EC 50%, #f3e6c8 100%)",
          boxShadow:
            "0 30px 60px -15px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.4)",
        }}
      />
      {/* LEFT PANEL */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 origin-right rounded-l-lg"
        style={{
          background:
            "linear-gradient(135deg, #fff8e8 0%, #FDF6EC 60%, #f3e6c8 100%)",
          borderRight: "1px solid rgba(201,168,76,0.3)",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
        initial={{ rotateY: 180 }}
        animate={{ rotateY: open ? 0 : 180 }}
        transition={{ duration: 1.0, ease: [0.6, 0, 0.3, 1], delay: open ? 0.1 : 0 }}
      />
      {/* RIGHT PANEL */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 origin-left rounded-r-lg"
        style={{
          background:
            "linear-gradient(225deg, #fff8e8 0%, #FDF6EC 60%, #f3e6c8 100%)",
          borderLeft: "1px solid rgba(201,168,76,0.3)",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
        initial={{ rotateY: -180 }}
        animate={{ rotateY: open ? 0 : -180 }}
        transition={{ duration: 1.0, ease: [0.6, 0, 0.3, 1], delay: open ? 0.55 : 0 }}
      />

      {/* CARD CONTENT (visible when both panels open) */}
      <motion.div
        className="absolute inset-0 grid grid-rows-[1fr]"
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ delay: open ? 1.4 : 0, duration: 0.6 }}
      >
        <MandalaBorder className="absolute inset-0 h-full w-full" />

        {/* corner diyas */}
        <Diya className="absolute left-3 top-3 h-8 w-8 sm:left-4 sm:top-4 sm:h-10 sm:w-10" />
        <Diya className="absolute right-3 top-3 h-8 w-8 sm:right-4 sm:top-4 sm:h-10 sm:w-10" />
        <Diya className="absolute bottom-3 left-3 h-8 w-8 sm:bottom-4 sm:left-4 sm:h-10 sm:w-10" />
        <Diya className="absolute bottom-3 right-3 h-8 w-8 sm:bottom-4 sm:right-4 sm:h-10 sm:w-10" />

        <div className="relative flex flex-col items-center justify-center px-6 text-center sm:px-10">
          <OmSymbol className="h-10 w-10 sm:h-12 sm:w-12" />
          <div
            className="mt-3 h-px w-16"
            style={{
              background:
                "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            }}
          />
          <p
            className="mt-4 italic"
            style={{
              fontFamily: "var(--font-serif-elegant)",
              color: "var(--w-ink)",
              fontSize: "clamp(0.85rem, 2.4vw, 1.05rem)",
              letterSpacing: "0.08em",
            }}
          >
            You are cordially invited
          </p>
          <p
            className="mt-1 text-xs uppercase tracking-[0.35em]"
            style={{
              color: "var(--w-burgundy)",
              fontFamily: "var(--font-serif-elegant)",
              fontSize: "clamp(0.62rem, 1.6vw, 0.75rem)",
            }}
          >
            to the wedding of
          </p>

          <h1
            className="mt-4 leading-none"
            style={{
              fontFamily: "var(--font-script)",
              color: "var(--w-burgundy)",
              fontSize: "clamp(2.4rem, 9vw, 3.6rem)",
              textShadow: "0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            {weddingConfig.brideName}
          </h1>
          <p
            className="my-1"
            style={{
              fontFamily: "var(--font-royal)",
              color: "var(--w-gold)",
              fontSize: "clamp(0.85rem, 2.5vw, 1.05rem)",
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
              fontSize: "clamp(2.4rem, 9vw, 3.6rem)",
              textShadow: "0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            {weddingConfig.groomName}
          </h1>

          <div
            className="mt-5 h-px w-20"
            style={{
              background:
                "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            }}
          />
          <p
            className="mt-3"
            style={{
              fontFamily: "var(--font-serif-elegant)",
              color: "var(--w-ink)",
              fontSize: "clamp(0.78rem, 2.1vw, 0.95rem)",
              letterSpacing: "0.12em",
            }}
          >
            {weddingConfig.weddingDate}
          </p>
          <p
            className="mt-1 px-4"
            style={{
              fontFamily: "var(--font-serif-elegant)",
              color: "var(--w-ink)",
              opacity: 0.75,
              fontSize: "clamp(0.7rem, 1.9vw, 0.85rem)",
            }}
          >
            {weddingConfig.venue}
          </p>
        </div>
      </motion.div>
    </div>
  );
}