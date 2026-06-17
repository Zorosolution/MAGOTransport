"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import { buildMailtoHref, WHATSAPP_LINK, type InquiryPayload } from "@/lib/inquiry";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

type FormStatus = "idle" | "loading" | "success" | "fallback" | "error";

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

const MAPS_EMBED = "https://www.google.com/maps?q=Alxingergasse+16%2F7a,+1100+Wien&output=embed";
const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Alxingergasse+16%2F7a+1100+Wien";

type Tone = "blue" | "green";

const toneMap: Record<Tone, { box: string; icon: string; border: string }> = {
  blue: { box: "bg-blue-50 border-blue-100 group-hover:bg-blue-100", icon: "text-blue-700", border: "hover:border-blue-200" },
  green: { box: "bg-emerald-50 border-emerald-100 group-hover:bg-emerald-100", icon: "text-emerald-600", border: "hover:border-emerald-200" },
};

const kontaktInfo: {
  icon: typeof Phone | typeof WhatsAppIcon;
  label: string;
  value: string;
  href: string;
  tone?: Tone;
}[] = [
  { icon: Phone, label: "Telefon", value: "+43 699 11147070", href: "tel:+4369911147070" },
  { icon: WhatsAppIcon, label: "WhatsApp", value: "Nachricht schreiben", href: WHATSAPP_LINK, tone: "green" },
  { icon: Phone, label: "Abschleppdienst", value: "+43 699 11147070", href: "tel:+4369911147070" },
  { icon: Mail, label: "E-Mail", value: "office@magotransport.at", href: "mailto:office@magotransport.at" },
  { icon: MapPin, label: "Adresse", value: "Alxingergasse 16/7a\n1100 Wien, Österreich", href: MAPS_LINK },
];

