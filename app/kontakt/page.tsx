"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData { name: string; email: string; telefon: string; betreff: string; nachricht: string; }
interface FormErrors { name?: string; email?: string; nachricht?: string; }

function validate(d: FormData): FormErrors {
  const e: FormErrors = {};
  if (!d.name.trim()) e.name = "Bitte geben Sie Ihren Namen ein.";
  if (!d.email.trim()) e.email = "E-Mail-Adresse ist erforderlich.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "Bitte geben Sie eine gültige E-Mail ein.";
  if (!d.nachricht.trim()) e.nachricht = "Bitte schreiben Sie eine Nachricht.";
  else if (d.nachricht.trim().length < 20) e.nachricht = "Bitte mindestens 20 Zeichen eingeben.";
  return e;
}

const kontaktInfo = [
  { icon: Phone, label: "Telefon", value: "+43 800 626 424", href: "tel:+43800626424" },
  { icon: Phone, label: "Notfall-Hotline", value: "+43 676 123 456", href: "tel:+43676123456" },
  { icon: Mail, label: "E-Mail", value: "office@magotransport.at", href: "mailto:office@magotransport.at" },
  { icon: MapPin, label: "Adresse", value: "Logistikstraße 1\n1220 Wien, Österreich", href: "#" },
];

export default function KontaktPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", telefon: "", betreff: "", nachricht: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function set(field: keyof FormData, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) setErrors(prev => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");
    await new Promise(r => setTimeout(r, 1200));
    setStatus("success");
  }

  const inputBase = "w-full px-4 py-3 text-sm glass border rounded-xl text-white placeholder-slate-600 focus:outline-none transition-all duration-200";
  const idle = "border-white/10 focus:border-blue-500/50";
  const err = "border-red-500/50 focus:border-red-500/70";

  return (
    <div className="min-h-screen">
      <PageHero
        badge="Kontakt"
        badgeColor="sky"
        orbColor="blue"
        title={<>Wir sind für Sie <span className="gradient-text">erreichbar</span></>}
        description="Stellen Sie uns Ihre Anfrage, rufen Sie uns an oder besuchen Sie uns in Wien. Unser Team berät Sie kostenlos und unverbindlich."
      />

      <section className="py-20" aria-label="Kontaktformular und Informationen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Kontaktdaten */}
            <aside className="lg:col-span-2 space-y-4">
              <AnimatedSection direction="right">
                {kontaktInfo.map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} className="group glass rounded-2xl p-5 border border-white/8 hover:border-white/15 transition-all duration-200 flex gap-4 items-start cursor-pointer block mb-4">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors" aria-hidden="true">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1">{label}</p>
                      <p className="text-white text-sm whitespace-pre-line">{value}</p>
                    </div>
                  </a>
                ))}
                <div className="glass rounded-2xl p-5 border border-white/8">
                  <p className="text-white text-sm font-semibold mb-1">Öffnungszeiten Büro</p>
                  <p className="text-slate-400 text-xs leading-relaxed">Mo–Fr: 07:00–18:00 Uhr<br />Sa: 08:00–13:00 Uhr<br />Notdienst: 24/7 erreichbar</p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                    <span className="text-green-400 text-xs font-medium">Jetzt geöffnet</span>
                  </div>
                </div>
              </AnimatedSection>
            </aside>

            {/* Formular */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-2xl p-12 border border-green-500/30 text-center" role="alert">
                      <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" aria-hidden="true" />
                      <h2 className="text-white text-xl font-bold mb-2">Nachricht gesendet!</h2>
                      <p className="text-slate-400 text-sm max-w-xs mx-auto">Wir melden uns innerhalb von 24 Stunden bei Ihnen. Für dringende Anfragen: +43 800 626 424.</p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} noValidate className="glass rounded-2xl p-8 border border-white/8 space-y-5" aria-label="Kontaktformular">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="k-name" className="block text-xs text-slate-400 mb-1.5 font-medium">Vor- und Nachname <span className="text-red-400" aria-hidden="true">*</span></label>
                          <input id="k-name" type="text" value={form.name} onChange={e => set("name", e.target.value)} placeholder="Maria Muster" className={`${inputBase} ${errors.name ? err : idle}`} aria-required="true" />
                          {errors.name && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="k-email" className="block text-xs text-slate-400 mb-1.5 font-medium">E-Mail-Adresse <span className="text-red-400" aria-hidden="true">*</span></label>
                          <input id="k-email" type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="maria@firma.at" className={`${inputBase} ${errors.email ? err : idle}`} aria-required="true" />
                          {errors.email && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.email}</p>}
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="k-telefon" className="block text-xs text-slate-400 mb-1.5 font-medium">Telefonnummer</label>
                          <input id="k-telefon" type="tel" value={form.telefon} onChange={e => set("telefon", e.target.value)} placeholder="+43 123 456 789" className={`${inputBase} ${idle}`} />
                        </div>
                        <div>
                          <label htmlFor="k-betreff" className="block text-xs text-slate-400 mb-1.5 font-medium">Betreff</label>
                          <select id="k-betreff" value={form.betreff} onChange={e => set("betreff", e.target.value)} className={`${inputBase} ${idle} cursor-pointer`}>
                            <option value="" className="bg-zinc-900">Bitte wählen...</option>
                            <option value="transport" className="bg-zinc-900">Transportanfrage</option>
                            <option value="angebot" className="bg-zinc-900">Angebotsanfrage</option>
                            <option value="abschlepp" className="bg-zinc-900">Abschleppdienst</option>
                            <option value="lager" className="bg-zinc-900">Lagerlogistik</option>
                            <option value="partnership" className="bg-zinc-900">Partnerschaft</option>
                            <option value="karriere" className="bg-zinc-900">Karriere</option>
                            <option value="sonstiges" className="bg-zinc-900">Sonstiges</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="k-nachricht" className="block text-xs text-slate-400 mb-1.5 font-medium">Nachricht <span className="text-red-400" aria-hidden="true">*</span></label>
                        <textarea id="k-nachricht" value={form.nachricht} onChange={e => set("nachricht", e.target.value)} placeholder="Beschreiben Sie Ihr Anliegen — Art des Transports, Menge, Strecke, Zeitraum..." rows={5} className={`${inputBase} resize-none ${errors.nachricht ? err : idle}`} aria-required="true" />
                        {errors.nachricht && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.nachricht}</p>}
                      </div>
                      <button type="submit" disabled={status === "loading"} className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 cursor-pointer" aria-live="polite">
                        {status === "loading" ? (
                          <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />Wird gesendet…</>
                        ) : (
                          <><Send className="w-4 h-4" aria-hidden="true" />Nachricht senden</>
                        )}
                      </button>
                      <p className="text-slate-600 text-xs text-center">Mit dem Absenden stimmen Sie unserer <a href="/datenschutz" className="underline hover:text-slate-400 transition-colors">Datenschutzerklärung</a> zu.</p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
