"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CountUp } from "@/components/shared/CountUp";
import { GradientOrb } from "@/components/shared/GradientOrb";

const kennzahlen = [
  { value: 500,  suffix: "+",  label: "Transporte täglich",     color: "text-blue-400",   decimals: 0 },
  { value: 98.9, suffix: "%",  label: "Zuverlässigkeitsquote",  color: "text-green-400",  decimals: 1 },
  { value: 15,   suffix: "+",  label: "Jahre Erfahrung",        color: "text-amber-400",  decimals: 0 },
  { value: 38,   suffix: "",   label: "Fahrzeuge im Fuhrpark",  color: "text-purple-400", decimals: 0 },
];

export function Stats() {
  return (
    <section
      className="relative py-24 overflow-hidden border-y border-white/8"
      aria-label="MAGOTransport Kennzahlen"
    >
      <GradientOrb color="blue" size="xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-8" animate={false} />
      <div className="relative max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white">MAGOTransport in Zahlen</h2>
          <p className="text-slate-500 text-sm mt-2">Über 15 Jahre Erfahrung — Zahlen, die für uns sprechen</p>
        </AnimatedSection>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {kennzahlen.map((k, i) => (
            <AnimatedSection key={k.label} delay={i * 0.1} className="text-center">
              <div
                className={`text-4xl sm:text-5xl font-bold mb-2 tabular-nums ${k.color}`}
                aria-label={`${k.value}${k.suffix} ${k.label}`}
              >
                <CountUp end={k.value} suffix={k.suffix} decimals={k.decimals} duration={2} />
              </div>
              <p className="text-slate-400 text-sm leading-snug">{k.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
