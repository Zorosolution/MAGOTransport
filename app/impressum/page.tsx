import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = { title: "Impressum", description: "Impressum der MAGOTransport GmbH. Pflichtangaben gemäß österreichischem E-Commerce-Gesetz und Mediengesetz." };

export default function ImpressumPage() {
  return (
    <div className="min-h-screen">
      <PageHero badge="Rechtliches" badgeColor="sky" title="Impressum" description="Angaben gemäß § 5 ECG und § 25 MedienG." />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-soft space-y-8">
              {[
                { heading: "Medieninhaber und Herausgeber", content: (
                  <address className="not-italic text-slate-600 text-sm space-y-1 leading-relaxed">
                    <p className="text-slate-900 font-semibold">MAGOTransport GmbH</p>
                    <p>Alxingergasse 16/7a</p>
                    <p>1100 Wien, Österreich</p>
                  </address>
                )},
                { heading: "Kontakt", content: (
                  <div className="text-slate-600 text-sm space-y-1">
                    <p>Telefon: <a href="tel:+4369911147070" className="text-blue-700 hover:text-blue-800 transition-colors">+43 699 11147070</a></p>
                    <p>E-Mail: <a href="mailto:info@magotransport.at" className="text-blue-700 hover:text-blue-800 transition-colors">info@magotransport.at</a></p>
                    <p>Web: <a href="https://magotransport.at" className="text-blue-700 hover:text-blue-800 transition-colors">www.magotransport.at</a></p>
                  </div>
                )},
                { heading: "Geschäftsführung", content: <p className="text-slate-600 text-sm">Mario Gomez (Geschäftsführer)</p> },
                { heading: "Firmenbuch", content: (
                  <div className="text-slate-600 text-sm space-y-1">
                    <p>Firmenbuchnummer: FN 123456a</p>
                    <p>Firmenbuchgericht: Handelsgericht Wien</p>
                    <p>UID-Nummer: ATU12345678</p>
                    <p>Gerichtsstand: Wien</p>
                  </div>
                )},
                { heading: "Kammermitgliedschaft", content: (
                  <p className="text-slate-600 text-sm leading-relaxed">Mitglied der Wirtschaftskammer Wien (WKW), Fachgruppe Beförderungsgewerbe mit Kraftfahrzeugen. Gewerbeschein gemäß GewO 1994: Güterbeförderungsgewerbe, Abschleppgewerbe.</p>
                )},
                { heading: "Aufsichtsbehörde", content: (
                  <div className="text-slate-600 text-sm space-y-1">
                    <p>Bezirkshauptmannschaft Wien-Donaustadt</p>
                    <p>Bundesministerium für Klimaschutz, Umwelt, Energie, Mobilität, Innovation und Technologie (BMK)</p>
                  </div>
                )},
                { heading: "Haftungsausschluss", content: (
                  <p className="text-slate-600 text-sm leading-relaxed">Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. MAGOTransport übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Für verlinkte Seiten Dritter übernimmt MAGOTransport keine Verantwortung für deren Inhalte.</p>
                )},
                { heading: "Urheberrecht", content: (
                  <p className="text-slate-600 text-sm leading-relaxed">Die auf dieser Website veröffentlichten Inhalte unterliegen dem österreichischen Urheberrecht. Vervielfältigung, Bearbeitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der MAGOTransport GmbH.</p>
                )},
              ].map(({ heading, content }) => (
                <div key={heading}>
                  <h2 className="text-slate-900 font-semibold mb-3 pb-2 border-b border-slate-200">{heading}</h2>
                  {content}
                </div>
              ))}
              <p className="text-slate-500 text-xs pt-4 border-t border-slate-200">Stand: Juni 2025</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
