"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const partner = [
  { name: "ADAC", width: 72 },
  { name: "TÜV Austria", width: 90 },
  { name: "ASFINAG", width: 80 },
  { name: "WKO", width: 64 },
  { name: "ÖAMTC", width: 72 },
  { name: "AIT", width: 56 },
  { name: "AGES", width: 64 },
  { name: "Wirtschaftskammer", width: 96 },
];

export function LogoCloud() {
  return (
    <section className="py-16 border-y border-white/8" aria-label="Partner & Zertifizierungen">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-center text-sm text-slate-500 font-medium uppercase tracking-widest mb-10">
            Zertifiziert · Versichert · Vertrauenswürdig — unsere Partner & Mitgliedschaften
          </p>
        </AnimatedSection>

        <div className="relative overflow-hidden" aria-hidden="true">
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #000 0%, transparent 100%)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(-90deg, #000 0%, transparent 100%)" }}
          />
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...partner, ...partner].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                style={{ width: p.width }}
                className="flex items-center justify-center opacity-30 hover:opacity-60 transition-opacity duration-300 cursor-default select-none flex-shrink-0"
              >
                <span className="text-slate-400 font-semibold text-sm tracking-wide whitespace-nowrap">{p.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
