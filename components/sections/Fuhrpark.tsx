"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CountUp } from "@/components/shared/CountUp";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const fahrzeuge = [
  {
    type: "Große Lkw",
    count: "4",
    capacity: "für größere Mengen",
    desc: "Vier große Lkw für umfangreiche Lieferungen und größere Mengen im Großraum Wien.",
    color: "blue",
    specs: ["Regelmäßig gewartet", "Erfahrene Fahrer", "Wien und Umgebung"],
    icon: "🚛",
  },
  {
    type: "Kleine Lkw",
    count: "10",
    capacity: "für die Zustellung",
    desc: "Zehn kleine Lkw für die wendige Zustellung in der Stadt und im Umland, mit vielen Stopps pro Tour.",
    color: "purple",
    specs: ["Wendig im Stadtverkehr", "Tägliche Touren", "Zustellung beim Endkunden"],
    icon: "🚐",
  },
  {
    type: "Abschlepp-Lkw",
    count: "1",
    capacity: "für Pannen und Unfälle",
    desc: "Ein Abschlepp-Lkw für Abschleppdienst und Fahrzeugtransport in Wien und Wien-Umgebung.",
    color: "amber",
    specs: ["Autos abschleppen", "Telefonisch erreichbar", "Wien und Umgebung"],
    icon: "🏗️",
  },
  {
    type: "Große Anhänger",
    count: "2",
    capacity: "für Autotransporte",
    desc: "Zwei große Anhänger, mit denen wir Autos abschleppen und transportieren. Auf Anfrage auch ins Ausland.",
    color: "green",
    specs: ["Autos transportieren", "Sicher verzurrt", "Ausland auf Anfrage"],
    icon: "🚗",
  },
];

const colorConf: Record<string, { border: string; badge: string; count: string }> = {
  blue:   { border: "border-slate-200 hover:border-blue-200",   badge: "bg-blue-50 text-blue-700 border-blue-100",       count: "text-blue-700" },
  purple: { border: "border-slate-200 hover:border-indigo-200", badge: "bg-indigo-50 text-indigo-700 border-indigo-100", count: "text-indigo-700" },
  amber:  { border: "border-slate-200 hover:border-amber-200",  badge: "bg-amber-50 text-amber-700 border-amber-100",    count: "text-amber-700" },
  green:  { border: "border-slate-200 hover:border-emerald-200", badge: "bg-emerald-50 text-emerald-700 border-emerald-100", count: "text-emerald-700" },
};

export function Fuhrpark() {
  return (
    <section id="fuhrpark" className="relative py-28 overflow-hidden bg-slate-50 border-y border-slate-200" aria-labelledby="fuhrpark-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-blue-700 uppercase tracking-widest mb-4 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
            Unser Fuhrpark
          </span>
          <h2 id="fuhrpark-heading" className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-5">
            Unser Fuhrpark{" "}
            <span className="gradient-text">für Wien und Umgebung</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Wir fahren mit 15 Lkw und zwei großen Anhängern. Die Lkw sind täglich für die
            Auslieferung im Einsatz, mit den Anhängern transportieren und schleppen wir Autos.
            Alle Fahrzeuge werden regelmäßig gewartet.
          </p>
        </AnimatedSection>

        {/* Gesamtstatistik */}
        <AnimatedSection className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-10">
          {[
            { num: 15, label: "Lkw" },
            { num: 4, label: "Große Lkw" },
            { num: 10, label: "Kleine Lkw" },
            { num: 1, label: "Abschlepp-Lkw" },
            { num: 2, label: "Große Anhänger" },
            { text: "Wien", label: "Einsatzgebiet" },
          ].map(({ num, text, label }) => (
            <div key={label} className="bg-white rounded-xl p-3 text-center border border-slate-200 shadow-soft transition-transform duration-300 hover:-translate-y-0.5">
              <div className="text-lg font-bold text-blue-700 tabular-nums">
                {typeof num === "number" ? <CountUp end={num} duration={1.6} /> : text}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">{label}</div>
            </div>
          ))}
        </AnimatedSection>

        {/* Fahrzeugkarten */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fahrzeuge.map((f, i) => {
            const cfg = colorConf[f.color];
            return (
              <AnimatedSection key={f.type} delay={i * 0.07}>
                <article className={`group bg-white rounded-2xl p-6 border ${cfg.border} shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300 h-full`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-3xl mb-2 block" aria-hidden="true">{f.icon}</span>
                      <h3 className="text-slate-900 font-semibold text-lg">{f.type}</h3>
                      <p className="text-slate-500 text-xs">{f.capacity}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-2xl font-bold tabular-nums ${cfg.count}`}>
                        <CountUp end={Number(f.count)} duration={1.6} suffix="×" />
                      </span>
                      <p className="text-slate-500 text-xs">{f.type === "Große Anhänger" ? "Anhänger" : "Fahrzeuge"}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{f.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {f.specs.map((spec) => (
                      <span key={spec} className={`text-xs px-2.5 py-1 rounded-full border ${cfg.badge}`}>{spec}</span>
                    ))}
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="text-center mt-10">
          <Link
            href="/fuhrpark"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-blue-700 hover:border-blue-200 hover:bg-blue-50 font-semibold text-sm transition-all duration-200 cursor-pointer shadow-soft"
          >
            Fuhrpark im Detail ansehen <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
