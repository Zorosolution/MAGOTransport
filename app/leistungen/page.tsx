import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { ArrowRight, Check, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "MAGOTransport Leistungen: Nationale und internationale Transporte, Expresslieferungen, Lagerlogistik, Abschleppdienst und Fahrzeugbergung. Ihr Transportunternehmen in Österreich.",
  keywords: ["Transportunternehmen", "Gütertransport", "Lagerlogistik", "Abschleppdienst", "Expresslieferung", "internationale Transporte"],
};

const leistungsGruppen = [
  {
    id: "national",
    label: "Nationale Transporte",
    icon: "🗺️",
    color: "blue",
    headline: "Zuverlässige Transporte in ganz Österreich und Deutschland",
    description: "MAGOTransport ist Ihr professioneller Transportpartner für nationale Gütertransporte. Mit unserer modernen Fahrzeugflotte und erfahrenen Fahrern liefern wir Ihre Waren pünktlich und sicher ans Ziel — von Wien bis Bregenz, von Graz bis Innsbruck.",
    features: [
      "Gesamtes Bundesgebiet (Österreich & Deutschland)",
      "Abholung und Zustellung innerhalb von 24–48 Stunden",
      "GPS-Echtzeit-Tracking für alle Sendungen",
      "Haftpflichtversicherung bis €1 Mio. inkl.",
      "Lieferbestätigung digital und schriftlich",
      "Stückgut, Teilladung und Komplettladung",
      "Montag bis Freitag regulärer Betrieb",
      "Samstagslieferungen auf Anfrage",
    ],
  },
  {
    id: "international",
    label: "Internationale Transporte",
    icon: "🌍",
    color: "purple",
    headline: "Europaweite Transportlösungen – sicher und termingerecht",
    description: "Wir transportieren Ihre Güter in alle europäischen Länder. Mit unserem umfangreichen Partnernetzwerk, vollständiger Zollabwicklung und mehrsprachigem Kundenservice sind Ihre internationalen Transporte in den besten Händen.",
    features: [
      "Alle EU-Länder und Nachbarstaaten",
      "Komplette Zollabwicklung und Dokumentation",
      "Partnernetz in 30+ Ländern",
      "Mehrsprachiger Kundenservice (DE/EN/HR)",
      "Cargo-Versicherung für alle internationalen Sendungen",
      "Avisierungsservice beim Empfänger",
      "Spediteur-Netzwerk für außereuropäische Ziele",
      "Incoterms-Beratung inklusive",
    ],
  },
  {
    id: "express",
    label: "Express- & Sonderfahrten",
    icon: "⚡",
    color: "amber",
    headline: "Wenn es schnell gehen muss – wir sind sofort bereit",
    description: "Dringende Güter, kurzfristige Aufträge oder sensible Direkttransporte: MAGOTransport's Expressdienst setzt Ihre Prioritäten ohne Kompromisse um. Direkttransport ohne Umschlag, auch nachts und am Wochenende.",
    features: [
      "Expresslieferung innerhalb von 4–8 Stunden (national)",
      "24h-Lieferung europaweit möglich",
      "Direktfahrt ohne Umschlag (Direkttransport)",
      "Nacht- und Wochenendfahrten",
      "Persönliche Auftragsbetreuung",
      "Echtzeit-GPS-Tracking mit Live-Updates",
      "Sicherheitstransporte für wertvolle Güter",
      "Kurierdienst für kleine Sendungen",
    ],
  },
  {
    id: "lager",
    label: "Lagerlogistik",
    icon: "🏭",
    color: "green",
    headline: "Moderne Lagerhaltung und Warenmanagement auf 8.500 m²",
    description: "Unsere modernen Lagerflächen in Wien bieten optimale Konditionen für Ihre Güter. Von der Einlagerung bis zur Kommissionierung und Distribution übernehmen wir alle Aufgaben — mit digitalem Warenmanagementsystem und vollständiger Rückverfolgbarkeit.",
    features: [
      "8.500 m² moderne Lagerfläche in Wien",
      "Deckenhöhe bis 12 Meter",
      "Digitales Warenmanagementsystem (WMS)",
      "Einlagerung, Kommissionierung, Distribution",
      "Kühl- und Tiefkühlbereiche vorhanden",
      "Inventur und Bestandsführung",
      "Cross-Docking und Umschlagsservice",
      "Flexible Laufdauer (kurz- oder langfristig)",
    ],
  },
  {
    id: "fahrzeuge",
    label: "Fahrzeugtransporte",
    icon: "🚗",
    color: "blue",
    headline: "Sicherer Transport von PKW, LKW und Sonderfahrzeugen",
    description: "Ob Neuwagen für Händler, Flottenfahrzeuge für Unternehmen oder private PKW — MAGOTransport transportiert Ihre Fahrzeuge sicher, schonend und versichert auf spezialisierten Autotransportern.",
    features: [
      "Bis zu 8 PKW gleichzeitig",
      "Offen- und Geschlossentransporter verfügbar",
      "Vollkaskoversicherung für alle transportierten Fahrzeuge",
      "Autohändler, Flotten, Privatkunden",
      "Bestandsnahmefoto vor und nach Transport",
      "LKW und Nutzfahrzeuge bis 12t",
      "Oldtimer-Transport auf Anfrage (Spezialbehandlung)",
    ],
  },
];

