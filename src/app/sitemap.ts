import type { MetadataRoute } from "next";
import { designs } from "@/content/designs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gunesdesign.com";

  const designPages: MetadataRoute.Sitemap = designs.map((design) => ({
    url: `${baseUrl}/designs/${design.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...designPages,
  ];
}