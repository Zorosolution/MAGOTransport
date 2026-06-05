import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GradientOrb } from "@/components/shared/GradientOrb";
import {
  BrainCircuit, GitBranch, ShieldCheck, Gauge,
  Layers, Webhook, ArrowRight, Check,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore NexusAI's full range of AI automation services — from intelligent agents and workflow automation to enterprise integrations and custom AI solutions.",
};

const services = [
  {
    icon: BrainCircuit,
    title: "Intelligent Agents",
    color: "sky",
    price: "From $49/mo",
    description:
      "Deploy autonomous AI agents that understand context, make decisions, and execute complex multi-step tasks without human intervention. Each agent learns from your team's feedback and improves over time.",
    features: [
      "Natural language task definition",
      "Multi-agent orchestration",
      "Human-in-the-loop controls",
      "Full audit trail & explainability",
      "Custom agent training",
    ],
    cta: "Start automating",
  },
  {
    icon: GitBranch,
    title: "Workflow Automation",
    color: "purple",
    price: "From $49/mo",
    description:
      "Build, test, and deploy complex workflows with our visual drag-and-drop builder or describe them in plain English. Supports conditional logic, loops, error handling, and real-time monitoring.",
    features: [
      "Visual workflow builder",
      "Natural language builder",
      "200+ pre-built templates",
      "Conditional logic & branching",
      "Real-time execution monitoring",
    ],
    cta: "Build your first workflow",
  },
  {
    icon: Layers,
    title: "Integrations & Connectors",
    color: "orange",
    price: "Included in all plans",
    description:
      "Connect NexusAI to your entire stack with 200+ native integrations. From CRMs and databases to communication tools and cloud infrastructure — if it has an API, we can connect to it.",
    features: [
      "200+ native integrations",
      "REST & GraphQL API support",
      "Webhook triggers",
      "OAuth 2.0 authentication",
      "Custom connector SDK",
    ],
    cta: "View all integrations",
  },
  {
    icon: Gauge,
    title: "Analytics & Observability",
    color: "green",
    price: "From $49/mo",
    description:
      "Complete visibility into every automation. Track performance, cost, accuracy, and business impact in real time. Receive intelligent alerts before issues affect your operations.",
    features: [
      "Real-time execution dashboards",
      "Cost & ROI tracking",
      "Anomaly detection & alerting",
      "Custom KPI reporting",
      "90-day log retention",
    ],
    cta: "See the dashboard",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    color: "purple",
    price: "Enterprise plan",
    description:
      "SOC 2 Type II certified infrastructure with end-to-end encryption, granular role-based access control, and full compliance tooling for regulated industries.",
    features: [
      "SOC 2 Type II certified",
      "End-to-end encryption",
      "SSO / SAML 2.0",
      "Role-based access control",
      "GDPR & HIPAA compliance",
    ],
    cta: "Talk to security team",
  },
  {
    icon: Webhook,
    title: "Custom AI Solutions",
    color: "sky",
    price: "Custom pricing",
    description:
      "Need something beyond our standard offering? Our solutions team designs bespoke AI automation systems tailored to your unique processes, data, and compliance requirements.",
    features: [
      "Discovery & scoping workshop",
      "Custom model fine-tuning",
      "On-premise deployment option",
      "Dedicated engineering support",
      "SLA-backed delivery",
    ],
    cta: "Contact us",
  },
];

const colorConfig: Record<string, { badge: string; border: string; btn: string }> = {
  sky: { badge: "text-sky-400 bg-sky-400/10 border-sky-400/20", border: "hover:border-sky-500/30", btn: "bg-sky-500 hover:bg-sky-400" },
  purple: { badge: "text-purple-400 bg-purple-400/10 border-purple-400/20", border: "hover:border-purple-500/30", btn: "bg-purple-500 hover:bg-purple-400" },
  orange: { badge: "text-orange-400 bg-orange-400/10 border-orange-400/20", border: "hover:border-orange-500/30", btn: "bg-orange-500 hover:bg-orange-400" },
  green: { badge: "text-green-400 bg-green-400/10 border-green-400/20", border: "hover:border-green-500/30", btn: "bg-green-500 hover:bg-green-400" },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        badge="Services"
        badgeColor="orange"
        orbColor="orange"
        title={
          <>
            Every service you need to{" "}
            <span className="gradient-text">automate at scale</span>
          </>
        }
        description="From intelligent agents to enterprise integrations — NexusAI gives you a complete automation platform with the flexibility to match any workflow."
      />

      {/* Services grid */}
      <section className="py-20" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="services-heading" className="sr-only">Our services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              const cfg = colorConfig[service.color];
              return (
                <AnimatedSection key={service.title} delay={i * 0.08}>
                  <article className={`group glass rounded-2xl p-7 border border-white/8 ${cfg.border} transition-all duration-300 h-full flex flex-col`}>
                    <div className={`inline-flex w-11 h-11 rounded-xl border items-center justify-center mb-5 ${cfg.badge}`} aria-hidden="true">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-white font-semibold text-lg">{service.title}</h3>
                      <span className="text-xs text-slate-500 whitespace-nowrap pt-0.5">{service.price}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.description}</p>
                    <ul className="space-y-2 mb-6 flex-1" role="list">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5">
                          <Check className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" aria-hidden="true" />
                          <span className="text-slate-400 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/booking"
                      className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white rounded-xl transition-all duration-200 cursor-pointer ${cfg.btn}`}
                    >
                      {service.cta}
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 border-t border-white/8" aria-labelledby="process-heading">
        <GradientOrb color="blue" size="xl" className="-left-48 top-1/2 -translate-y-1/2 opacity-10" animate={false} />
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4 block">How We Engage</span>
            <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-white">From discovery to deployment</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Discovery Call", description: "30-minute session to understand your workflows and automation goals." },
              { step: "02", title: "Custom Proposal", description: "We map your processes and deliver a tailored automation roadmap." },
              { step: "03", title: "Implementation", description: "Our team sets up, tests, and fine-tunes your automations alongside yours." },
              { step: "04", title: "Ongoing Support", description: "Dedicated support and continuous optimisation as your needs evolve." },
            ].map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 border border-white/8 text-center">
                  <div className="text-3xl font-bold gradient-text mb-3">{step.step}</div>
                  <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/8">
        <AnimatedSection className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure where to start?</h2>
          <p className="text-slate-400 mb-8">Book a free 30-minute call with our team. We&apos;ll identify the highest-value automation opportunities in your workflow.</p>
          <Link href="/booking" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all duration-200 cursor-pointer text-sm shadow-lg shadow-sky-500/25">
            Book a free consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