export default function KontaktPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", telefon: "", betreff: "", nachricht: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [mapsConsent, setMapsConsent] = useState(false);
  const [hp, setHp] = useState(""); // Honeypot
  const [fallbackHref, setFallbackHref] = useState<string | null>(null);

  function set(field: keyof FormData, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) setErrors(prev => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");
    const payload: InquiryPayload = {
      kind: "kontakt",
      name: form.name,
      email: form.email,
      telefon: form.telefon,
      betreff: form.betreff,
      nachricht: form.nachricht,
      website: hp,
    };
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json?.delivered) {
        setStatus("success");
        return;
      }
      const href = buildMailtoHref(payload);
      setFallbackHref(href);
      setStatus("fallback");
      window.location.href = href;
    } catch {
      const href = buildMailtoHref(payload);
      setFallbackHref(href);
      setStatus("fallback");
      window.location.href = href;
    }
  }

  const inputBase = "w-full px-4 py-3 text-sm bg-white border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-200";
  const idle = "border-slate-200 focus:border-blue-500";
  const err = "border-red-400 focus:border-red-500";

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
                {kontaktInfo.map(({ icon: Icon, label, value, href, tone = "blue" }) => {
                  const t = toneMap[tone];
                  return (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`group bg-white rounded-2xl p-5 border border-slate-200 ${t.border} shadow-soft transition-all duration-200 flex gap-4 items-start cursor-pointer mb-4`}
                  >
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 transition-colors ${t.box}`} aria-hidden="true">
                      <Icon className={`w-4 h-4 ${t.icon}`} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1">{label}</p>
                      <p className="text-slate-900 text-sm whitespace-pre-line font-medium">{value}</p>
                    </div>
                  </a>
                  );
                })}
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft">
                  <p className="text-slate-900 text-sm font-semibold mb-1">Erreichbarkeit Büro</p>
                  <p className="text-slate-600 text-xs leading-relaxed">Mo bis Fr: 07:00 bis 18:00 Uhr<br />Sa: 08:00 bis 13:00 Uhr<br />Abschleppdienst: telefonisch erreichbar</p>
                </div>
              </AnimatedSection>
            </aside>

            {/* Formular */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl p-12 border border-emerald-200 shadow-soft text-center" role="alert">
                      <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" aria-hidden="true" />
                      <h2 className="text-slate-900 text-xl font-bold mb-2">Nachricht gesendet.</h2>
                      <p className="text-slate-600 text-sm max-w-xs mx-auto">Wir melden uns zeitnah bei Ihnen. Für dringende Anfragen: +43 699 11147070.</p>
                    </motion.div>
                  ) : status === "fallback" ? (
                    <motion.div key="fallback" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl p-12 border border-amber-200 shadow-soft text-center" role="alert">
                      <Mail className="w-12 h-12 text-amber-600 mx-auto mb-4" aria-hidden="true" />
                      <h2 className="text-slate-900 text-xl font-bold mb-2">Nachricht vorbereitet.</h2>
                      <p className="text-slate-600 text-sm max-w-sm mx-auto mb-6">
                        Ihr E-Mail-Programm wurde mit der fertigen Nachricht geöffnet. Bitte senden Sie sie ab.
                        Falls sich nichts geöffnet hat, nutzen Sie die Schaltflächen unten.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        {fallbackHref && (
                          <a href={fallbackHref} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-all cursor-pointer shadow-primary">
                            <Mail className="w-4 h-4" aria-hidden="true" />E-Mail öffnen
                          </a>
                        )}
                        <a href="tel:+4369911147070" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-amber-200 text-amber-700 hover:bg-amber-50 font-semibold text-sm transition-all cursor-pointer">
                          <Phone className="w-4 h-4" aria-hidden="true" />+43 699 11147070
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl p-8 border border-slate-200 shadow-soft space-y-5" aria-label="Kontaktformular">
                      {/* Honeypot gegen Spam, für Menschen unsichtbar */}
                      <div className="hidden" aria-hidden="true">
                        <label htmlFor="k-website">Website</label>
                        <input id="k-website" type="text" tabIndex={-1} autoComplete="off" value={hp} onChange={e => setHp(e.target.value)} />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="k-name" className="block text-xs text-slate-600 mb-1.5 font-medium">Vor- und Nachname <span className="text-red-500" aria-hidden="true">*</span></label>
                          <input id="k-name" type="text" value={form.name} onChange={e => set("name", e.target.value)} placeholder="Maria Muster" className={`${inputBase} ${errors.name ? err : idle}`} aria-required="true" />
                          {errors.name && <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="k-email" className="block text-xs text-slate-600 mb-1.5 font-medium">E-Mail-Adresse <span className="text-red-500" aria-hidden="true">*</span></label>
                          <input id="k-email" type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="maria@firma.at" className={`${inputBase} ${errors.email ? err : idle}`} aria-required="true" />
                          {errors.email && <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.email}</p>}
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="k-telefon" className="block text-xs text-slate-600 mb-1.5 font-medium">Telefonnummer</label>
                          <input id="k-telefon" type="tel" value={form.telefon} onChange={e => set("telefon", e.target.value)} placeholder="+43 123 456 789" className={`${inputBase} ${idle}`} />
                        </div>
                        <div>
                          <label htmlFor="k-betreff" className="block text-xs text-slate-600 mb-1.5 font-medium">Betreff</label>
                          <select id="k-betreff" value={form.betreff} onChange={e => set("betreff", e.target.value)} className={`${inputBase} ${idle} cursor-pointer`}>
                            <option value="">Bitte wählen</option>
                            <option value="angebot">Angebotsanfrage</option>
                            <option value="auslieferung">Auslieferung</option>
                            <option value="abschlepp">Abschleppdienst</option>
                            <option value="fahrzeug">Fahrzeugtransport</option>
                            <option value="partnership">Partnerschaft</option>
                            <option value="karriere">Mitarbeit</option>
                            <option value="sonstiges">Sonstiges</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="k-nachricht" className="block text-xs text-slate-600 mb-1.5 font-medium">Nachricht <span className="text-red-500" aria-hidden="true">*</span></label>
                        <textarea id="k-nachricht" value={form.nachricht} onChange={e => set("nachricht", e.target.value)} placeholder="Beschreiben Sie Ihr Anliegen: Art des Transports, Menge, Strecke und Zeitraum." rows={5} className={`${inputBase} resize-none ${errors.nachricht ? err : idle}`} aria-required="true" />
                        {errors.nachricht && <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.nachricht}</p>}
                      </div>
                      <button type="submit" disabled={status === "loading"} className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 cursor-pointer shadow-primary" aria-live="polite">
                        {status === "loading" ? (
                          <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />Wird gesendet…</>
                        ) : (
                          <><Send className="w-4 h-4" aria-hidden="true" />Nachricht senden</>
                        )}
                      </button>
                      <p className="text-slate-500 text-xs text-center">Mit dem Absenden stimmen Sie unserer <a href="/datenschutz" className="underline hover:text-slate-700 transition-colors">Datenschutzerklärung</a> zu.</p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </AnimatedSection>
            </div>
          </div>

          {/* Standortkarte */}
          <AnimatedSection className="mt-16">
            <div className="mb-5">
              <h2 className="text-2xl font-bold text-slate-900 mb-1">So finden Sie uns</h2>
              <p className="text-slate-600 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-700" aria-hidden="true" />
                Alxingergasse 16/7a, 1100 Wien
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-soft">
              {mapsConsent ? (
                <iframe
                  title="Standort von MAGOTransport: Alxingergasse 16/7a, 1100 Wien"
                  src={MAPS_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="w-full h-[320px] sm:h-[420px] border-0 block"
                />
              ) : (
                <div className="w-full h-[320px] sm:h-[420px] bg-slate-50 flex flex-col items-center justify-center text-center px-6 gap-4">
                  <MapPin className="w-8 h-8 text-blue-700" aria-hidden="true" />
                  <div>
                    <p className="text-slate-900 font-semibold text-sm mb-1">Google-Maps-Karte</p>
                    <p className="text-slate-600 text-xs max-w-sm leading-relaxed">
                      Wenn Sie die Karte laden, werden Daten an Google übertragen. Erst nach Ihrer
                      Zustimmung wird die Karte angezeigt.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMapsConsent(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-all duration-200 cursor-pointer shadow-primary"
                  >
                    Karte laden
                  </button>
                </div>
              )}
            </div>
            <div className="mt-4">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-all duration-200 cursor-pointer shadow-primary"
              >
                In Google Maps öffnen
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
