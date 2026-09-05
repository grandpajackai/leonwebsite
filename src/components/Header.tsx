import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "@/content/types";
import { otherLocale, PHONE_DISPLAY, PHONE_TEL } from "@/lib/i18n";
import Container from "./Container";
import LocaleSwitchLink from "./LocaleSwitchLink";
import MobileNav from "./MobileNav";
import NavMenu from "./NavMenu";

const viewAll: Record<Locale, string> = {
  en: "View all services →",
  es: "Ver todos los servicios →",
};

const allAreasLabel: Record<Locale, string> = {
  en: "All service areas →",
  es: "Todas las áreas →",
};

export default function Header({
  locale,
  c,
}: {
  locale: Locale;
  c: SiteContent;
}) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-1.5 bg-amber px-4 py-2 font-sans text-[12px] font-semibold leading-[1.3] text-ink sm:px-8">
        <span>{c.topbar}</span>
        <div className="flex flex-wrap gap-x-[18px] gap-y-1 font-mono text-[10.5px] font-medium leading-none tracking-[.1em]">
          {c.strip.map((cred) => (
            <span key={cred} className="whitespace-nowrap">
              {cred}
            </span>
          ))}
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-navy text-white shadow-header-sticky">
        <Container className="flex items-center justify-between gap-6 py-3">
          <Link href={`/${locale}`} className="flex shrink-0 items-center gap-3">
            <Image
              src="/assets/leon-lion-mark-900.png"
              alt="Leon Roofing & Restoration"
              width={44}
              height={46}
              className="block h-auto w-9 sm:w-11"
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

          <div className="flex items-center gap-2 sm:gap-6">
            <nav className="hidden items-center gap-6 lg:flex">
              {c.nav.map((item) => {
                if (item.slug === "services") {
                  return (
                    <NavMenu
                      key={item.slug}
                      label={item.label}
                      href={`/${locale}/services`}
                    >
                      <div className="flex w-[560px] flex-col gap-5">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                          {c.servicesPage.groups.map((group) => (
                            <div key={group.label}>
                              <div className="mb-2.5 font-mono text-[10px] font-medium leading-none tracking-[.12em] text-navy/45">
                                {group.label}
                              </div>
                              <div className="flex flex-col gap-1.5">
                                {group.items.map((slug) => {
                                  const svc = c.services.find(
                                    (s) => s.slug === slug
                                  );
                                  if (!svc) return null;
                                  return (
                                    <Link
                                      key={slug}
                                      href={`/${locale}/services/${slug}`}
                                      className="font-sans text-[13.5px] font-medium leading-[1.4] text-navy/75 transition-colors hover:text-gold-deep"
                                    >
                                      {svc.title}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                        <Link
                          href={`/${locale}/services`}
                          className="border-t border-navy/10 pt-3.5 font-sans text-[13px] font-semibold leading-none text-gold-deep"
                        >
                          {viewAll[locale]}
                        </Link>
                      </div>
                    </NavMenu>
                  );
                }
                if (item.slug === "areas") {
                  return (
                    <NavMenu
                      key={item.slug}
                      label={item.label}
                      href={`/${locale}/areas`}
                    >
                      <div className="flex w-[220px] flex-col gap-4">
                        <div className="flex flex-col gap-2.5">
                          {c.areasPage.counties.map((county) => (
                            <Link
                              key={county.slug}
                              href={`/${locale}/areas/${county.slug}`}
                              className="font-sans text-[13.5px] font-medium leading-[1.4] text-navy/75 transition-colors hover:text-gold-deep"
                            >
                              {county.name}
                            </Link>
                          ))}
                        </div>
                        <Link
                          href={`/${locale}/areas`}
                          className="border-t border-navy/10 pt-3.5 font-sans text-[13px] font-semibold leading-none text-gold-deep"
                        >
                          {allAreasLabel[locale]}
                        </Link>
                      </div>
                    </NavMenu>
                  );
                }
                return (
                  <Link
                    key={item.slug}
                    href={`/${locale}/${item.slug}`}
                    className="border-b-[1.5px] border-transparent py-1.5 font-sans text-[13.5px] font-medium leading-none text-white/82 transition-colors hover:border-amber hover:text-white"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <LocaleSwitchLink
              locale={otherLocale(locale)}
              label={c.other}
              className="hidden rounded-[5px] border border-white/25 px-2.5 py-2 font-mono text-[11px] font-semibold leading-none tracking-[.1em] text-white/60 transition-colors hover:border-amber hover:text-white lg:inline-flex"
            />
            <a
              href={PHONE_TEL}
              className="flex min-h-[44px] shrink-0 items-center gap-[9px] whitespace-nowrap rounded-btn bg-amber px-2.5 py-[11px] font-sans text-[13px] font-bold leading-none text-ink transition-colors hover:bg-amber-hover sm:px-[18px] sm:text-sm"
            >
              <span className="hidden h-[7px] w-[7px] flex-none rounded-full bg-ink sm:block" />
              {PHONE_DISPLAY}
            </a>
            <MobileNav locale={locale} c={c} />
          </div>
        </Container>
      </div>
    </>
  );
}
