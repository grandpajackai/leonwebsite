import Link from "next/link";
import type { Locale, ServiceContent, SiteContent } from "@/content/types";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/i18n";

export default function ServiceSidebar({
  locale,
  c,
  related,
}: {
  locale: Locale;
  c: SiteContent;
  related: ServiceContent[];
}) {
  return (
    <div className="flex flex-col gap-4 lg:sticky lg:top-[88px]">
      <div className="rounded-panel bg-navy p-6 text-white">
        <div className="mb-3.5 flex items-center gap-2 font-mono text-[10.5px] font-medium leading-none tracking-[.12em] text-amber">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          {c.sidebarTitle}
        </div>
        <a
          href={PHONE_TEL}
          className="mb-2 block font-sans text-[25px] font-extrabold leading-[1.1] text-white"
        >
          {PHONE_DISPLAY}
        </a>
        <p className="m-0 mb-4 font-sans text-[13.5px] font-normal leading-[1.5] text-white/65">
          {c.sidebarBody}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="block rounded-btn bg-amber py-3.5 text-center font-sans text-[14.5px] font-bold leading-none text-ink transition-colors hover:bg-amber-hover"
        >
          {c.ctaForm}
        </Link>
      </div>

      <div className="rounded-panel border border-navy/12 bg-white p-[22px]">
        <div className="mb-3.5 font-mono text-[10.5px] font-medium leading-none tracking-[.12em] text-navy/50">
          {c.aboutPage.credsTitle}
        </div>
        <div className="flex flex-col gap-[9px] font-sans text-[13.5px] font-normal leading-[1.4] text-navy">
          {c.aboutPage.creds.map((cr) => (
            <span key={cr}>{cr}</span>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div className="rounded-panel border border-navy/12 bg-white p-[22px]">
          <div className="mb-3.5 font-mono text-[10.5px] font-medium leading-none tracking-[.12em] text-navy/50">
            {c.relatedTitle}
          </div>
          <div className="flex flex-col gap-[11px]">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${locale}/services/${r.slug}`}
                className="font-sans text-sm font-semibold leading-[1.35] text-navy transition-colors hover:text-gold-deep"
              >
                {r.title} →
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
