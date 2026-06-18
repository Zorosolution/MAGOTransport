"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Check } from "lucide-react";

const punkte = ["Wien", "Österreich", "Ausland nur auf Anfrage"];

export function Einsatzgebiet() {
  const reduceMotion = useReducedMotion();
  const ringe = [0, 1, 2];

  return (
    <section className="relative py-24 overflow-hidden" aria-labelledby="gebiet-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold text-blue-700 uppercase tracking-widest mb-5 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
              Einsatzgebiet
            </span>
            <h2 id="gebiet-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5 leading-tight text-balance">
              Unterwegs in{" "}
              <span className="gradient-text">Wien und ganz Österreich</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-7 max-w-lg">
              Unsere Touren decken Wien und das nähere Umland ab. Auslieferung für Unternehmen,
              Abschleppdienst und Fahrzeugtransport, alles im Großraum Wien.
            </p>
            <ul className="space-y-2.5">
              {punkte.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </span>
                  <span className="text-slate-700 text-sm font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Visual: konzentrische Ringe um Wien */}
          <AnimatedSection direction="left">
            <div className="relative h-72 sm:h-80 flex items-center justify-center" aria-hidden="true">
              {ringe.map((r) => (
                <motion.span
                  key={r}
                  className="absolute rounded-full border border-blue-200"
                  style={{ width: 108 + r * 82, height: 108 + r * 82 }}
                  animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: r * 0.6 }}
                />
              ))}
              <div
                className="absolute rounded-full"
                style={{ width: 280, height: 280, background: "radial-gradient(circle, rgba(29,78,216,0.10) 0%, transparent 70%)" }}
              />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-700 flex items-center justify-center shadow-primary">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <span className="mt-3 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-soft text-sm font-semibold text-slate-900">
                  Wien
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
