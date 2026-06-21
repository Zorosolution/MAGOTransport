import type { Metadata } from "next";

// Eigenes Segment-Layout, weil app/kontakt/page.tsx eine Client-Komponente ist
// und daher selbst keine Metadata exportieren kann.
export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zu MAGOTransport in Wien: Telefon +43 699 11147070, info@magotransport.at, Alxingergasse 16/7a, 1100 Wien. Auslieferung, Abschleppdienst und Fahrzeugtransport in Wien und ganz Österreich.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return children;
}
