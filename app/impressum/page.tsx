import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = { title: "Impressum", description: "Impressum der MAGOTransport GmbH — Pflichtangaben gemäß österreichischem E-Commerce-Gesetz und Mediengesetz." };

export default function ImpressumPage() {
  return (
    <div className="min-h-screen">
      <PageHero badge="Rechtliches" badgeColor="sky" title="Impressum" description="Angaben gemäß § 5 ECG und § 25 MedienG." />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 border border-white/8 space-y-8">
              {[
                { heading: "Medieninhaber & Herausgeber", content: (
                  <address className="not-italic text-slate-400 text-sm space-y-1 leading-relaxed">
                    <p className="text-white font-semibold">MAGOTransport GmbH</p>
                    <p>Logistikstraße 1</p>
                    <p>1220 Wien, Österreich</p>
                  </address>
                )},
                { heading: "Kontakt", content: (
                  <div className="text-slate-400 text-sm space-y-1">
                    <p>Telefon: <a href="tel:+43800626424" className="text-blue-400 hover:text-blue-300 transition-colors">+43 800 626 424</a></p>
                    <p>E-Mail: <a href="mailto:office@magotransport.at" className="text-blue-400 hover:text-blue-300 transition-colors">office@magotransport.at</a></p>
                    <p>Web: <a href="https://magotransport.at" className="text-blue-400 hover:text-blue-300 transition-colors">www.magotransport.at</a></p>
                  </div>
                )},
                { heading: "Geschäftsführung", content: <p className="text-slate-400 text-sm">Mario Gomez (Geschäftsführer)</p> },
                { heading: "Firmenbuch", content: (
                  <div className="text-slate-400 text-sm space-y-1">
                    <p>Firmenbuchnummer: FN 123456a</p>
                    <p>Firmenbuchgericht: Handelsgericht Wien</p>
                    <p>UID-Nummer: ATU12345678</p>
                    <p>Gerichtsstand: Wien</p>
                  </div>
                )},
                { heading: "Kammermitgliedschaft", content: (
                  <p className="text-slate-400 text-sm leading-relaxed">Mitglied der Wirtschaftskammer Wien (WKW), Fachgruppe Beförderungsgewerbe mit Kraftfahrzeugen. Gewerbeschein gem. GewO 1994: Güterbeförderungsgewerbe, Abschleppgewerbe.</p>
                )},
                { heading: "Aufsichtsbehörde", content: (
                  <div className="text-slate-400 text-sm space-y-1">
                    <p>Bezirkshauptmannschaft Wien-Donaustadt</p>
                    <p>Bundesministerium für Klimaschutz, Umwelt, Energie, Mobilität, Innovation und Technologie (BMK)</p>
                  </div>
                )},
                { heading: "Haftungsausschluss", content: (
                  <p className="text-slate-400 text-sm leading-relaxed">Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. MAGOTransport übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Für verlinkte Seiten Dritter übernimmt MAGOTransport keine Verantwortung für deren Inhalte.</p>
                )},
                { heading: "Urheberrecht", content: (
                  <p className="text-slate-400 text-sm leading-relaxed">Die auf dieser Website veröffentlichten Inhalte unterliegen dem österreichischen Urheberrecht. Vervielfältigung, Bearbeitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der MAGOTransport GmbH.</p>
                )},
              ].map(({ heading, content }) => (
                <div key={heading}>
                  <h2 className="text-white font-semibold mb-3 pb-2 border-b border-white/8">{heading}</h2>
                  {content}
                </div>
              ))}
              <p className="text-slate-600 text-xs pt-4 border-t border-white/8">Stand: Juni 2025</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
