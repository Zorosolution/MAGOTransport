"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden" aria-labelledby="cta-heading">
      <GradientOrb color="blue" size="xl" className="top-1/2 -right-64 -translate-y-1/2 opacity-15" animate />
      <GradientOrb color="blue" size="lg" className="top-1/2 -left-48 -translate-y-1/2 opacity-10" animate />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div className="relative glass-strong rounded-3xl p-12 sm:p-16 border border-white/10 overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 100% 80% at 50% 120%, rgba(29,78,216,0.12) 0%, transparent 70%)" }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-blue-500/20 mb-8">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                <span className="text-blue-300 text-sm font-medium">Kostenlose Beratung & Angebot</span>
              </div>

              <h2 id="cta-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                Bereit für Ihren{" "}
                <span className="gradient-text">nächsten Transport?</span>
              </h2>

              <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Vertrauen Sie auf über 15 Jahre Erfahrung in Transport und Logistik.
                Wir erstellen Ihnen innerhalb von 24 Stunden ein maßgeschneidertes Angebot —
                kostenlos und unverbindlich.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link
                  href="/anfrage"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all duration-200 shadow-2xl shadow-blue-900/40 hover:shadow-blue-700/40 hover:scale-[1.02] cursor-pointer glow-primary"
                >
                  Angebot anfordern
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <a
                  href="tel:+43800626424"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl border border-amber-500/40 bg-amber-500/10 text-amber-300 font-bold text-base hover:bg-amber-500/20 transition-all duration-200 cursor-pointer hover:scale-[1.02]"
                  aria-label="Notfall-Hotline anrufen"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  +43 800 626 424
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="mailto:office@magotransport.at"
                  className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  office@magotransport.at
                </a>
                <Link
                  href="/kontakt"
                  className="text-slate-500 hover:text-slate-300 text-sm transition-colors cursor-pointer underline underline-offset-2"
                >
                  Zum Kontaktformular
                </Link>
              </div>

              <p className="mt-6 text-slate-600 text-xs">
                Kostenlos · Unverbindlich · Antwort innerhalb 24 Stunden
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
