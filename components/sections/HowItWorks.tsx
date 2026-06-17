"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Warehouse, Truck, PackageCheck } from "lucide-react";

const schritte = [
  {
    n: "01",
    icon: Warehouse,
    title: "Abholung im Partnerlager",
    description: "Wir fahren zum Lager des Partnerunternehmens und holen die Ware zum vereinbarten Termin ab. Ein eigenes Lager betreiben wir nicht.",
  },
  {
    n: "02",
    icon: Truck,
    title: "Transport",
    description: "Wir bringen die Ware auf unseren Lkw durch Wien und Wien-Umgebung. Pro Tour stellen wir mehrere Lieferungen zu.",
  },
  {
    n: "03",
    icon: PackageCheck,
    title: "Zustellung beim Endkunden",
    description: "Wir stellen die Ware direkt beim Kunden des Partnerunternehmens zu und melden die Zustellung zurück.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 65%"] });
  const grow = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const fill = reduceMotion ? 1 : grow;

  return (
    <section id="so-funktioniert-es" className="relative py-28 overflow-hidden" aria-labelledby="prozess-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-xs font-semibold text-indigo-700 uppercase tracking-widest mb-4 px-3 py-1 bg-indigo-50 rounded-full border border-indigo-100">
            Unser Ablauf
          </span>
          <h2 id="prozess-heading" className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-5 text-balance">
            So läuft{" "}
            <span className="gradient-text">die Auslieferung</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed">
            In drei Schritten von der Abholung im Partnerlager bis zur Zustellung beim Endkunden.
          </p>
        </AnimatedSection>

        <div ref={ref} className="relative">
          {/* Vertikale Fortschrittslinie (mobil) */}
          <div className="md:hidden absolute left-7 top-6 bottom-6 w-0.5 -translate-x-1/2 bg-slate-200" aria-hidden="true" />
          <motion.div
            style={{ scaleY: fill }}
            className="md:hidden absolute left-7 top-6 bottom-6 w-0.5 -translate-x-1/2 origin-top bg-gradient-to-b from-blue-600 via-indigo-500 to-emerald-500"
            aria-hidden="true"
          />

          {/* Horizontale Fortschrittslinie (Desktop) */}
          <div className="hidden md:block absolute top-7 left-[16.6%] right-[16.6%] h-0.5 bg-slate-200" aria-hidden="true" />
          <motion.div
            style={{ scaleX: fill }}
            className="hidden md:block absolute top-7 left-[16.6%] right-[16.6%] h-0.5 origin-left bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {schritte.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimatedSection key={s.n} delay={i * 0.12}>
                  <div className="relative flex md:flex-col items-start md:items-center gap-5 md:gap-0">
                    <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-slate-200 ring-4 ring-white shadow-soft flex items-center justify-center" aria-hidden="true">
                      <Icon className="w-6 h-6 text-blue-700" />
                    </div>
                    <div className="md:mt-7 md:text-center md:px-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-indigo-700">Schritt {s.n}</span>
                      <h3 className="text-xl font-semibold text-slate-900 mt-1.5 mb-2">{s.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{s.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
