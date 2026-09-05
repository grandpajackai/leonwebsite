"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale, SiteContent } from "@/content/types";
import { otherLocale, PHONE_DISPLAY, PHONE_TEL } from "@/lib/i18n";
import LocaleSwitchLink from "./LocaleSwitchLink";

const menuLabel: Record<Locale, { open: string; close: string }> = {
  en: { open: "Open menu", close: "Close menu" },
  es: { open: "Abrir menú", close: "Cerrar menú" },
};

const viewAll: Record<Locale, string> = {
  en: "View all services →",
  es: "Ver todos los servicios →",
};

const allAreasLabel: Record<Locale, string> = {
  en: "All service areas →",
  es: "Todas las áreas →",
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      className={`flex-none transition-transform ${open ? "-rotate-180" : ""}`}
    >
      <path
        d="M1 1l5.5 5.5L12 1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MobileNav({
  locale,
  c,
}: {
  locale: Locale;
  c: SiteContent;
}) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
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
            {c.nav.map((item) => {
              if (item.slug === "services") {
                const isExpanded = expanded === "services";
                return (
                  <div key={item.slug} className="border-b border-white/12">
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/${locale}/services`}
                        className="flex min-h-[56px] flex-1 items-center font-sans text-2xl font-bold leading-none tracking-[-.01em] text-white"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded(isExpanded ? null : "services")
                        }
                        aria-expanded={isExpanded}
                        aria-label={item.label}
                        className="flex h-11 w-11 flex-none items-center justify-center text-white/60"
                      >
                        <Chevron open={isExpanded} />
                      </button>
                    </div>
                    {isExpanded && (
                      <div className="flex flex-col gap-4 pb-5 pl-1">
                        {c.servicesPage.groups.map((group) => (
                          <div key={group.label}>
                            <div className="mb-2 font-mono text-[10px] font-medium leading-none tracking-[.12em] text-white/40">
                              {group.label}
                            </div>
                            <div className="flex flex-col gap-2.5">
                              {group.items.map((slug) => {
                                const svc = c.services.find(
                                  (s) => s.slug === slug
                                );
                                if (!svc) return null;
                                return (
                                  <Link
                                    key={slug}
                                    href={`/${locale}/services/${slug}`}
                                    className="font-sans text-base font-medium leading-[1.3] text-white/80"
                                  >
                                    {svc.title}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                        <Link
                          href={`/${locale}/services`}
                          className="font-sans text-[13.5px] font-semibold leading-none text-amber"
                        >
                          {viewAll[locale]}
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              if (item.slug === "areas") {
                const isExpanded = expanded === "areas";
                return (
                  <div key={item.slug} className="border-b border-white/12">
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/${locale}/areas`}
                        className="flex min-h-[56px] flex-1 items-center font-sans text-2xl font-bold leading-none tracking-[-.01em] text-white"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setExpanded(isExpanded ? null : "areas")}
                        aria-expanded={isExpanded}
                        aria-label={item.label}
                        className="flex h-11 w-11 flex-none items-center justify-center text-white/60"
                      >
                        <Chevron open={isExpanded} />
                      </button>
                    </div>
                    {isExpanded && (
                      <div className="flex flex-col gap-2.5 pb-5 pl-1">
                        {c.areasPage.counties.map((county) => (
                          <Link
                            key={county.slug}
                            href={`/${locale}/areas/${county.slug}`}
                            className="font-sans text-base font-medium leading-[1.3] text-white/80"
                          >
                            {county.name}
                          </Link>
                        ))}
                        <Link
                          href={`/${locale}/areas`}
                          className="font-sans text-[13.5px] font-semibold leading-none text-amber"
                        >
                          {allAreasLabel[locale]}
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.slug}
                  href={`/${locale}/${item.slug}`}
                  className="flex min-h-[56px] items-center border-b border-white/12 font-sans text-2xl font-bold leading-none tracking-[-.01em] text-white"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <LocaleSwitchLink
              locale={otherLocale(locale)}
              label={c.other}
              className="flex min-h-[52px] items-center justify-center rounded-btn border border-white/25 font-mono text-sm font-semibold leading-none tracking-[.1em] text-white/80"
              onNavigate={() => setOpen(false)}
            />
            <a
              href={PHONE_TEL}
              className="flex min-h-[56px] items-center justify-center gap-2.5 rounded-btn bg-amber font-sans text-lg font-bold leading-none text-ink"
            >
              <span className="h-[7px] w-[7px] flex-none rounded-full bg-ink" />
              {c.ctaCall} {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
