import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { JsonLd } from "@/components/shared/JsonLd";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Häufige Fragen (FAQ)",
  description: "Häufig gestellte Fragen zu MAGOTransport: Auslieferung für Unternehmen, Partnerschaften, Abschleppdienst und Fahrzeugtransport in Wien und Wien-Umgebung.",
};

const faqs = [
  {
    kategorie: "Auslieferung und Partnerschaft",
    items: [
      { f: "Was macht MAGOTransport genau?", a: "Wir sind Auslieferungspartner für andere Unternehmen. Wir fahren zum Lager des Partnerbetriebs, holen die Ware ab und liefern sie an dessen Kunden aus. Tätig sind wir in Wien und Wien-Umgebung." },
      { f: "Betreiben Sie ein eigenes Lager?", a: "Nein. Ein eigenes Lager haben wir nicht. Wir holen die Ware im Lager unserer Partnerunternehmen ab und stellen sie an deren Kunden zu." },
      { f: "Wo liefern Sie aus?", a: "Wir liefern in Wien und Wien-Umgebung aus. Ein größeres Gebiet oder Auslieferung außerhalb davon bieten wir nicht an." },
      { f: "Wie wird man Partnerunternehmen?", a: "Schreiben Sie uns über das Kontaktformular oder rufen Sie an. Wir besprechen Lieferumfang, Gebiet und Abholzeiten. Wir arbeiten bereits mit Unternehmen zusammen und sind offen für neue Partnerschaften." },
    ],
  },
  {
    kategorie: "Preise und Angebote",
    items: [
      { f: "Wie erhalte ich ein Angebot?", a: "Ein Angebot erhalten Sie kostenlos und unverbindlich über unser Anfrageformular, per E-Mail an info@magotransport.at oder telefonisch unter +43 699 11147070. Wir melden uns mit einem Angebot." },
      { f: "Gibt es Festpreise oder wird nach Aufwand abgerechnet?", a: "Das hängt vom Auftrag ab. Bei regelmäßiger Auslieferung vereinbaren wir feste Konditionen, beim Abschleppdienst nennen wir vorab einen Festpreis nach Strecke und Ziel. Den Preis nennen wir immer vorher." },
      { f: "Können auch Privatpersonen anfragen?", a: "Die Auslieferung machen wir für Unternehmen. Beim Abschleppdienst und Fahrzeugtransport können sich auch Privatpersonen an uns wenden." },
    ],
  },
  {
    kategorie: "Abschleppdienst und Fahrzeugtransport",
    items: [
      { f: "Welche Fahrzeuge können Sie abschleppen?", a: "Wir schleppen und transportieren Autos. Dafür haben wir zwei große Anhänger und einen Abschlepp-Lkw. Nennen Sie uns bei der Anfrage den Fahrzeugtyp." },
      { f: "Sind Sie auch außerhalb von Wien tätig?", a: "Wir sind in Wien und Wien-Umgebung unterwegs. In seltenen Fällen transportieren wir ein Auto auch ins Ausland, aber nur auf Anfrage." },
      { f: "Was kostet ein Abschleppvorgang?", a: "Die Kosten richten sich nach Strecke und Ziel. Wir nennen Ihnen vor dem Einsatz einen Festpreis. Rufen Sie uns an: +43 699 11147070." },
      { f: "Wie läuft der Abschleppdienst ab?", a: "Sie rufen an und nennen uns Standort und Ziel. Wir kommen mit dem Anhänger, verladen das Auto sicher verzurrt und bringen es an den vereinbarten Ort." },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap(k => k.items.map(item => ({
    "@type": "Question",
    name: item.f,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  }))),
};

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={faqSchema} />
      <PageHero
        badge="FAQ"
        badgeColor="sky"
        orbColor="blue"
        title={<>Häufig gestellte <span className="gradient-text">Fragen</span></>}
        description="Hier finden Sie Antworten auf die häufigsten Fragen rund um Transport, Logistik, Abschleppdienst und unsere Leistungen."
      />

      <section className="py-20" aria-label="Häufige Fragen">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12">
            {faqs.map((kat, ci) => (
              <AnimatedSection key={kat.kategorie} delay={ci * 0.1}>
                <h2 className="text-xs font-semibold text-blue-700 uppercase tracking-widest mb-6 pb-3 border-b border-slate-200">{kat.kategorie}</h2>
                <div className="space-y-3">
                  {kat.items.map((item) => (
                    <details key={item.f} className="group bg-white rounded-2xl border border-slate-200 shadow-soft hover:border-blue-200 transition-all duration-200">
                      <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none text-slate-900 font-medium text-sm select-none">
                        <span>{item.f}</span>
                        <span className="flex-shrink-0 w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 group-open:text-blue-700 group-open:rotate-45 transition-all duration-200 border border-slate-200 text-base leading-none">+</span>
                      </summary>
                      <div className="px-5 pb-5"><p className="text-slate-600 text-sm leading-relaxed">{item.a}</p></div>
                    </details>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-14 bg-white rounded-2xl p-8 border border-slate-200 shadow-soft text-center">
            <h2 className="text-slate-900 font-semibold mb-2">Ihre Frage nicht dabei?</h2>
            <p className="text-slate-600 text-sm mb-5">Kontaktieren Sie uns direkt. Wir antworten in der Regel innerhalb weniger Stunden.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/kontakt" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-all cursor-pointer shadow-primary">
                Kontakt aufnehmen <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a href="tel:+4369911147070" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-amber-200 text-amber-700 font-semibold text-sm transition-all hover:bg-amber-50 cursor-pointer shadow-soft">
                +43 699 11147070
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
