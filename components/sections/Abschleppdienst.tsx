"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Phone, Clock, MapPin, Shield, Zap, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import towingImg from "../../public/mago_claude_ready_v2/02_towing_city_einsatz.jpg";

const services = [
  { icon: Zap,     title: "Autos abschleppen",   desc: "Mit unseren großen Anhängern" },
  { icon: MapPin,  title: "Wien und ganz Österreich",   desc: "In Wien und ganz Österreich unterwegs" },
  { icon: Shield,  title: "Sicher verzurrt",     desc: "Schonend für Ihr Fahrzeug" },
  { icon: Clock,   title: "Ausland auf Anfrage", desc: "In seltenen Fällen, nur nach Absprache" },
];

export function Abschleppdienst() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="abschleppdienst"
      className="relative py-24 overflow-hidden bg-amber-50/40 border-y border-amber-100"
      aria-labelledby="asd-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Linke Seite – Text (linksbündig) */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white border border-amber-200 rounded-full px-4 py-2 mb-6 shadow-soft">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
              <span className="text-amber-700 text-xs font-semibold uppercase tracking-widest">Abschleppdienst</span>
            </div>

            <h2 id="asd-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Abschleppdienst und Fahrzeugtransport{" "}
              <span className="gradient-text-amber">in Wien und ganz Österreich</span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Mit unseren großen Anhängern schleppen und transportieren wir Autos in Wien und ganz Österreich. In seltenen Fällen bringen wir ein Auto auch ins Ausland, aber nur
              auf Anfrage. Rufen Sie uns an, wir besprechen Termin und Ort.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {services.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-4 border border-amber-100 shadow-soft">
                  <Icon className="w-5 h-5 text-amber-600 mb-2" aria-hidden="true" />
                  <p className="text-slate-900 text-sm font-semibold">{title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+4369911147070"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition-all duration-200 cursor-pointer shadow-cta"
                aria-label="Abschleppdienst anrufen: +43 699 11147070"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Anrufen: +43 699 11147070
              </a>
              <Link
                href="/abschleppdienst"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-amber-200 text-amber-700 hover:bg-amber-100 font-semibold text-sm transition-all duration-200 cursor-pointer shadow-soft"
              >
                Mehr Infos <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Rechte Seite – Notfallkarte */}
          <AnimatedSection delay={0.15} direction="left">
            <div className="relative">
              {/* Dezenter pulsierender Ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-amber-300/50"
                animate={reduceMotion ? undefined : { scale: [1, 1.03, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />
              <div className="bg-white rounded-3xl border border-amber-200 shadow-soft-lg relative overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={towingImg}
                    alt="MAGOTransport schleppt ein Auto in Wien ab"
                    fill
                    sizes="(max-width: 1024px) 100vw, 540px"
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 p-8">
                  {/* Notfall-Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center pulse-amber" aria-hidden="true">
                      <Phone className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold text-lg">Abschleppdienst</p>
                      <p className="text-amber-700 text-sm font-semibold">Anrufen und Auto abschleppen lassen</p>
                    </div>
                  </div>

                  <a
                    href="tel:+4369911147070"
                    className="block text-center py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-2xl tracking-wide mb-6 transition-all duration-200 cursor-pointer shadow-cta"
                    aria-label="Abschleppdienst anrufen: +43 699 11147070"
                  >
                    +43 699 11147070
                  </a>

                  <div className="space-y-3">
                    {[
                      { label: "Einsatzgebiet", value: "Wien und ganz Österreich" },
                      { label: "Anhänger", value: "Zwei große Anhänger" },
                      { label: "Fahrzeuge", value: "Autos abschleppen" },
                      { label: "Ausland", value: "Nur auf Anfrage" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0">
                        <span className="text-slate-500 text-sm">{label}</span>
                        <span className="text-slate-900 text-sm font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
