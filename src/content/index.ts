import type { Locale, SiteContent } from "./types";
import en from "./en";
import es from "./es";

export const content: Record<Locale, SiteContent> = { en, es };

export function getContent(locale: Locale): SiteContent {
  return content[locale] ?? content.en;
}

export * from "./types";
