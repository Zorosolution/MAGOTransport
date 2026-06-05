import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "NexusAI Terms & Conditions — the rules governing use of our platform and services.",
};

const sections = [
  { heading: "1. Acceptance of Terms", body: `By accessing or using NexusAI ("Platform"), you agree to be bound by these Terms & Conditions ("Terms"). If you are using NexusAI on behalf of a company, you represent that you have authority to bind that company to these Terms.\n\nIf you do not agree to these Terms, do not use the Platform.` },
  { heading: "2. Account Registration", body: `You must provide accurate information when creating an account. You are responsible for maintaining the confidentiality of your credentials and for all activity under your account. Notify us immediately of any unauthorised access at security@nexusai.com.` },
  { heading: "3. Acceptable Use", body: `You agree not to:\n• Use the Platform for any illegal or unauthorised purpose\n• Reverse engineer, decompile, or disassemble any part of the Platform\n• Attempt to gain unauthorised access to our systems or third-party systems via NexusAI\n• Upload or transmit malicious code, viruses, or harmful content\n• Use the Platform to create automated systems that harm, harass, or spam others\n• Resell or sublicense access to the Platform without written permission` },
  { heading: "4. Subscription & Payment", body: `Paid plans are billed monthly or annually in advance. Prices exclude applicable taxes. We may change pricing with 30 days' notice.\n\nPayments are processed by Stripe. By providing payment information, you authorise NexusAI to charge your chosen payment method.\n\nYou may cancel at any time. Refunds are not provided for unused periods except where required by law.` },
  { heading: "5. Free Trial", body: `Free trials are available to new customers only. One free trial per organisation. We reserve the right to terminate a trial at any time if we suspect abuse.` },
  { heading: "6. Intellectual Property", body: `NexusAI and its licensors own all intellectual property rights in the Platform, including software, trademarks, and content.\n\nYou retain ownership of all data and content you input into the Platform ("Customer Data"). You grant NexusAI a limited licence to process Customer Data solely to provide the services.` },
  { heading: "7. Data Processing", body: `Our use of Customer Data is governed by our Privacy Policy and, for enterprise customers, a separate Data Processing Agreement (DPA). We do not sell or train AI models on Customer Data without explicit consent.` },
  { heading: "8. Service Level Agreement (SLA)", body: `Enterprise customers receive an uptime SLA of 99.9% monthly. Credits are issued for downtime exceeding this threshold. Starter and Pro plans target 99.8% uptime but this is not contractually guaranteed.\n\nScheduled maintenance windows are excluded from SLA calculations and communicated 48 hours in advance via status.nexusai.com.` },
  { heading: "9. Limitation of Liability", body: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEXUSAI SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR LOSS OF DATA OR PROFITS.\n\nNEXUSAI'S TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID IN THE 12 MONTHS PRECEDING THE CLAIM.` },
  { heading: "10. Indemnification", body: `You agree to indemnify and hold NexusAI harmless from claims arising from your violation of these Terms, your use of the Platform, or any content you submit through the Platform.` },
  { heading: "11. Termination", body: `Either party may terminate these Terms with 30 days' written notice. NexusAI may suspend or terminate your account immediately for material breach of these Terms, non-payment, or activity that poses a security risk.\n\nUpon termination, your right to use the Platform ceases. We will retain Customer Data for 90 days post-termination for you to export.` },
  { heading: "12. Governing Law", body: `These Terms are governed by the laws of the State of California, United States, without regard to conflict of law principles. Disputes shall be resolved in the courts of San Francisco County, California, except where arbitration is required.` },
  { heading: "13. Changes to Terms", body: `We may modify these Terms with 30 days' notice via email or website notice. Continued use after the effective date constitutes acceptance. If you do not agree to changes, you may terminate your account before the effective date.` },
  { heading: "14. Contact", body: `Legal questions: legal@nexusai.com\nNexusAI, Inc., 548 Market Street, Suite 8102, San Francisco, CA 94104, USA` },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        badge="Legal"
        badgeColor="sky"
        title="Terms & Conditions"
        description="The agreement governing your use of NexusAI's platform and services."
      />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="glass rounded-2xl p-6 border border-white/8 mb-6">
              <p className="text-slate-400 text-sm">
                <strong className="text-white">Effective date:</strong> June 1, 2025 &nbsp;·&nbsp;
                <strong className="text-white">Last updated:</strong> June 1, 2025
              </p>
            </div>
            <div className="space-y-4">
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
