import { createFileRoute } from "@tanstack/react-router";
import { InvitationScreen } from "@/components/wedding/InvitationScreen";
import { weddingConfig } from "@/lib/wedding-config";

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
  return <InvitationScreen />;
}
