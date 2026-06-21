import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/anfrage/bestaetigung", "/api/"],
      },
    ],
    sitemap: "https://magotransport.at/sitemap.xml",
    host: "https://magotransport.at",
  };
}
