import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = { title: "Cookie-Richtlinie", description: "Cookie-Richtlinie der MAGOTransport GmbH — welche Cookies wir verwenden und wie Sie diese verwalten können." };

const cookieTypen = [
  { typ: "Technisch notwendig", erforderlich: true, beispiele: "Session-Cookies, CSRF-Token, Cookie-Einwilligung", zweck: "Für den Betrieb der Website zwingend erforderlich.", dauer: "Session / 12 Monate" },
  { typ: "Funktional", erforderlich: false, beispiele: "Spracheinstellungen, Cookie-Zustimmungsstatus", zweck: "Speichert Ihre Präferenzen für eine bessere Nutzererfahrung.", dauer: "12 Monate" },
  { typ: "Analytisch", erforderlich: false, beispiele: "Google Analytics (anonymisiert), Matomo", zweck: "Analyse des Nutzerverhaltens zur Verbesserung unseres Angebots.", dauer: "13 Monate" },
  { typ: "Marketing", erforderlich: false, beispiele: "LinkedIn Insight Tag (nur bei Einwilligung)", zweck: "Messung der Wirksamkeit unserer Werbemaßnahmen.", dauer: "Bis zu 13 Monate" },
];

export default function CookieRichtliniePage() {
  return (
    <div className="min-h-screen">
      <PageHero badge="Rechtliches" badgeColor="sky" title="Cookie-Richtlinie" description="Informationen über die von uns verwendeten Cookies und wie Sie diese steuern können." />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-5">
          <AnimatedSection>
            <div className="glass rounded-2xl p-6 border border-white/8">
              <h2 className="text-white font-semibold mb-3">Was sind Cookies?</h2>
              <p className="text-slate-400 text-sm leading-relaxed">Cookies sind kleine Textdateien, die beim Besuch unserer Website auf Ihrem Gerät gespeichert werden. Sie helfen dabei, die Website korrekt darzustellen, Ihre Einstellungen zu speichern und unsere Dienste zu verbessern.</p>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/8 mt-4">
              <h2 className="text-white font-semibold mb-4">Cookie-Kategorien</h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] text-sm" role="table">
                  <thead>
                    <tr className="border-b border-white/8">
                      {["Kategorie", "Pflicht?", "Beispiele", "Zweck", "Laufzeit"].map(h => (
                        <th key={h} className="text-left py-3 px-3 text-xs text-slate-500 font-medium uppercase tracking-wide" scope="col">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cookieTypen.map((ct, i) => (
                      <tr key={ct.typ} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}>
                        <td className="py-3.5 px-3 text-white font-medium text-xs whitespace-nowrap">{ct.typ}</td>
                        <td className="py-3.5 px-3">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${ct.erforderlich ? "text-green-400 bg-green-400/10" : "text-slate-500 bg-white/5"}`}>{ct.erforderlich ? "Ja" : "Optional"}</span>
                        </td>
                        <td className="py-3.5 px-3 text-slate-400 text-xs">{ct.beispiele}</td>
                        <td className="py-3.5 px-3 text-slate-400 text-xs">{ct.zweck}</td>
                        <td className="py-3.5 px-3 text-slate-500 text-xs whitespace-nowrap">{ct.dauer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/8 mt-4">
              <h2 className="text-white font-semibold mb-3">Cookie-Einstellungen verwalten</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Sie können Ihre Cookie-Einstellungen jederzeit ändern — entweder über unser Cookie-Banner oder über die Browser-Einstellungen. Bitte beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität unserer Website einschränken kann.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
                  { name: "Firefox", url: "https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen" },
                  { name: "Safari", url: "https://support.apple.com/de-at/guide/safari/sfri11471/mac" },
                  { name: "Edge", url: "https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-löschen-63947406" },
                ].map(({ name, url }) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl px-4 py-2.5 border border-white/8 hover:border-white/20 text-blue-400 hover:text-blue-300 text-sm transition-all cursor-pointer">
                    Cookies in {name} verwalten →
                  </a>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-5 border border-white/8 mt-4">
              <p className="text-slate-400 text-sm">Fragen? E-Mail: <a href="mailto:datenschutz@magotransport.at" className="text-blue-400 hover:text-blue-300 transition-colors">datenschutz@magotransport.at</a></p>
              <p className="text-slate-600 text-xs mt-2">Stand: Juni 2025</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
