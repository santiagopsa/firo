import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["Googlebot", "Bingbot"],
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "CCBot", "anthropic-ai"],
        allow: "/",
      },
    ],
    sitemap: "https://www.firoassets.com/sitemap.xml",
    host: "https://www.firoassets.com",
  };
}
