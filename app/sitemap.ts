import type { MetadataRoute } from "next";
import { cacheLife } from "next/cache";
import { SITE } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { BLOG_POSTS } from "@/lib/blog-posts";

async function getBuildDate(): Promise<Date> {
  "use cache";
  cacheLife("days");
  return new Date();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = await getBuildDate();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE.url}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE.url}/about-us/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE.url}/reviews/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/contact-us/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/blog/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/terms-conditions/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE.url}/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
