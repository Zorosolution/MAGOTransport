import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { ArrowRight, Shield, Award, Users, Target } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über MAGOTransport",
  description: "MAGOTransport – Ihr Transportunternehmen mit über 15 Jahren Erfahrung in Österreich und Europa. Zuverlässigkeit, Qualität und persönlicher Service stehen bei uns an erster Stelle.",
};

const werte = [
  { icon: Shield, title: "Zuverlässigkeit", desc: "98,9% aller Aufträge werden pünktlich und unversehrt zugestellt. Diese Quote ist unser Versprechen.", color: "blue" },
  { icon: Target, title: "Kundenorientierung", desc: "Jeder Auftrag ist einzigartig. Wir bieten maßgeschneiderte Lösungen statt Einheitslösungen.", color: "purple" },
  { icon: Award, title: "Qualität & Sicherheit", desc: "Regelmäßige Schulungen, zertifizierte Fahrzeuge und strenge Qualitätskontrollen bei jedem Transport.", color: "amber" },
  { icon: Users, title: "Teamgeist", desc: "Unser eingespieltes Team aus erfahrenen Fahrern, Disponenten und Logistikern macht den Unterschied.", color: "green" },
];

const colorConf: Record<string, string> = {
  blue: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  purple: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  amber: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  green: "text-green-400 bg-green-400/10 border-green-400/20",
};

const meilensteine = [
  { jahr: "2009", ereignis: "Gründung von MAGOTransport in Wien mit 3 Fahrzeugen und einem klaren Auftrag: Zuverlässigkeit." },
  { jahr: "2013", ereignis: "Erweiterung auf internationale Transporte. Erstes Partnernetzwerk in 8 europäischen Ländern." },
  { jahr: "2016", ereignis: "Einführung des 24/7-Abschleppdienstes und Pannenhilfe-Bereichs." },
  { jahr: "2018", ereignis: "Bezug der modernen Logistikzentrale in Wien-Liesing mit 8.500 m² Lagerfläche." },
  { jahr: "2021", ereignis: "Fuhrpark-Erweiterung auf 38 Fahrzeuge. Einführung des digitalen GPS-Trackings." },
  { jahr: "2024", ereignis: "Über 1.200 aktive Kundschaftsunternehmen. Partnernetz in 30+ Ländern weltweit." },
];

