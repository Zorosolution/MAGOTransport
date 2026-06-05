import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Pricing } from "@/components/sections/Pricing";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for NexusAI. Start free, upgrade when you're ready. No hidden fees, no long-term contracts.",
};

const featureComparison = [
  { feature: "Tasks per month", starter: "1,000", pro: "50,000", enterprise: "Unlimited" },
  { feature: "Active workflows", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Integrations", starter: "10", pro: "100+", enterprise: "All + custom" },
  { feature: "AI agents", starter: "1", pro: "10", enterprise: "Unlimited" },
  { feature: "Team members", starter: "1", pro: "15", enterprise: "Unlimited" },
  { feature: "Log retention", starter: "7 days", pro: "30 days", enterprise: "90 days" },
  { feature: "Custom webhooks", starter: false, pro: true, enterprise: true },
  { feature: "Advanced analytics", starter: false, pro: true, enterprise: true },
  { feature: "Priority support", starter: false, pro: true, enterprise: true },
  { feature: "SSO / SAML", starter: false, pro: false, enterprise: true },
  { feature: "On-premise option", starter: false, pro: false, enterprise: true },
  { feature: "SLA guarantee", starter: false, pro: false, enterprise: true },
  { feature: "Dedicated CSM", starter: false, pro: false, enterprise: true },
  { feature: "Custom contracts", starter: false, pro: false, enterprise: true },
];

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-4 h-4 text-green-400 mx-auto" aria-label="Included" />
    ) : (
      <span className="text-slate-700 text-lg mx-auto block text-center" aria-label="Not included">—</span>
    );
  }
  return <span className="text-slate-300 text-sm">{value}</span>;
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        badge="Pricing"
        badgeColor="green"
        orbColor="green"
        title={
          <>
            Simple pricing,{" "}
            <span className="gradient-text">no surprises</span>
          </>
        }
        description="Start free and scale as you grow. Every plan includes a 14-day trial with full feature access. Cancel anytime."
      />

      {/* Pricing cards */}
      <Pricing />

      {/* Feature comparison table */}
      <section className="py-20 border-t border-white/8" aria-labelledby="comparison-heading">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 id="comparison-heading" className="text-3xl font-bold text-white mb-3">Compare all features</h2>
            <p className="text-slate-400">A complete side-by-side breakdown of every plan.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="glass rounded-2xl border border-white/8 overflow-x-auto">
              <table className="w-full min-w-[540px]" role="table">
                <thead>
                  <tr className="border-b border-white/8">
                    <th className="text-left py-4 px-5 text-slate-400 text-sm font-medium w-1/2" scope="col">Feature</th>
                    <th className="text-center py-4 px-5 text-slate-400 text-sm font-medium" scope="col">Starter</th>
                    <th className="text-center py-4 px-5 text-sky-400 text-sm font-semibold" scope="col">Pro</th>
                    <th className="text-center py-4 px-5 text-slate-400 text-sm font-medium" scope="col">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}
                    >
                      <td className="py-3.5 px-5 text-slate-300 text-sm">{row.feature}</td>
                      <td className="py-3.5 px-5 text-center"><Cell value={row.starter} /></td>
                      <td className="py-3.5 px-5 text-center bg-sky-500/[0.04]"><Cell value={row.pro} /></td>
                      <td className="py-3.5 px-5 text-center"><Cell value={row.enterprise} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-20 border-t border-white/8">
        <AnimatedSection className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Common questions about pricing</h2>
          <div className="space-y-4">
            {[
              { q: "Can I change plans at any time?", a: "Yes. Upgrade instantly (prorated) or downgrade at the end of your billing period. No penalties, no lock-in." },
              { q: "How does the free trial work?", a: "Every paid plan comes with a 14-day trial with full feature access. No credit card needed to start. You'll be reminded before the trial ends." },
              { q: "What if I exceed my task limit?", a: "We notify you at 80% usage. You have 72 hours to upgrade before any rate limiting kicks in. We never stop automations without warning." },
            ].map((item) => (
              <details key={item.q} className="glass rounded-2xl border border-white/8 group">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none text-white font-medium text-sm">
                  <span>{item.q}</span>
                  <span className="flex-shrink-0 w-5 h-5 glass rounded-full flex items-center justify-center text-slate-400 group-open:rotate-45 transition-all duration-200 border border-white/10 text-base leading-none">+</span>
                </summary>
                <div className="px-5 pb-5"><p className="text-slate-400 text-sm leading-relaxed">{item.a}</p></div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 text-sm transition-colors cursor-pointer">
              View all FAQ <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
