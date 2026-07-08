import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = { title: "Impressum", description: "Impressum von MAGO Transport & Abschleppdienst. Informationen über den Diensteanbieter.", alternates: { canonical: "/impressum" } };

export default function ImpressumPage() {
  return (
    <div className="min-h-screen">
      <PageHero badge="Rechtliches" badgeColor="sky" title="Impressum" description="Informationen über den Diensteanbieter." />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-soft space-y-8">
              {[
  { heading: "Informationen über den Diensteanbieter", content: (
    <address className="not-italic text-slate-600 text-sm space-y-1 leading-relaxed">
      <p className="text-slate-900 font-semibold">Goran Markovic (MAGO Transport & Abschleppdienst)</p>
      <p>Goran Markovic</p>
      <p>Alxingergasse 16, Tür 7a</p>
      <p>1100 Wien, Österreich</p>
    </address>
  )},
  { heading: "Kontakt", content: (
    <div className="text-slate-600 text-sm space-y-1">
      <p>E-Mail: <a href="mailto:info@magotransport.at" className="text-blue-700 hover:text-blue-800 transition-colors">info@magotransport.at</a></p>
    </div>
  )},
  { heading: "Unternehmensdaten", content: (
    <div className="text-slate-600 text-sm space-y-1 leading-relaxed">
      <p><strong className="text-slate-900">Unternehmensgegenstand:</strong> Transporte, Abschleppdienst, Kleintransporte, Gütertransporte, Gefahrentransporte, Reifenhandel</p>
      <p><strong className="text-slate-900">UID-Nummer:</strong> ATU61932948</p>
      <p><strong className="text-slate-900">GISA (Gewerbeinformationssystem Austria):</strong> 26458625, 24510448, 32593419, 35660477, 39719379</p>
    </div>
  )},
  { heading: "Aufsichtsbehörde", content: (
    <div className="text-slate-600 text-sm space-y-1 leading-relaxed">
      <p>Magistratisches Bezirksamt für den 10. Bezirk</p>
      <p>Laxenburger Straße 43–45</p>
      <p>1100 Wien</p>
      <p>Webseite: <a href="https://www.wien.gv.at/kontakt/magistratische-bezirksaemter" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors">https://www.wien.gv.at/kontakt/magistratische-bezirksaemter</a></p>
    </div>
  )},
  { heading: "Berufsbezeichnung", content: (
    <div className="text-slate-600 text-sm space-y-1 leading-relaxed">
      <p>Transporte, Abschleppdienst, Kleintransporte, Gütertransporte, Gefahrentransporte, Reifenhandel</p>
      <p><strong className="text-slate-900">Verleihungsstaat:</strong> Österreich</p>
    </div>
  )},
  { heading: "Datenschutz Verantwortlicher", content: (
    <div className="text-slate-600 text-sm space-y-1 leading-relaxed">
      <p>Goran Markovic</p>
      <p>Alxingergasse 16/7a</p>
      <p>1100 Wien</p>
      <p>Österreich</p>
      <p>E-Mail: <a href="mailto:info@magotransport.at" className="text-blue-700 hover:text-blue-800 transition-colors">info@magotransport.at</a></p>
      <p>Impressum: <a href="https://magotransport.at/impressum" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors">https://magotransport.at/impressum</a></p>
    </div>
  )},
  { heading: "Bildernachweis", content: (
    <div className="text-slate-600 text-sm space-y-2 leading-relaxed">
      <p>Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.</p>
      <p><strong className="text-slate-900">Die Bilderrechte liegen bei:</strong><br />Goran Markovic</p>
    </div>
  )},
  { heading: "Urheberrecht", content: (
    <p className="text-slate-600 text-sm leading-relaxed">Alle Texte sind urheberrechtlich geschützt.</p>
  )},
              ].map(({ heading, content }) => (
                <div key={heading}>
                  <h2 className="text-slate-900 font-semibold mb-3 pb-2 border-b border-slate-200">{heading}</h2>
                  {content}
                </div>
              ))}
              <p className="text-slate-500 text-xs pt-4 border-t border-slate-200">Stand: Juli 2026</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
