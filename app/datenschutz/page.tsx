import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = { title: "Datenschutzerklärung", description: "Datenschutzerklärung der MAGOTransport GmbH gemäß DSGVO und österreichischem Datenschutzgesetz." };

const abschnitte = [
  { heading: "1. Verantwortlicher", body: "MAGOTransport GmbH, Alxingergasse 16/7a, 1100 Wien, Österreich\nE-Mail: office@magotransport.at\nTel.: +43 699 11147070" },
  { heading: "2. Erhebung personenbezogener Daten", body: "Wir erheben personenbezogene Daten nur, wenn Sie uns diese aktiv mitteilen (z.B. durch unser Kontakt- oder Anfrageformular) oder wenn dies zur Vertragsdurchführung erforderlich ist. Dazu zählen: Name, E-Mail-Adresse, Telefonnummer, Firmenname sowie Angaben zu Transportaufträgen.\n\nBeim Besuch unserer Website werden automatisch technische Daten erhoben (IP-Adresse, Browsertyp, Besuchszeit), die wir ausschließlich zu technischen Zwecken und zur Sicherheit verarbeiten." },
  { heading: "3. Zweck und Rechtsgrundlage der Verarbeitung", body: "Wir verarbeiten Ihre Daten auf Basis von:\n• Art. 6 Abs. 1 lit. b DSGVO: Erfüllung eines Vertrags (Transportaufträge, Angebote)\n• Art. 6 Abs. 1 lit. f DSGVO: Berechtigte Interessen (Sicherheit, Optimierung)\n• Art. 6 Abs. 1 lit. a DSGVO: Einwilligung (Newsletter, Cookies)\n\nZwecke: Bearbeitung Ihrer Anfragen und Aufträge, Kommunikation, Rechnungsstellung, gesetzliche Aufbewahrungspflichten, Newsletter (nur mit Einwilligung)." },
  { heading: "4. Datenweitergabe", body: "Wir geben Ihre Daten nicht an Dritte weiter, außer:\n• An Auftragsverarbeiter (z.B. E-Mail-Provider, IT-Dienstleister) mit Datenverarbeitungsvertrag\n• Bei gesetzlicher Verpflichtung (Behörden, Gerichte)\n• An Transportpartner, sofern für die Auftragsabwicklung erforderlich\n\nEine Übermittlung in Drittländer außerhalb der EU erfolgt nur bei Vorliegen geeigneter Garantien (z.B. Standardvertragsklauseln)." },
  { heading: "5. Speicherdauer", body: "Wir speichern Ihre Daten so lange, wie es für den jeweiligen Zweck erforderlich ist:\n• Anfragen und Kontaktdaten: bis zu 3 Jahre nach letztem Kontakt\n• Vertragsdaten und Rechnungen: 7 Jahre (gesetzliche Aufbewahrungspflicht gemäß UGB)\n• Logistik- und Frachtdaten: 5 Jahre\n• Newsletterdaten: bis zur Abmeldung" },
  { heading: "6. Ihre Rechte (DSGVO)", body: "Sie haben das Recht auf:\n• Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)\n• Berichtigung unrichtiger Daten (Art. 16 DSGVO)\n• Löschung Ihrer Daten (Art. 17 DSGVO)\n• Einschränkung der Verarbeitung (Art. 18 DSGVO)\n• Datenübertragbarkeit (Art. 20 DSGVO)\n• Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)\n• Widerruf von Einwilligungen jederzeit\n\nAnfragen richten Sie bitte an: datenschutz@magotransport.at\n\nBeschwerden können Sie bei der österreichischen Datenschutzbehörde einreichen: www.dsb.gv.at" },
  { heading: "7. Datensicherheit", body: "Unsere Website und Systeme sind durch technische und organisatorische Maßnahmen (TOM) gesichert:\n• SSL/TLS-Verschlüsselung der Datenübertragung\n• Verschlüsselte Datenspeicherung\n• Zugriffskontrollen und regelmäßige Sicherheitsprüfungen\n• Regelmäßige Mitarbeiterschulungen\n\nWir weisen darauf hin, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann." },
  { heading: "8. Cookies", body: "Wir verwenden Cookies für den Betrieb dieser Website. Technisch notwendige Cookies werden ohne Einwilligung gesetzt. Für analytische und Marketing-Cookies benötigen wir Ihre Einwilligung, die Sie über unser Cookie-Banner erteilen können. Details entnehmen Sie unserer Cookie-Richtlinie." },
  { heading: "9. Änderungen", body: "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich rechtliche Grundlagen oder unsere Verarbeitungspraktiken ändern. Bitte prüfen Sie diese Seite regelmäßig." },
];

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen">
      <PageHero badge="Rechtliches" badgeColor="sky" title="Datenschutzerklärung" description="Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO." />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft mb-5">
              <p className="text-slate-600 text-sm"><strong className="text-slate-900">Gültig ab:</strong> 1. Juni 2025 · <strong className="text-slate-900">Stand:</strong> Juni 2025</p>
            </div>
            <div className="space-y-4">
              {abschnitte.map(({ heading, body }) => (
                <div key={heading} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
                  <h2 className="text-slate-900 font-semibold mb-3">{heading}</h2>
                  <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{body}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
