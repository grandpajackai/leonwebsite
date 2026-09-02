import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "@/content/types";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/i18n";
import Container from "../Container";

export default function Hero({
  locale,
  c,
}: {
  locale: Locale;
  c: SiteContent;
}) {
  return (
    <div className="bg-navy text-white">
      <Container className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr]">
        <div className="flex flex-col justify-center gap-6 py-14 pl-0 pr-0 lg:py-[72px] lg:pl-8 lg:pr-12 lg:pb-[66px]">
          <div className="inline-flex items-center gap-[9px] font-mono text-[11px] font-medium leading-none tracking-[.14em] text-amber">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            {c.emergency}
          </div>
          <h1 className="m-0 text-balance font-sans text-[40px] font-extrabold leading-[.98] tracking-[-.03em] sm:text-[52px] lg:text-[64px] lg:leading-[.95]">
            {c.home.h1a}
            <br />
            <span className="text-amber">{c.home.h1b}</span>
          </h1>
          <p className="m-0 max-w-[520px] text-pretty font-sans text-[17.5px] font-normal leading-[1.55] text-white/74">
            {c.home.sub}
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={PHONE_TEL}
              className="rounded-btn bg-amber px-[26px] py-[17px] font-sans text-base font-bold leading-none text-ink transition-colors hover:bg-amber-hover"
            >
              {c.ctaCall} {PHONE_DISPLAY}
            </a>
            <Link
              href={`/${locale}/contact`}
              className="rounded-btn border border-white/28 px-[26px] py-[17px] font-sans text-base font-semibold leading-none text-white transition-colors hover:border-amber hover:text-amber"
            >
              {c.ctaForm} →
            </Link>
          </div>
          <div className="flex flex-wrap gap-[30px] pt-3 font-sans text-[12.5px] font-medium leading-[1.4] text-white/62">
            {c.home.bullets.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
        <div
          role="img"
          aria-label="Leon technician scanning for moisture with a thermal camera"
          className="relative min-h-[280px] border-l-0 border-white/10 lg:min-h-[460px] lg:border-l"
        >
          <Image
            src={`/${c.home.heroImg}`}
            alt="Leon technician scanning for moisture with a thermal camera"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "center 22%" }}
            priority
          />
        </div>
      </Container>
    </div>
  );
}
