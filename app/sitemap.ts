import type { MetadataRoute } from "next";
import { posts } from "@/app/blog/page";

const BASE = "https://magotransport.at";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                            lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/leistungen`,            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/abschleppdienst`,       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/fuhrpark`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ueber-uns`,             lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/anfrage`,               lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/kontakt`,               lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE}/blog`,                  lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/faq`,                   lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/impressum`,             lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/datenschutz`,           lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/agb`,                   lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/cookie-richtlinie`,     lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];
  const blogPages: MetadataRoute.Sitemap = posts.map(p => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...staticPages, ...blogPages];
}
