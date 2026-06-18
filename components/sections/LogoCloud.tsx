"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const merkmale = [
  { name: "Auslieferung für Unternehmen", width: 220 },
  { name: "Wien und ganz Österreich", width: 190 },
  { name: "Abschleppdienst", width: 130 },
  { name: "Fahrzeugtransport", width: 150 },
  { name: "Seit 2007", width: 90 },
  { name: "Über 2000 Kunden", width: 150 },
  { name: "15 Lkw im Fuhrpark", width: 160 },
  { name: "Offen für Partnerschaften", width: 200 },
];

export function LogoCloud() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-16 border-y border-slate-200 bg-slate-50" aria-label="Was wir machen">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-center text-sm text-slate-500 font-medium uppercase tracking-widest mb-10">
            Was wir machen und wo wir tätig sind
          </p>
        </AnimatedSection>

        <div className="relative overflow-hidden" aria-hidden="true">
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #f8fafc 0%, transparent 100%)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(-90deg, #f8fafc 0%, transparent 100%)" }}
          />
          <motion.div
            className="flex gap-16 items-center"
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {[...merkmale, ...merkmale].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                style={{ width: p.width }}
                className="flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors duration-300 cursor-default select-none flex-shrink-0"
              >
                <span className="font-semibold text-sm tracking-wide whitespace-nowrap">{p.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
