import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { OmLogo } from "@/components/wedding/OmLogo";
import { InvitationScreen } from "@/components/wedding/InvitationScreen";
import { HeroSection } from "@/components/wedding/HeroSection";
import { EventsTimeline } from "@/components/wedding/EventsTimeline";
import { FamilySection } from "@/components/wedding/FamilySection";
import { PhotoGallery } from "@/components/wedding/PhotoGallery";
import { VenueSection } from "@/components/wedding/VenueSection";
import {
  BlessingsClosing,
  ScrollProgressBar,
  BackToTop,
} from "@/components/wedding/BlessingsClosing";
import {
  WeddingConfigProvider,
  defaultWeddingConfig,
  fetchWeddingConfig,
  type WeddingConfig,
} from "@/lib/wedding-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Wedding Invitation` },
      { name: "description", content: "Join us in celebrating our wedding." },
    ],
  }),
  component: Index,
});

// Reveal sequence: idle (envelope showing) → closing (curtains sweep shut over
// the invitation) → opening (invitation unmounts, curtains sweep open onto the
// hero) → done (curtains removed).
type Reveal = "idle" | "closing" | "opening" | "done";

function Index() {
  const [reveal, setReveal] = useState<Reveal>("idle");
  // timerDone — the minimum 1.5 s splash screen
  const [timerDone, setTimerDone] = useState(false);
  // initialConfig — fetched from Supabase (null while still loading)
  const [initialConfig, setInitialConfig] = useState<WeddingConfig | null>(null);

  useEffect(() => {
    // 1. Minimum loading timer
    const t = setTimeout(() => setTimerDone(true), 1500);

    // 2. Fetch live config from Supabase
    fetchWeddingConfig()
      .then((cfg) => setInitialConfig(cfg))
      .catch(() => setInitialConfig(defaultWeddingConfig));

    return () => clearTimeout(t);
  }, []);

  // Only show the invitation after BOTH the timer AND the Supabase fetch finish.
  const isReady = timerDone && initialConfig !== null;

  // Begin the curtain reveal: close curtains over the invitation, unmount it,
  // then open the curtains onto the hero.
  const startReveal = () => {
    if (reveal !== "idle") return;
    setReveal("closing");
    setTimeout(() => setReveal("opening"), 1150); // curtains shut (1.0s) + brief hold → swap
    setTimeout(() => setReveal("done"), 2900); // curtains fully open (1.5s) → remove
  };

  const showInvitation = reveal === "idle" || reveal === "closing";
  const showCurtains = reveal === "closing" || reveal === "opening";

  // Lock page scroll whenever an overlay (loading or envelope) is covering the screen
  useEffect(() => {
    const shouldLock = !isReady || reveal !== "done";
    document.body.classList.toggle("scroll-lock", shouldLock);
    return () => document.body.classList.remove("scroll-lock");
  }, [isReady, reveal]);

  // ── Loading overlay (gold shimmer) ──────────────────────────
  if (!isReady) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{
            color: "#C9A84C",
            fontSize: "4rem",
          }}
        >
          <OmLogo />
        </motion.div>
        <p
          className="mt-3 italic"
          style={{
            color: "#C9A84C",
            fontFamily: "var(--font-serif-elegant)",
            fontSize: "0.9rem",
          }}
        >
          Loading your invitation…
        </p>
        <div className="mt-6 h-[3px] w-56 overflow-hidden rounded-full bg-[#C9A84C]/20">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "linear" }}
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #C9A84C, #F5E6A3)",
            }}
          />
        </div>
      </div>
    );
  }

  // ── Invitation (with live Supabase data) ────────────────────
  return (
    <WeddingConfigProvider initialConfig={initialConfig}>
      <div className="relative overflow-x-hidden">
        <ScrollProgressBar />
        <HeroSection />
        <EventsTimeline />
        <FamilySection />
        <PhotoGallery />
        <VenueSection />
        <BlessingsClosing />

        {/* Invitation envelope overlay — stays mounted until the curtains
            have fully closed over it, then unmounts so the curtains open
            onto the hero section underneath. */}
        {showInvitation && (
          <div className="fixed inset-0 z-[50]">
            <InvitationScreen onReveal={startReveal} />
          </div>
        )}

        {/* Theater curtains — sweep shut over the invitation, then open onto the hero */}
        {showCurtains && (
          <>
            <motion.div
              className="fixed inset-y-0 left-0 z-[60] w-1/2"
              style={{
                background:
                  "linear-gradient(90deg, #2a060c 0%, #4a0a12 60%, #8a1424 100%)",
                boxShadow: "inset -24px 0 50px rgba(0,0,0,0.55)",
                borderRight: "2px solid rgba(201,168,76,0.6)",
              }}
              initial={{ x: "-100%" }}
              animate={{ x: reveal === "closing" ? "0%" : "-100%" }}
              transition={{
                duration: reveal === "closing" ? 1.0 : 1.5,
                ease: reveal === "closing" ? [0.5, 0, 0.75, 0] : [0.16, 1, 0.3, 1],
              }}
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-[60] w-1/2"
              style={{
                background:
                  "linear-gradient(270deg, #2a060c 0%, #4a0a12 60%, #8a1424 100%)",
                boxShadow: "inset 24px 0 50px rgba(0,0,0,0.55)",
                borderLeft: "2px solid rgba(201,168,76,0.6)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: reveal === "closing" ? "0%" : "100%" }}
              transition={{
                duration: reveal === "closing" ? 1.0 : 1.5,
                ease: reveal === "closing" ? [0.5, 0, 0.75, 0] : [0.16, 1, 0.3, 1],
              }}
            />
          </>
        )}

        <BackToTop />
      </div>
    </WeddingConfigProvider>
  );
}
