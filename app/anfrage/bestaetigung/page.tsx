import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CheckCircle, Mail, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Anfrage bestätigt", robots: { index: false } };

export default function AnfrageBestaetigung() {
  return (
    <div className="min-h-screen flex items-center justify-center py-32 px-6">
      <AnimatedSection className="max-w-md w-full text-center">
        <div className="glass rounded-3xl p-12 border border-green-500/20">
          <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-3">Anfrage erhalten!</h1>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Vielen Dank für Ihre Anfrage. Unser Team bearbeitet sie und meldet sich <strong className="text-white">innerhalb von 24 Stunden</strong> mit einem individuellen Angebot bei Ihnen.
          </p>
          <div className="space-y-3 mb-8">
            <div className="glass rounded-xl p-4 border border-white/8 flex items-center gap-3 text-left">
              <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-white text-sm font-medium">Bestätigung per E-Mail</p>
                <p className="text-slate-500 text-xs">Bitte auch Spam-Ordner prüfen</p>
              </div>
            </div>
            <div className="glass rounded-xl p-4 border border-white/8 flex items-center gap-3 text-left">
              <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-white text-sm font-medium">Dringende Anfrage?</p>
                <p className="text-amber-400 text-xs">+43 800 626 424 (24/7 erreichbar)</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all cursor-pointer">
              Zur Startseite <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a href="tel:+43800626424" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 text-sm font-medium transition-all cursor-pointer">
              <Phone className="w-4 h-4" aria-hidden="true" />Jetzt anrufen
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
