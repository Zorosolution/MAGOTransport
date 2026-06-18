"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Star, Quote } from "lucide-react";

const bewertungen = [
  {
    text: "MAGOTransport übernimmt die Auslieferung an unsere Kunden in Wien und ganz Österreich. Die Ware wird bei uns abgeholt und zugestellt, und wir bekommen nach jeder Tour eine Rückmeldung.",
    name: "Thomas Bauer",
    title: "Geschäftsführer",
    company: "Partnerunternehmen, Wien",
    avatar: "TB",
    avatarColor: "from-blue-400 to-blue-600",
    rating: 5,
  },
  {
    text: "Unser Auto ist liegengeblieben. MAGOTransport hat es mit dem Anhänger abgeschleppt und in die Werkstatt gebracht. Schonend und unkompliziert.",
    name: "Andrea Hofer",
    title: "Privatkundin",
    company: "Wien",
    avatar: "AH",
    avatarColor: "from-indigo-400 to-indigo-600",
    rating: 5,
  },
  {
    text: "Seit wir die Zustellung an MAGOTransport ausgelagert haben, läuft die Auslieferung an unsere Kunden ohne Probleme. Gut erreichbar und verlässlich.",
    name: "Klaus Steinberger",
    title: "Betriebsleiter",
    company: "Partnerunternehmen, Österreich",
    avatar: "KS",
    avatarColor: "from-emerald-400 to-emerald-600",
    rating: 5,
  },
  {
    text: "Wir liefern täglich an viele Kunden in Wien. MAGOTransport holt die Ware bei uns ab und stellt sie zu. So müssen wir uns um die Zustellung nicht selbst kümmern.",
    name: "Maria Kreuzinger",
    title: "Inhaberin",
    company: "Handelsbetrieb, Wien",
    avatar: "MK",
    avatarColor: "from-amber-400 to-amber-600",
    rating: 5,
  },
  {
    text: "Unsere Bestellungen werden noch am selben Tag zugestellt. Die Abstimmung mit dem Team klappt gut, Nachfragen werden schnell beantwortet.",
    name: "Markus Fellner",
    title: "Onlinehandel",
    company: "Partnerunternehmen, Wien",
    avatar: "MF",
    avatarColor: "from-rose-400 to-rose-600",
    rating: 5,
  },
  {
    text: "Ich musste mein Auto transportieren lassen. MAGOTransport hat es mit dem großen Anhänger geholt und sicher verzurrt gebracht. Genau wie besprochen.",
    name: "Stefan Grünwald",
    title: "Privatkunde",
    company: "Österreich",
    avatar: "SG",
    avatarColor: "from-teal-400 to-teal-600",
    rating: 5,
  },
];

function BewertungsKarte({ b, index }: { b: typeof bewertungen[0]; index: number }) {
  return (
    <AnimatedSection delay={index * 0.06}>
      <article className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-soft hover:shadow-soft-lg transition-all duration-300 h-full flex flex-col cursor-default">
        <div className="flex gap-1 mb-4" role="img" aria-label="5 von 5 Sternen">
          {Array.from({ length: b.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
          ))}
        </div>
        <Quote className="w-5 h-5 text-slate-200 mb-3" aria-hidden="true" />
        <blockquote className="text-slate-700 text-sm leading-relaxed flex-1 mb-5">
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
            <p className="text-slate-900 text-sm font-semibold leading-none mb-0.5">{b.name}</p>
            <p className="text-slate-500 text-xs">{b.title} · {b.company}</p>
          </div>
        </footer>
      </article>
    </AnimatedSection>
  );
}

export function Testimonials() {
  return (
    <section id="kundenstimmen" className="relative py-28 overflow-hidden bg-slate-50 border-y border-slate-200" aria-labelledby="bewertungen-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-amber-700 uppercase tracking-widest mb-4 px-3 py-1 bg-amber-50 rounded-full border border-amber-100">
            Kundenstimmen
          </span>
          <h2 id="bewertungen-heading" className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-5">
            Was unsere Kunden{" "}
            <span className="gradient-text-amber">über uns sagen</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Über 2000 zufriedene Kunden, von Partnerunternehmen, die ihre Auslieferung an uns
            übergeben, bis zu Privatpersonen beim Abschleppdienst.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bewertungen.map((b, i) => (
            <BewertungsKarte key={b.name} b={b} index={i} />
          ))}
        </div>

        {/* Zusammenfassung */}
        <AnimatedSection className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700">2000+</div>
            <p className="text-slate-500 text-xs mt-2">Zufriedene Kunden</p>
          </div>
          <div className="w-px h-12 bg-slate-200 hidden sm:block" aria-hidden="true" />
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700">seit 2007</div>
            <p className="text-slate-500 text-xs mt-2">In Wien tätig</p>
          </div>
          <div className="w-px h-12 bg-slate-200 hidden sm:block" aria-hidden="true" />
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700">Wien</div>
            <p className="text-slate-500 text-xs mt-2">und ganz Österreich</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
