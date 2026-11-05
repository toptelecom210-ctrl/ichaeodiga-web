import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/exportData";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_CONFIG.siteUrl,
      lastModified: new Date(SITE_CONFIG.lastUpdatedDate),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_CONFIG.siteUrl}/llms.txt`,
      lastModified: new Date(SITE_CONFIG.lastUpdatedDate),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_CONFIG.siteUrl}/llms-full.txt`,
      lastModified: new Date(SITE_CONFIG.lastUpdatedDate),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
