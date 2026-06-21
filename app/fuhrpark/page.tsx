import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import imgGrosseLkw from "../../public/mago_claude_ready_v2/06_iveco_blue_yellow_side.jpg";
import imgKleineLkw from "../../public/mago_claude_ready_v2/08_mercedes_boxvan_fleet_line.jpg";
import imgAbschlepp from "../../public/mago_claude_ready_v2/01_hero_abschleppwagen_gelb.jpg";
import imgAnhaenger from "../../public/mago_claude_ready_v2/04_pickup_vintage_car_transport.jpg";
import imgFleet from "../../public/mago_claude_ready_v2/12_fleet_overview_depot.jpg";

export const metadata: Metadata = {
  title: "Fuhrpark",
  description: "MAGOTransport Fuhrpark: 15 Lkw (4 große, 10 kleine, 1 Abschlepp-Lkw) und zwei große Anhänger für Auslieferung, Abschleppdienst und Fahrzeugtransport in Wien und ganz Österreich.",
  alternates: { canonical: "/fuhrpark" },
};

const flotte = [
  { typ: "Große Lkw", anzahl: 4, nutzlast: "für größere Mengen", img: imgGrosseLkw, desc: "Vier große Lkw für umfangreiche Lieferungen und größere Mengen in Wien und ganz Österreich.", specs: ["Regelmäßig gewartet", "Erfahrene Fahrer", "Wien und ganz Österreich"], color: "blue" },
  { typ: "Kleine Lkw", anzahl: 10, nutzlast: "für die Zustellung", img: imgKleineLkw, desc: "Zehn kleine Lkw für die wendige Zustellung in Wien und ganz Österreich. Ideal für Touren mit vielen Stopps.", specs: ["Wendig im Stadtverkehr", "Tägliche Touren", "Zustellung beim Endkunden"], color: "purple" },
  { typ: "Abschlepp-Lkw", anzahl: 1, nutzlast: "für Pannen und Unfälle", img: imgAbschlepp, desc: "Ein Abschlepp-Lkw für Abschleppdienst und Fahrzeugtransport in Wien und ganz Österreich.", specs: ["Autos abschleppen", "Telefonisch erreichbar", "Wien und ganz Österreich"], color: "amber" },
  { typ: "Große Anhänger", anzahl: 2, nutzlast: "für Autotransporte", img: imgAnhaenger, desc: "Zwei große Anhänger, mit denen wir Autos abschleppen und transportieren. In seltenen Fällen auch ins Ausland, nur auf Anfrage.", specs: ["Autos transportieren", "Sicher verzurrt", "Ausland auf Anfrage"], color: "green" },
];

const colorConf: Record<string, { border: string; badge: string; count: string }> = {
  blue:   { border: "border-slate-200 hover:border-blue-200",    badge: "bg-blue-50 text-blue-700 border-blue-100",       count: "text-blue-700" },
  purple: { border: "border-slate-200 hover:border-indigo-200",  badge: "bg-indigo-50 text-indigo-700 border-indigo-100", count: "text-indigo-700" },
  amber:  { border: "border-slate-200 hover:border-amber-200",   badge: "bg-amber-50 text-amber-700 border-amber-100",    count: "text-amber-700" },
  green:  { border: "border-slate-200 hover:border-emerald-200", badge: "bg-emerald-50 text-emerald-700 border-emerald-100", count: "text-emerald-700" },
};

export default function FuhrparkPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        badge="Unser Fuhrpark"
        badgeColor="sky"
        orbColor="blue"
        title={<>15 Lkw und zwei <span className="gradient-text">große Anhänger</span></>}
        description="Mit diesen Fahrzeugen liefern wir täglich aus und transportieren Autos. Alle Fahrzeuge werden regelmäßig gewartet."
      />

      {/* Statistiken */}
      <section className="py-12 border-b border-slate-200 bg-slate-50" aria-label="Fuhrpark in Zahlen">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {[
                { value: "15", label: "Lkw" },
                { value: "4", label: "Große Lkw" },
                { value: "10", label: "Kleine Lkw" },
                { value: "1", label: "Abschlepp-Lkw" },
                { value: "2", label: "Große Anhänger" },
                { value: "Wien", label: "Einsatzgebiet" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white rounded-xl p-3 text-center border border-slate-200 shadow-soft">
                  <div className="text-lg font-bold text-blue-700">{value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Flottenübersicht */}
      <section className="pt-14" aria-label="Flottenübersicht">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-3xl overflow-hidden border border-slate-200 shadow-soft-lg">
              <Image
                src={imgFleet}
                alt="Fuhrpark von MAGOTransport am Standort in Wien"
                fill
                sizes="(max-width: 1280px) 100vw, 1152px"
                placeholder="blur"
                className="object-cover"
              />
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
                  <article className={`bg-white rounded-2xl overflow-hidden border ${cfg.border} shadow-soft hover:shadow-soft-lg transition-all duration-300`}>
                    <div className="grid md:grid-cols-3">
                      <div className="relative min-h-[220px] aspect-[4/3] md:aspect-auto overflow-hidden bg-slate-100">
                        <Image
                          src={f.img}
                          alt={`${f.typ} von MAGOTransport`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          placeholder="blur"
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-7 grid sm:grid-cols-2 gap-4 items-start">
                        <div>
                          <h3 className="text-slate-900 font-bold text-xl mb-1">{f.typ}</h3>
                          <div className="flex items-center gap-3">
                            <span className={`text-2xl font-bold ${cfg.count}`}>{f.anzahl}×</span>
                            <span className="text-slate-500 text-sm">{f.nutzlast}</span>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed mt-3">{f.desc}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-2">Ausstattung</p>
                          <ul className="flex flex-wrap gap-1.5">
                            {f.specs.map((s) => (
                              <li key={s} className={`text-xs px-2.5 py-1 rounded-full border inline-flex ${cfg.badge}`}>{s}</li>
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

      <section className="py-20 border-t border-slate-200">
        <AnimatedSection className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Brauchen Sie eine Auslieferung oder einen Abschleppdienst?</h2>
          <p className="text-slate-600 mb-8">Sagen Sie uns, worum es geht. Wir melden uns mit einem Angebot. Kostenlos und unverbindlich.</p>
          <Link href="/anfrage" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-all cursor-pointer shadow-primary">
            Transport anfragen <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
