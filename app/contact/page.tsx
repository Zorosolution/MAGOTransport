"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const contactDetails = [
  { icon: Mail, label: "Email us", value: "hello@nexusai.com", href: "mailto:hello@nexusai.com" },
  { icon: Phone, label: "Call us", value: "+1 (800) 639-8724", href: "tel:+18006398724" },
  { icon: MapPin, label: "Visit us", value: "548 Market St, Suite 8102\nSan Francisco, CA 94104", href: "#" },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!data.message.trim()) errors.message = "Message is required.";
  else if (data.message.trim().length < 20) errors.message = "Please write at least 20 characters.";
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", company: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<FormState>("idle");

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setState("loading");
    // Email integration hook — replace with your API route or Resend/SendGrid call:
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  }

  const inputBase = "w-full px-4 py-3 text-sm glass border rounded-xl text-white placeholder-slate-600 focus:outline-none transition-all duration-200";
  const inputIdle = "border-white/10 focus:border-sky-500/50";
  const inputError = "border-red-500/50 focus:border-red-500/70";

  return (
    <div className="min-h-screen">
      <PageHero
        badge="Contact"
        badgeColor="sky"
        orbColor="blue"
        title={
          <>
            Let&apos;s <span className="gradient-text">talk</span>
          </>
        }
        description="Have a question, a partnership idea, or just want to see NexusAI in action? We'd love to hear from you."
      />

      <section className="py-20" aria-label="Contact form and information">
        <div className="max-w-6xl mx-auto px-6">
          <GradientOrb color="blue" size="lg" className="-left-32 top-1/2 -translate-y-1/2 opacity-10" animate={false} />
          <div className="grid lg:grid-cols-5 gap-8">

            {/* Contact info sidebar */}
            <aside className="lg:col-span-2 space-y-6">
              <AnimatedSection direction="right">
                <div className="space-y-4">
                  {contactDetails.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="group glass rounded-2xl p-5 border border-white/8 hover:border-white/15 transition-all duration-200 flex gap-4 items-start cursor-pointer block"
                    >
                      <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/20 transition-colors" aria-hidden="true">
                        <Icon className="w-4 h-4 text-sky-400" />
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs mb-1">{label}</p>
                        <p className="text-white text-sm whitespace-pre-line">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.1}>
                <div className="glass rounded-2xl p-5 border border-white/8">
                  <p className="text-white text-sm font-semibold mb-1">Support hours</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Monday – Friday, 9am – 6pm PT.<br />
                    We typically respond within 2 hours.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                    <span className="text-green-400 text-xs font-medium">Online now</span>
                  </div>
                </div>
              </AnimatedSection>
            </aside>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <AnimatePresence mode="wait">
                  {state === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="glass rounded-2xl p-12 border border-green-500/30 text-center"
                      role="alert"
                    >
                      <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" aria-hidden="true" />
                      <h2 className="text-white text-xl font-bold mb-2">Message sent!</h2>
                      <p className="text-slate-400 text-sm max-w-xs mx-auto">
                        We&apos;ve received your message and will get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      noValidate
                      className="glass rounded-2xl p-8 border border-white/8 space-y-5"
                      aria-label="Contact form"
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-name" className="block text-xs text-slate-400 mb-1.5 font-medium">
                            Full name <span className="text-red-400" aria-hidden="true">*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            value={form.name}
                            onChange={(e) => set("name", e.target.value)}
                            placeholder="Jane Smith"
                            className={`${inputBase} ${errors.name ? inputError : inputIdle}`}
                            aria-required="true"
                            aria-describedby={errors.name ? "err-name" : undefined}
                          />
                          {errors.name && <p id="err-name" className="text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="block text-xs text-slate-400 mb-1.5 font-medium">
                            Email address <span className="text-red-400" aria-hidden="true">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            value={form.email}
                            onChange={(e) => set("email", e.target.value)}
                            placeholder="jane@company.com"
                            className={`${inputBase} ${errors.email ? inputError : inputIdle}`}
                            aria-required="true"
                            aria-describedby={errors.email ? "err-email" : undefined}
                          />
                          {errors.email && <p id="err-email" className="text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-company" className="block text-xs text-slate-400 mb-1.5 font-medium">Company</label>
                          <input
                            id="contact-company"
                            type="text"
                            value={form.company}
                            onChange={(e) => set("company", e.target.value)}
                            placeholder="Acme Inc."
                            className={`${inputBase} ${inputIdle}`}
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-subject" className="block text-xs text-slate-400 mb-1.5 font-medium">Subject</label>
                          <select
                            id="contact-subject"
                            value={form.subject}
                            onChange={(e) => set("subject", e.target.value)}
                            className={`${inputBase} ${inputIdle} cursor-pointer`}
                          >
                            <option value="" className="bg-zinc-900">Select a topic</option>
                            <option value="sales" className="bg-zinc-900">Sales inquiry</option>
                            <option value="support" className="bg-zinc-900">Technical support</option>
                            <option value="partnership" className="bg-zinc-900">Partnership</option>
                            <option value="press" className="bg-zinc-900">Press & media</option>
                            <option value="other" className="bg-zinc-900">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-message" className="block text-xs text-slate-400 mb-1.5 font-medium">
                          Message <span className="text-red-400" aria-hidden="true">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          value={form.message}
                          onChange={(e) => set("message", e.target.value)}
                          placeholder="Tell us about your use case, team size, or any questions you have..."
                          rows={5}
                          className={`${inputBase} resize-none ${errors.message ? inputError : inputIdle}`}
                          aria-required="true"
                          aria-describedby={errors.message ? "err-message" : undefined}
                        />
                        {errors.message && <p id="err-message" className="text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.message}</p>}
                      </div>

                      {state === "error" && (
                        <p className="text-red-400 text-sm flex items-center gap-2" role="alert">
                          <AlertCircle className="w-4 h-4" aria-hidden="true" />
                          Something went wrong. Please try again or email us directly.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={state === "loading"}
                        className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 cursor-pointer"
                        aria-live="polite"
                      >
                        {state === "loading" ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" aria-hidden="true" />
                            Send message
                          </>
                        )}
                      </button>
                      <p className="text-slate-600 text-xs text-center">
                        By submitting this form, you agree to our{" "}
                        <a href="/privacy" className="underline hover:text-slate-400 transition-colors">Privacy Policy</a>.
                      </p>
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
