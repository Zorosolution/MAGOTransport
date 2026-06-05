import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/booking/confirmation", "/api/"],
      },
    ],
    sitemap: "https://nexusai.com/sitemap.xml",
    host: "https://nexusai.com",
  };
}
