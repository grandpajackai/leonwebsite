import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "@/content/types";
import { otherLocale, PHONE_DISPLAY, PHONE_TEL } from "@/lib/i18n";
import Container from "./Container";
import LocaleSwitchLink from "./LocaleSwitchLink";
import MobileNav from "./MobileNav";

export default function Header({
  locale,
  c,
}: {
  locale: Locale;
  c: SiteContent;
}) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-5 bg-amber px-8 py-2 font-sans text-[12px] font-semibold leading-[1.3] text-ink">
        <span>{c.topbar}</span>
        <div className="flex gap-[18px] font-mono text-[10.5px] font-medium leading-none tracking-[.1em]">
          {c.strip.map((cred) => (
            <span key={cred}>{cred}</span>
          ))}
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-navy text-white shadow-header-sticky">
        <Container className="flex items-center justify-between gap-6 py-3">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Image
              src="/assets/leon-lion-mark-900.png"
              alt="Leon Roofing & Restoration"
              width={44}
              height={46}
              className="block h-auto w-11"
              priority
            />
            <span className="flex flex-none flex-col gap-[3px]">
              <span className="font-sans text-xl font-extrabold leading-none tracking-[.09em] text-white">
                LEON
              </span>
              <span className="hidden whitespace-nowrap font-mono text-[8px] font-medium leading-none tracking-[.16em] text-gold sm:block">
                ROOFING &amp; RESTORATION
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="hidden items-center gap-6 lg:flex">
              {c.nav.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${locale}/${item.slug}`}
                  className="border-b-[1.5px] border-transparent py-1.5 font-sans text-[13.5px] font-medium leading-none text-white/82 transition-colors hover:border-amber hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <LocaleSwitchLink
              locale={otherLocale(locale)}
              label={c.other}
              className="hidden rounded-[5px] border border-white/25 px-2.5 py-2 font-mono text-[11px] font-semibold leading-none tracking-[.1em] text-white/60 transition-colors hover:border-amber hover:text-white lg:inline-flex"
            />
            <a
              href={PHONE_TEL}
              className="flex items-center gap-[9px] whitespace-nowrap rounded-btn bg-amber px-3 py-[11px] font-sans text-[13px] font-bold leading-none text-ink transition-colors hover:bg-amber-hover sm:px-[18px] sm:text-sm"
            >
              <span className="h-[7px] w-[7px] flex-none rounded-full bg-ink" />
              {PHONE_DISPLAY}
            </a>
            <MobileNav
              locale={locale}
              navItems={c.nav}
              otherLabel={c.other}
              ctaCall={c.ctaCall}
            />
          </div>
        </Container>
      </div>
    </>
  );
}
