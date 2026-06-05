"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Star, Quote } from "lucide-react";

const bewertungen = [
  {
    text: "MAGOTransport hat unsere Logistik komplett verändert. Pünktliche Lieferungen, transparente Kommunikation und ein professionelles Team. Wir arbeiten seit 3 Jahren zusammen — und das aus gutem Grund.",
    name: "Thomas Bauer",
    title: "Geschäftsführer",
    company: "Bauer Industrie GmbH",
    avatar: "TB",
    avatarColor: "from-blue-400 to-blue-600",
    rating: 5,
  },
  {
    text: "Der Abschleppdienst war innerhalb von 25 Minuten bei uns. Sehr freundliches und kompetentes Personal, das Fahrzeug wurde schonend transportiert. Absolut empfehlenswert!",
    name: "Andrea Hofer",
    title: "Privatkundin",
    company: "Wien",
    avatar: "AH",
    avatarColor: "from-purple-400 to-purple-600",
    rating: 5,
  },
  {
    text: "Internationale Transporte für unsere Exportwaren laufen seit dem Wechsel zu MAGOTransport reibungslos. Die Zuverlässigkeit und die digitale Sendungsverfolgung sind erstklassig.",
    name: "Klaus Steinberger",
    title: "Logistikleiter",
    company: "AlpineExport AG",
    avatar: "KS",
    avatarColor: "from-green-400 to-green-600",
    rating: 5,
  },
  {
    text: "Für unsere sensiblen Pharmaprodukte brauchen wir einen zuverlässigen Kühllogistikpartner. MAGOTransport erfüllt alle Anforderungen und ist stets pünktlich. Sehr zufrieden!",
    name: "Dr. Maria Kreuzinger",
    title: "Supply Chain Managerin",
    company: "PharmaAlpin Österreich",
    avatar: "MK",
    avatarColor: "from-amber-400 to-amber-600",
    rating: 5,
  },
  {
    text: "Expresslieferung am Samstag, Anlieferung Montag früh — MAGOTransport hat das problemlos umgesetzt. Der Kundenservice war immer erreichbar. Top Leistung!",
    name: "Markus Fellner",
    title: "E-Commerce Manager",
    company: "ShopAlpin Online",
    avatar: "MF",
    avatarColor: "from-rose-400 to-rose-600",
    rating: 5,
  },
  {
    text: "Pannenhilfe auf der Autobahn — MAGOTransport war in 22 Minuten vor Ort. Professionell, freundlich, schnell. In einer Stresssituation genau das, was man braucht.",
    name: "Stefan Grünwald",
    title: "LKW-Fahrer",
    company: "Spedition Grünwald",
    avatar: "SG",
    avatarColor: "from-teal-400 to-teal-600",
    rating: 5,
  },
];

function BewertungsKarte({ b, index }: { b: typeof bewertungen[0]; index: number }) {
  return (
    <AnimatedSection delay={index * 0.07}>
      <article className="group glass rounded-2xl p-6 border border-white/8 hover:border-white/15 transition-all duration-300 h-full flex flex-col cursor-default">
        <div className="flex gap-1 mb-4" role="img" aria-label="5 Sterne Bewertung">
          {Array.from({ length: b.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
          ))}
        </div>
        <Quote className="w-5 h-5 text-white/10 mb-3" aria-hidden="true" />
        <blockquote className="text-slate-300 text-sm leading-relaxed flex-1 mb-5">
          &ldquo;{b.text}&rdquo;
        </blockquote>
        <footer className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-full bg-gradient-to-br ${b.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
            aria-hidden="true"
          >
            {b.avatar}
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-none mb-0.5">{b.name}</p>
            <p className="text-slate-500 text-xs">{b.title} · {b.company}</p>
          </div>
        </footer>
      </article>
    </AnimatedSection>
  );
}

export function Testimonials() {
  return (
    <section id="kundenstimmen" className="relative py-28 overflow-hidden" aria-labelledby="bewertungen-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4 px-3 py-1 glass rounded-full border border-amber-500/20">
            Kundenstimmen
          </span>
          <h2 id="bewertungen-heading" className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">
            Was unsere Kunden{" "}
            <span className="gradient-text-amber">über uns sagen</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Über 1.200 zufriedene Kunden vertrauen MAGOTransport — von Privatpersonen
            bis zu internationalen Industrieunternehmen.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bewertungen.map((b, i) => (
            <BewertungsKarte key={b.name} b={b} index={i} />
          ))}
        </div>

        {/* Bewertungs-Zusammenfassung */}
        <AnimatedSection className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">4,9</div>
            <div className="flex gap-1 justify-center mt-1" aria-label="4,9 von 5 Sterne">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
            </div>
            <p className="text-slate-500 text-xs mt-1">Google Bewertung</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" aria-hidden="true" />
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">1.200+</div>
            <p className="text-slate-500 text-xs mt-2">Zufriedene Kunden</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" aria-hidden="true" />
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">98%</div>
            <p className="text-slate-500 text-xs mt-2">Weiterempfehlungsrate</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
