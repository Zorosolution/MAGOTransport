"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const pakete = [
  {
    name: "Standardzustellung",
    subtitle: "Wien und Wien-Umgebung",
    description: "Regelmäßige Auslieferung Ihrer Ware an Ihre Kunden. Wir holen im Lager Ihres Betriebs ab und stellen zu.",
    features: [
      "Wien und Wien-Umgebung",
      "Abholung im Partnerlager",
      "Zustellung beim Endkunden",
      "Feste oder flexible Touren",
      "Rückmeldung nach der Zustellung",
    ],
    cta: "Angebot anfragen",
    ctaHref: "/anfrage?typ=auslieferung",
    featured: false,
    badge: null,
  },
  {
    name: "Partnerschaft",
    subtitle: "Für Unternehmen",
    description: "Sie suchen einen festen Auslieferungspartner? Wir übernehmen Ihre Zustellung dauerhaft und sind offen für neue Partnerschaften.",
    features: [
      "Dauerhafte Zusammenarbeit",
      "Planbare und feste Touren",
      "Skalierbar nach Auftragslage",
      "Fester Ansprechpartner",
      "Klare und faire Konditionen",
      "Offen für neue Partnerschaften",
    ],
    cta: "Partner werden",
    ctaHref: "/kontakt?betreff=partnership",
    featured: true,
    badge: "Für Unternehmen",
  },
  {
    name: "Abschleppdienst und Fahrzeugtransport",
    subtitle: "Autos abschleppen und transportieren",
    description: "Mit unseren zwei großen Anhängern schleppen und transportieren wir Autos in Wien und Wien-Umgebung.",
    features: [
      "Autos abschleppen",
      "Autos transportieren",
      "Zwei große Anhänger",
      "Sicher verzurrt",
      "Wien und Wien-Umgebung",
      "Ausland nur auf Anfrage",
    ],
    cta: "Anfrage stellen",
    ctaHref: "/anfrage?typ=abschlepp",
    featured: false,
    badge: null,
  },
];

export function Pricing() {
  return (
    <section id="servicepakete" className="relative py-28 overflow-hidden" aria-labelledby="pakete-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-4 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
            Servicepakete
          </span>
          <h2 id="pakete-heading" className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-5">
            Die richtige Lösung{" "}
            <span className="gradient-text">für Ihr Anliegen</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Ob regelmäßige Auslieferung, feste Partnerschaft oder Abschleppdienst. Alle Preise
            auf Anfrage und individuell kalkuliert.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {pakete.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 0.1}>
              <div
                className={cn(
                  "relative rounded-2xl p-7 border transition-all duration-300 cursor-default h-full flex flex-col",
                  p.featured
                    ? "bg-blue-50 border-blue-200 shadow-soft-lg ring-1 ring-blue-200"
                    : "bg-white border-slate-200 shadow-soft hover:shadow-soft-lg"
                )}
              >
                {p.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-700 text-white text-xs font-semibold shadow-primary">
                      {p.badge}
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-slate-900 font-bold text-xl mb-0.5">{p.name}</h3>
                  <p className="text-blue-700 text-xs font-semibold">{p.subtitle}</p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">{p.description}</p>

                <ul className="space-y-2.5 mb-7 flex-1" role="list">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className={cn("w-4 h-4 flex-shrink-0 mt-0.5", p.featured ? "text-blue-700" : "text-emerald-600")}
                        aria-hidden="true"
                      />
                      <span className="text-slate-600 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.ctaHref}
                  className={cn(
                    "flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer",
                    p.featured
                      ? "bg-blue-700 hover:bg-blue-800 text-white shadow-primary"
                      : "bg-white border border-slate-200 text-slate-900 hover:border-blue-200 hover:bg-blue-50"
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
            Alle Preise auf Anfrage. Kostenlose und unverbindliche Beratung.{" "}
            <Link href="/kontakt" className="text-blue-700 hover:text-blue-800 transition-colors cursor-pointer underline underline-offset-2 font-medium">
              Jetzt Kontakt aufnehmen
            </Link>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
