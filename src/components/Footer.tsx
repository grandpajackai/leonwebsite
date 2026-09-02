import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "@/content/types";
import { EMAIL } from "@/lib/i18n";
import Container from "./Container";

export default function Footer({
  locale,
  c,
}: {
  locale: Locale;
  c: SiteContent;
}) {
  const emergencyGroup = c.servicesPage.groups[0];
  const afterGroup = c.servicesPage.groups[3];
  const servicesBySlug = new Map(c.services.map((s) => [s.slug, s]));

  return (
    <footer className="mt-auto bg-ink text-white/60">
      <Container className="grid grid-cols-1 gap-8 py-11 pb-[22px] sm:grid-cols-2 lg:grid-cols-[1.3fr_.9fr_.9fr_.8fr]">
        <div>
          <Link href={`/${locale}`} className="mb-3.5 flex items-center gap-3">
            <Image
              src="/assets/leon-lion-mark-900.png"
              alt=""
              width={44}
              height={46}
              className="block h-auto w-11"
            />
            <span className="flex flex-none flex-col gap-[3px]">
              <span className="font-sans text-[17px] font-extrabold leading-none tracking-[.1em] text-white">
                LEON
              </span>
              <span className="whitespace-nowrap font-mono text-[7.5px] font-medium leading-none tracking-[.16em] text-gold">
                ROOFING &amp; RESTORATION
              </span>
            </span>
          </Link>
          <p className="mb-3.5 max-w-[280px] font-sans text-[13.5px] leading-[1.6]">
            {c.footer.tag}
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="break-all font-sans text-[13px] leading-[1.5] text-white/60"
          >
            {c.footer.email}
          </a>
        </div>

        <div>
          <div className="mb-3.5 font-mono text-[10px] font-medium leading-none tracking-[.13em] text-white/40">
            {c.footer.colTitle1}
          </div>
          <div className="flex flex-col gap-2.5">
            {emergencyGroup?.items.map((slug) => {
              const svc = servicesBySlug.get(slug);
              if (!svc) return null;
              return (
                <Link
                  key={slug}
                  href={`/${locale}/services/${slug}`}
                  className="font-sans text-[13.5px] leading-[1.35] text-white/60 transition-colors hover:text-amber"
                >
                  {svc.title}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <div className="mb-3.5 font-mono text-[10px] font-medium leading-none tracking-[.13em] text-white/40">
            {c.footer.colTitle2}
          </div>
          <div className="flex flex-col gap-2.5">
            {afterGroup?.items.map((slug) => {
              const svc = servicesBySlug.get(slug);
              if (!svc) return null;
              return (
                <Link
                  key={slug}
                  href={`/${locale}/services/${slug}`}
                  className="font-sans text-[13.5px] leading-[1.35] text-white/60 transition-colors hover:text-amber"
                >
                  {svc.title}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <div className="mb-3.5 font-mono text-[10px] font-medium leading-none tracking-[.13em] text-white/40">
            {c.footer.colTitle3}
          </div>
          <div className="flex flex-col gap-2.5">
            {c.nav.map((item) => (
              <Link
                key={item.slug}
                href={`/${locale}/${item.slug}`}
                className="font-sans text-[13.5px] leading-[1.35] text-white/60 transition-colors hover:text-amber"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <Container className="flex flex-wrap justify-between gap-5 border-t border-white/12 py-4 pb-[34px] font-mono text-[10.5px] font-medium leading-[1.6] tracking-[.07em] text-white/42">
        <span>{c.footer.legal}</span>
        <span>{c.strip.join(" · ")}</span>
      </Container>
    </footer>
  );
}
