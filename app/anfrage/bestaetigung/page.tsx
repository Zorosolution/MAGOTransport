import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CheckCircle, Mail, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Anfrage bestätigt", robots: { index: false } };

export default function AnfrageBestaetigung() {
  return (
    <div className="min-h-screen flex items-center justify-center py-32 px-6 bg-slate-50">
      <AnimatedSection className="max-w-md w-full text-center">
        <div className="bg-white rounded-3xl p-12 border border-emerald-200 shadow-soft-lg">
          <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-3">Anfrage erhalten.</h1>
          <p className="text-slate-600 text-sm leading-relaxed mb-8">
            Vielen Dank für Ihre Anfrage. Wir sehen sie uns an und melden uns <strong className="text-slate-900">zeitnah</strong> mit einem Angebot bei Ihnen.
          </p>
          <div className="space-y-3 mb-8">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex items-center gap-3 text-left">
              <Mail className="w-5 h-5 text-blue-700 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-slate-900 text-sm font-medium">Antwort per E-Mail</p>
                <p className="text-slate-500 text-xs">Wir melden uns mit einem Angebot an Ihre Adresse</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex items-center gap-3 text-left">
              <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-slate-900 text-sm font-medium">Dringende Anfrage?</p>
                <p className="text-amber-700 text-xs">+43 699 11147070</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-all cursor-pointer shadow-primary">
              Zur Startseite <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a href="tel:+4369911147070" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-amber-200 text-amber-700 hover:bg-amber-50 text-sm font-semibold transition-all cursor-pointer">
              <Phone className="w-4 h-4" aria-hidden="true" />Jetzt anrufen
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
