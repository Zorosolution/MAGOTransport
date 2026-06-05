import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CookieBanner } from "@/components/shared/CookieBanner";
import { JsonLd } from "@/components/shared/JsonLd";

const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MAGOTransport – Ihr Transportunternehmen für Österreich & Europa",
    template: "%s | MAGOTransport",
  },
  description:
    "MAGOTransport – Professionelle Transport- und Logistiklösungen für nationale und internationale Gütertransporte. Abschleppdienst, Pannenhilfe und Fahrzeugbergung. 24/7 Einsatzbereit.",
  keywords: [
    "Transportunternehmen", "Spedition", "Logistikunternehmen", "Gütertransport",
    "LKW Transport", "Lagerlogistik", "Abschleppdienst", "Fahrzeugbergung",
    "Pannenhilfe", "Transport Österreich", "Transport Deutschland",
    "internationale Transporte", "Expresslieferung", "Spedition Österreich",
    "MAGOTransport", "MAGO Transport",
  ],
  authors: [{ name: "MAGOTransport" }],
  creator: "MAGOTransport",
  metadataBase: new URL("https://magotransport.at"),
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://magotransport.at",
    title: "MAGOTransport – Ihr verlässlicher Transportpartner",
    description: "Nationale und internationale Transporte. Logistiklösungen. 24/7 Abschleppdienst und Pannenhilfe.",
    siteName: "MAGOTransport",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MAGOTransport – Transport & Logistik" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAGOTransport – Transport & Logistik",
    description: "Nationale und internationale Transporte. 24/7 Abschleppdienst.",
    images: ["/og-image.png"],
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
  themeColor: "#000000",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${geistMono.variable} h-full dark`}>
      <body className="min-h-full flex flex-col bg-black text-white antialiased">
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MAGOTransport",
          url: "https://magotransport.at",
          logo: "https://magotransport.at/logo.png",
          description: "Professionelles Transportunternehmen für nationale und internationale Gütertransporte, Logistiklösungen und Abschleppdienst.",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+43-800-MAGO-24",
            contactType: "Kundendienst",
            availableLanguage: ["German", "English"],
            hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
          },
          address: { "@type": "PostalAddress", addressCountry: "AT", addressLocality: "Wien" },
          sameAs: ["https://linkedin.com/company/magotransport"],
        }} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
