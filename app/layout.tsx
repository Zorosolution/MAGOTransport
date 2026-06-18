import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CookieBanner } from "@/components/shared/CookieBanner";
import { MobileCallBar } from "@/components/shared/MobileCallBar";
import { JsonLd } from "@/components/shared/JsonLd";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "MAGOTransport: Auslieferungspartner und Abschleppdienst in Wien",
    template: "%s | MAGOTransport",
  },
  description:
    "MAGOTransport aus Wien: Auslieferungspartner für Unternehmen. Wir holen Ware im Partnerlager ab und stellen sie an die Kunden zu. Dazu Abschleppdienst und Fahrzeugtransport in Wien und ganz Österreich.",
  keywords: [
    "Auslieferungspartner Wien", "Auslieferung Wien", "Zustellung Wien", "Lieferdienst Unternehmen",
    "letzte Meile Wien", "Abschleppdienst Wien", "Auto abschleppen Wien", "Fahrzeugtransport Wien",
    "Abschleppdienst Österreich", "Logistikpartner Wien", "Auslieferung Österreich",
    "MAGOTransport", "MAGO Transport",
  ],
  authors: [{ name: "MAGOTransport" }],
  creator: "MAGOTransport",
  metadataBase: new URL("https://magotransport.at"),
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://magotransport.at",
    title: "MAGOTransport: Auslieferungspartner und Abschleppdienst in Wien",
    description: "Wir holen Ware im Partnerlager ab und stellen sie an die Kunden zu. Dazu Abschleppdienst und Fahrzeugtransport in Wien und ganz Österreich.",
    siteName: "MAGOTransport",
    // Bild wird über app/opengraph-image.tsx automatisch eingebunden.
  },
  twitter: {
    card: "summary_large_image",
    title: "MAGOTransport: Auslieferung und Abschleppdienst in Wien",
    description: "Auslieferungspartner für Unternehmen in Wien und ganz Österreich. Dazu Abschleppdienst und Fahrzeugtransport.",
    // Bild wird über app/twitter-image.tsx automatisch eingebunden.
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://magotransport.at" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MAGOTransport",
          url: "https://magotransport.at",
          logo: "https://magotransport.at/logo.svg",
          description: "Auslieferungspartner aus Wien für Unternehmen. Wir holen Ware im Partnerlager ab und stellen sie an die Kunden zu. Dazu Abschleppdienst und Fahrzeugtransport in Wien und ganz Österreich.",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+4369911147070",
            contactType: "Kundendienst",
            availableLanguage: ["German"],
            areaServed: "AT",
          },
          address: { "@type": "PostalAddress", streetAddress: "Alxingergasse 16/7a", postalCode: "1100", addressLocality: "Wien", addressCountry: "AT" },
        }} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
        <CookieBanner />
      </body>
    </html>
  );
}
