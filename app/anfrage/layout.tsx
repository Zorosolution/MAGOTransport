import type { Metadata } from "next";

// Eigenes Segment-Layout, weil app/anfrage/page.tsx eine Client-Komponente ist
// und daher selbst keine Metadata exportieren kann.
export const metadata: Metadata = {
  title: "Anfrage stellen",
  description:
    "Anfrage an MAGOTransport: Auslieferung, Partnerschaft, Abschleppdienst oder Fahrzeugtransport in Wien und ganz Österreich. Kostenlos und unverbindlich ein Angebot anfordern.",
  alternates: { canonical: "/anfrage" },
};

export default function AnfrageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
