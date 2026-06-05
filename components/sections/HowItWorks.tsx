"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, ClipboardList, Truck, CheckCircle } from "lucide-react";

const schritte = [
  {
    step: "01",
    icon: Phone,
    title: "Anfrage stellen",
    description: "Kontaktieren Sie uns telefonisch, per E-Mail oder über unser Anfrageformular. Wir beraten Sie kostenlos und unverbindlich zu Ihrem Transportbedarf.",
    color: "blue",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Angebot erhalten",
    description: "Innerhalb von 24 Stunden erhalten Sie ein detailliertes, transparentes Angebot — maßgeschneidert auf Ihre Anforderungen und Ihr Budget.",
    color: "purple",
  },
  {
    step: "03",
    icon: Truck,
    title: "Transport & Abwicklung",
    description: "Wir übernehmen die komplette Abwicklung: von der Abholung über den Transport bis zur pünktlichen Zustellung — mit GPS-Echtzeit-Tracking.",
    color: "amber",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Lieferung & Bestätigung",
    description: "Ihr Auftrag wird sicher und pünktlich abgeschlossen. Sie erhalten eine Lieferbestätigung und die vollständigen Frachtpapiere.",
    color: "green",
  },
];

const colorConfig: Record<string, { dot: string; border: string; text: string; badge: string }> = {
  blue:   { dot: "bg-blue-500",   border: "border-blue-500/30",   text: "text-blue-400",   badge: "bg-blue-500/10 border-blue-500/20 text-blue-300" },
  purple: { dot: "bg-purple-500", border: "border-purple-500/30", text: "text-purple-400", badge: "bg-purple-500/10 border-purple-500/20 text-purple-300" },
  amber:  { dot: "bg-amber-500",  border: "border-amber-500/30",  text: "text-amber-400",  badge: "bg-amber-500/10 border-amber-500/20 text-amber-300" },
  green:  { dot: "bg-green-500",  border: "border-green-500/30",  text: "text-green-400",  badge: "bg-green-500/10 border-green-500/20 text-green-300" },
};

export function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section id="so-funktioniert-es" className="relative py-28 overflow-hidden" aria-labelledby="prozess-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-xs font-semibold text-purple-400 uppercase tracking-widest mb-4 px-3 py-1 glass rounded-full border border-purple-500/20">
            Unser Prozess
          </span>
          <h2 id="prozess-heading" className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">
            So einfach funktioniert{" "}
            <span className="gradient-text">Ihr Transport</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Von der ersten Anfrage bis zur Lieferbestätigung — MAGOTransport macht Ihren
            Auftrag unkompliziert und transparent.
          </p>
        </AnimatedSection>

        <div className="relative" ref={lineRef}>
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/8 hidden md:block" aria-hidden="true" />
          <motion.div
            className="absolute left-6 top-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 via-amber-500 to-green-500 hidden md:block origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{ height: "100%" }}
            aria-hidden="true"
          />

          <div className="space-y-10">
            {schritte.map((s, i) => {
              const Icon = s.icon;
              const cfg = colorConfig[s.color];
              return (
                <AnimatedSection key={s.step} delay={i * 0.15} direction="left">
                  <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
                    <div className="relative flex-shrink-0 hidden md:flex" aria-hidden="true">
                      <div className={`w-12 h-12 rounded-full ${cfg.dot} flex items-center justify-center shadow-lg ring-4 ring-black`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <article className={`flex-1 glass rounded-2xl p-6 border ${cfg.border} hover:border-opacity-60 transition-all duration-300`}>
                      <div className="flex items-start gap-4">
                        <div className={`md:hidden w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 mt-0.5 ${cfg.badge}`} aria-hidden="true">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`text-xs font-bold uppercase tracking-widest ${cfg.text}`}>Schritt {s.step}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                          <p className="text-slate-400 leading-relaxed text-sm">{s.description}</p>
                        </div>
                      </div>
                    </article>
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
