import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aktuelles & News",
  description: "Neuigkeiten, Brancheninformationen und Tipps rund um Transport, Logistik und Abschleppdienst von MAGOTransport.",
};

export const posts = [
  {
    slug: "elektro-lkw-zukunft-logistik",
    title: "Elektro-LKW: Die Zukunft der nachhaltigen Logistik in Österreich",
    excerpt: "Wie Elektromobilität den Gütertransport verändert und welche Herausforderungen und Chancen sich für Transportunternehmen in Österreich und Europa ergeben.",
    category: "Branche",
    categoryColor: "text-blue-400 bg-blue-400/10",
    date: "2. Juni 2025",
    readTime: "8 Min. Lesezeit",
    author: "Mario Gomez",
    authorRole: "Geschäftsführer",
    avatar: "MG",
    avatarColor: "from-blue-400 to-blue-600",
    featured: true,
  },
  {
    slug: "pannenhilfe-richtig-verhalten",
    title: "Autopanne auf der Autobahn: So verhalten Sie sich richtig und sicher",
    excerpt: "Wichtige Tipps für das richtige Verhalten bei einer Panne auf der Autobahn — von der Warnblinkanlage bis zur richtigen Positionierung im Notfall.",
    category: "Ratgeber",
    categoryColor: "text-amber-400 bg-amber-400/10",
    date: "25. Mai 2025",
    readTime: "5 Min. Lesezeit",
    author: "Bernhard Steiner",
    authorRole: "Fuhrparkleiter",
    avatar: "BS",
    avatarColor: "from-green-400 to-green-600",
    featured: false,
  },
  {
    slug: "internationale-transporte-zoll",
    title: "Internationale Transporte: Was Sie über Zollabwicklung wissen müssen",
    excerpt: "Ein praxisnaher Leitfaden zur Zollabwicklung bei internationalen Gütertransporten — Dokumente, Vorschriften und häufige Fehler vermeiden.",
    category: "Logistik",
    categoryColor: "text-purple-400 bg-purple-400/10",
    date: "18. Mai 2025",
    readTime: "10 Min. Lesezeit",
    author: "Anna Kovačević",
    authorRole: "Leiterin Disposition",
    avatar: "AK",
    avatarColor: "from-purple-400 to-purple-600",
    featured: false,
  },
  {
    slug: "lagerhaltung-optimieren",
    title: "Lagerlogistik optimieren: 7 Maßnahmen für mehr Effizienz",
    excerpt: "Wie Unternehmen ihre Lagerprozesse durch moderne Technologien und clevere Organisation deutlich effizienter gestalten können.",
    category: "Logistik",
    categoryColor: "text-purple-400 bg-purple-400/10",
    date: "10. Mai 2025",
    readTime: "7 Min. Lesezeit",
    author: "Sandra Preisinger",
    authorRole: "Kundenbetreuung",
    avatar: "SP",
    avatarColor: "from-amber-400 to-amber-600",
    featured: false,
  },
  {
    slug: "kuehlkette-pharma-transport",
    title: "Kühlkette im Pharmatransport: Anforderungen und Zertifizierungen",
    excerpt: "Temperaturempfindliche Arzneimittel erfordern höchste Sorgfalt. Welche Zertifizierungen brauchen Transporteure und was bedeutet ATP?",
    category: "Branche",
    categoryColor: "text-blue-400 bg-blue-400/10",
    date: "2. Mai 2025",
    readTime: "9 Min. Lesezeit",
    author: "Bernhard Steiner",
    authorRole: "Fuhrparkleiter",
    avatar: "BS",
    avatarColor: "from-green-400 to-green-600",
    featured: false,
  },
  {
    slug: "fahrzeugbergung-tipps",
    title: "Fahrzeugbergung nach einem Unfall: Wer zahlt und was ist zu tun?",
    excerpt: "Rechtliche und praktische Informationen zur Fahrzeugbergung nach Verkehrsunfällen — Versicherung, Kosten und die Rolle des Abschleppunternehmens.",
    category: "Ratgeber",
    categoryColor: "text-amber-400 bg-amber-400/10",
    date: "24. April 2025",
    readTime: "6 Min. Lesezeit",
    author: "Mario Gomez",
    authorRole: "Geschäftsführer",
    avatar: "MG",
    avatarColor: "from-blue-400 to-blue-600",
    featured: false,
  },
];

