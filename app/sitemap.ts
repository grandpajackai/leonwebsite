import type { MetadataRoute } from "next";
import { getContent } from "@/content";
import { locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";

const STATIC_PATHS = ["", "/services", "/work", "/areas", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const en = getContent("en");
  const servicePaths = en.services.map((s) => `/services/${s.slug}`);
  const paths = [...STATIC_PATHS, ...servicePaths];

  return paths.map((path) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])
    );
    return {
      url: `${SITE_URL}/en${path}`,
      alternates: { languages },
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path.startsWith("/services/") ? 0.8 : 0.6,
    };
  });
}
