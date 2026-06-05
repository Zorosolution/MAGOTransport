import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { Features } from "@/components/sections/Features";
import { Abschleppdienst } from "@/components/sections/Abschleppdienst";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Fuhrpark } from "@/components/sections/Fuhrpark";
import { Lager } from "@/components/sections/Lager";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/components/shared/JsonLd";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://magotransport.at",
  name: "MAGOTransport GmbH",
  description: "Professionelles Transportunternehmen für nationale und internationale Gütertransporte, Logistiklösungen, Abschleppdienst und Pannenhilfe in Österreich und Europa.",
  url: "https://magotransport.at",
  telephone: "+43800626424",
  email: "office@magotransport.at",
  priceRange: "€€",
  address: { "@type": "PostalAddress", streetAddress: "Logistikstraße 1", addressLocality: "Wien", postalCode: "1220", addressCountry: "AT" },
  geo: { "@type": "GeoCoordinates", latitude: 48.2082, longitude: 16.3738 },
  openingHours: "Mo-So 00:00-24:00",
  hasMap: "https://maps.google.com/?q=Wien+Österreich",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1240", bestRating: "5" },
  serviceArea: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 48.2082, longitude: 16.3738 }, geoRadius: "2000000" },
};

export default function Startseite() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Hero />
      <LogoCloud />
      <Features />
      <Abschleppdienst />
      <HowItWorks />
      <Fuhrpark />
      <Lager />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}
