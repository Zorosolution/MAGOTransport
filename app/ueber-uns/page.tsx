import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ArrowRight, Shield, Award, Users, Target } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über MAGOTransport",
  description: "MAGOTransport aus Wien, gegründet 2007. Auslieferungspartner für Unternehmen in Wien und ganz Österreich, dazu Abschleppdienst und Fahrzeugtransport.",
  alternates: { canonical: "/ueber-uns" },
};

const werte = [
  { icon: Shield, title: "Verlässliche Zustellung", desc: "Wir holen die Ware ab und stellen sie zu. Nach jeder Tour gibt es eine Rückmeldung an den Partner.", color: "blue" },
  { icon: Target, title: "Klare Absprachen", desc: "Wir stimmen Abholzeiten, Gebiet und Touren mit dem Partnerunternehmen ab. Ohne Überraschungen.", color: "purple" },
  { icon: Award, title: "Eigener Fuhrpark", desc: "15 Lkw und zwei große Anhänger, regelmäßig gewartet. Wir fahren mit eigenen Fahrzeugen und eigenen Fahrern.", color: "amber" },
  { icon: Users, title: "Eingespieltes Team", desc: "Rund 15 Mitarbeiter, die die Strecken in Wien und ganz Österreich kennen.", color: "green" },
];

const colorConf: Record<string, string> = {
  blue: "text-blue-700 bg-blue-50 border-blue-100",
  purple: "text-indigo-700 bg-indigo-50 border-indigo-100",
  amber: "text-amber-700 bg-amber-50 border-amber-100",
  green: "text-emerald-700 bg-emerald-50 border-emerald-100",
};

const meilensteine = [
  { jahr: "2007", ereignis: "Gründung von MAGOTransport in Wien als Auslieferungspartner für Unternehmen." },
  { jahr: "seit 2007", ereignis: "Aufbau fester Partnerschaften mit Unternehmen in Wien und ganz Österreich." },
  { jahr: "Fuhrpark", ereignis: "Wachstum auf 15 Lkw für die tägliche Auslieferung." },
  { jahr: "Abschleppdienst", ereignis: "Zwei große Anhänger für Abschleppdienst und Fahrzeugtransport." },
  { jahr: "heute", ereignis: "Rund 15 Mitarbeiter und über 2000 zufriedene Kunden." },
];

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        badge="Über MAGOTransport"
        badgeColor="purple"
        orbColor="purple"
        title={<>Seit 2007 Ihr <span className="gradient-text">Auslieferungspartner in Wien</span></>}
        description="MAGOTransport ist Auslieferungspartner für Unternehmen in Wien und ganz Österreich. Wir holen Ware im Partnerlager ab und stellen sie an die Kunden zu. Dazu Abschleppdienst und Fahrzeugtransport."
      />

      {/* Geschichte */}
      <section className="py-20" aria-labelledby="geschichte-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-widest mb-4 block">Unsere Geschichte</span>
              <h2 id="geschichte-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Seit 2007 in Wien,<br />Tag für Tag auf der Straße
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                MAGOTransport wurde 2007 in Wien gegründet. Wir sind Auslieferungspartner für andere
                Unternehmen: Wir fahren zum Lager des Partnerbetriebs, holen die Ware ab und liefern
                sie an dessen Kunden aus. Ein eigenes Lager haben wir nicht.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Heute fahren wir mit 15 Lkw und zwei großen Anhängern, sind rund 15 Mitarbeiter und
                haben über 2000 zufriedene Kunden, von kleinen Betrieben bis zu größeren Unternehmen
                in Wien und ganz Österreich.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15} direction="left">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "2007", label: "Gegründet" },
                  { value: "15", label: "Lkw im Fuhrpark" },
                  { value: "15", label: "Mitarbeiter" },
                  { value: "2000+", label: "Zufriedene Kunden" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-soft">
                    <div className="text-2xl font-bold text-blue-700 mb-1">{value}</div>
                    <div className="text-slate-500 text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Unsere Werte */}
      <section className="py-20 border-t border-slate-200 bg-slate-50" aria-labelledby="werte-heading">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 id="werte-heading" className="text-3xl font-bold text-slate-900 mb-3">Unsere Unternehmenswerte</h2>
            <p className="text-slate-600">Was uns täglich antreibt und was unsere Kunden von uns erwarten können.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {werte.map((w, i) => {
              const Icon = w.icon;
              return (
                <AnimatedSection key={w.title} delay={i * 0.08}>
                  <article className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft h-full">
                    <div className={`inline-flex w-10 h-10 rounded-xl border items-center justify-center mb-4 ${colorConf[w.color]}`} aria-hidden="true">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-slate-900 font-semibold mb-2">{w.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{w.desc}</p>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meilensteine */}
      <section className="py-20 border-t border-slate-200 bg-slate-50" aria-labelledby="meilensteine-heading">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 id="meilensteine-heading" className="text-3xl font-bold text-slate-900 mb-3">Unsere Meilensteine</h2>
          </AnimatedSection>
          <ol className="relative border-l border-slate-200 space-y-8 pl-8">
            {meilensteine.map((m, i) => (
              <AnimatedSection key={m.jahr} delay={i * 0.1} direction="left">
                <li className="relative">
                  <div className="absolute -left-[2.15rem] w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-50" aria-hidden="true" />
                  <time className="text-xs font-semibold text-blue-700 uppercase tracking-widest">{m.jahr}</time>
                  <p className="text-slate-700 mt-1 text-sm leading-relaxed">{m.ereignis}</p>
                </li>
              </AnimatedSection>
            ))}
          </ol>
        </div>
      </section>

      {/* Karriere */}
      <section id="karriere" className="py-20 border-t border-slate-200">
        <AnimatedSection className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Mitfahren bei MAGOTransport</h2>
          <p className="text-slate-600 mb-8">Wir suchen Fahrer für die Auslieferung in Wien und ganz Österreich. Wenn Sie die Strecken kennen und verlässlich arbeiten, melden Sie sich bei uns.</p>
          <Link href="/kontakt?betreff=Karriere" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-all cursor-pointer shadow-primary">
            Jetzt bewerben <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
