import Image from "next/image";
import Link from "next/link";
import type { Locale, ServiceContent, SiteContent } from "@/content/types";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/i18n";
import Container from "../Container";
import PlaceholderPhoto from "../PlaceholderPhoto";

export default function ServiceHero({
  locale,
  c,
  svc,
}: {
  locale: Locale;
  c: SiteContent;
  svc: ServiceContent;
}) {
  const crumb = `${c.nav[0]?.label} / ${svc.title}`.toUpperCase();

  return (
    <div className="bg-navy text-white">
      <Container className="pt-3.5 font-mono text-[10.5px] font-medium leading-none tracking-[.1em] text-white/45">
        {crumb}
      </Container>
      <Container className="grid grid-cols-1 items-center gap-10 py-7 pb-[54px] lg:grid-cols-[1.1fr_.9fr]">
        <div className="flex flex-col gap-5">
          <h1 className="text-balance m-0 font-sans text-[36px] font-extrabold leading-[1.02] tracking-[-.03em] sm:text-[50px]">
            {svc.title}
          </h1>
          <p className="text-pretty m-0 max-w-[540px] font-sans text-base font-normal leading-[1.58] text-white/74 sm:text-[17px]">
            {svc.intro}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={PHONE_TEL}
              className="rounded-btn bg-amber px-6 py-4 font-sans text-[15.5px] font-bold leading-none text-ink transition-colors hover:bg-amber-hover"
            >
              {c.ctaCall} {PHONE_DISPLAY}
            </a>
            <Link
              href={`/${locale}/contact`}
              className="rounded-btn border border-white/28 px-6 py-4 font-sans text-[15.5px] font-semibold leading-none text-white transition-colors hover:border-amber hover:text-amber"
            >
              {c.ctaForm}
            </Link>
          </div>
        </div>
        <div className="relative min-h-[220px] overflow-hidden rounded-lg sm:min-h-[340px]">
          {svc.img ? (
            <Image
              src={`/${svc.img}`}
              alt={svc.title}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "center 22%" }}
            />
          ) : (
            <PlaceholderPhoto dark label={svc.photo} className="h-full w-full" />
          )}
        </div>
      </Container>
    </div>
  );
}