const kategorien = ["Alle", "Branche", "Logistik", "Ratgeber"];

export default function AktuellesPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen">
      <PageHero
        badge="Aktuelles"
        badgeColor="sky"
        orbColor="blue"
        title={<>News aus Transport <span className="gradient-text">& Logistik</span></>}
        description="Branchennews, Ratgeber und Informationen rund um Transport, Logistik und Abschleppdienst — direkt vom MAGOTransport-Team."
      />

      <section className="py-20" aria-label="Beiträge">
        <div className="max-w-6xl mx-auto px-6">
          {/* Kategoriefilter */}
          <div className="flex flex-wrap gap-2 mb-12" role="navigation" aria-label="Kategorien">
            {kategorien.map(k => (
              <button key={k} className={`px-4 py-1.5 rounded-xl text-sm transition-all duration-200 cursor-pointer ${k === "Alle" ? "bg-blue-600 text-white" : "glass border border-white/8 text-slate-400 hover:text-white hover:border-white/20"}`} aria-pressed={k === "Alle"}>
                {k}
              </button>
            ))}
          </div>

          {/* Hauptartikel */}
          <AnimatedSection className="mb-8">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <article className="glass rounded-3xl p-8 border border-white/8 hover:border-white/15 transition-all duration-300 grid md:grid-cols-2 gap-8 items-center cursor-pointer">
                <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/40 via-blue-800/20 to-black border border-white/8 flex items-center justify-center" aria-hidden="true">
                  <div className="text-7xl opacity-30">🚛</div>
                  <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 50%, rgba(29,78,216,0.15) 0%, transparent 70%)" }} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${featured.categoryColor}`}>{featured.category}</span>
                    <span className="text-xs text-blue-400 font-medium px-2.5 py-1 rounded-full bg-blue-500/10">Aktuell</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">{featured.title}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${featured.avatarColor} text-white text-xs flex items-center justify-center font-bold`} aria-hidden="true">{featured.avatar}</div>
                      <span className="text-slate-400 text-xs">{featured.author}</span>
                    </div>
                    <span className="text-slate-600 text-xs">{featured.date}</span>
                    <span className="flex items-center gap-1 text-slate-600 text-xs"><Clock className="w-3 h-3" aria-hidden="true" />{featured.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          </AnimatedSection>

          {/* Artikelraster */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.07}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="glass rounded-2xl p-6 border border-white/8 hover:border-white/15 transition-all duration-300 h-full flex flex-col cursor-pointer">
                    <div className="h-36 rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-slate-900 to-black border border-white/6 flex items-center justify-center text-4xl" aria-hidden="true">
                      {post.category === "Branche" ? "🚛" : post.category === "Logistik" ? "📦" : "🔧"}
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full self-start mb-3 ${post.categoryColor}`}>{post.category}</span>
                    <h3 className="text-white font-semibold leading-snug mb-2 group-hover:text-blue-300 transition-colors text-sm flex-1">{post.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${post.avatarColor} text-white text-[9px] flex items-center justify-center font-bold`} aria-hidden="true">{post.avatar}</div>
                        <span className="text-slate-500 text-xs">{post.author}</span>
                      </div>
                      <span className="text-slate-600 text-xs flex items-center gap-1"><Clock className="w-3 h-3" aria-hidden="true" />{post.readTime}</span>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/12 text-slate-400 hover:text-white hover:border-white/25 rounded-xl transition-all cursor-pointer text-sm">
              Weitere Beiträge laden <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
