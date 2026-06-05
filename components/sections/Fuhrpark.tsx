"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const fahrzeuge = [
  {
    type: "Sattelzug",
    count: "12",
    capacity: "bis 24t",
    desc: "Moderne Sattelzüge für großvolumige und schwere Gütertransporte europaweit.",
    color: "blue",
    specs: ["Euro 6 Motor", "GPS-Tracking", "Temperaturüberwachung"],
    icon: "🚛",
  },
  {
    type: "Kastenwagen",
    count: "8",
    capacity: "bis 3,5t",
    desc: "Flexible Kastenwagen für Expresslieferungen, Stückgut und Kurierdienste.",
    color: "purple",
    specs: ["Cargo-Zertifiziert", "Tagesmiete möglich", "Stadtlogistik"],
    icon: "🚐",
  },
  {
    type: "Abschleppfahrzeug",
    count: "6",
    capacity: "bis 12t",
    desc: "Spezialisierte Abschleppfahrzeuge für PKW, LKW und Sonderfahrzeuge.",
    color: "amber",
    specs: ["24/7 Bereitschaft", "ADAC-Partner", "Unfallbergung"],
    icon: "🏗️",
  },
  {
    type: "Kühltransporter",
    count: "4",
    capacity: "-25°C bis +25°C",
    desc: "Zertifizierte Kühltransporter für Lebensmittel, Pharma und temperaturempfindliche Güter.",
    color: "green",
    specs: ["ATP-Zertifiziert", "Temp.-Protokoll", "HACCP-konform"],
    icon: "❄️",
  },
  {
    type: "Autotransporter",
    count: "3",
    capacity: "bis 8 PKW",
    desc: "Professionelle Autotransporter für Händler, Flotten und Privatpersonen.",
    color: "blue",
    specs: ["Allwettertauglich", "Sicher verzurrt", "Versichert"],
    icon: "🚗",
  },
  {
    type: "Plateau-LKW",
    count: "5",
    capacity: "bis 20t",
    desc: "Plateaufahrzeuge für Schwertransporte, Maschinen und Baumaterial.",
    color: "purple",
    specs: ["Begleitfahrzeug möglich", "Genehmigungsservice", "Hydraulikhebearm"],
    icon: "⚙️",
  },
];

const colorConf: Record<string, { border: string; badge: string; count: string }> = {
  blue:   { border: "border-blue-500/25 hover:border-blue-500/50",   badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",   count: "text-blue-400" },
  purple: { border: "border-purple-500/25 hover:border-purple-500/50", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", count: "text-purple-400" },
  amber:  { border: "border-amber-500/25 hover:border-amber-500/50",  badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",  count: "text-amber-400" },
  green:  { border: "border-green-500/25 hover:border-green-500/50",  badge: "bg-green-500/10 text-green-400 border-green-500/20",  count: "text-green-400" },
};

export function Fuhrpark() {
  return (
    <section id="fuhrpark" className="relative py-28 overflow-hidden" aria-labelledby="fuhrpark-heading">
      <GradientOrb color="blue" size="xl" className="-left-48 top-1/2 -translate-y-1/2 opacity-10" animate={false} />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4 px-3 py-1 glass rounded-full border border-blue-500/20">
            Unser Fuhrpark
          </span>
          <h2 id="fuhrpark-heading" className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">
            Moderne Fahrzeugflotte –{" "}
            <span className="gradient-text">für jeden Transport</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Unsere Flotte von über 38 modernen Fahrzeugen ist täglich im Einsatz — von der Expresslieferung
            bis zum Schwertransport. Alle Fahrzeuge GPS-überwacht und regelmäßig gewartet.
          </p>
        </AnimatedSection>

        {/* Gesamt-Statistik */}
        <AnimatedSection className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-10">
          {[
            { value: "38+", label: "Fahrzeuge" },
            { value: "24t", label: "Max. Nutzlast" },
            { value: "100%", label: "GPS-überwacht" },
            { value: "Euro 6", label: "Abgasnorm" },
            { value: "24/7", label: "Verfügbar" },
            { value: "DACH", label: "Einsatzgebiet" },
          ].map(({ value, label }) => (
            <div key={label} className="glass rounded-xl p-3 text-center border border-white/6">
              <div className="text-lg font-bold gradient-text">{value}</div>
              <div className="text-xs text-slate-600 mt-0.5">{label}</div>
            </div>
          ))}
        </AnimatedSection>

        {/* Fahrzeug-Karten */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fahrzeuge.map((f, i) => {
            const cfg = colorConf[f.color];
            return (
              <AnimatedSection key={f.type} delay={i * 0.08}>
                <article className={`group glass rounded-2xl p-6 border ${cfg.border} transition-all duration-300 cursor-default h-full`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-3xl mb-2 block" aria-hidden="true">{f.icon}</span>
                      <h3 className="text-white font-semibold text-lg">{f.type}</h3>
                      <p className="text-slate-500 text-xs">{f.capacity}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-2xl font-bold ${cfg.count}`}>{f.count}×</span>
                      <p className="text-slate-600 text-xs">Fahrzeuge</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{f.desc}</p>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-1.5">
                    {f.specs.map((spec) => (
                      <span key={spec} className={`text-xs px-2.5 py-1 rounded-full border ${cfg.badge}`}>{spec}</span>
                    ))}
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="text-center mt-10">
          <Link
            href="/fuhrpark"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-semibold text-sm transition-all duration-200 cursor-pointer"
          >
            Fuhrpark im Detail ansehen <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
