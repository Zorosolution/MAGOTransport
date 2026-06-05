import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { Phone, Clock, MapPin, Shield, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Abschleppdienst & Pannenhilfe",
  description: "MAGOTransport Abschleppdienst: 24/7 Pannenhilfe, Fahrzeugbergung und Abschleppdienst in Österreich und Deutschland. Ø 28 Minuten Reaktionszeit. Jetzt anrufen!",
  keywords: ["Abschleppdienst", "Pannenhilfe", "Fahrzeugbergung", "24/7 Abschleppdienst", "Autopanne", "Abschleppen Wien", "Pannendienst Österreich"],
};

const leistungen = [
  { icon: "🚨", title: "Pannenhilfe",        desc: "Soforthilfe bei Reifenpanne, Motorschaden, Startproblemen oder leerem Akku direkt am Fahrzeug." },
  { icon: "🏗️", title: "Abschleppdienst",   desc: "Professionelles Abschleppen auf sicherem Plateau oder Haken — schonend für Ihr Fahrzeug." },
  { icon: "🚗", title: "Fahrzeugbergung",    desc: "Bergung von Fahrzeugen nach Unfällen, aus Gräben oder von unzugänglichem Gelände." },
  { icon: "🔧", title: "Leichte Reparaturen",desc: "Kleine Reparaturen direkt vor Ort: Reifenwechsel, Starthilfe, Kraftstoff bringen." },
  { icon: "🚐", title: "Fahrzeugtransport",  desc: "Transport defekter Fahrzeuge zu Werkstätten, Händlern oder an Ihren Wunschort." },
  { icon: "🌍", title: "DACH-Einsatzgebiet", desc: "Einsätze in Österreich, Deutschland und der Schweiz — mit starkem Partnernetzwerk." },
];

export default function AbschleppdienstPage() {
  return (
    <div className="min-h-screen">
      {/* Notfall-Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-amber-500 text-black py-2.5 px-4 text-center text-sm font-bold flex items-center justify-center gap-3">
        <span className="animate-pulse">🚨</span>
        <span>24/7 Notfall-Hotline:</span>
        <a href="tel:+43800626424" className="underline text-black font-black text-base hover:no-underline">
          +43 800 626 424
        </a>
        <span>— Wir sind sofort für Sie da!</span>
      </div>

      <div className="mt-10">
        <PageHero
          badge="24/7 Notdienst"
          badgeColor="orange"
          orbColor="orange"
          title={<>Abschleppdienst & Pannenhilfe – <span className="gradient-text-amber">rund um die Uhr</span></>}
          description="Eine Panne oder ein Unfall kann jeden treffen. MAGOTransport ist Ihr zuverlässiger Notfallpartner — 365 Tage, 24 Stunden täglich, im gesamten DACH-Raum."
        />
      </div>

      {/* Sofortanruf-Karte */}
      <section className="py-12" aria-label="Sofortanruf">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <div className="glass rounded-3xl p-8 border border-amber-500/30 text-center glow-amber">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-500/50 flex items-center justify-center mx-auto mb-5 pulse-amber" aria-hidden="true">
                <Phone className="w-8 h-8 text-amber-400" />
              </div>
              <p className="text-slate-400 text-sm mb-2">Jetzt anrufen — sofort verbunden</p>
              <a
                href="tel:+43800626424"
                className="block text-4xl font-black text-white hover:text-amber-400 transition-colors cursor-pointer mb-4"
                aria-label="Notfall-Hotline anrufen"
              >
                +43 800 626 424
              </a>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 mb-5">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />24/7 erreichbar</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />Ø 28 Min. Reaktionszeit</span>
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />Vollversichert</span>
              </div>
              <a
                href="tel:+43800626424"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-base transition-all cursor-pointer glow-amber"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Jetzt anrufen
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-20 border-t border-white/8" aria-labelledby="asd-leistungen-heading">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 id="asd-leistungen-heading" className="text-3xl font-bold text-white">Unser Notdienst-Angebot</h2>
            <p className="text-slate-400 mt-2">Alles was Sie in einer Notsituation brauchen — aus einer Hand.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {leistungen.map((l, i) => (
              <AnimatedSection key={l.title} delay={i * 0.07}>
                <article className="glass rounded-2xl p-6 border border-amber-500/15 hover:border-amber-500/30 transition-all duration-300 h-full">
                  <span className="text-3xl mb-3 block" aria-hidden="true">{l.icon}</span>
                  <h3 className="text-white font-semibold mb-2">{l.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{l.desc}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section id="pannenhilfe" className="py-20 border-t border-white/8" aria-labelledby="ablauf-heading">
        <GradientOrb color="orange" size="lg" className="-right-32 top-1/2 -translate-y-1/2 opacity-10" animate={false} />
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 id="ablauf-heading" className="text-3xl font-bold text-white mb-3">So funktioniert es</h2>
            <p className="text-slate-400">In 4 einfachen Schritten vom Anruf bis zur Lösung.</p>
          </AnimatedSection>
          <div className="space-y-4">
            {[
              { n: "1", t: "Anrufen",       d: "Rufen Sie unsere 24h-Hotline an: +43 800 626 424. Wir nehmen sofort ab." },
              { n: "2", t: "Standort",      d: "Teilen Sie uns Ihren Standort und das Problem mit. GPS-Ortung auf Wunsch." },
              { n: "3", t: "Wir kommen",    d: "Unser nächstgelegenes Fahrzeug bricht sofort auf. Ø 28 Minuten Ankunftszeit." },
              { n: "4", t: "Problem gelöst",d: "Pannenbehebung vor Ort oder sicherer Transport zu Ihrem Wunschziel." },
            ].map((s, i) => (
              <AnimatedSection key={s.n} delay={i * 0.1}>
                <div className="flex gap-4 glass rounded-2xl p-5 border border-amber-500/15">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-400 font-bold" aria-hidden="true">{s.n}</div>
                  <div>
                    <p className="text-white font-semibold">{s.t}</p>
                    <p className="text-slate-400 text-sm mt-0.5">{s.d}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Preise */}
      <section className="py-20 border-t border-white/8">
        <AnimatedSection className="max-w-3xl mx-auto px-6">
          <div className="glass rounded-2xl p-8 border border-white/8">
            <h2 className="text-2xl font-bold text-white mb-3">Transparente Preisgestaltung</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Unsere Einsatzpreise richten sich nach Einsatzgebiet, Fahrzeugtyp und benötigtem Service.
              Rufen Sie uns an — wir nennen Ihnen sofort einen fairen Festpreis, ohne versteckte Kosten.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Festpreise — keine versteckten Gebühren",
                "Kostenloser Kostenvoranschlag vor dem Einsatz",
                "ADAC und Versicherungsabrechnung möglich",
                "Barzahlung, Karte und Überweisung akzeptiert",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-300 text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+43800626424" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition-all cursor-pointer">
                <Phone className="w-4 h-4" aria-hidden="true" />Jetzt anrufen
              </a>
              <Link href="/anfrage?typ=abschleppdienst" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass border border-white/12 text-white font-medium text-sm hover:border-white/25 transition-all cursor-pointer">
                Online anfragen <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
