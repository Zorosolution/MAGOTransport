import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aktuelles und News",
  description: "Neuigkeiten, Brancheninformationen und Tipps rund um Transport, Logistik und Abschleppdienst von MAGOTransport.",
};

export const posts = [
  {
    slug: "auslieferung-auslagern",
    title: "Auslieferung auslagern: Wann sich ein Lieferpartner lohnt",
    excerpt: "Viele Betriebe stellen anfangs selbst zu. Ab wann es sich lohnt, die Auslieferung an einen Partner wie MAGOTransport zu übergeben.",
    category: "Auslieferung",
    categoryColor: "text-blue-700 bg-blue-50",
    date: "2. Juni 2025",
    readTime: "6 Min. Lesezeit",
    author: "MAGOTransport",
    authorRole: "Team",
    avatar: "MT",
    avatarColor: "from-blue-400 to-blue-600",
    featured: true,
  },
  {
    slug: "pannenhilfe-richtig-verhalten",
    title: "Auto bleibt stehen: So verhalten Sie sich richtig",
    excerpt: "Was zu tun ist, wenn das Auto liegenbleibt, von der Absicherung der Stelle bis zum Anruf beim Abschleppdienst.",
    category: "Ratgeber",
    categoryColor: "text-amber-700 bg-amber-50",
    date: "25. Mai 2025",
    readTime: "5 Min. Lesezeit",
    author: "MAGOTransport",
    authorRole: "Team",
    avatar: "MT",
    avatarColor: "from-emerald-400 to-emerald-600",
    featured: false,
  },
  {
    slug: "zustellung-wien-letzte-meile",
    title: "Zustellung in Wien: Worauf es auf der letzten Meile ankommt",
    excerpt: "Enge Gassen, Parkverbote und Zeitfenster. Was die Zustellung in Wien und Umgebung in der Praxis ausmacht.",
    category: "Auslieferung",
    categoryColor: "text-blue-700 bg-blue-50",
    date: "18. Mai 2025",
    readTime: "6 Min. Lesezeit",
    author: "MAGOTransport",
    authorRole: "Team",
    avatar: "MT",
    avatarColor: "from-indigo-400 to-indigo-600",
    featured: false,
  },
  {
    slug: "partner-werden-ablauf",
    title: "Partner werden: So läuft die Zusammenarbeit ab",
    excerpt: "Vom ersten Gespräch bis zur ersten Tour. Wie eine Partnerschaft mit MAGOTransport startet.",
    category: "Auslieferung",
    categoryColor: "text-blue-700 bg-blue-50",
    date: "10. Mai 2025",
    readTime: "5 Min. Lesezeit",
    author: "MAGOTransport",
    authorRole: "Team",
    avatar: "MT",
    avatarColor: "from-amber-400 to-amber-600",
    featured: false,
  },
  {
    slug: "auto-transportieren-anhaenger",
    title: "Auto transportieren lassen: Worauf es ankommt",
    excerpt: "Wann ein Anhänger statt der eigenen Fahrt sinnvoll ist und wie der Transport in Wien und Umgebung abläuft.",
    category: "Ratgeber",
    categoryColor: "text-amber-700 bg-amber-50",
    date: "2. Mai 2025",
    readTime: "5 Min. Lesezeit",
    author: "MAGOTransport",
    authorRole: "Team",
    avatar: "MT",
    avatarColor: "from-emerald-400 to-emerald-600",
    featured: false,
  },
  {
    slug: "abschleppdienst-ablauf",
    title: "Abschleppdienst rufen: Was Sie wissen sollten",
    excerpt: "Welche Angaben wir beim Anruf brauchen und wie der Abschleppvorgang mit dem Anhänger abläuft.",
    category: "Ratgeber",
    categoryColor: "text-amber-700 bg-amber-50",
    date: "24. April 2025",
    readTime: "5 Min. Lesezeit",
    author: "MAGOTransport",
    authorRole: "Team",
    avatar: "MT",
    avatarColor: "from-blue-400 to-blue-600",
    featured: false,
  },
];

const kategorien = ["Alle", "Auslieferung", "Ratgeber"];

export default function AktuellesPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen">
      <PageHero
        badge="Aktuelles"
        badgeColor="sky"
        orbColor="blue"
        title={<>News aus Transport <span className="gradient-text">und Logistik</span></>}
        description="Branchennews, Ratgeber und Informationen rund um Transport, Logistik und Abschleppdienst, direkt vom MAGOTransport-Team."
      />

      <section className="py-20" aria-label="Beiträge">
        <div className="max-w-6xl mx-auto px-6">
          {/* Kategoriefilter */}
          <div className="flex flex-wrap gap-2 mb-12" role="navigation" aria-label="Kategorien">
            {kategorien.map(k => (
              <button key={k} className={`px-4 py-1.5 rounded-xl text-sm transition-all duration-200 cursor-pointer ${k === "Alle" ? "bg-blue-700 text-white shadow-primary" : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-blue-200"}`} aria-pressed={k === "Alle"}>
                {k}
              </button>
            ))}
          </div>

          {/* Hauptartikel */}
          <AnimatedSection className="mb-8">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <article className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft hover:shadow-soft-lg transition-all duration-300 grid md:grid-cols-2 gap-8 items-center cursor-pointer">
                <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-white border border-slate-200 flex items-center justify-center" aria-hidden="true">
                  <div className="text-7xl opacity-50">🚛</div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${featured.categoryColor}`}>{featured.category}</span>
                    <span className="text-xs text-blue-700 font-semibold px-2.5 py-1 rounded-full bg-blue-50">Aktuell</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors leading-snug">{featured.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${featured.avatarColor} text-white text-xs flex items-center justify-center font-bold`} aria-hidden="true">{featured.avatar}</div>
                      <span className="text-slate-600 text-xs">{featured.author}</span>
                    </div>
                    <span className="text-slate-500 text-xs">{featured.date}</span>
                    <span className="flex items-center gap-1 text-slate-500 text-xs"><Clock className="w-3 h-3" aria-hidden="true" />{featured.readTime}</span>
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
                  <article className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col cursor-pointer">
                    <div className="h-36 rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 flex items-center justify-center text-4xl" aria-hidden="true">
                      {post.category === "Auslieferung" ? "📦" : "🔧"}
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full self-start mb-3 ${post.categoryColor}`}>{post.category}</span>
                    <h3 className="text-slate-900 font-semibold leading-snug mb-2 group-hover:text-blue-700 transition-colors text-sm flex-1">{post.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${post.avatarColor} text-white text-[9px] flex items-center justify-center font-bold`} aria-hidden="true">{post.avatar}</div>
                        <span className="text-slate-500 text-xs">{post.author}</span>
                      </div>
                      <span className="text-slate-500 text-xs flex items-center gap-1"><Clock className="w-3 h-3" aria-hidden="true" />{post.readTime}</span>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-blue-200 rounded-xl transition-all cursor-pointer text-sm shadow-soft">
              Weitere Beiträge laden <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
