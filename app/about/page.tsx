import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { Users, Target, Award, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NexusAI — our mission, team, and the story behind the AI automation platform trusted by 12,000+ teams worldwide.",
};

const values = [
  {
    icon: Target,
    title: "Customer Obsession",
    description:
      "Every decision starts with the question: does this help our customers ship faster and with more confidence?",
    color: "sky",
  },
  {
    icon: Zap,
    title: "Move Fast, Stay Safe",
    description:
      "We believe speed and quality are not opposites. Our platform is proof — rapid iteration without sacrificing reliability.",
    color: "orange",
  },
  {
    icon: Users,
    title: "Radical Transparency",
    description:
      "We share our roadmap, our mistakes, and our wins with the community. No black boxes, ever.",
    color: "purple",
  },
  {
    icon: Award,
    title: "Relentless Craft",
    description:
      "Details matter. We obsess over the last 10% of polish because that's what separates good products from great ones.",
    color: "green",
  },
];

const colorMap: Record<string, string> = {
  sky: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  orange: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  purple: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  green: "text-green-400 bg-green-400/10 border-green-400/20",
};

const team = [
  { name: "Alex Rivera", role: "CEO & Co-founder", avatar: "AR", color: "from-sky-400 to-sky-600", bio: "Former ML lead at Google Brain. 10+ years building AI systems at scale." },
  { name: "Priya Kapoor", role: "CTO & Co-founder", avatar: "PK", color: "from-purple-400 to-purple-600", bio: "Ex-principal engineer at Stripe. Built payment infrastructure for 100M+ users." },
  { name: "Marcus Lee", role: "Head of Product", avatar: "ML", color: "from-orange-400 to-orange-600", bio: "Previously VP Product at Linear. Passionate about zero-friction developer tools." },
  { name: "Sofia Chen", role: "Head of Design", avatar: "SC", color: "from-green-400 to-green-600", bio: "Award-winning designer. Former design lead at Figma and Notion." },
  { name: "James Osei", role: "Head of Growth", avatar: "JO", color: "from-rose-400 to-rose-600", bio: "Scaled 3 SaaS companies from $0 to $10M ARR. GTM specialist." },
  { name: "Elena Brandt", role: "Head of Engineering", avatar: "EB", color: "from-amber-400 to-amber-600", bio: "Systems engineer. Built distributed infrastructure at Cloudflare for 5 years." },
];

const milestones = [
  { year: "2021", event: "NexusAI founded in San Francisco" },
  { year: "2022", event: "Raised $4M seed round. First 100 customers" },
  { year: "2023", event: "Launched multi-agent workflows. 2,000 teams onboarded" },
  { year: "2024", event: "Series A: $22M. Reached 10,000+ active teams" },
  { year: "2025", event: "Enterprise tier launched. Named a Gartner Cool Vendor" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        badge="About Us"
        badgeColor="purple"
        orbColor="purple"
        title={
          <>
            Built by builders,{" "}
            <span className="gradient-text">for builders</span>
          </>
        }
        description="We started NexusAI because we were tired of spending 40% of our engineering time on repetitive, automatable work. We knew there had to be a better way."
      />

      {/* Mission */}
      <section className="py-20 relative" aria-labelledby="mission-heading">
        <GradientOrb color="purple" size="lg" className="-right-32 top-0 opacity-10" animate={false} />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-4 block">
                Our Mission
              </span>
              <h2 id="mission-heading" className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Make every team 10× more effective with AI
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                We believe the future of work is one where humans focus on
                creativity, strategy, and relationships — and intelligent agents
                handle the rest. NexusAI is building the infrastructure to make
                that future real, today.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Our platform connects to your tools, learns your processes, and
                executes complex workflows with the reliability of a senior
                engineer who never sleeps.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15} direction="left">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "12,000+", label: "Teams worldwide" },
                  { value: "48M+", label: "Tasks automated" },
                  { value: "99.8%", label: "Uptime SLA" },
                  { value: "67%", label: "Avg. cost reduction" },
                ].map(({ value, label }) => (
                  <div key={label} className="glass rounded-2xl p-5 border border-white/8 text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">{value}</div>
                    <div className="text-slate-500 text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-y border-white/8" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4 block">Our Values</span>
            <h2 id="values-heading" className="text-3xl sm:text-4xl font-bold text-white">How we work</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimatedSection key={v.title} delay={i * 0.08}>
                  <article className="glass rounded-2xl p-6 border border-white/8 h-full">
                    <div className={`inline-flex w-10 h-10 rounded-xl border items-center justify-center mb-4 ${colorMap[v.color]}`} aria-hidden="true">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" aria-labelledby="team-heading">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-4 block">The Team</span>
            <h2 id="team-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">Meet the people behind NexusAI</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A team of engineers, designers, and operators who have shipped products
              at Google, Stripe, Linear, Figma, and Cloudflare.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.07}>
                <article className="glass rounded-2xl p-6 border border-white/8 flex gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`} aria-hidden="true">
                    {member.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{member.name}</p>
                    <p className="text-sky-400 text-xs mb-2">{member.role}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{member.bio}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 border-t border-white/8" aria-labelledby="timeline-heading">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-4 block">Our Story</span>
            <h2 id="timeline-heading" className="text-3xl sm:text-4xl font-bold text-white">The journey so far</h2>
          </AnimatedSection>
          <ol className="relative border-l border-white/10 space-y-8 pl-8">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.1} direction="left">
                <li className="relative">
                  <div className="absolute -left-[2.15rem] w-4 h-4 rounded-full bg-sky-500 border-4 border-black" aria-hidden="true" />
                  <time className="text-xs font-semibold text-sky-400 uppercase tracking-widest">{m.year}</time>
                  <p className="text-slate-300 mt-1">{m.event}</p>
                </li>
              </AnimatedSection>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/8">
        <AnimatedSection className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join us on this mission</h2>
          <p className="text-slate-400 mb-8">We&apos;re hiring across engineering, design, and go-to-market. Come build the future of work.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all duration-200 cursor-pointer text-sm">
              Book a demo <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/12 text-white font-medium transition-all duration-200 hover:border-white/25 cursor-pointer text-sm">
              Get in touch
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
