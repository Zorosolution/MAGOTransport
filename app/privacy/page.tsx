import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NexusAI Privacy Policy — how we collect, use, and protect your personal data.",
};

const sections = [
  {
    heading: "1. Introduction",
    body: `NexusAI, Inc. ("NexusAI", "we", "us", or "our") is committed to protecting your personal data. This Privacy Policy describes how we collect, use, disclose, and safeguard information when you use our website (nexusai.com) and platform services.\n\nBy accessing or using NexusAI, you agree to this Privacy Policy. If you do not agree, please discontinue use of our services.`,
  },
  {
    heading: "2. Data We Collect",
    body: `We collect the following categories of personal data:\n\n• Account information: name, email address, company name, job title\n• Usage data: pages visited, features used, click events, session duration\n• Technical data: IP address, browser type, device identifiers, operating system\n• Communication data: messages sent via our contact form or support channels\n• Payment data: billing address, last 4 digits of card (full card numbers are handled by Stripe)\n• Workflow data: content of the automations and workflows you create (stored encrypted)`,
  },
  {
    heading: "3. How We Use Your Data",
    body: `We process your personal data to:\n\n• Provide, operate, and improve our services\n• Authenticate your account and prevent fraud\n• Send transactional emails (confirmations, invoices, security alerts)\n• Send marketing communications (with your consent, opt-out any time)\n• Comply with legal obligations\n• Analyse product usage to improve performance\n\nLegal bases: contract performance, legitimate interest, consent, and legal obligation (GDPR Art. 6).`,
  },
  {
    heading: "4. Data Sharing",
    body: `We do not sell your personal data. We share data only with:\n\n• Service providers: Stripe (payments), AWS (hosting), Resend (email), Datadog (monitoring), Sentry (error tracking)\n• Legal authorities: when required by law, court order, or to protect rights and safety\n• Business transfers: in the event of a merger, acquisition, or asset sale\n\nAll third-party processors are bound by Data Processing Agreements meeting GDPR requirements.`,
  },
  {
    heading: "5. Data Retention",
    body: `We retain personal data for as long as needed to provide services and comply with legal obligations. Specifically:\n\n• Account data: duration of account + 90 days after deletion\n• Log data: 90 days (Enterprise) / 30 days (Pro) / 7 days (Starter)\n• Financial records: 7 years (legal requirement)\n\nYou may request deletion of your data at any time (subject to legal retention requirements).`,
  },
  {
    heading: "6. Your Rights (GDPR / CCPA)",
    body: `Depending on your location, you have the right to:\n\n• Access: request a copy of your personal data\n• Rectification: correct inaccurate data\n• Erasure: request deletion ("right to be forgotten")\n• Restriction: limit processing in certain circumstances\n• Data portability: receive your data in machine-readable format\n• Objection: object to processing based on legitimate interest\n• Non-discrimination: exercise rights without retaliation (CCPA)\n\nTo exercise any right, email: privacy@nexusai.com. We respond within 30 days.`,
  },
  {
    heading: "7. Cookies",
    body: `We use cookies and similar tracking technologies. See our Cookie Policy for full details. You can manage cookie preferences at any time via the cookie banner or browser settings.`,
  },
  {
    heading: "8. Security",
    body: `We implement industry-standard security measures including:\n\n• Encryption in transit (TLS 1.3) and at rest (AES-256)\n• SOC 2 Type II certified infrastructure\n• Regular penetration testing\n• Access controls with principle of least privilege\n• Incident response programme\n\nNo system is 100% secure. In the event of a breach, we will notify affected users within 72 hours as required by GDPR.`,
  },
  {
    heading: "9. International Transfers",
    body: `NexusAI is based in the United States. If you are in the EU/EEA, your data may be transferred to and processed in the US. We rely on Standard Contractual Clauses (SCCs) approved by the European Commission to legitimise such transfers. EU data residency is available on Enterprise plans.`,
  },
  {
    heading: "10. Changes to This Policy",
    body: `We may update this policy to reflect changes in our practices or legal requirements. We will notify you of material changes by email or prominent notice on our website at least 30 days before the change takes effect.`,
  },
  {
    heading: "11. Contact",
    body: `Questions about this policy?\n\nPrivacy Team: privacy@nexusai.com\nPostal: NexusAI, Inc., 548 Market St, Suite 8102, San Francisco, CA 94104\nEU Representative: eu-rep@nexusai.com`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        badge="Legal"
        badgeColor="sky"
        title="Privacy Policy"
        description="How NexusAI collects, uses, and protects your personal data."
      />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 border border-white/8 mb-6">
              <p className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-white">Effective date:</strong> June 1, 2025 &nbsp;·&nbsp;
                <strong className="text-white">Last updated:</strong> June 1, 2025
              </p>
            </div>
            <div className="space-y-8">
              {sections.map(({ heading, body }) => (
                <div key={heading} className="glass rounded-2xl p-6 border border-white/8">
                  <h2 className="text-white font-semibold mb-3">{heading}</h2>
                  <div className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">{body}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
