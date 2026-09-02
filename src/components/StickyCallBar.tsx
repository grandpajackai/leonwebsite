import type { Locale } from "@/content/types";
import { PHONE_TEL } from "@/lib/i18n";

const dispatchLabel: Record<Locale, string> = {
  en: "24/7 dispatch",
  es: "Despacho 24/7",
};

const callNow: Record<Locale, string> = {
  en: "Call now",
  es: "Llamar",
};

export default function StickyCallBar({ locale }: { locale: Locale }) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 bg-ink px-4 pt-2.5 text-white lg:hidden"
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <span className="truncate font-sans text-xs font-semibold leading-[1.3] text-white/70">
        {dispatchLabel[locale]}
      </span>
      <a
        href={PHONE_TEL}
        className="flex min-h-[44px] flex-none items-center justify-center rounded-btn bg-amber px-5 font-sans text-[15px] font-extrabold leading-none text-ink"
      >
        {callNow[locale]}
      </a>
    </div>
  );
}
