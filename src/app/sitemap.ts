import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/catalog";
import { articles } from "@/lib/blog";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1 },
    { path: "/catalog", priority: 0.9 },
    { path: "/for-buyers", priority: 0.8 },
    { path: "/for-sellers", priority: 0.8 },
    { path: "/pricing", priority: 0.7 },
    { path: "/compliance", priority: 0.7 },
    { path: "/our-story", priority: 0.5 },
    { path: "/blog", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
    { path: "/login", priority: 0.3 },
    { path: "/register", priority: 0.6 },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: now,
      priority: p.priority,
    })),
    ...products.map((p) => ({
      url: `${site.url}/catalog/${p.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
    ...articles.map((a) => ({
      url: `${site.url}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      priority: 0.6,
    })),
  ];
}
