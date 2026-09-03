import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { locales } from "@/lib/i18n";

// Real domain, confirmed by the client. Can still be overridden via
// NEXT_PUBLIC_SITE_URL (e.g. for a staging/preview deploy).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://leonroofingandrestoration.com"
).replace(/\/$/, "");

export const SITE_NAME = "Leon Roofing & Restoration";

// The only real photo assets we have are portrait job/hero photos, not a
// proper 1200x630 OG crop — this is a placeholder until real marketing
// photography exists for that use.
const DEFAULT_OG_IMAGE = "/assets/photos/thermal.jpg";

function localeUrl(locale: Locale, path: string) {
  return `${SITE_URL}/${locale}${path}`;
}

/** `path` is the route with the locale segment stripped, e.g. "" for home,
 * "/services/water-extraction" for a service page. Always starts with "/"
 * or is "". */
export function buildMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = localeUrl(locale, path);
  const languages = Object.fromEntries(
    locales.map((l) => [l, localeUrl(l, path)])
  );

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { ...languages, "x-default": localeUrl("en", path) },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: locale === "es" ? "es_US" : "en_US",
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1050, height: 1400 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
