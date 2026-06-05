import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "See how NexusAI customers across industries have transformed their operations with AI automation. Real results, real teams.",
};

const caseStudies = [
  {
    company: "Meridian Health",
    industry: "Healthcare",
    avatar: "MH",
    avatarColor: "from-sky-400 to-sky-600",
    tag: "Operations",
    tagColor: "text-sky-400 bg-sky-400/10",
    headline: "Cut patient onboarding time from 4 days to 2 hours",
    description:
      "Meridian's operations team was drowning in manual data entry, insurance verification calls, and appointment scheduling. NexusAI agents now handle the entire intake flow autonomously.",
    results: [
      { metric: "96%", label: "Faster onboarding" },
      { metric: "$420K", label: "Annual savings" },
      { metric: "99.2%", label: "Data accuracy" },
    ],
    quote: "NexusAI didn't just save us time — it fundamentally changed what our team is capable of.",
    author: "Sarah Chen, Head of Operations",
  },
  {
    company: "Flare Fintech",
    industry: "Financial Services",
    avatar: "FF",
    avatarColor: "from-purple-400 to-purple-600",
    tag: "Engineering",
    tagColor: "text-purple-400 bg-purple-400/10",
    headline: "Replaced 3 automation tools with one platform, cut costs 60%",
    description:
      "Flare was juggling Zapier, Make, and a custom Python pipeline that required constant maintenance. Consolidating to NexusAI simplified their stack and unlocked new capabilities.",
    results: [
      { metric: "60%", label: "Cost reduction" },
      { metric: "3→1", label: "Tools consolidated" },
      { metric: "12h/wk", label: "Eng time saved" },
    ],
    quote: "The ROI was visible in the first week. We decommissioned two tools and increased reliability.",
    author: "Marcus Williams, CTO",
  },
  {
    company: "Axon Cloud",
    industry: "SaaS / DevOps",
    avatar: "AC",
    avatarColor: "from-orange-400 to-orange-600",
    tag: "DevOps",
    tagColor: "text-orange-400 bg-orange-400/10",
    headline: "Fully automated CI/CD pipeline saves 20 hours per release",
    description:
      "Axon's release cycle required manual coordination across 8 teams. NexusAI agents now orchestrate the entire deployment process — from staging validation to production rollout.",
    results: [
      { metric: "20h", label: "Saved per release" },
      { metric: "4×", label: "Faster deployments" },
      { metric: "0", label: "Manual steps needed" },
    ],
    quote: "We went from dreading release days to barely noticing them. NexusAI just handles it.",
    author: "Priya Nair, VP Engineering",
  },
  {
    company: "Soren Studios",
    industry: "Media & Entertainment",
    avatar: "SS",
    avatarColor: "from-green-400 to-green-600",
    tag: "Content",
    tagColor: "text-green-400 bg-green-400/10",
    headline: "Automated content pipeline processes 10,000 assets per day",
    description:
      "Soren's media library needed constant tagging, transcription, and rights management. NexusAI agents process every asset automatically with 99%+ accuracy.",
    results: [
      { metric: "10K+", label: "Assets/day processed" },
      { metric: "99.1%", label: "Tagging accuracy" },
      { metric: "8 FTE", label: "Equivalent capacity" },
    ],
    quote: "Our content team now focuses entirely on creative work. The operational side just runs.",
    author: "James Okafor, Director of Product",
  },
  {
    company: "Helix Systems",
    industry: "Manufacturing",
    avatar: "HS",
    avatarColor: "from-rose-400 to-rose-600",
    tag: "Supply Chain",
    tagColor: "text-rose-400 bg-rose-400/10",
    headline: "Predictive procurement saves $1.2M in inventory waste annually",
    description:
      "Helix integrated NexusAI with their ERP to predict supply chain demand. Agents now automatically reorder materials, negotiate with suppliers, and flag anomalies.",
    results: [
      { metric: "$1.2M", label: "Annual savings" },
      { metric: "34%", label: "Inventory reduction" },
      { metric: "99.8%", label: "On-time delivery" },
    ],
    quote: "The accuracy of NexusAI's predictions surprised even our supply chain veterans.",
    author: "Elena Kovač, Lead Engineer",
  },
  {
    company: "Nimbus Labs",
    industry: "Startup",
    avatar: "NL",
    avatarColor: "from-amber-400 to-amber-600",
    tag: "Growth",
    tagColor: "text-amber-400 bg-amber-400/10",
    headline: "2-person startup scaled to 500 customers with zero ops hires",
    description:
      "Nimbus used NexusAI to automate their entire customer success, billing, and onboarding stack — enabling two founders to run the business without any ops headcount.",
    results: [
      { metric: "500+", label: "Customers served" },
      { metric: "2", label: "Team members" },
      { metric: "0", label: "Ops hires needed" },
    ],
    quote: "NexusAI let us punch way above our weight. We run like a 20-person company.",
    author: "David Park, Founder & CEO",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        badge="Case Studies"
        badgeColor="green"
        orbColor="green"
        title={
          <>
            Real teams, <span className="gradient-text">real results</span>
          </>
        }
        description="From healthcare to manufacturing, see how teams across industries are using NexusAI to automate what used to take days — in minutes."
      />

      <section className="py-20" aria-labelledby="portfolio-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="portfolio-heading" className="sr-only">Case studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.company} delay={i * 0.08}>
                <article className="glass rounded-2xl p-7 border border-white/8 hover:border-white/15 transition-all duration-300 h-full flex flex-col group cursor-default">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cs.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`} aria-hidden="true">
                        {cs.avatar}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{cs.company}</p>
                        <p className="text-slate-500 text-xs">{cs.industry}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${cs.tagColor}`}>{cs.tag}</span>
                  </div>

                  <h3 className="text-white font-semibold text-lg leading-snug mb-3">{cs.headline}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{cs.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {cs.results.map(({ metric, label }) => (
                      <div key={label} className="text-center glass rounded-xl py-3 border border-white/6">
                        <div className="text-lg font-bold gradient-text">{metric}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="border-t border-white/8 pt-4">
                    <p className="text-slate-400 text-sm italic leading-relaxed mb-2">&ldquo;{cs.quote}&rdquo;</p>
                    <footer className="text-slate-600 text-xs">{cs.author}</footer>
                  </blockquote>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Summary stats */}
      <section className="py-16 border-y border-white/8" aria-label="Aggregate results">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-green-400 text-sm font-medium mb-3">
              <TrendingUp className="w-4 h-4" aria-hidden="true" />
              Aggregate results across all customers
            </div>
            <h2 className="text-2xl font-bold text-white">The numbers speak for themselves</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "$47M+", label: "Customer savings generated" },
              { value: "48M+", label: "Tasks automated per month" },
              { value: "67%", label: "Average cost reduction" },
              { value: "4.9/5", label: "Average customer rating" },
            ].map(({ value, label }) => (
              <AnimatedSection key={label}>
                <div className="glass rounded-2xl p-5 border border-white/8 text-center">
                  <div className="text-2xl font-bold gradient-text mb-1">{value}</div>
                  <div className="text-slate-500 text-xs">{label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <AnimatedSection className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Your success story starts here</h2>
          <p className="text-slate-400 mb-8">Join 12,000+ teams that are already automating with NexusAI. Book a demo and see it live with your own workflows.</p>
          <Link href="/booking" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all duration-200 cursor-pointer text-sm shadow-lg shadow-sky-500/25">
            Book a demo <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
