"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { ArrowRight, Phone, ShieldCheck, MapPin, Truck } from "lucide-react";
import Link from "next/link";
import heroImg from "../../public/mago_claude_ready_v2/10_mercedes_boxvan_countryside.jpg";

const trustBadges = [
  { icon: ShieldCheck, text: "Seit 2007 im Einsatz" },
  { icon: MapPin, text: "Wien und ganz Österreich" },
  { icon: Truck, text: "Eigener Fuhrpark" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Sparsamer Parallax nur auf dem Hero-Bild (deaktiviert bei prefers-reduced-motion)
  const imgYRaw = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const chipYRaw = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const imgY = reduceMotion ? undefined : imgYRaw;
  const chipY = reduceMotion ? undefined : chipYRaw;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-28 lg:pt-36 pb-16 lg:pb-28"
      aria-label="MAGOTransport Startseite"
    >
      {/* Heller Hintergrund mit feinem Raster und sanftem Blauschimmer */}
      <div className="absolute inset-0 grid-pattern radial-fade" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 70% -5%, rgba(29,78,216,0.10) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <GradientOrb color="blue" size="xl" className="-top-48 right-0 translate-x-1/4" animate />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">

          {/* Textspalte – reine CSS-Reveal-Animation, kein JS-Gating für den LCP-Text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 hero-reveal">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-soft">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                <span className="text-xs text-slate-700 font-medium">Auslieferungspartner in Wien seit 2007</span>
              </div>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-6 text-slate-900 text-balance hero-reveal"
              style={{ animationDelay: "0.06s" }}
            >
              Wir liefern die Ware Ihrer Firma{" "}
              <span className="gradient-text">an Ihre Kunden aus</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-slate-600 max-w-xl mb-8 leading-relaxed hero-reveal"
              style={{ animationDelay: "0.12s" }}
            >
              Wir holen die Ware im Lager Ihres Unternehmens ab und stellen sie an Ihre Kunden zu.
              Dazu Abschleppdienst und Fahrzeugtransport. In Wien und ganz Österreich.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center gap-3 mb-9 w-full sm:w-auto hero-reveal"
              style={{ animationDelay: "0.18s" }}
            >
              <Link
                href="/anfrage"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-[15px] transition-all duration-200 shadow-primary hover:-translate-y-0.5 active:translate-y-0 cursor-pointer w-full sm:w-auto"
              >
                Angebot anfragen
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <a
                href="tel:+4369911147070"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-900 font-semibold text-[15px] hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 cursor-pointer w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 text-blue-700" aria-hidden="true" />
                +43 699 11147070
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2.5 hero-reveal" style={{ animationDelay: "0.24s" }}>
              {trustBadges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-sm text-slate-600">
                  <Icon className="w-4 h-4 text-blue-700" aria-hidden="true" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bildspalte mit sanfter Einblendung und Parallax */}
          <motion.div
            initial={{ scale: reduceMotion ? 1 : 0.98 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative"
          >
            <motion.div style={{ y: imgY }} className="relative">
              <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden border border-slate-200 bg-white shadow-soft-lg">
                <Image
                  src={heroImg}
                  alt="Kastenwagen von MAGOTransport für die Auslieferung in Wien und ganz Österreich"
                  fill
                  priority
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
                {/* Einmaliger Lichtstreif beim Laden, vom Containerrand sauber beschnitten */}
                <div
                  className="absolute inset-0 pointer-events-none shine-sweep"
                  style={{ background: "linear-gradient(105deg, transparent 32%, rgba(255,255,255,0.55) 50%, transparent 68%)" }}
                  aria-hidden="true"
                />
              </div>

              {/* Seltener Glas-Akzent, nicht über Fließtext */}
              <motion.div
                style={{ y: chipY }}
                className="absolute -bottom-4 -left-3 sm:left-5 glass rounded-2xl px-4 py-3 shadow-soft-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-700 flex items-center justify-center" aria-hidden="true">
                    <Truck className="w-4 h-4 text-white" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-slate-900 text-sm font-bold">15 Lkw, 2 Anhänger</p>
                    <p className="text-slate-500 text-xs">täglich im Einsatz</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                style={{ y: chipY }}
                className="absolute -top-4 right-4 sm:right-6 hidden sm:flex glass rounded-full px-4 py-2 shadow-soft items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-blue-700" aria-hidden="true" />
                <span className="text-slate-900 text-xs font-semibold">Wien und ganz Österreich</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
