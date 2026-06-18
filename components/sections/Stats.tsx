"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CountUp } from "@/components/shared/CountUp";

const kennzahlen = [
  { value: 15,   suffix: "",   label: "Lkw im Fuhrpark",   color: "text-blue-700",    decimals: 0 },
  { value: 2,    suffix: "",   label: "Große Anhänger",    color: "text-emerald-600", decimals: 0 },
  { value: 15,   suffix: "",   label: "Mitarbeiter",       color: "text-amber-600",   decimals: 0 },
  { value: 2000, suffix: "+",  label: "Zufriedene Kunden", color: "text-indigo-600",  decimals: 0 },
];

export function Stats() {
  return (
    <section
      className="relative py-24 overflow-hidden border-y border-slate-200 bg-slate-50"
      aria-label="MAGOTransport in Zahlen"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900">MAGOTransport in Zahlen</h2>
          <p className="text-slate-500 text-sm mt-2">Seit 2007 im Geschäft. In Wien und ganz Österreich.</p>
        </AnimatedSection>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kennzahlen.map((k, i) => (
            <AnimatedSection key={k.label} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-soft text-center h-full transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-0.5">
                <div
                  className={`text-4xl sm:text-5xl font-bold mb-2 tabular-nums ${k.color}`}
                  aria-label={`${k.value}${k.suffix} ${k.label}`}
                >
                  <CountUp end={k.value} suffix={k.suffix} decimals={k.decimals} duration={2} />
                </div>
                <p className="text-slate-600 text-sm leading-snug">{k.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
