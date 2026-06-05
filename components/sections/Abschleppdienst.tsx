"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Phone, Clock, MapPin, Shield, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Zap,     title: "Sofort-Einsatz",      desc: "Einsatzbereit innerhalb von 30 Minuten" },
  { icon: MapPin,  title: "Österreich & DACH",    desc: "Gesamtes Bundesgebiet und Nachbarländer" },
  { icon: Shield,  title: "Professionell & sicher", desc: "Geschultes Team, moderne Fahrzeuge" },
  { icon: Clock,   title: "365 Tage",             desc: "Auch Feiertags und nachts erreichbar" },
];

export function Abschleppdienst() {
  return (
    <section
      id="abschleppdienst"
      className="relative py-20 overflow-hidden"
      aria-labelledby="asd-heading"
    >
      {/* Hintergrund-Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(245,158,11,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 border-y border-amber-500/10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Linke Seite – Text */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass border border-amber-500/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">24/7 Notdienst</span>
            </div>

            <h2 id="asd-heading" className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              Pannenhilfe & Abschleppdienst –{" "}
              <span className="gradient-text-amber">immer für Sie da</span>
            </h2>

            <p className="text-slate-400 leading-relaxed mb-6">
              Eine Panne oder ein Unfall kann jeden treffen — zu jeder Zeit und an jedem Ort.
              MAGOTransport ist Ihr zuverlässiger Partner für schnelle Pannenhilfe,
              professionellen Abschleppdienst und Fahrzeugbergung im gesamten DACH-Raum.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {services.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass rounded-xl p-4 border border-amber-500/15">
                  <Icon className="w-5 h-5 text-amber-400 mb-2" aria-hidden="true" />
                  <p className="text-white text-sm font-semibold">{title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+43800626424"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition-all duration-200 cursor-pointer glow-amber"
                aria-label="Notfall-Hotline sofort anrufen"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Jetzt anrufen: +43 800 626 424
              </a>
              <Link
                href="/abschleppdienst"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass border border-amber-500/30 text-amber-300 hover:bg-amber-500/10 font-medium text-sm transition-all duration-200 cursor-pointer"
              >
                Mehr Infos <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Rechte Seite – Notfall-Karte */}
          <AnimatedSection delay={0.15} direction="left">
            <div className="relative">
              {/* Pulsierender Ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-amber-500/20"
                animate={{ scale: [1, 1.04, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />
              <div className="glass rounded-3xl p-8 border border-amber-500/25 shadow-2xl shadow-amber-950/30 relative overflow-hidden">
                {/* Dekor-Hintergrund */}
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 80% 20%, rgba(245,158,11,0.15) 0%, transparent 60%)" }}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Notfall-Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center pulse-amber" aria-hidden="true">
                      <Phone className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Notfall-Hotline</p>
                      <p className="text-amber-400 text-sm font-semibold">Rund um die Uhr erreichbar</p>
                    </div>
                  </div>

                  <a
                    href="tel:+43800626424"
                    className="block text-center py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-2xl tracking-wide mb-6 transition-all duration-200 cursor-pointer glow-amber"
                    aria-label="Notfall-Hotline anrufen"
                  >
                    +43 800 626 424
                  </a>

                  <div className="space-y-3">
                    {[
                      { label: "Reaktionszeit", value: "Ø 28 Minuten" },
                      { label: "Einsatzgebiet", value: "DACH-Raum" },
                      { label: "Verfügbarkeit", value: "365 Tage, 24/7" },
                      { label: "Fahrzeugtypen", value: "PKW, LKW, Motorrad" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between py-2.5 border-b border-white/6 last:border-0">
                        <span className="text-slate-500 text-sm">{label}</span>
                        <span className="text-white text-sm font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
