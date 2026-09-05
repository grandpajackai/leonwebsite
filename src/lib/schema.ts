import type { Locale, ServiceContent, SiteContent } from "@/content/types";
import { EMAIL, PHONE_TEL } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";

// Every field here traces back either to approved copy in site-content.js
// or to facts stated in the project README (the Instagram handle). Do not
// add aggregateRating, review, priceRange, or a license number — none of
// those are approved claims (see README "Legal / truthfulness constraints").

const COUNTIES = [
  "Miami-Dade County",
  "Broward County",
  "Palm Beach County",
];

export function localBusinessSchema(locale: Locale, c: SiteContent) {
  const url = `${SITE_URL}/${locale}`;
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Leon Roofing & Restoration, Inc.",
    url,
    telephone: PHONE_TEL.replace("tel:", "+1"),
    email: EMAIL,
    image: `${SITE_URL}/assets/leon-lion-mark-900.png`,
    logo: `${SITE_URL}/assets/leon-lion-mark-900.png`,
    description: c.home.sub,
    areaServed: COUNTIES.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: ["https://www.instagram.com/leon_remodelandrestore/"],
  };
}

export function serviceSchema(
  locale: Locale,
  svc: ServiceContent,
  path: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    description: svc.blurb,
    url: `${SITE_URL}/${locale}${path}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: COUNTIES.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    inLanguage: locale,
  };
}

export function areaSchema(
  locale: Locale,
  countyName: string,
  description: string,
  path: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Water, Storm & Roof Restoration — ${countyName}`,
    description,
    url: `${SITE_URL}/${locale}${path}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: countyName,
    },
    inLanguage: locale,
  };
}

export function jsonLdScript(data: object) {
  return JSON.stringify(data);
}
