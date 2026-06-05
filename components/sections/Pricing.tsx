"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const pakete = [
  {
    name: "Standardtransport",
    subtitle: "National & regional",
    description: "Zuverlässige Gütertransporte innerhalb Österreichs und ins benachbarte Ausland.",
    features: [
      "Österreich & DACH-Raum",
      "GPS-Sendungsverfolgung",
      "Lieferbestätigung",
      "Haftpflichtversicherung",
      "Mo–Fr, 8–18 Uhr",
    ],
    cta: "Angebot anfordern",
    ctaHref: "/anfrage?typ=standard",
    featured: false,
    badge: null,
  },
  {
    name: "Express & Sonder",
    subtitle: "Schnell wenn es darauf ankommt",
    description: "Expresslieferungen, Sonder- und Nachtfahrten für zeitkritische Güter und dringende Aufträge.",
    features: [
      "24h-Express-Lieferung",
      "Nacht- & Wochenend-Fahrten",
      "Prioritäts-Handling",
      "Direkttransport (kein Umschlag)",
      "Echtzeit-Tracking",
      "Persönliche Auftragsbetreuung",
    ],
    cta: "Expressanfrage stellen",
    ctaHref: "/anfrage?typ=express",
    featured: true,
    badge: "Beliebteste Option",
  },
  {
    name: "International",
    subtitle: "Europa & weltweit",
    description: "Vollständige internationale Transportlösungen inkl. Zollabwicklung, Dokumentation und Partnernetzwerk.",
    features: [
      "Gesamtes Europa & weltweit",
      "Zollabwicklung & Dokumentation",
      "Mehrsprachige Betreuung",
      "Partnernetze in 30+ Ländern",
      "Cargo-Versicherung inklusive",
      "Avisierungs-Service",
      "Dedicated Account Manager",
    ],
    cta: "International anfragen",
    ctaHref: "/anfrage?typ=international",
    featured: false,
    badge: null,
  },
];

export function Pricing() {
  return (
    <section id="servicepakete" className="relative py-28 overflow-hidden" aria-labelledby="pakete-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-green-400 uppercase tracking-widest mb-4 px-3 py-1 glass rounded-full border border-green-500/20">
            Servicepakete
          </span>
          <h2 id="pakete-heading" className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">
            Die richtige Lösung{" "}
            <span className="gradient-text">für jeden Auftrag</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Ob Standard, Express oder International — wir haben das passende Angebot für Ihren Transportbedarf.
            Alle Preise auf Anfrage und individuell kalkuliert.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {pakete.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 0.1}>
              <div
                className={cn(
                  "relative rounded-2xl p-7 border transition-all duration-300 cursor-default h-full flex flex-col",
                  p.featured
                    ? "bg-blue-600/[0.07] border-blue-500/40 shadow-2xl shadow-blue-900/20 glow-primary"
                    : "glass border-white/8 hover:border-white/15"
                )}
              >
                {p.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-lg shadow-blue-900/40">
                      {p.badge}
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-white font-bold text-xl mb-0.5">{p.name}</h3>
                  <p className="text-blue-400 text-xs font-medium">{p.subtitle}</p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.description}</p>

                <ul className="space-y-2.5 mb-7 flex-1" role="list">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className={cn("w-4 h-4 flex-shrink-0 mt-0.5", p.featured ? "text-blue-400" : "text-slate-500")}
                        aria-hidden="true"
                      />
                      <span className="text-slate-400 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.ctaHref}
                  className={cn(
                    "flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer",
                    p.featured
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/30"
                      : "glass border border-white/12 text-white hover:border-white/25 hover:bg-white/5"
                  )}
                >
                  {p.cta} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-8">
          <p className="text-slate-500 text-sm">
            Alle Preise auf Anfrage — kostenlose und unverbindliche Beratung.{" "}
            <Link href="/kontakt" className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer underline underline-offset-2">
              Jetzt Kontakt aufnehmen
            </Link>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
