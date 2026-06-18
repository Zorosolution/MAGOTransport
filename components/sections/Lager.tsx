"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { motion } from "framer-motion";
import { ArrowRight, Warehouse, Map, Truck, ClipboardCheck } from "lucide-react";
import Link from "next/link";

const prozesse = [
  { step: "01", label: "Abholung beim Partner", desc: "Wir fahren zum Lager des Partnerunternehmens und holen die Ware ab.",        icon: Warehouse },
  { step: "02", label: "Tourenplanung",         desc: "Wir bündeln die Lieferungen zu Touren in Wien und ganz Österreich.",         icon: Map },
  { step: "03", label: "Zustellung",            desc: "Wir bringen die Ware direkt zum Kunden des Partnerunternehmens.",           icon: Truck },
  { step: "04", label: "Rückmeldung",           desc: "Nach der Zustellung melden wir zurück, damit der Partner den Überblick behält.", icon: ClipboardCheck },
];

export function Lager() {
  return (
    <section id="auslieferung" className="relative py-28 overflow-hidden" aria-labelledby="auslieferung-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Linke Seite (linksbündig) */}
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-5 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
              Auslieferung für Unternehmen
            </span>
            <h2 id="auslieferung-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Wir liefern die Ware Ihrer{" "}
              <span className="gradient-text">Firma aus</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Wir sind Auslieferungspartner für andere Unternehmen. Wir holen die Ware im Lager Ihres
              Betriebs ab und stellen sie an Ihre Kunden zu. Ein eigenes Lager betreiben wir nicht,
              wir kümmern uns um die Zustellung in Wien und ganz Österreich.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { value: "Wien", label: "und ganz Österreich" },
                { value: "15", label: "Lkw im Einsatz" },
                { value: "seit 2007", label: "im Geschäft" },
                { value: "2000+", label: "zufriedene Kunden" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white rounded-xl p-4 border border-slate-200 text-center shadow-soft">
                  <div className="text-xl font-bold text-blue-700">{value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/kontakt?betreff=partnership"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-all cursor-pointer shadow-primary"
            >
              Partner werden <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </AnimatedSection>

          {/* Rechte Seite – Prozessablauf */}
          <AnimatedSection delay={0.15} direction="left">
            <h3 className="font-semibold mb-6 text-xs uppercase tracking-wider text-slate-500">So läuft die Auslieferung</h3>
            <div className="space-y-0">
              {prozesse.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    {i < prozesse.length - 1 && (
                      <div className="absolute left-5 top-10 bottom-0 w-px bg-gradient-to-b from-blue-200 to-transparent" aria-hidden="true" />
                    )}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center" aria-hidden="true">
                      <Icon className="w-4 h-4 text-blue-700" />
                    </div>
                    <div className="pt-1.5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">{p.step}</span>
                        <span className="text-slate-900 font-semibold text-sm">{p.label}</span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
