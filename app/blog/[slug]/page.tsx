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
    publisher: { "@type": "Organization", name: "NexusAI" },
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

      <article className="py-16" aria-label="Blog post content">
        <div className="max-w-3xl mx-auto px-6">
          {/* Meta bar */}
          <AnimatedSection className="flex flex-wrap items-center gap-6 mb-10 pb-8 border-b border-white/8">
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${post.avatarColor} text-white text-xs flex items-center justify-center font-bold`} aria-hidden="true">{post.avatar}</div>
              <div>
                <p className="text-white text-sm font-medium">{post.author}</p>
                <p className="text-slate-500 text-xs">{post.authorRole}</p>
              </div>
            </div>
            <time className="text-slate-500 text-sm" dateTime={post.date}>{post.date}</time>
            <div className="flex items-center gap-1.5 text-slate-500 text-sm">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {post.readTime}
            </div>
          </AnimatedSection>

          {/* Simulated article body */}
          <AnimatedSection className="prose prose-invert prose-slate max-w-none">
            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white">The landscape of AI automation has changed dramatically over the past 18 months.</strong>{" "}
                What was once reserved for large engineering teams with deep AI expertise is now accessible to any organisation willing to invest in the right platform.
              </p>
              <p>
                In this guide, we&apos;ll walk through the core concepts, real-world patterns, and practical implementation strategies that separate production-grade automation from fragile proof-of-concepts.
              </p>

              <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why most automation projects fail</h2>
              <p>
                The failure mode is almost always the same: teams start with simple, happy-path workflows and never design for failure. They build automations that work 90% of the time and break catastrophically the other 10%.
              </p>
              <p>
                Production automation requires obsessive thinking about edge cases, failure modes, and recovery strategies. Every workflow needs to answer: what happens when this step fails?
              </p>

              <div className="glass rounded-2xl p-6 border border-sky-500/20 my-8">
                <p className="text-sky-300 font-semibold mb-2">Key Insight</p>
                <p className="text-slate-300 text-sm">The difference between a demo and a production system is not the happy path — it&apos;s everything else. Design for failure first, success second.</p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-10 mb-4">Core patterns for reliable automation</h2>
              <p>
                After deploying thousands of automations across hundreds of industries, we&apos;ve identified a set of patterns that consistently produce reliable, maintainable systems.
              </p>
              <p>
                These aren&apos;t theoretical concepts — they&apos;re battle-tested approaches we&apos;ve refined through real production incidents and customer feedback.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">1. Idempotency by default</h3>
              <p>
                Every action in your workflow should be safe to repeat. If a step fails and retries, running it twice should produce the same result as running it once.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">2. Explicit state management</h3>
              <p>
                Never rely on implicit state. Make every workflow state transition explicit, logged, and reversible. This enables debugging, auditing, and recovery.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">3. Human-in-the-loop checkpoints</h3>
              <p>
                Identify the decisions in your workflow that carry significant risk or uncertainty. Put human approval gates at these points — not everywhere, but exactly where they matter.
              </p>

              <h2 className="text-2xl font-bold text-white mt-10 mb-4">Getting started</h2>
              <p>
                The best way to learn production automation is to build something real, with real consequences, and iterate. Start with a workflow that&apos;s manual, painful, and repetitive — that&apos;s your first automation candidate.
              </p>
              <p>
                Book a demo with our team and we&apos;ll walk through your specific workflows and identify the highest-value automation opportunities.
              </p>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection className="mt-12 glass rounded-2xl p-8 border border-white/10 text-center">
            <p className="text-white font-semibold mb-2">Ready to put this into practice?</p>
            <p className="text-slate-400 text-sm mb-5">Book a free 30-minute session with our automation experts and get a custom plan for your workflows.</p>
            <Link href="/booking" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-all cursor-pointer">
              Book a session <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </AnimatedSection>

          {/* Back + related */}
          <AnimatedSection className="mt-10 pt-8 border-t border-white/8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors cursor-pointer mb-8">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to Blog
            </Link>
            {related.length > 0 && (
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-4">Related Articles</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="group glass rounded-xl p-4 border border-white/8 hover:border-white/18 transition-all cursor-pointer block">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${r.categoryColor} mb-2 inline-block`}>{r.category}</span>
                      <p className="text-white text-sm font-medium leading-snug group-hover:text-sky-300 transition-colors">{r.title}</p>
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
