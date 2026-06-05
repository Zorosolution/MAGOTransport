import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = { title: "AGB – Allgemeine Geschäftsbedingungen", description: "Allgemeine Geschäftsbedingungen der MAGOTransport GmbH für Transport-, Logistik- und Abschleppdienstleistungen." };

const abschnitte = [
  { heading: "§ 1 Geltungsbereich", body: "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über Transport-, Logistik- und Abschleppdienstleistungen der MAGOTransport GmbH (nachfolgend \"Auftragnehmer\") mit ihren Kunden (nachfolgend \"Auftraggeber\"). Abweichende Bedingungen des Auftraggebers haben nur Geltung, wenn sie vom Auftragnehmer ausdrücklich schriftlich anerkannt werden." },
  { heading: "§ 2 Vertragsschluss", body: "Angebote des Auftragnehmers sind freibleibend. Ein Vertrag kommt durch schriftliche Auftragsbestätigung oder Beginn der Ausführung des Auftrages zustande. Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung." },
  { heading: "§ 3 Pflichten des Auftragnehmers", body: "Der Auftragnehmer verpflichtet sich:\n• Güter sorgfältig und termingerecht zu befördern\n• Die gesetzlichen Vorschriften (KFG, StVO, CMR) einzuhalten\n• Für ausreichende Haftpflichtversicherung zu sorgen\n• Den Auftraggeber über Verzögerungen zu informieren\n• Frachtpapiere und Lieferbelege bereitzustellen" },
  { heading: "§ 4 Pflichten des Auftraggebers", body: "Der Auftraggeber ist verpflichtet:\n• Güter ordnungsgemäß verpackt und gekennzeichnet bereitzustellen\n• Vollständige und korrekte Transportdokumente zu übermitteln\n• Über gefährliche Güter (ADR) vollständig zu informieren\n• Die vereinbarte Vergütung fristgerecht zu leisten\n• Für Be- und Entladung geeignete Einrichtungen bereitzustellen" },
  { heading: "§ 5 Vergütung und Zahlung", body: "Die Vergütung richtet sich nach dem vereinbarten Angebot. Ohne schriftliche Vereinbarung gelten die zum Zeitpunkt der Auftragserteilung gültigen Listenpreise. Rechnungen sind innerhalb von 14 Tagen ohne Abzug zahlbar. Bei Zahlungsverzug sind Verzugszinsen von 5 Prozentpunkten über dem Basiszinssatz fällig." },
  { heading: "§ 6 Haftung und Versicherung", body: "Die Haftung des Auftragnehmers richtet sich nach den gesetzlichen Vorschriften, insbesondere:\n• CMR-Übereinkommen für internationale Transporte\n• Österreichisches Transportrecht für nationale Transporte\n\nHaftungsbeschränkung: Der Auftragnehmer haftet für Güterschäden bis max. 8,33 Sonderziehungsrechte (SZR) pro Kilogramm Rohgewicht der beschädigten Güter, sofern kein Vorsatz oder grobe Fahrlässigkeit vorliegt. Eine erweiterte Haftung ist gegen Aufpreis vereinbar." },
  { heading: "§ 7 Fristen und Reklamationen", body: "Schäden am Gut müssen beim Empfang sofort, bei nicht erkennbaren Schäden innerhalb von 7 Tagen nach Empfang schriftlich gemeldet werden. Verspätungsschäden sind innerhalb von 21 Tagen zu melden. Die Annahme der Ware ohne Vorbehalt gilt als Anerkennung eines ordnungsgemäßen Transports." },
  { heading: "§ 8 Lagerung", body: "Für Lagertätigkeiten gelten zusätzlich die Allgemeinen Österreichischen Spediteurbedingungen (AÖSp) in ihrer jeweils aktuellen Fassung. Die Mindestlaufdauer beträgt einen Monat. Kündigung mit 14-tägiger Frist möglich." },
  { heading: "§ 9 Abschleppdienst", body: "Beim Abschleppdienst gilt ein Festpreisprinzip auf Basis des bestätigten Angebots. Wartezeiten über 30 Minuten, die der Auftragnehmer nicht zu vertreten hat, werden gesondert berechnet. Fahrzeuge werden grundsätzlich zum nächstgelegenen geeigneten Ziel (Werkstatt, Wunschziel) gebracht." },
  { heading: "§ 10 Anwendbares Recht und Gerichtsstand", body: "Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist Wien. Bei internationalen Transporten gilt ergänzend das CMR-Übereinkommen." },
];

export default function AGBPage() {
  return (
    <div className="min-h-screen">
      <PageHero badge="Rechtliches" badgeColor="sky" title="Allgemeine Geschäftsbedingungen" description="AGB der MAGOTransport GmbH für Transport-, Logistik- und Abschleppdienstleistungen." />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="glass rounded-2xl p-6 border border-white/8 mb-5">
              <p className="text-slate-400 text-sm"><strong className="text-white">Gültig ab:</strong> 1. Januar 2025</p>
            </div>
            <div className="space-y-4">
              {abschnitte.map(({ heading, body }) => (
                <div key={heading} className="glass rounded-2xl p-6 border border-white/8">
                  <h2 className="text-white font-semibold mb-3">{heading}</h2>
                  <div className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">{body}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
