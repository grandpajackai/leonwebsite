import type { Locale } from "@/content/types";

export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

export const PHONE_DISPLAY = "(786) 702-2090";
export const PHONE_TEL = "tel:7867022090";
export const EMAIL = "leonroofing.restoration@gmail.com";
