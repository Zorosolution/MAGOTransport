"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { ArrowRight, MapPin, Globe, Zap, Layers, ShieldCheck, Clock, Gauge, Plug, AlertCircle } from "lucide-react";
import Link from "next/link";

const leistungen = [
  {
    icon: MapPin,
    title: "Nationale Transporte",
    description: "Zuverlässige Gütertransporte in ganz Österreich und Deutschland. Pünktliche Lieferungen mit moderner Flotte und erfahrenen Fahrern.",
    accent: "blue",
    size: "large",
    href: "/leistungen#national",
  },
  {
    icon: Globe,
    title: "Internationale Transporte",
    description: "Europaweite Transportlösungen für alle Güterarten. Mit umfangreicher Partnernetzwerk und digitaler Sendungsverfolgung.",
    accent: "purple",
    size: "small",
    href: "/leistungen#international",
  },
  {
    icon: Zap,
    title: "Express- & Sonderfahrten",
    description: "Wenn es schnell gehen muss: Expresslieferungen und Sondertransporte innerhalb kürzester Zeit, auch nachts und am Wochenende.",
    accent: "amber",
    size: "small",
    href: "/leistungen#express",
  },
  {
    icon: Layers,
    title: "Lagerlogistik",
    description: "Professionelle Lagerhaltung, Warenmanagement und Distribution. Moderne Lagerflächen mit optimierten Logistikprozessen für Ihre Güter.",
    accent: "green",
    size: "large",
    href: "/leistungen#lager",
  },
  {
    icon: ShieldCheck,
    title: "Fahrzeugtransporte",
    description: "Sicherer Transport von PKW, LKW und Spezialfahrzeugen auf unseren Autotransportern.",
    accent: "blue",
    size: "small",
    href: "/leistungen#fahrzeuge",
  },
  {
    icon: Plug,
    title: "Spezialtransporte",
    description: "Überladene oder überdimensionale Güter, Schwertransporte und Projekttransporte mit Genehmigungsservice.",
    accent: "purple",
    size: "small",
  },
  {
    icon: AlertCircle,
    title: "Abschleppdienst",
    description: "24/7 Abschleppdienst – schnell, professionell, zuverlässig. Wir sind immer für Sie da, egal wo Ihr Fahrzeug steht.",
    accent: "amber",
    size: "small",
    href: "/abschleppdienst",
  },
  {
    icon: Gauge,
    title: "Pannenhilfe",
    description: "Sofortige Pannenhilfe auf Österreichs und Deutschlands Straßen. Unser Team erreicht Sie in kürzester Zeit.",
    accent: "green",
    size: "small",
  },
  {
    icon: Clock,
    title: "Fahrzeugbergung",
    description: "Professionelle Fahrzeugbergung nach Unfällen oder Pannen. Schonend und sicher geborgen.",
    accent: "blue",
    size: "small",
  },
];

const accentConfig: Record<string, { badge: string; border: string; glow: string }> = {
  blue:   { badge: "text-blue-400 bg-blue-400/10 border-blue-400/20",   border: "group-hover:border-blue-500/30",   glow: "group-hover:shadow-blue-500/10" },
  purple: { badge: "text-purple-400 bg-purple-400/10 border-purple-400/20", border: "group-hover:border-purple-500/30", glow: "group-hover:shadow-purple-500/10" },
  amber:  { badge: "text-amber-400 bg-amber-400/10 border-amber-400/20",  border: "group-hover:border-amber-500/30",  glow: "group-hover:shadow-amber-500/10" },
  green:  { badge: "text-green-400 bg-green-400/10 border-green-400/20",  border: "group-hover:border-green-500/30",  glow: "group-hover:shadow-green-500/10" },
};

export function Features() {
  return (
    <section id="leistungen" className="relative py-28 overflow-hidden" aria-labelledby="leistungen-heading">
      <GradientOrb color="purple" size="xl" className="-top-24 -right-48 opacity-10" animate={false} />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4 px-3 py-1 glass rounded-full border border-blue-500/20">
            Unsere Leistungen
          </span>
          <h2 id="leistungen-heading" className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">
            Alles aus einer Hand –{" "}
            <span className="gradient-text">Transport & Logistik</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Von nationalen Gütertransporten bis zum 24/7-Abschleppdienst: MAGOTransport bietet
            Ihnen das komplette Spektrum professioneller Transport- und Logistikdienstleistungen.
          </p>
        </AnimatedSection>

        {/* Bento-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {leistungen.map((l, i) => {
            const Icon = l.icon;
            const isLarge = l.size === "large";
            const cfg = accentConfig[l.accent];
            const content = (
              <article
                className={`group relative glass rounded-2xl p-6 border border-white/8 ${cfg.border} ${cfg.glow} hover:border-opacity-100 transition-all duration-300 cursor-default h-full hover:shadow-2xl`}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl border mb-4 ${cfg.badge}`} aria-hidden="true">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{l.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{l.description}</p>
                {l.href && (
                  <div className="mt-4 flex items-center gap-1.5 text-blue-400 text-xs font-medium group-hover:gap-2.5 transition-all">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                )}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.02) 0%, transparent 60%)" }}
                  aria-hidden="true"
                />
              </article>
            );

            return (
              <AnimatedSection
                key={l.title}
                delay={i * 0.07}
                className={isLarge ? "lg:col-span-2" : "lg:col-span-1"}
              >
                {l.href ? <Link href={l.href} className="block h-full">{content}</Link> : content}
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="text-center mt-10">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-blue-900/30"
          >
            Alle Leistungen im Überblick <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
