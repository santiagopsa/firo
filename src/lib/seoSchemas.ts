export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FIRO",
    url: "https://www.firoassets.com",
    logo: "https://www.firoassets.com/favicon.png",
    sameAs: [
      "https://github.com/santiagopsa/firo",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FIRO",
    url: "https://www.firoassets.com",
    inLanguage: ["en", "es"],
  };
}

export function getFaqPageSchema(
  entries: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getArticleSchema(params: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  language?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    mainEntityOfPage: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    image: params.image ?? "https://www.firoassets.com/assets/hero/dashboard.png",
    inLanguage: params.language ?? "en",
    author: {
      "@type": "Organization",
      name: "FIRO",
    },
    publisher: {
      "@type": "Organization",
      name: "FIRO",
      logo: {
        "@type": "ImageObject",
        url: "https://www.firoassets.com/favicon.png",
      },
    },
  };
}
