import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { InvitationScreen } from "@/components/wedding/InvitationScreen";
import { HeroSection } from "@/components/wedding/HeroSection";
import { EditPanel } from "@/components/wedding/EditPanel";
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
  return (
    <WeddingConfigProvider>
      <div className="relative">
        <HeroSection />
        <AnimatePresence>
          {!revealed && (
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
        <EditPanel />
      </div>
    </WeddingConfigProvider>
  );
}
