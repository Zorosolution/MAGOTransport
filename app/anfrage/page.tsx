"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { MapPin, Package, Calendar, Check, ChevronRight, ChevronLeft, AlertCircle, Mail, Phone } from "lucide-react";
import { buildMailtoHref, WHATSAPP_LINK, type InquiryPayload } from "@/lib/inquiry";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

type Step = 1 | 2 | 3;

interface AnfrageData {
  transportTyp: string;
  abholt: string;
  ziel: string;
  gewicht: string;
  volumen: string;
  datum: string;
  beschreibung: string;
  name: string;
  firma: string;
  email: string;
  telefon: string;
}

const transportTypen = [
  { id: "auslieferung",  label: "Auslieferung",           desc: "Wien und Wien-Umgebung",       icon: "📦" },
  { id: "partner",       label: "Partnerschaft",          desc: "Feste Zusammenarbeit",         icon: "🤝" },
  { id: "express",       label: "Express oder Sonderfahrt", desc: "Dringend und zeitkritisch",  icon: "⚡" },
  { id: "abschlepp",     label: "Abschleppdienst",        desc: "Auto abschleppen lassen",      icon: "🏗️" },
  { id: "fahrzeug",      label: "Fahrzeugtransport",      desc: "Auto transportieren",          icon: "🚗" },
  { id: "sonstiges",     label: "Sonstiges",              desc: "Andere Anfrage",               icon: "📋" },
];

