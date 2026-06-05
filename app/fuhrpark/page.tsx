import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fuhrpark",
  description: "MAGOTransport Fuhrpark: 38+ moderne Fahrzeuge von Sattelzügen bis Abschleppwagen, alle GPS-überwacht und auf Euro-6-Standard. Für jeden Transport das richtige Fahrzeug.",
};

const flotte = [
  { typ: "Sattelzüge", anzahl: 12, nutzlast: "bis 24t", icon: "🚛", desc: "Moderne EURO 6 Sattelzüge für Komplettladungen, Teilladungen und Schwertransporte auf allen europäischen Routen.", specs: ["EURO 6 Motor", "GPS-Tracking live", "Temperaturüberwachung", "ADR-zertifiziert", "Airline-Verzurrsystem"], color: "blue" },
  { typ: "Kastenwagen", anzahl: 8, nutzlast: "bis 3,5t", icon: "🚐", desc: "Flexible Kastenwagen für Kurierdienste, Expresslieferungen und Stückguttransporte im Stadt- und Regionalverkehr.", specs: ["Cargo-Innenausstattung", "Schranksysteme", "Diebstahlschutz", "Klimaanlage", "Rampe vorhanden"], color: "purple" },
  { typ: "Abschleppfahrzeuge", anzahl: 6, nutzlast: "bis 12t", icon: "🏗️", desc: "Spezialisierte Abschleppfahrzeuge mit Plattformheber, Seilwinde und Kranaufbau für alle Fahrzeugtypen.", specs: ["24/7 Einsatzbereit", "ADAC-Partner", "Hydraulikheber", "Seilwinde 12t", "Pannenhilfe-Ausrüstung"], color: "amber" },
  { typ: "Kühltransporter", anzahl: 4, nutzlast: "−25°C bis +25°C", icon: "❄️", desc: "ATP-zertifizierte Kühltransporter für Lebensmittel, Pharmaprodukte und alle temperaturempfindlichen Güter.", specs: ["ATP-Zertifiziert", "Temperaturprotokoll", "HACCP-konform", "Mehrzonenkühlung", "Alarmsystem"], color: "green" },
  { typ: "Autotransporter", anzahl: 3, nutzlast: "bis 8 PKW", icon: "🚗", desc: "Spezielle Autotransporter für Händler, Flottenbetreiber und Privatpersonen. Offen und geschlossen verfügbar.", specs: ["Bis 8 PKW", "Vollkaskoversicherung", "Bestandsnahmefoto", "Verzurrsystem", "Hydraulikrampe"], color: "blue" },
  { typ: "Plateau-LKW", anzahl: 5, nutzlast: "bis 20t", icon: "⚙️", desc: "Plateaufahrzeuge für Schwertransporte, Maschinentransporte, Baumaterial und übergroße Güter.", specs: ["Plateau/Tieflader", "Hydraulikhebearm", "Genehmigungsservice", "Begleitfahrzeug", "Überbreiten-Transporte"], color: "purple" },
];

const colorConf: Record<string, { border: string; badge: string; count: string }> = {
  blue:   { border: "border-blue-500/25 hover:border-blue-500/50",   badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",   count: "text-blue-400" },
  purple: { border: "border-purple-500/25 hover:border-purple-500/50", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", count: "text-purple-400" },
  amber:  { border: "border-amber-500/25 hover:border-amber-500/50",  badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",  count: "text-amber-400" },
  green:  { border: "border-green-500/25 hover:border-green-500/50",  badge: "bg-green-500/10 text-green-400 border-green-500/20",  count: "text-green-400" },
};

export default function FuhrparkPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        badge="Unser Fuhrpark"
        badgeColor="sky"
        orbColor="blue"
        title={<>38+ moderne Fahrzeuge – <span className="gradient-text">für jeden Transport</span></>}
        description="Unsere ständig wachsende Fahrzeugflotte ist das Rückgrat von MAGOTransport. Alle Fahrzeuge GPS-überwacht, regelmäßig gewartet und auf höchstem Sicherheitsstandard."
      />

      {/* Statistiken */}
      <section className="py-12 border-b border-white/8" aria-label="Fuhrpark-Statistiken">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {[
                { value: "38+", label: "Fahrzeuge" },
                { value: "24t", label: "Max. Nutzlast" },
                { value: "100%", label: "GPS-überwacht" },
                { value: "EURO 6", label: "Abgasnorm" },
                { value: "24/7", label: "Verfügbar" },
                { value: "DACH+EU", label: "Einsatzgebiet" },
              ].map(({ value, label }) => (
                <div key={label} className="glass rounded-xl p-3 text-center border border-white/6">
                  <div className="text-lg font-bold gradient-text">{value}</div>
                  <div className="text-xs text-slate-600 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fahrzeugkatalog */}
      <section className="py-20" aria-labelledby="flotte-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="flotte-heading" className="sr-only">Unsere Fahrzeugflotte</h2>
          <div className="space-y-6">
            {flotte.map((f, i) => {
              const cfg = colorConf[f.color];
              return (
                <AnimatedSection key={f.typ} delay={i * 0.07}>
                  <article className={`glass rounded-2xl p-7 border ${cfg.border} transition-all duration-300`}>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <span className="text-4xl mb-3 block" aria-hidden="true">{f.icon}</span>
                        <h3 className="text-white font-bold text-xl mb-1">{f.typ}</h3>
                        <div className="flex items-center gap-3">
                          <span className={`text-2xl font-bold ${cfg.count}`}>{f.anzahl}×</span>
                          <span className="text-slate-500 text-sm">{f.nutzlast}</span>
                        </div>
                      </div>
                      <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                        <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-2">Ausstattung:</p>
                          <ul className="space-y-1">
                            {f.specs.map((s) => (
                              <li key={s} className={`text-xs px-2.5 py-1 rounded-full border inline-flex mr-1.5 mb-1.5 ${cfg.badge}`}>{s}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/8">
        <AnimatedSection className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Das richtige Fahrzeug für Ihren Auftrag</h2>
          <p className="text-slate-400 mb-8">Unsere Disponenten beraten Sie gerne, welches Fahrzeug für Ihren Transport am geeignetsten ist. Kostenlose Beratung, unverbindliches Angebot.</p>
          <Link href="/anfrage" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all cursor-pointer">
            Transport anfragen <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
