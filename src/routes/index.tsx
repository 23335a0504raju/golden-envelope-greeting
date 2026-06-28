import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { InvitationScreen } from "@/components/wedding/InvitationScreen";
import { HeroSection } from "@/components/wedding/HeroSection";
import { EventsTimeline } from "@/components/wedding/EventsTimeline";
import { FamilySection } from "@/components/wedding/FamilySection";
import { PhotoGallery } from "@/components/wedding/PhotoGallery";
import { VenueSection } from "@/components/wedding/VenueSection";
import { EditPanel } from "@/components/wedding/EditPanel";
import {
  BlessingsClosing,
  ScrollProgressBar,
  BackToTop,
} from "@/components/wedding/BlessingsClosing";
import { WeddingConfigProvider, defaultWeddingConfig as weddingConfig } from "@/lib/wedding-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${weddingConfig.brideName} & ${weddingConfig.groomName} — Wedding Invitation` },
      { name: "description", content: `Join us in celebrating the wedding of ${weddingConfig.brideName} and ${weddingConfig.groomName} on ${weddingConfig.weddingDate}.` },
      { property: "og:title", content: `${weddingConfig.brideName} & ${weddingConfig.groomName} — Wedding Invitation` },
      { property: "og:description", content: `${weddingConfig.weddingDate} • ${weddingConfig.venue}` },
    ],
  }),
  component: Index,
});

function Index() {
  const [revealed, setRevealed] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <WeddingConfigProvider>
      <div className="relative overflow-x-hidden">
        <ScrollProgressBar />
        <HeroSection />
        <EventsTimeline />
        <FamilySection />
        <PhotoGallery />
        <VenueSection />
        <BlessingsClosing />
        <AnimatePresence>
          {!revealed && !loading && (
            <motion.div
              key="invitation-overlay"
              className="fixed inset-0 z-[50]"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <InvitationScreen onRevealed={() => setRevealed(true)} />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {loading && (
            <motion.div
              key="loading-overlay"
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                style={{
                  color: "#C9A84C",
                  fontSize: "4rem",
                  fontFamily: "'Noto Sans Devanagari', serif",
                }}
              >
                ॐ
              </motion.div>
              <p
                className="mt-3 italic"
                style={{ color: "#C9A84C", fontFamily: "var(--font-serif-elegant)", fontSize: "0.9rem" }}
              >
                Loading your invitation...
              </p>
              <div className="mt-6 h-[3px] w-56 overflow-hidden rounded-full bg-[#C9A84C]/20">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "linear" }}
                  style={{ height: "100%", background: "linear-gradient(90deg, #C9A84C, #F5E6A3)" }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <BackToTop />
        <EditPanel />
      </div>
    </WeddingConfigProvider>
  );
}
