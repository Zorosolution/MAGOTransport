import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Phone, Clock, MapPin, Shield, Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import truckImg from "../../public/mago_claude_ready_v2/01_hero_abschleppwagen_gelb.jpg";

export const metadata: Metadata = {
  title: "Abschleppdienst und Fahrzeugtransport",
  description: "MAGOTransport Abschleppdienst in Wien und ganz Österreich. Mit unseren großen Anhängern schleppen und transportieren wir Autos. Ausland nur auf Anfrage. Jetzt anrufen.",
  keywords: ["Abschleppdienst Wien", "Auto abschleppen Wien", "Fahrzeugtransport Wien", "Abschleppdienst Österreich", "Auto transportieren"],
};

const leistungen = [
  { icon: "🏗️", title: "Auto abschleppen",     desc: "Wir schleppen Ihr Auto mit unseren großen Anhängern ab, sicher verzurrt und schonend." },
  { icon: "🚗", title: "Fahrzeugtransport",     desc: "Wir transportieren Autos zu Werkstätten, Händlern oder an Ihren Wunschort." },
  { icon: "📍", title: "Wien und ganz Österreich",     desc: "Wir sind in Wien und ganz Österreich unterwegs und kennen die Strecken." },
  { icon: "🚚", title: "Zwei große Anhänger",   desc: "Mit unseren zwei großen Anhängern transportieren und schleppen wir Autos." },
  { icon: "🌍", title: "Ausland auf Anfrage",   desc: "In seltenen Fällen transportieren wir ein Auto auch ins Ausland, aber nur auf Anfrage." },
  { icon: "📞", title: "Einfach anrufen",       desc: "Rufen Sie uns an. Wir besprechen Termin, Ort und Ablauf direkt mit Ihnen." },
];

export default function AbschleppdienstPage() {
  return (
    <div className="min-h-screen">
      {/* Abschleppdienst-Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-amber-500 text-slate-950 py-2.5 px-4 text-center text-sm font-bold flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span className="animate-pulse" aria-hidden="true">🏗️</span>
        <span>Abschleppdienst in Wien und ganz Österreich:</span>
        <a href="tel:+4369911147070" className="underline text-slate-950 font-black text-base hover:no-underline">
          +43 699 11147070
        </a>
        <span>Rufen Sie uns an.</span>
      </div>

      <div className="mt-10">
        <PageHero
          badge="Abschleppdienst"
          badgeColor="orange"
          orbColor="orange"
          title={<>Abschleppdienst und Fahrzeugtransport, <span className="gradient-text-amber">in Wien und ganz Österreich</span></>}
          description="Mit unseren großen Anhängern schleppen und transportieren wir Autos in Wien und ganz Österreich. In seltenen Fällen auch ins Ausland, aber nur auf Anfrage."
        />
      </div>

      {/* Sofortanruf-Karte */}
      <section className="py-12" aria-label="Sofortanruf">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 border border-amber-200 shadow-soft-lg text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-200 flex items-center justify-center mx-auto mb-5 pulse-amber" aria-hidden="true">
                <Phone className="w-8 h-8 text-amber-600" />
              </div>
              <p className="text-slate-600 text-sm mb-2">Anrufen und Auto abschleppen lassen</p>
              <a
                href="tel:+4369911147070"
                className="block text-4xl font-black text-slate-900 hover:text-amber-600 transition-colors cursor-pointer mb-4"
                aria-label="Abschleppdienst anrufen: +43 699 11147070"
              >
                +43 699 11147070
              </a>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 mb-5">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />Wien und ganz Österreich</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />Zwei große Anhänger</span>
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />Sicher verzurrt</span>
              </div>
              <a
                href="tel:+4369911147070"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-base transition-all cursor-pointer shadow-cta"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Jetzt anrufen
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Echtbild Abschleppwagen */}
      <section className="pb-8" aria-label="Unser Abschleppwagen">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-amber-200 shadow-soft-lg">
              <Image
                src={truckImg}
                alt="Gelber Abschleppwagen von MAGOTransport im Einsatz in Wien"
                fill
                sizes="(max-width: 1280px) 100vw, 1152px"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-20 border-t border-slate-200" aria-labelledby="asd-leistungen-heading">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 id="asd-leistungen-heading" className="text-3xl font-bold text-slate-900">Was wir beim Abschleppdienst machen</h2>
            <p className="text-slate-600 mt-2">Abschleppen und Transport von Autos in Wien und ganz Österreich.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {leistungen.map((l, i) => (
              <AnimatedSection key={l.title} delay={i * 0.07}>
                <article className="bg-white rounded-2xl p-6 border border-amber-100 shadow-soft hover:shadow-soft-lg hover:border-amber-200 transition-all duration-300 h-full">
                  <span className="text-3xl mb-3 block" aria-hidden="true">{l.icon}</span>
                  <h3 className="text-slate-900 font-semibold mb-2">{l.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{l.desc}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section id="pannenhilfe" className="py-20 border-t border-slate-200 bg-slate-50" aria-labelledby="ablauf-heading">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 id="ablauf-heading" className="text-3xl font-bold text-slate-900 mb-3">So funktioniert es</h2>
            <p className="text-slate-600">In vier Schritten vom Anruf bis zum Transport.</p>
          </AnimatedSection>
          <div className="space-y-4">
            {[
              { n: "1", t: "Anrufen",         d: "Rufen Sie uns an: +43 699 11147070. Wir besprechen Ihr Anliegen." },
              { n: "2", t: "Standort und Ziel", d: "Sie nennen uns den Standort des Autos und das Ziel, zum Beispiel die Werkstatt." },
              { n: "3", t: "Wir kommen vorbei", d: "Wir kommen mit dem Anhänger und verladen das Auto, sicher verzurrt." },
              { n: "4", t: "Transport",        d: "Wir bringen das Auto an den vereinbarten Ort in Wien und ganz Österreich." },
            ].map((s, i) => (
              <AnimatedSection key={s.n} delay={i * 0.1}>
                <div className="flex gap-4 bg-white rounded-2xl p-5 border border-amber-100 shadow-soft">
                  <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center flex-shrink-0 text-amber-700 font-bold" aria-hidden="true">{s.n}</div>
                  <div>
                    <p className="text-slate-900 font-semibold">{s.t}</p>
                    <p className="text-slate-600 text-sm mt-0.5">{s.d}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Preise */}
      <section className="py-20 border-t border-slate-200">
        <AnimatedSection className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-soft">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Preise auf Anfrage</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              Der Preis richtet sich nach Strecke und Ziel. Rufen Sie uns an, wir nennen Ihnen
              vorab einen Festpreis, ohne versteckte Kosten.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Festpreis ohne versteckte Gebühren",
                "Preis wird vor dem Einsatz genannt",
                "Wien und ganz Österreich",
                "Ausland nur auf Anfrage",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700 text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+4369911147070" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition-all cursor-pointer shadow-cta">
                <Phone className="w-4 h-4" aria-hidden="true" />Jetzt anrufen
              </a>
              <Link href="/anfrage?typ=abschleppdienst" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 font-semibold text-sm hover:border-blue-200 hover:bg-blue-50 transition-all cursor-pointer shadow-soft">
                Online anfragen <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
