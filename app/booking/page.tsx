"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ChevronLeft, ChevronRight, Clock, CheckCircle, AlertCircle, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM",
];

// Simulate some unavailable slots
const UNAVAILABLE = new Set(["9:30 AM", "11:00 AM", "2:00 PM"]);

const MEETING_TYPES = [
  { id: "demo", label: "Product Demo", duration: "30 min", description: "See NexusAI live with your own use case." },
  { id: "consult", label: "Strategy Call", duration: "45 min", description: "Map your workflows and find automation opportunities." },
  { id: "enterprise", label: "Enterprise Intro", duration: "60 min", description: "Deep-dive for large teams and compliance requirements." },
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);
  return days;
}

interface BookingForm {
  name: string;
  email: string;
  company: string;
  notes: string;
}

type Step = 1 | 2 | 3;

export default function BookingPage() {
  const router = useRouter();
  const today = new Date();
  const [step, setStep] = useState<Step>(1);
  const [meetingType, setMeetingType] = useState(MEETING_TYPES[0].id);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState<BookingForm>({ name: "", email: "", company: "", notes: "" });
  const [errors, setErrors] = useState<Partial<BookingForm>>({});
  const [submitting, setSubmitting] = useState(false);

  const calDays = useMemo(() => getCalendarDays(viewYear, viewMonth), [viewYear, viewMonth]);

  function prevMonth() {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
    setSelectedDate(null); setSelectedTime(null);
  }

  function nextMonth() {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
    setSelectedDate(null); setSelectedTime(null);
  }

  function isPast(day: number) {
    const d = new Date(viewYear, viewMonth, day);
    d.setHours(0,0,0,0); today.setHours(0,0,0,0);
    return d < today;
  }

  function isWeekend(day: number) {
    return [0, 6].includes(new Date(viewYear, viewMonth, day).getDay());
  }

  function validateForm(): boolean {
    const errs: Partial<BookingForm> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleConfirm(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmitting(true);
    // Booking integration hook — replace with your API route / Cal.com / Calendly:
    // await fetch("/api/booking", { method: "POST", body: JSON.stringify({ meetingType, date: `${viewYear}-${viewMonth+1}-${selectedDate}`, time: selectedTime, ...form }) });
    await new Promise(r => setTimeout(r, 1200));
    router.push("/booking/confirmation");
  }

  const selectedMeeting = MEETING_TYPES.find(m => m.id === meetingType)!;
  const canGoToStep2 = selectedDate !== null && selectedTime !== null;

  const inputBase = "w-full px-4 py-3 text-sm glass border rounded-xl text-white placeholder-slate-600 focus:outline-none transition-all duration-200";

  return (
    <div className="min-h-screen">
      <PageHero
        badge="Book a Demo"
        badgeColor="sky"
        orbColor="blue"
        title={
          <>
            Schedule your <span className="gradient-text">free session</span>
          </>
        }
        description="Pick a time that works for you. We'll walk through NexusAI with your own workflows — no pitch, just value."
      />

      <section className="py-20" aria-label="Booking flow">
        <div className="max-w-4xl mx-auto px-6">
          {/* Step indicator */}
          <AnimatedSection className="flex items-center justify-center gap-3 mb-12">
            {([1, 2, 3] as Step[]).map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                  step === s ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                    : step > s ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "glass border border-white/10 text-slate-500"
                )} aria-current={step === s ? "step" : undefined}>
                  {step > s ? <CheckCircle className="w-4 h-4" aria-hidden="true" /> : s}
                </div>
                <span className={cn("text-sm hidden sm:inline", step >= s ? "text-white" : "text-slate-600")}>
                  {s === 1 ? "Choose time" : s === 2 ? "Your details" : "Confirm"}
                </span>
                {s < 3 && <div className={cn("w-12 h-px", step > s ? "bg-green-500/40" : "bg-white/10")} aria-hidden="true" />}
              </div>
            ))}
          </AnimatedSection>

          <AnimatePresence mode="wait">
            {/* STEP 1: Meeting type + Calendar + Time */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Meeting type */}
                  <div className="space-y-3" role="radiogroup" aria-label="Meeting type">
                    <h2 className="text-white font-semibold text-sm mb-4">Meeting type</h2>
                    {MEETING_TYPES.map((mt) => (
                      <label key={mt.id} className={cn(
                        "block glass rounded-xl p-4 border cursor-pointer transition-all duration-200",
                        meetingType === mt.id ? "border-sky-500/60 bg-sky-500/5" : "border-white/8 hover:border-white/20"
                      )}>
                        <input type="radio" name="meeting-type" value={mt.id} checked={meetingType === mt.id} onChange={() => setMeetingType(mt.id)} className="sr-only" />
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white text-sm font-medium">{mt.label}</span>
                          <div className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock className="w-3 h-3" aria-hidden="true" />{mt.duration}
                          </div>
                        </div>
                        <p className="text-slate-500 text-xs">{mt.description}</p>
                      </label>
                    ))}
                  </div>

                  {/* Calendar */}
                  <div className="lg:col-span-2">
                    <div className="glass rounded-2xl p-5 border border-white/8">
                      {/* Month nav */}
                      <div className="flex items-center justify-between mb-5">
                        <button onClick={prevMonth} className="p-2 rounded-lg glass border border-white/8 text-slate-400 hover:text-white transition-colors cursor-pointer" aria-label="Previous month">
                          <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                        </button>
                        <h2 className="text-white font-semibold text-sm">{MONTHS[viewMonth]} {viewYear}</h2>
                        <button onClick={nextMonth} className="p-2 rounded-lg glass border border-white/8 text-slate-400 hover:text-white transition-colors cursor-pointer" aria-label="Next month">
                          <ChevronRight className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>

                      {/* Day headers */}
                      <div className="grid grid-cols-7 mb-2" role="row">
                        {DAYS.map(d => (
                          <div key={d} className="text-center text-xs text-slate-600 font-medium py-1" role="columnheader">{d}</div>
                        ))}
                      </div>

                      {/* Calendar grid */}
                      <div className="grid grid-cols-7 gap-1" role="grid">
                        {calDays.map((day, i) => {
                          if (!day) return <div key={i} role="gridcell" />;
                          const disabled = isPast(day) || isWeekend(day);
                          const active = selectedDate === day;
                          return (
                            <button
                              key={i}
                              role="gridcell"
                              disabled={disabled}
                              onClick={() => { setSelectedDate(day); setSelectedTime(null); }}
                              aria-label={`${MONTHS[viewMonth]} ${day}, ${viewYear}`}
                              aria-pressed={active}
                              className={cn(
                                "aspect-square rounded-lg text-sm transition-all duration-150 cursor-pointer",
                                disabled ? "text-slate-700 cursor-not-allowed" :
                                  active ? "bg-sky-500 text-white font-semibold shadow-lg shadow-sky-500/30"
                                    : "text-slate-300 hover:bg-white/8 hover:text-white"
                              )}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time slots */}
                    {selectedDate && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                        <h3 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-3">
                          Available times — {MONTHS[viewMonth]} {selectedDate} (PT)
                        </h3>
                        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2" role="group" aria-label="Time slots">
                          {TIME_SLOTS.map((slot) => {
                            const unavailable = UNAVAILABLE.has(slot);
                            const active = selectedTime === slot;
                            return (
                              <button
                                key={slot}
                                disabled={unavailable}
                                onClick={() => setSelectedTime(slot)}
                                aria-pressed={active}
                                aria-label={`${slot}${unavailable ? " — unavailable" : ""}`}
                                className={cn(
                                  "py-2 px-1 text-xs rounded-lg border transition-all duration-150 cursor-pointer",
                                  unavailable ? "text-slate-700 border-white/5 cursor-not-allowed" :
                                    active ? "bg-sky-500 text-white border-sky-500 font-medium"
                                      : "glass border-white/10 text-slate-300 hover:border-sky-500/40 hover:text-white"
                                )}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    onClick={() => setStep(2)}
                    disabled={!canGoToStep2}
                    className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 cursor-pointer flex items-center gap-2"
                  >
                    Continue <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Contact details */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <div className="max-w-xl mx-auto">
                  {/* Booking summary */}
                  <div className="glass rounded-2xl p-5 border border-sky-500/20 mb-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Calendar className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{selectedMeeting.label} · {selectedMeeting.duration}</p>
                      <p className="text-slate-400 text-xs">{MONTHS[viewMonth]} {selectedDate}, {viewYear} at {selectedTime} PT</p>
                    </div>
                  </div>

                  <form onSubmit={handleConfirm} noValidate className="glass rounded-2xl p-8 border border-white/8 space-y-5" aria-label="Booking form">
                    <div>
                      <label htmlFor="booking-name" className="block text-xs text-slate-400 mb-1.5 font-medium">Full name <span className="text-red-400" aria-hidden="true">*</span></label>
                      <input
                        id="booking-name"
                        type="text"
                        value={form.name}
                        onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(ev => ({ ...ev, name: "" })); }}
                        placeholder="Jane Smith"
                        className={`${inputBase} ${errors.name ? "border-red-500/50" : "border-white/10 focus:border-sky-500/50"}`}
                        aria-required="true"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="booking-email" className="block text-xs text-slate-400 mb-1.5 font-medium">Work email <span className="text-red-400" aria-hidden="true">*</span></label>
                      <input
                        id="booking-email"
                        type="email"
                        value={form.email}
                        onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(ev => ({ ...ev, email: "" })); }}
                        placeholder="jane@company.com"
                        className={`${inputBase} ${errors.email ? "border-red-500/50" : "border-white/10 focus:border-sky-500/50"}`}
                        aria-required="true"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="booking-company" className="block text-xs text-slate-400 mb-1.5 font-medium">Company name</label>
                      <input id="booking-company" type="text" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} placeholder="Acme Inc." className={`${inputBase} border-white/10 focus:border-sky-500/50`} />
                    </div>
                    <div>
                      <label htmlFor="booking-notes" className="block text-xs text-slate-400 mb-1.5 font-medium">What would you like to discuss? (optional)</label>
                      <textarea id="booking-notes" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} placeholder="e.g. We handle 500 invoices per month and want to automate our AP workflow..." rows={3} className={`${inputBase} resize-none border-white/10 focus:border-sky-500/50`} />
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <button type="button" onClick={() => setStep(1)} className="flex items-center gap-1.5 px-5 py-3 rounded-xl glass border border-white/10 text-slate-400 hover:text-white text-sm font-medium transition-all duration-200 cursor-pointer">
                        <ChevronLeft className="w-4 h-4" aria-hidden="true" /> Back
                      </button>
                      <button type="submit" disabled={submitting} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 cursor-pointer">
                        {submitting ? (
                          <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />Confirming…</>
                        ) : "Confirm booking"}
                      </button>
                    </div>
                    <p className="text-slate-600 text-xs text-center">A calendar invite will be emailed to you immediately after booking.</p>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
