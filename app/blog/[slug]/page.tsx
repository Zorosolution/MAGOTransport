import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { posts } from "@/app/blog/page";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/shared/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "MAGOTransport" },
    datePublished: post.date,
  };

  return (
    <div className="min-h-screen">
      <JsonLd data={articleSchema} />

      <PageHero
        badge={post.category}
        badgeColor="sky"
        orbColor="blue"
        title={<span className="text-4xl sm:text-5xl">{post.title}</span>}
        description={post.excerpt}
      />

      <article className="py-16" aria-label="Beitragsinhalt">
        <div className="max-w-3xl mx-auto px-6">
          {/* Metaleiste */}
          <AnimatedSection className="flex flex-wrap items-center gap-6 mb-10 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${post.avatarColor} text-white text-xs flex items-center justify-center font-bold`} aria-hidden="true">{post.avatar}</div>
              <div>
                <p className="text-slate-900 text-sm font-medium">{post.author}</p>
                <p className="text-slate-500 text-xs">{post.authorRole}</p>
              </div>
            </div>
            <time className="text-slate-500 text-sm" dateTime={post.date}>{post.date}</time>
            <div className="flex items-center gap-1.5 text-slate-500 text-sm">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {post.readTime}
            </div>
          </AnimatedSection>

          {/* Beitragstext */}
          <AnimatedSection className="max-w-none">
            <div className="space-y-5 text-slate-700 leading-relaxed">
              <p>
                <strong className="text-slate-900">In der Auslieferung entscheiden klare Abläufe.</strong>{" "}
                Wer die Ware anderer Betriebe an deren Kunden bringt, trägt Verantwortung für Termine
                und für die letzte Strecke bis zur Tür. In diesem Beitrag fassen wir zusammen, worauf
                es in der Praxis ankommt und wie MAGOTransport seine Touren täglich umsetzt.
              </p>
              <p>
                Die Erwartungen an die Zustellung sind gestiegen. Engere Zeitfenster, mehr Stopps pro
                Tour und der Wunsch nach einer Rückmeldung gehören heute zum Alltag. Gute Tourenplanung
                und klare Absprachen mit dem Partnerbetrieb machen den Unterschied.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Worauf es in der Praxis ankommt</h2>
              <p>
                Eine Tour ist nur so gut wie ihre Vorbereitung. Abholzeit im Lager, Reihenfolge der
                Stopps und das Liefergebiet werden vorab abgestimmt. So lassen sich Verzögerungen
                vermeiden, bevor sie entstehen.
              </p>
              <p>
                Genauso wichtig ist die Rückmeldung. Wenn der Partnerbetrieb weiß, dass zugestellt
                wurde, behält er den Überblick. Bei Rückfragen sind wir erreichbar.
              </p>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 my-8">
                <p className="text-blue-800 font-semibold mb-2">Auf den Punkt</p>
                <p className="text-slate-700 text-sm">Der Unterschied zwischen einer reibungslosen und einer schwierigen Tour liegt selten an der Fahrt selbst, sondern an der Abstimmung davor. Wer vorausplant, gewinnt Zeit.</p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Wie wir arbeiten</h2>
              <p>
                Seit 2007 liefern wir in Wien und Wien-Umgebung aus. Daraus haben sich einige Grundsätze
                ergeben, die wir bei jeder Tour anwenden.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">1. Tour vorausplanen</h3>
              <p>
                Abholzeit, Reihenfolge der Stopps und Gebiet werden vorab geklärt, damit der Tag ohne
                Umwege läuft.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">2. Rückmeldung geben</h3>
              <p>
                Der Partnerbetrieb erfährt, dass zugestellt wurde. Ein fester Ansprechpartner sorgt für
                Überblick.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">3. Sorgfältig fahren</h3>
              <p>
                Gewartete Fahrzeuge, ortskundige Fahrer und korrekt gesicherte Ladung. Das schützt die
                Ware und alle auf der Straße.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Wie MAGOTransport unterstützt</h2>
              <p>
                Ob Auslieferung für Ihren Betrieb, Abschleppdienst oder Fahrzeugtransport: Wir sind in
                Wien und Wien-Umgebung für Sie unterwegs. Sprechen Sie uns an, wir melden uns mit einem
                Angebot.
              </p>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 shadow-soft text-center">
            <p className="text-slate-900 font-semibold mb-2">Sollen wir Ihren nächsten Transport übernehmen?</p>
            <p className="text-slate-600 text-sm mb-5">Fordern Sie ein kostenloses Angebot an. Wir melden uns zeitnah bei Ihnen.</p>
            <Link href="/anfrage" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-all cursor-pointer shadow-primary">
              Angebot anfragen <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </AnimatedSection>

          {/* Zurück + verwandte Beiträge */}
          <AnimatedSection className="mt-10 pt-8 border-t border-slate-200">
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm transition-colors cursor-pointer mb-8">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Zurück zur Übersicht
            </Link>
            {related.length > 0 && (
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-4">Ähnliche Beiträge</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="group bg-white rounded-xl p-4 border border-slate-200 shadow-soft hover:border-blue-200 transition-all cursor-pointer block">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${r.categoryColor} mb-2 inline-block`}>{r.category}</span>
                      <p className="text-slate-900 text-sm font-medium leading-snug group-hover:text-blue-700 transition-colors">{r.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </AnimatedSection>
        </div>
      </article>
    </div>
  );
}