const team = [
  { name: "Mario Gomez", role: "Geschäftsführer & Gründer", avatar: "MG", color: "from-blue-400 to-blue-600", bio: "15+ Jahre Erfahrung in der Transportlogistik. Gründete MAGOTransport 2009 aus der Überzeugung, dass Zuverlässigkeit im Transport keine Kompromisse kennt." },
  { name: "Anna Kovačević", role: "Leiterin Disposition", avatar: "AK", color: "from-purple-400 to-purple-600", bio: "Spezialistin für internationale Transportplanung und Zollabwicklung. Koordiniert täglich über 150 Fahrten." },
  { name: "Bernhard Steiner", role: "Fuhrparkleiter", avatar: "BS", color: "from-green-400 to-green-600", bio: "KFZ-Meister und Logistikfachmann. Verantwortlich für Wartung, TÜV-Zertifizierungen und Fahrerschulungen." },
  { name: "Sandra Preisinger", role: "Kundenbetreuung", avatar: "SP", color: "from-amber-400 to-amber-600", bio: "Erste Ansprechpartnerin für Firmen- und Geschäftskunden. Spezialisiert auf maßgeschneiderte Logistiklösungen." },
];

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        badge="Über MAGOTransport"
        badgeColor="purple"
        orbColor="purple"
        title={<>Seit 2009 Ihr Partner für <span className="gradient-text">Transport & Logistik</span></>}
        description="MAGOTransport steht für Zuverlässigkeit, Qualität und persönlichen Service — von Wien aus tätig für ganz Österreich und Europa. Lernen Sie uns kennen."
      />

      {/* Geschichte */}
      <section className="py-20" aria-labelledby="geschichte-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4 block">Unsere Geschichte</span>
              <h2 id="geschichte-heading" className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                Gegründet aus Überzeugung –<br />gewachsen durch Vertrauen
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Als Mario Gomez MAGOTransport 2009 in Wien gründete, hatte er eine klare Vision:
                Ein Transportunternehmen, das Verlässlichkeit nicht nur verspricht, sondern lebt.
                Mit 3 Fahrzeugen und einem kleinen Team begann die Erfolgsgeschichte.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Heute zählen wir 38 Fahrzeuge, über 50 Mitarbeiterinnen und Mitarbeiter und
                mehr als 1.200 aktive Kunden — von kleinen Handwerksbetrieben bis zu
                internationalen Industrieunternehmen.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15} direction="left">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "15+", label: "Jahre Erfahrung" },
                  { value: "38+", label: "Fahrzeuge" },
                  { value: "1.200+", label: "Kunden" },
                  { value: "30+", label: "Partnerländer" },
                ].map(({ value, label }) => (
                  <div key={label} className="glass rounded-2xl p-5 border border-white/8 text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">{value}</div>
                    <div className="text-slate-500 text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Unsere Werte */}
      <section className="py-20 border-t border-white/8" aria-labelledby="werte-heading">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 id="werte-heading" className="text-3xl font-bold text-white mb-3">Unsere Unternehmenswerte</h2>
            <p className="text-slate-400">Was uns täglich antreibt und was unsere Kunden von uns erwarten können.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {werte.map((w, i) => {
              const Icon = w.icon;
              return (
                <AnimatedSection key={w.title} delay={i * 0.08}>
                  <article className="glass rounded-2xl p-6 border border-white/8 h-full">
                    <div className={`inline-flex w-10 h-10 rounded-xl border items-center justify-center mb-4 ${colorConf[w.color]}`} aria-hidden="true">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{w.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{w.desc}</p>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 border-t border-white/8" aria-labelledby="team-heading">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 id="team-heading" className="text-3xl font-bold text-white mb-3">Unser Team</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Die Menschen hinter MAGOTransport — erfahren, engagiert, zuverlässig.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 0.08}>
                <article className="glass rounded-2xl p-6 border border-white/8 text-center">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white text-sm font-bold mx-auto mb-4`} aria-hidden="true">{m.avatar}</div>
                  <p className="text-white font-semibold">{m.name}</p>
                  <p className="text-blue-400 text-xs mb-3">{m.role}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{m.bio}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Meilensteine */}
      <section className="py-20 border-t border-white/8" aria-labelledby="meilensteine-heading">
        <GradientOrb color="blue" size="lg" className="-left-32 top-1/2 -translate-y-1/2 opacity-10" animate={false} />
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 id="meilensteine-heading" className="text-3xl font-bold text-white mb-3">Unsere Meilensteine</h2>
          </AnimatedSection>
          <ol className="relative border-l border-white/10 space-y-8 pl-8">
            {meilensteine.map((m, i) => (
              <AnimatedSection key={m.jahr} delay={i * 0.1} direction="left">
                <li className="relative">
                  <div className="absolute -left-[2.15rem] w-4 h-4 rounded-full bg-blue-600 border-4 border-black" aria-hidden="true" />
                  <time className="text-xs font-semibold text-blue-400 uppercase tracking-widest">{m.jahr}</time>
                  <p className="text-slate-300 mt-1 text-sm leading-relaxed">{m.ereignis}</p>
                </li>
              </AnimatedSection>
            ))}
          </ol>
        </div>
      </section>

      {/* Karriere */}
      <section id="karriere" className="py-20 border-t border-white/8">
        <AnimatedSection className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Werden Sie Teil des Teams</h2>
          <p className="text-slate-400 mb-8">Wir suchen engagierte Berufskraftfahrer, Disponenten und Logistikfachkräfte. MAGOTransport bietet einen sicheren Arbeitsplatz, faire Bezahlung und ein starkes Team.</p>
          <Link href="/kontakt?betreff=Karriere" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all cursor-pointer">
            Jetzt bewerben <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
