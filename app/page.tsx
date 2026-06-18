import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { Features } from "@/components/sections/Features";
import { Abschleppdienst } from "@/components/sections/Abschleppdienst";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Fuhrpark } from "@/components/sections/Fuhrpark";
import { Einsatzgebiet } from "@/components/sections/Einsatzgebiet";
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
  description: "Auslieferungspartner aus Wien. Wir holen Ware im Lager von Partnerunternehmen ab und stellen sie an deren Kunden zu. Dazu Abschleppdienst und Fahrzeugtransport in Wien und ganz Österreich.",
  url: "https://magotransport.at",
  telephone: "+4369911147070",
  email: "info@magotransport.at",
  priceRange: "€€",
  address: { "@type": "PostalAddress", streetAddress: "Alxingergasse 16/7a", addressLocality: "Wien", postalCode: "1100", addressCountry: "AT" },
  geo: { "@type": "GeoCoordinates", latitude: 48.1772, longitude: 16.3776 },
  hasMap: "https://www.google.com/maps/search/?api=1&query=Alxingergasse+16%2F7a+1100+Wien",
  areaServed: [
    { "@type": "City", name: "Wien" },
    { "@type": "Country", name: "Österreich" },
  ],
  serviceArea: { "@type": "Country", name: "Österreich" },
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
      <Einsatzgebiet />
      <Lager />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}
