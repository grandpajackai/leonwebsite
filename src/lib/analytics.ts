// GA4 is off until a real Measurement ID is provided — see .env.example.
// Nothing here sends any data without NEXT_PUBLIC_GA_MEASUREMENT_ID set.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackPhoneClick(pagePath: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", "phone_call_click", {
    event_category: "engagement",
    event_label: pagePath,
    page_path: pagePath,
  });
}
