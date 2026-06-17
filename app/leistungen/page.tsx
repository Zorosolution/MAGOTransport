import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ArrowRight, Check, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "MAGOTransport Leistungen: Auslieferung für Unternehmen, Partnerschaften, Abschleppdienst und Fahrzeugtransport in Wien und Wien-Umgebung.",
  keywords: ["Auslieferung Wien", "Auslieferungspartner", "Zustellung Wien", "Abschleppdienst Wien", "Fahrzeugtransport Wien", "Logistikpartner Wien"],
};

const leistungsGruppen = [
  {
    id: "auslieferung",
    label: "Auslieferung für Unternehmen",
    icon: "📦",
    color: "blue",
    headline: "Wir liefern die Ware Ihrer Firma an Ihre Kunden aus",
    description: "Wir sind Auslieferungspartner für andere Unternehmen. Wir holen die Ware im Lager Ihres Betriebs ab und stellen sie an Ihre Kunden zu. Ein eigenes Lager betreiben wir nicht, wir kümmern uns um die Zustellung in Wien und Wien-Umgebung.",
    features: [
      "Wien und Wien-Umgebung",
      "Abholung im Lager des Partnerunternehmens",
      "Zustellung direkt beim Endkunden",
      "Feste oder flexible Touren",
      "Rückmeldung nach jeder Zustellung",
      "Mehrere Lieferungen pro Tour",
      "Montag bis Freitag regulärer Betrieb",
      "Samstagszustellung auf Anfrage",
    ],
  },
  {
    id: "partnerschaft",
    label: "Partnerschaften",
    icon: "🤝",
    color: "green",
    headline: "Ihr fester Auslieferungspartner in Wien",
    description: "Sie suchen ein Unternehmen, das Ihre Ware zuverlässig an Ihre Kunden ausliefert? Wir arbeiten bereits mit Unternehmen zusammen und sind offen für neue Partnerschaften.",
    features: [
      "Dauerhafte Zusammenarbeit",
      "Planbare und feste Touren",
      "Skalierbar nach Auftragslage",
      "Fester Ansprechpartner",
      "Klare und faire Konditionen",
      "Offen für neue Partnerschaften",
      "Abstimmung von Abholzeiten und Gebiet",
    ],
  },
  {
    id: "express",
    label: "Express- und Sonderfahrten",
    icon: "⚡",
    color: "amber",
    headline: "Wenn es schnell gehen muss",
    description: "Dringende Zustellungen am selben Tag oder kurzfristige Sonderfahrten. In Wien und Wien-Umgebung, nach Absprache auch abends und am Wochenende.",
    features: [
      "Zustellung am selben Tag",
      "Sonderfahrten auf Abruf",
      "Abend- und Wochenendfahrten nach Absprache",
      "Direkte Fahrt ohne Umweg",
      "Persönliche Auftragsbetreuung",
      "Feste Ansprechperson",
      "Wien und Wien-Umgebung",
    ],
  },
  {
    id: "fahrzeuge",
    label: "Abschleppdienst und Fahrzeugtransport",
    icon: "🚗",
    color: "blue",
    headline: "Autos abschleppen und transportieren",
    description: "Mit unseren zwei großen Anhängern schleppen und transportieren wir Autos in Wien und Wien-Umgebung. In seltenen Fällen transportieren wir ein Auto auch ins Ausland, aber nur auf Anfrage.",
    features: [
      "Autos abschleppen und transportieren",
      "Zwei große Anhänger",
      "Sicher verzurrt",
      "Wien und Wien-Umgebung",
      "Transport ins Ausland nur auf Anfrage",
      "Abstimmung von Termin und Ort",
    ],
  },
];

const colorConf: Record<string, { badge: string }> = {
  blue:   { badge: "text-blue-700 bg-blue-50 border-blue-100" },
  purple: { badge: "text-indigo-700 bg-indigo-50 border-indigo-100" },
  amber:  { badge: "text-amber-700 bg-amber-50 border-amber-100" },
  green:  { badge: "text-emerald-700 bg-emerald-50 border-emerald-100" },
};

export default function LeistungenPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        badge="Unsere Leistungen"
        badgeColor="sky"
        orbColor="blue"
        title={<>Auslieferung und Abschleppdienst <span className="gradient-text">in Wien</span></>}
        description="Wir liefern die Ware unserer Partnerunternehmen an deren Kunden aus. Dazu Abschleppdienst und Fahrzeugtransport in Wien und Wien-Umgebung."
      />

      <section className="py-20" aria-label="Leistungsübersicht">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {leistungsGruppen.map((lg) => {
            const cfg = colorConf[lg.color];
            return (
              <div id={lg.id} key={lg.id}><AnimatedSection>
                <article className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-soft transition-all duration-300">
                  <div className="grid md:grid-cols-5 gap-8">
                    <div className="md:col-span-2">
                      <span className="text-4xl mb-4 block" aria-hidden="true">{lg.icon}</span>
                      <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-4 ${cfg.badge}`}>
                        {lg.label}
                      </span>
                      <h2 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">{lg.headline}</h2>
                      <p className="text-slate-600 text-sm leading-relaxed mb-5">{lg.description}</p>
                      <Link
                        href="/anfrage"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-all cursor-pointer shadow-primary"
                      >
                        Anfrage stellen <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-4">Im Leistungsumfang enthalten</h3>
                      <ul className="grid sm:grid-cols-2 gap-2.5" role="list">
                        {lg.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-slate-700 text-sm">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </AnimatedSection></div>
            );
          })}
        </div>
      </section>

      {/* Notfall-CTA */}
      <section className="py-20 border-t border-slate-200 bg-slate-50">
        <AnimatedSection className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Auto abschleppen lassen?</h2>
          <p className="text-slate-600 mb-8">Rufen Sie uns an. Wir schleppen Ihr Auto in Wien und Wien-Umgebung ab und besprechen Termin und Ort.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4369911147070" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold transition-all cursor-pointer shadow-cta">
              <Phone className="w-4 h-4" aria-hidden="true" />+43 699 11147070
            </a>
            <Link href="/anfrage" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 font-semibold hover:border-blue-200 hover:bg-blue-50 transition-all cursor-pointer shadow-soft">
              Angebot anfragen
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
