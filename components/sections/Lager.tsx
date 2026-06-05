"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Package, Gauge, ShieldCheck } from "lucide-react";
import Link from "next/link";

const prozesse = [
  { step: "01", label: "Wareneingang",    desc: "Systematische Erfassung und Qualitätskontrolle aller eingehenden Güter.",      icon: Package },
  { step: "02", label: "Einlagerung",     desc: "Optimale Lagerplatzvergabe nach Güterart, Größe und Umschlagshäufigkeit.",     icon: Layers },
  { step: "03", label: "Kommissionierung",desc: "Präzise Zusammenstellung Ihrer Aufträge nach modernsten Picking-Methoden.",     icon: Gauge },
  { step: "04", label: "Versand",         desc: "Termingerechte Übergabe an unsere Transportabteilung oder Fremdspedition.",    icon: ShieldCheck },
];

export function Lager() {
  return (
    <section id="lager" className="relative py-28 overflow-hidden" aria-labelledby="lager-heading">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(29,78,216,0.07) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Linke Seite */}
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold text-green-400 uppercase tracking-widest mb-5 px-3 py-1 glass rounded-full border border-green-500/20">
              Lager & Logistik
            </span>
            <h2 id="lager-heading" className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              Moderne Lagerhaltung &{" "}
              <span className="gradient-text">Warenmanagement</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Unsere modernen Lagerflächen bieten optimale Bedingungen für Ihre Güter —
              von der einfachen Einlagerung bis zur komplexen Auftragsabwicklung.
              Mit digitalem Warenmanagement haben Sie jederzeit vollen Überblick.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { value: "8.500 m²", label: "Lagerfläche" },
                { value: "12m", label: "Deckenhöhe" },
                { value: "99,4%", label: "Lagergenauigkeit" },
                { value: "WMS", label: "Digitales System" },
              ].map(({ value, label }) => (
                <div key={label} className="glass rounded-xl p-4 border border-white/8 text-center">
                  <div className="text-xl font-bold gradient-text">{value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/leistungen#lager"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all cursor-pointer"
            >
              Lagerlogistik anfragen <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </AnimatedSection>

          {/* Rechte Seite – Prozess-Timeline */}
          <AnimatedSection delay={0.15} direction="left">
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider text-slate-400">Unser Logistikprozess</h3>
            <div className="space-y-0">
              {prozesse.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    {/* Connector line */}
                    {i < prozesse.length - 1 && (
                      <div className="absolute left-5 top-10 bottom-0 w-px bg-gradient-to-b from-blue-500/30 to-transparent" aria-hidden="true" />
                    )}
                    {/* Step icon */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center" aria-hidden="true">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="pt-1.5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{p.step}</span>
                        <span className="text-white font-semibold text-sm">{p.label}</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
