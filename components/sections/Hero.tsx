"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { AnimatedTruck } from "@/components/shared/TruckSVG";
import { ArrowRight, Phone, Shield, Clock, MapPin } from "lucide-react";
import Link from "next/link";

const trustBadges = [
  { icon: Shield, text: "15+ Jahre Erfahrung" },
  { icon: Clock, text: "24/7 Einsatzbereit" },
  { icon: MapPin, text: "Österreich & Europa" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-8"
      aria-label="Hero – MAGOTransport"
    >
      {/* Hintergrund */}
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(29,78,216,0.18) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <GradientOrb color="blue" size="xl" className="-top-32 left-1/2 -translate-x-1/2" />
      <GradientOrb color="purple" size="md" className="top-1/3 -left-24 opacity-15" />

      {/* Hauptinhalt */}
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 glass border border-blue-500/25 rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              <span className="text-xs text-slate-300 font-medium">Zuverlässiger Transportpartner seit über 15 Jahren</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6 max-w-4xl"
          >
            <span className="text-white">Ihr verlässlicher Partner für</span>
            <br />
            <span className="gradient-text">Transport & Logistik</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-4 leading-relaxed"
          >
            Nationale und internationale Gütertransporte. Professionelle Logistiklösungen.
            Abschleppdienst und Pannenhilfe — <strong className="text-white">rund um die Uhr</strong>.
          </motion.p>

          {/* Trust Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-sm text-slate-400">
                <Icon className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA-Zeile */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
          >
            <Link
              href="/anfrage"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[15px] transition-all duration-200 shadow-lg shadow-blue-900/40 hover:shadow-blue-700/40 hover:scale-[1.02] cursor-pointer"
            >
              Angebot anfordern
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a
              href="tel:+43800626424"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl border border-amber-500/40 bg-amber-500/10 text-amber-300 font-semibold text-[15px] hover:bg-amber-500/20 transition-all duration-200 cursor-pointer hover:scale-[1.02] glow-amber"
              aria-label="Notfall-Hotline anrufen"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              24h Notfall: +43 800 626 424
            </a>
          </motion.div>

          {/* Kennzahlen */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
          >
            {[
              { value: "500+", label: "Transporte täglich" },
              { value: "15+", label: "Jahre Erfahrung" },
              { value: "98,9%", label: "Zuverlässigkeit" },
              { value: "24/7", label: "Einsatzbereit" },
            ].map(({ value, label }) => (
              <div key={label} className="glass rounded-xl p-3.5 text-center border border-white/6">
                <div className="text-xl font-bold gradient-text">{value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Straßen- & LKW-Animation */}
      <div className="relative z-10 mt-auto" aria-hidden="true">
        {/* Straße */}
        <div className="relative mx-auto max-w-7xl px-0">
          <div className="relative h-16 overflow-hidden">
            {/* Asphalt */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-slate-900/60" />
            {/* Leitlinie */}
            <div className="absolute bottom-3 left-0 right-0 h-0.5 road-dash opacity-40" />
            {/* Randlinie */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500/30" />

            {/* Animierter LKW */}
            <div className="absolute bottom-1 left-0 right-0">
              <AnimatedTruck className="h-14" />
            </div>
          </div>
        </div>

        {/* Überblendung nach unten */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"
        />
      </div>
    </section>
  );
}