export default function AnfragePage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<AnfrageData>({ transportTyp: "", abholt: "", ziel: "", gewicht: "", volumen: "", datum: "", beschreibung: "", name: "", firma: "", email: "", telefon: "" });
  const [errors, setErrors] = useState<Partial<AnfrageData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [hp, setHp] = useState(""); // Honeypot
  const [fallbackHref, setFallbackHref] = useState<string | null>(null);

  function setField(f: keyof AnfrageData, v: string) {
    setData(prev => ({ ...prev, [f]: v }));
    if (errors[f]) setErrors(prev => ({ ...prev, [f]: "" }));
  }

  function validateStep1() { return data.transportTyp !== ""; }
  function validateStep2() {
    const e: Partial<AnfrageData> = {};
    if (!data.abholt.trim()) e.abholt = "Abholort erforderlich";
    if (!data.ziel.trim()) e.ziel = "Zielort erforderlich";
    if (!data.datum) e.datum = "Datum erforderlich";
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  function validateStep3() {
    const e: Partial<AnfrageData> = {};
    if (!data.name.trim()) e.name = "Name erforderlich";
    if (!data.email.trim()) e.email = "E-Mail erforderlich";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Ungültige E-Mail";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep3()) return;
    setSubmitting(true);
    const payload: InquiryPayload = { kind: "anfrage", ...data, website: hp };
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json?.delivered) {
        router.push("/anfrage/bestaetigung");
        return;
      }
      // Keine automatische Zustellung: E-Mail-Programm mit fertiger Nachricht öffnen.
      const href = buildMailtoHref(payload);
      setFallbackHref(href);
      window.location.href = href;
    } catch {
      const href = buildMailtoHref(payload);
      setFallbackHref(href);
      window.location.href = href;
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase = "w-full px-4 py-3 text-sm bg-white border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-200 border-slate-200 focus:border-blue-500";

  return (
    <div className="min-h-screen">
      <PageHero
        badge="Angebot anfragen"
        badgeColor="sky"
        orbColor="blue"
        title={<>Anfrage stellen, <span className="gradient-text">Angebot erhalten</span></>}
        description="Beschreiben Sie Ihr Anliegen. Wir melden uns mit einem Angebot, kostenlos und ohne Verpflichtung."
      />

      <section className="py-20" aria-label="Angebotsanfrage">
        <div className="max-w-2xl mx-auto px-6">
          {/* Schrittanzeige */}
          <AnimatedSection className="flex items-center justify-center gap-3 mb-12">
            {([1, 2, 3] as Step[]).map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${step === s ? "bg-blue-700 text-white shadow-primary" : step > s ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-white border border-slate-200 text-slate-500"}`} aria-current={step === s ? "step" : undefined}>
                  {step > s ? <Check className="w-4 h-4" aria-hidden="true" /> : s}
                </div>
                <span className={`text-sm hidden sm:inline ${step >= s ? "text-slate-900 font-medium" : "text-slate-500"}`}>
                  {s === 1 ? "Transportart" : s === 2 ? "Details" : "Kontakt"}
                </span>
                {s < 3 && <div className={`w-10 h-px ${step > s ? "bg-emerald-300" : "bg-slate-200"}`} aria-hidden="true" />}
              </div>
            ))}
          </AnimatedSection>

          {fallbackHref ? (
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-soft text-center">
                <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-5" aria-hidden="true">
                  <Phone className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-slate-900 font-bold text-xl mb-2">So erreichen Sie uns am schnellsten</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                  Rufen Sie uns an oder schreiben Sie über WhatsApp. Ihre Anfrage haben wir bereits als
                  E-Mail für Sie vorbereitet.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="tel:+4369911147070" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-all cursor-pointer shadow-primary">
                    <Phone className="w-4 h-4" aria-hidden="true" />Anrufen
                  </a>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all cursor-pointer shadow-soft-lg">
                    <WhatsAppIcon className="w-4 h-4" />WhatsApp
                  </a>
                </div>
                <a href={fallbackHref} className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 underline underline-offset-2 cursor-pointer">
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />Vorbereitete E-Mail öffnen
                </a>
              </div>
            </AnimatedSection>
          ) : (
          <AnimatePresence mode="wait">
            {/* SCHRITT 1: Transportart */}
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }}>
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-soft">
                  <h2 className="text-slate-900 font-bold text-lg mb-6">Welche Leistung benötigen Sie?</h2>
                  <div className="grid grid-cols-2 gap-3 mb-8" role="radiogroup" aria-label="Transportart wählen">
                    {transportTypen.map((t) => (
                      <label key={t.id} className={`rounded-xl p-4 border cursor-pointer transition-all duration-200 ${data.transportTyp === t.id ? "border-blue-500 bg-blue-50 ring-1 ring-blue-200" : "bg-white border-slate-200 hover:border-blue-200"}`}>
                        <input type="radio" name="typ" value={t.id} checked={data.transportTyp === t.id} onChange={() => setField("transportTyp", t.id)} className="sr-only" />
                        <span className="text-2xl mb-2 block" aria-hidden="true">{t.icon}</span>
                        <p className="text-slate-900 text-sm font-semibold">{t.label}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{t.desc}</p>
                      </label>
                    ))}
                  </div>
                  <button onClick={() => validateStep1() && setStep(2)} disabled={!data.transportTyp} className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all cursor-pointer shadow-primary">
                    Weiter <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* SCHRITT 2: Details */}
            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }}>
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-soft space-y-5">
                  <h2 className="text-slate-900 font-bold text-lg mb-2">Transportdetails</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="abholt" className="block text-xs text-slate-600 mb-1.5 font-medium">
                        <MapPin className="w-3 h-3 inline mr-1" aria-hidden="true" />Abholort <span className="text-red-500">*</span>
                      </label>
                      <input id="abholt" type="text" value={data.abholt} onChange={e => setField("abholt", e.target.value)} placeholder="z.B. Wien, 1010" className={inputBase} />
                      {errors.abholt && <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.abholt}</p>}
                    </div>
                    <div>
                      <label htmlFor="ziel" className="block text-xs text-slate-600 mb-1.5 font-medium">
                        <MapPin className="w-3 h-3 inline mr-1" aria-hidden="true" />Zielort <span className="text-red-500">*</span>
                      </label>
                      <input id="ziel" type="text" value={data.ziel} onChange={e => setField("ziel", e.target.value)} placeholder="z.B. Wien, 1020" className={inputBase} />
                      {errors.ziel && <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.ziel}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="gewicht" className="block text-xs text-slate-600 mb-1.5 font-medium"><Package className="w-3 h-3 inline mr-1" aria-hidden="true" />Gewicht (kg)</label>
                      <input id="gewicht" type="text" value={data.gewicht} onChange={e => setField("gewicht", e.target.value)} placeholder="z.B. 500 kg" className={inputBase} />
                    </div>
                    <div>
                      <label htmlFor="volumen" className="block text-xs text-slate-600 mb-1.5 font-medium">Volumen (m³)</label>
                      <input id="volumen" type="text" value={data.volumen} onChange={e => setField("volumen", e.target.value)} placeholder="z.B. 2,5 m³" className={inputBase} />
                    </div>
                    <div>
                      <label htmlFor="datum" className="block text-xs text-slate-600 mb-1.5 font-medium"><Calendar className="w-3 h-3 inline mr-1" aria-hidden="true" />Wunschdatum <span className="text-red-500">*</span></label>
                      <input id="datum" type="date" value={data.datum} onChange={e => setField("datum", e.target.value)} className={inputBase} />
                      {errors.datum && <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.datum}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="beschreibung" className="block text-xs text-slate-600 mb-1.5 font-medium">Beschreibung der Güter</label>
                    <textarea id="beschreibung" value={data.beschreibung} onChange={e => setField("beschreibung", e.target.value)} rows={3} placeholder="Art der Güter, Verpackung, Besonderheiten, Temperaturanforderungen" className={`${inputBase} resize-none`} />
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(1)} className="flex items-center gap-1.5 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-sm font-medium transition-all cursor-pointer">
                      <ChevronLeft className="w-4 h-4" aria-hidden="true" />Zurück
                    </button>
                    <button onClick={() => validateStep2() && setStep(3)} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-all cursor-pointer shadow-primary">
                      Weiter <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCHRITT 3: Kontaktdaten */}
            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }}>
                <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl p-8 border border-slate-200 shadow-soft space-y-5" aria-label="Kontaktdaten">
                  <h2 className="text-slate-900 font-bold text-lg mb-2">Ihre Kontaktdaten</h2>
                  {/* Honeypot gegen Spam, für Menschen unsichtbar */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="a-website">Website</label>
                    <input id="a-website" type="text" tabIndex={-1} autoComplete="off" value={hp} onChange={e => setHp(e.target.value)} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="a-name" className="block text-xs text-slate-600 mb-1.5 font-medium">Name <span className="text-red-500">*</span></label>
                      <input id="a-name" type="text" value={data.name} onChange={e => setField("name", e.target.value)} placeholder="Vor- und Nachname" className={inputBase} />
                      {errors.name && <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="a-firma" className="block text-xs text-slate-600 mb-1.5 font-medium">Firma</label>
                      <input id="a-firma" type="text" value={data.firma} onChange={e => setField("firma", e.target.value)} placeholder="Firmenname (optional)" className={inputBase} />
                    </div>
                    <div>
                      <label htmlFor="a-email" className="block text-xs text-slate-600 mb-1.5 font-medium">E-Mail <span className="text-red-500">*</span></label>
                      <input id="a-email" type="email" value={data.email} onChange={e => setField("email", e.target.value)} placeholder="ihre@email.at" className={inputBase} />
                      {errors.email && <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="a-telefon" className="block text-xs text-slate-600 mb-1.5 font-medium">Telefon</label>
                      <input id="a-telefon" type="tel" value={data.telefon} onChange={e => setField("telefon", e.target.value)} placeholder="+43 123 456 789" className={inputBase} />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(2)} className="flex items-center gap-1.5 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-sm font-medium transition-all cursor-pointer">
                      <ChevronLeft className="w-4 h-4" aria-hidden="true" />Zurück
                    </button>
                    <button type="submit" disabled={submitting} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-semibold text-sm transition-all cursor-pointer shadow-primary">
                      {submitting ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />Wird gesendet…</> : "Angebot anfragen"}
                    </button>
                  </div>
                  <p className="text-slate-500 text-xs text-center">Mit dem Absenden stimmen Sie unserer <a href="/datenschutz" className="underline hover:text-slate-700">Datenschutzerklärung</a> zu.</p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
          )}
        </div>
      </section>
    </div>
  );
}
