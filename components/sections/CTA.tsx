"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { WHATSAPP_LINK } from "@/lib/inquiry";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative py-28 overflow-hidden" aria-labelledby="cta-heading">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-3xl p-12 sm:p-16 bg-gradient-to-br from-blue-700 to-blue-900 shadow-soft-lg overflow-hidden text-center">
            {/* dezenter Lichtschimmer im Panel */}
            <div
              className="absolute inset-0 pointer-events-none opacity-60"
              style={{ background: "radial-gradient(ellipse 90% 70% at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 60%)" }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/15 mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span className="text-blue-50 text-sm font-medium">Auslieferungspartner in Wien seit 2007</span>
              </div>

              <h2 id="cta-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                Sollen wir Ihre Ware{" "}
                <span className="text-amber-300">ausliefern?</span>
              </h2>

              <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Wir holen die Ware im Lager Ihres Unternehmens ab und stellen sie an Ihre Kunden
                in Wien und Wien-Umgebung zu. Schreiben Sie uns, wir melden uns mit einem Angebot.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                <Link
                  href="/anfrage"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white hover:bg-blue-50 text-blue-700 font-bold text-base transition-all duration-200 shadow-soft-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  Angebot anfragen
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <a
                  href="tel:+4369911147070"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-base transition-all duration-200 cursor-pointer shadow-cta"
                  aria-label="Abschleppdienst anrufen: +43 699 11147070"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  +43 699 11147070
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base transition-all duration-200 cursor-pointer shadow-soft-lg"
                  aria-label="MAGOTransport über WhatsApp kontaktieren"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="mailto:office@magotransport.at"
                  className="flex items-center gap-2 text-blue-100 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  office@magotransport.at
                </a>
                <Link
                  href="/kontakt"
                  className="text-blue-100 hover:text-white text-sm transition-colors cursor-pointer underline underline-offset-2"
                >
                  Zum Kontaktformular
                </Link>
              </div>

              <p className="mt-6 text-blue-200 text-xs">
                Kostenlos · Unverbindlich · Wir melden uns zeitnah
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
