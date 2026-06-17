"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ArrowRight, Package, Warehouse, Truck, Handshake, Car, AlertCircle } from "lucide-react";
import Link from "next/link";

const leistungen = [
  {
    icon: Package,
    title: "Auslieferung für Unternehmen",
    description: "Wir liefern die Ware unserer Partnerunternehmen an deren Kunden in Wien und Wien-Umgebung. Termingenau und mit Rückmeldung nach jeder Zustellung.",
    accent: "blue",
    size: "large",
    href: "/leistungen#auslieferung",
  },
  {
    icon: Warehouse,
    title: "Abholung im Partnerlager",
    description: "Wir fahren zum Lager des Partnerunternehmens und holen die Ware direkt ab. Ein eigenes Lager betreiben wir nicht.",
    accent: "purple",
    size: "small",
    href: "/leistungen#auslieferung",
  },
  {
    icon: Truck,
    title: "Zustellung beim Endkunden",
    description: "Wir bringen die Ware zum Kunden des Partnerunternehmens und melden die Zustellung zurück.",
    accent: "green",
    size: "small",
    href: "/leistungen#auslieferung",
  },
  {
    icon: Handshake,
    title: "Partnerschaften",
    description: "Wir arbeiten mit Unternehmen in Wien und Wien-Umgebung zusammen und sind offen für neue Partnerschaften. Sprechen Sie uns an.",
    accent: "blue",
    size: "large",
    href: "/leistungen#partnerschaft",
  },
  {
    icon: AlertCircle,
    title: "Abschleppdienst",
    description: "Mit unseren großen Anhängern schleppen wir Autos in Wien und Wien-Umgebung ab. Rufen Sie uns an.",
    accent: "amber",
    size: "small",
    href: "/abschleppdienst",
  },
  {
    icon: Car,
    title: "Fahrzeugtransport",
    description: "Wir transportieren Autos auf unseren zwei großen Anhängern. In seltenen Fällen auch ins Ausland, nur auf Anfrage.",
    accent: "purple",
    size: "small",
    href: "/leistungen#fahrzeuge",
  },
];

const accentConfig: Record<string, { badge: string; hover: string; link: string }> = {
  blue:   { badge: "text-blue-700 bg-blue-50 border-blue-100",       hover: "hover:border-blue-200",    link: "text-blue-700" },
  purple: { badge: "text-indigo-700 bg-indigo-50 border-indigo-100", hover: "hover:border-indigo-200",  link: "text-indigo-700" },
  amber:  { badge: "text-amber-700 bg-amber-50 border-amber-100",    hover: "hover:border-amber-200",   link: "text-amber-700" },
  green:  { badge: "text-emerald-700 bg-emerald-50 border-emerald-100", hover: "hover:border-emerald-200", link: "text-emerald-700" },
};

export function Features() {
  return (
    <section id="leistungen" className="relative py-28 overflow-hidden" aria-labelledby="leistungen-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-blue-700 uppercase tracking-widest mb-4 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
            Unsere Leistungen
          </span>
          <h2 id="leistungen-heading" className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-5">
            Was wir machen:{" "}
            <span className="gradient-text">Auslieferung und Abschleppdienst</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Wir holen die Ware im Lager unserer Partnerunternehmen ab und stellen sie an deren Kunden zu.
            Dazu Abschleppdienst und Fahrzeugtransport in Wien und Wien-Umgebung.
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
                className={`group relative overflow-hidden bg-white rounded-2xl p-6 border border-slate-200 ${cfg.hover} shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 h-full`}
              >
                {/* dezenter Lichtschimmer beim Hover */}
                <div
                  className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "radial-gradient(420px circle at 30% 0%, rgba(29,78,216,0.06), transparent 70%)" }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl border mb-4 ${cfg.badge} transition-transform duration-300 group-hover:scale-110`} aria-hidden="true">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-slate-900 font-semibold text-lg mb-2">{l.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{l.description}</p>
                  {l.href && (
                    <div className={`mt-4 flex items-center gap-1.5 ${cfg.link} text-xs font-semibold group-hover:gap-2.5 transition-all`}>
                      <span>Mehr erfahren</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                  )}
                </div>
              </article>
            );

            return (
              <AnimatedSection
                key={l.title}
                delay={i * 0.05}
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-all duration-200 cursor-pointer shadow-primary"
          >
            Alle Leistungen im Überblick <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
