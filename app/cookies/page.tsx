import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "NexusAI Cookie Policy — types of cookies we use and how to manage them.",
};

const cookieTypes = [
  {
    type: "Strictly Necessary",
    required: true,
    examples: "Session cookies, CSRF tokens, authentication cookies",
    purpose: "Required for the website to function. Cannot be disabled.",
    retention: "Session / 30 days",
  },
  {
    type: "Functional",
    required: false,
    examples: "Language preferences, cookie consent status, UI settings",
    purpose: "Remember your preferences to improve your experience.",
    retention: "1 year",
  },
  {
    type: "Analytics",
    required: false,
    examples: "PostHog, Datadog RUM (anonymised)",
    purpose: "Understand how visitors use our site to improve product and performance.",
    retention: "13 months",
  },
  {
    type: "Marketing",
    required: false,
    examples: "LinkedIn Insight Tag, Google Analytics (with anonymisation)",
    purpose: "Measure the effectiveness of marketing campaigns. We do not use retargeting cookies.",
    retention: "Up to 13 months",
  },
];

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        badge="Legal"
        badgeColor="sky"
        title="Cookie Policy"
        description="What cookies we use, why we use them, and how you can control them."
      />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <AnimatedSection>
            <div className="glass rounded-2xl p-6 border border-white/8">
              <h2 className="text-white font-semibold mb-3">What are cookies?</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently, improve user experience, and provide reporting information. We also use similar technologies such as localStorage and session storage.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="glass rounded-2xl p-6 border border-white/8">
              <h2 className="text-white font-semibold mb-4">Cookie categories</h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] text-sm" role="table">
                  <thead>
                    <tr className="border-b border-white/8">
                      {["Type", "Required?", "Examples", "Purpose", "Retention"].map(h => (
                        <th key={h} className="text-left py-3 px-3 text-xs text-slate-500 font-medium uppercase tracking-wide" scope="col">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cookieTypes.map((ct, i) => (
                      <tr key={ct.type} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}>
                        <td className="py-3.5 px-3 text-white font-medium text-xs whitespace-nowrap">{ct.type}</td>
                        <td className="py-3.5 px-3">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${ct.required ? "text-green-400 bg-green-400/10" : "text-slate-500 bg-white/5"}`}>
                            {ct.required ? "Yes" : "Optional"}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 text-slate-400 text-xs">{ct.examples}</td>
                        <td className="py-3.5 px-3 text-slate-400 text-xs">{ct.purpose}</td>
                        <td className="py-3.5 px-3 text-slate-500 text-xs whitespace-nowrap">{ct.retention}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass rounded-2xl p-6 border border-white/8">
              <h2 className="text-white font-semibold mb-3">Managing your cookie preferences</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                You can control non-essential cookies using the cookie banner that appears when you first visit our site. You can change your preferences at any time by clearing your browser data and revisiting.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                You can also control cookies through your browser settings. Note that disabling all cookies may affect website functionality.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
                  { name: "Firefox", url: "https://support.mozilla.org/kb/enable-and-disable-cookies-website-preferences" },
                  { name: "Safari", url: "https://support.apple.com/guide/safari/manage-cookies-sfri11471" },
                  { name: "Edge", url: "https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406" },
                ].map(({ name, url }) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl px-4 py-2.5 border border-white/8 hover:border-white/20 text-sky-400 hover:text-sky-300 text-sm transition-all cursor-pointer">
                    Manage in {name} →
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="glass rounded-2xl p-6 border border-white/8">
              <h2 className="text-white font-semibold mb-3">Contact</h2>
              <p className="text-slate-400 text-sm">
                Questions about our use of cookies? Email:{" "}
                <a href="mailto:privacy@nexusai.com" className="text-sky-400 hover:text-sky-300 transition-colors">privacy@nexusai.com</a>
              </p>
              <p className="text-slate-600 text-xs mt-4">Last updated: June 2025</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
