"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale, NavItem } from "@/content/types";
import { otherLocale, PHONE_DISPLAY, PHONE_TEL } from "@/lib/i18n";
import LocaleSwitchLink from "./LocaleSwitchLink";

const menuLabel: Record<Locale, { open: string; close: string }> = {
  en: { open: "Open menu", close: "Close menu" },
  es: { open: "Abrir menú", close: "Cerrar menú" },
};

export default function MobileNav({
  locale,
  navItems,
  otherLabel,
  ctaCall,
}: {
  locale: Locale;
  navItems: NavItem[];
  otherLabel: string;
  ctaCall: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const t = menuLabel[locale];

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? t.close : t.open}
        className="relative flex h-11 w-11 flex-none flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={`h-[2px] w-6 rounded-full bg-white transition-transform ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-[2px] w-6 rounded-full bg-white transition-opacity ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-[2px] w-6 rounded-full bg-white transition-transform ${
            open ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div className="fixed inset-0 top-0 z-50 flex flex-col overflow-y-auto bg-navy px-8 pb-8 pt-5 text-white">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.close}
              className="flex h-11 w-11 items-center justify-center font-sans text-2xl leading-none text-white/70"
            >
              ×
            </button>
          </div>

          <nav className="mt-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.slug}
                href={`/${locale}/${item.slug}`}
                className="flex min-h-[56px] items-center border-b border-white/12 font-sans text-2xl font-bold leading-none tracking-[-.01em] text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <LocaleSwitchLink
              locale={otherLocale(locale)}
              label={otherLabel}
              className="flex min-h-[52px] items-center justify-center rounded-btn border border-white/25 font-mono text-sm font-semibold leading-none tracking-[.1em] text-white/80"
              onNavigate={() => setOpen(false)}
            />
            <a
              href={PHONE_TEL}
              className="flex min-h-[56px] items-center justify-center gap-2.5 rounded-btn bg-amber font-sans text-lg font-bold leading-none text-ink"
            >
              <span className="h-[7px] w-[7px] flex-none rounded-full bg-ink" />
              {ctaCall} {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
