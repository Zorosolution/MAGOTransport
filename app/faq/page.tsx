import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { JsonLd } from "@/components/shared/JsonLd";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Häufige Fragen (FAQ)",
  description: "Häufig gestellte Fragen zu MAGOTransport — Transporte, Preise, Abschleppdienst, Lagerlogistik und vieles mehr.",
};

const faqs = [
  {
    kategorie: "Transport & Logistik",
    items: [
      { f: "In welche Länder liefert MAGOTransport?", a: "MAGOTransport transportiert national innerhalb Österreichs und Deutschlands sowie international in alle EU-Länder und darüber hinaus. Mit unserem Partnernetzwerk in über 30 Ländern erreichen wir nahezu jeden Zielort weltweit." },
      { f: "Wie lange dauert ein nationaler Transport?", a: "Nationale Transporte innerhalb Österreichs werden in der Regel innerhalb von 24–48 Stunden abgewickelt. Expresslieferungen sind auch taggleich oder über Nacht möglich — bitte fragen Sie bei uns nach." },
      { f: "Kann ich den Sendungsstatus verfolgen?", a: "Ja, alle Sendungen werden GPS-überwacht. Nach Auftragsbestätigung erhalten Sie einen Tracking-Link, über den Sie Ihre Sendung in Echtzeit verfolgen können." },
      { f: "Transportieren Sie auch gefährliche Güter (ADR)?", a: "Ja, unsere Fahrer sind ADR-zertifiziert und wir verfügen über geeignete Fahrzeuge für den Transport von Gefahrgütern der Klassen 1–9. Bitte informieren Sie uns bei der Anfrage vollständig über Art und Menge der Güter." },
    ],
  },
  {
    kategorie: "Preise & Angebote",
    items: [
      { f: "Wie erhalte ich ein Angebot?", a: "Ein Angebot erhalten Sie kostenlos und unverbindlich über unser Online-Anfrageformular, per E-Mail an office@magotransport.at oder telefonisch unter +43 800 626 424. Wir melden uns innerhalb von 24 Stunden mit einem detaillierten Angebot." },
      { f: "Gibt es Festpreise oder wird nach Aufwand abgerechnet?", a: "Für Standardtransporte bieten wir Festpreise an. Bei Spezial- oder Sondertransporten werden die Kosten individuell nach Aufwand, Distanz und Güterart kalkuliert. Wir kommunizieren den Preis immer vorab transparent." },
      { f: "Können Privatpersonen bei MAGOTransport bestellen?", a: "Ja, wir transportieren sowohl für Unternehmen als auch für Privatpersonen. Für private Fahrzeugbergungen und Abschleppdienste stehen wir 24/7 zur Verfügung." },
    ],
  },
  {
    kategorie: "Abschleppdienst & Pannenhilfe",
    items: [
      { f: "Wie schnell ist MAGOTransport bei einer Panne vor Ort?", a: "Unsere durchschnittliche Reaktionszeit beträgt 28 Minuten. Je nach Einsatzgebiet und Verfügbarkeit können wir in vielen Fällen noch schneller sein. Rufen Sie uns an: +43 800 626 424." },
      { f: "Rechnet MAGOTransport mit meiner Versicherung ab?", a: "Ja, wir arbeiten mit allen gängigen Versicherungsunternehmen zusammen und können die Abrechnung direkt mit Ihrer Versicherung abwickeln. Halten Sie bei Ihrem Anruf Ihre Versicherungsdaten bereit." },
      { f: "Welche Fahrzeuge können abgeschleppt werden?", a: "Wir schleppen PKW, Motorräder, Kleintransporter bis 3,5t und LKW bis 12t ab. Für schwerere Fahrzeuge stehen unsere Plateau-LKW zur Verfügung. Bitte nennen Sie uns bei der Kontaktaufnahme Fahrzeugtyp und Gewicht." },
      { f: "Was kostet ein Abschleppvorgang?", a: "Die Kosten richten sich nach Fahrzeugtyp, Entfernung und Art der Bergung. Wir nennen Ihnen vor dem Einsatz immer einen transparenten Festpreis. Rufen Sie uns an und wir erstellen sofort eine Kostenschätzung." },
    ],
  },
  {
    kategorie: "Lagerlogistik",
    items: [
      { f: "Wie viel Lagerfläche bietet MAGOTransport?", a: "Unser Logistikzentrum in Wien verfügt über 8.500 m² moderne Lagerfläche mit einer Deckenhöhe von bis zu 12 Metern, inkl. Kühllager und Sicherheitsbereichen für wertvolle Güter." },
      { f: "Für welche Güter eignet sich die Lagerung?", a: "Wir lagern Waren aller Art: Palettengüter, Stückgut, temperaturempfindliche Produkte (Kühllagerung vorhanden), Pharmaprodukte und Sondergüter. Nicht gelagert werden: explosive, radioaktive und besonders gefährliche Materialien (auf Anfrage besprechen)." },
      { f: "Kann ich meine Güter kurzfristig einlagern?", a: "Ja, wir bieten flexible Laufzeiten ab einem Monat. Auch kurzfristige Zwischenlagerung im Rahmen von Transporten ist möglich. Sprechen Sie uns an — wir finden eine passende Lösung." },
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
                <h2 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-6 pb-3 border-b border-white/8">{kat.kategorie}</h2>
                <div className="space-y-3">
                  {kat.items.map((item) => (
                    <details key={item.f} className="group glass rounded-2xl border border-white/8 hover:border-white/15 transition-all duration-200">
                      <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none text-white font-medium text-sm select-none">
                        <span>{item.f}</span>
                        <span className="flex-shrink-0 w-5 h-5 glass rounded-full flex items-center justify-center text-slate-400 group-open:text-white group-open:rotate-45 transition-all duration-200 border border-white/10 text-base leading-none">+</span>
                      </summary>
                      <div className="px-5 pb-5"><p className="text-slate-400 text-sm leading-relaxed">{item.a}</p></div>
                    </details>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-14 glass rounded-2xl p-8 border border-white/8 text-center">
            <h2 className="text-white font-semibold mb-2">Ihre Frage nicht dabei?</h2>
            <p className="text-slate-400 text-sm mb-5">Kontaktieren Sie uns direkt — wir antworten in der Regel innerhalb weniger Stunden.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/kontakt" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all cursor-pointer">
                Kontakt aufnehmen <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a href="tel:+43800626424" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-amber-500/30 text-amber-400 font-medium text-sm transition-all hover:bg-amber-500/10 cursor-pointer">
                +43 800 626 424
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
