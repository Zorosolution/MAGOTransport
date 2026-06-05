import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CheckCircle, Calendar, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Booking Confirmed",
  description: "Your demo session with NexusAI has been confirmed. Check your email for the calendar invite.",
  robots: { index: false },
};

export default function BookingConfirmationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-32 px-6">
      <AnimatedSection className="max-w-md w-full text-center">
        <div className="glass rounded-3xl p-12 border border-green-500/20">
          <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>

          <h1 className="text-2xl font-bold text-white mb-3">You&apos;re booked!</h1>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            We&apos;ve confirmed your session and sent a calendar invite to your email. Looking forward to meeting you.
          </p>

          <div className="space-y-3 mb-8">
            <div className="glass rounded-xl p-4 border border-white/8 flex items-center gap-3 text-left">
              <Calendar className="w-5 h-5 text-sky-400 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-white text-sm font-medium">Calendar invite sent</p>
                <p className="text-slate-500 text-xs">Check your inbox (and spam folder)</p>
              </div>
            </div>
            <div className="glass rounded-xl p-4 border border-white/8 flex items-center gap-3 text-left">
              <Mail className="w-5 h-5 text-sky-400 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-white text-sm font-medium">Confirmation email sent</p>
                <p className="text-slate-500 text-xs">Includes the video call link and prep guide</p>
              </div>
            </div>
          </div>

          <p className="text-slate-500 text-xs mb-6">
            Need to reschedule? Email us at{" "}
            <a href="mailto:hello@nexusai.com" className="text-sky-400 hover:text-sky-300 transition-colors">
              hello@nexusai.com
            </a>
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-all duration-200 cursor-pointer"
            >
              Back to home <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-slate-400 hover:text-white hover:border-white/20 text-sm font-medium transition-all duration-200 cursor-pointer"
            >
              Read our blog while you wait
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