const colorConf: Record<string, { badge: string; border: string }> = {
  blue:   { badge: "text-blue-400 bg-blue-400/10 border-blue-400/20", border: "border-blue-500/20" },
  purple: { badge: "text-purple-400 bg-purple-400/10 border-purple-400/20", border: "border-purple-500/20" },
  amber:  { badge: "text-amber-400 bg-amber-400/10 border-amber-400/20", border: "border-amber-500/20" },
  green:  { badge: "text-green-400 bg-green-400/10 border-green-400/20", border: "border-green-500/20" },
};

export default function LeistungenPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        badge="Unsere Leistungen"
        badgeColor="sky"
        orbColor="blue"
        title={<>Transport & Logistik <span className="gradient-text">aus einer Hand</span></>}
        description="Von nationalen Gütertransporten bis zum 24/7-Abschleppdienst — MAGOTransport bietet Ihnen das komplette Spektrum professioneller Transport- und Logistikdienstleistungen für Österreich und Europa."
      />

      <section className="py-20" aria-label="Leistungsübersicht">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {leistungsGruppen.map((lg, i) => {
            const cfg = colorConf[lg.color];
            return (
              <div id={lg.id} key={lg.id}><AnimatedSection>
                <article className={`glass rounded-3xl p-8 md:p-10 border ${cfg.border} transition-all duration-300`}>
                  <div className="grid md:grid-cols-5 gap-8">
                    <div className="md:col-span-2">
                      <span className="text-4xl mb-4 block" aria-hidden="true">{lg.icon}</span>
                      <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 glass rounded-full border mb-4 ${cfg.badge}`}>
                        {lg.label}
                      </span>
                      <h2 className="text-2xl font-bold text-white mb-3 leading-snug">{lg.headline}</h2>
                      <p className="text-slate-400 text-sm leading-relaxed mb-5">{lg.description}</p>
                      <Link
                        href="/anfrage"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all cursor-pointer"
                      >
                        Anfrage stellen <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">Im Leistungsumfang enthalten:</h3>
                      <ul className="grid sm:grid-cols-2 gap-2.5" role="list">
                        {lg.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-slate-300 text-sm">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </AnimatedSection></div>
            );
          })}
        </div>
      </section>

      {/* Notfall CTA */}
      <section className="py-20 border-t border-white/8">
        <GradientOrb color="blue" size="lg" className="-right-32 top-1/2 -translate-y-1/2 opacity-10" animate={false} />
        <AnimatedSection className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Sofort Hilfe benötigt?</h2>
          <p className="text-slate-400 mb-8">Bei Pannenhilfe, Unfallbergung oder dringenden Transporten: Unsere Notfall-Hotline ist rund um die Uhr besetzt.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+43800626424" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold transition-all cursor-pointer glow-amber">
              <Phone className="w-4 h-4" aria-hidden="true" />+43 800 626 424
            </a>
            <Link href="/anfrage" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-white/12 text-white font-medium hover:border-white/25 transition-all cursor-pointer">
              Angebot anfordern
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
