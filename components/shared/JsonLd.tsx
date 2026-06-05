interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexusAI",
  url: "https://nexusai.com",
  logo: "https://nexusai.com/logo.png",
  sameAs: [
    "https://twitter.com/nexusai",
    "https://linkedin.com/company/nexusai",
    "https://github.com/nexusai",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-NEXUSAI",
    contactType: "customer service",
    availableLanguage: "English",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NexusAI",
  url: "https://nexusai.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://nexusai.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
