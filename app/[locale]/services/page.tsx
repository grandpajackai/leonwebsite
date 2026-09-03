import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import type { Locale } from "@/content/types";
import { isLocale } from "@/lib/i18n";
import { buildMetadata, SITE_NAME } from "@/lib/seo";
import Container from "@/components/Container";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const c = getContent(locale);
  return buildMetadata({
    locale,
    path: "/services",
    title: `${c.servicesPage.title} | ${SITE_NAME}`,
    description: c.servicesPage.sub,
  });
}

export default function ServicesIndexPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const c = getContent(locale);
  const bySlug = new Map(c.services.map((s) => [s.slug, s]));

  return (
    <>
      <div className="bg-navy pb-12 pt-[54px] text-white">
        <Container>
          <h1 className="m-0 mb-3.5 font-sans text-[36px] font-extrabold leading-none tracking-[-.03em] sm:text-[50px]">
            {c.servicesPage.title}
          </h1>
          <p className="text-pretty m-0 max-w-[620px] font-sans text-base font-normal leading-[1.58] text-white/72 sm:text-[17px]">
            {c.servicesPage.sub}
          </p>
        </Container>
      </div>

      <div className="bg-paper py-[52px] pb-16">
        <Container className="flex flex-col gap-11">
          {c.servicesPage.groups.map((group) => (
            <div key={group.label}>
              <div className="border-b border-navy/18 pb-3.5 font-mono text-[11px] font-medium leading-none tracking-[.14em] text-navy/50">
                {group.label}
              </div>
              <div className="mt-[22px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
                {group.items.map((slug) => {
                  const s = bySlug.get(slug);
                  if (!s) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/${locale}/services/${slug}`}
                      className="flex flex-col gap-2.5 rounded-card border border-navy/11 bg-white p-6 transition-[box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:shadow-card-hover"
                    >
                      <h3 className="m-0 font-sans text-[19px] font-bold leading-[1.22] tracking-[-.01em] text-navy">
                        {s.title}
                      </h3>
                      <p className="text-pretty m-0 font-sans text-[14.2px] font-normal leading-[1.55] text-navy/66">
                        {s.blurb}
                      </p>
                      <span className="mt-1 font-sans text-[13px] font-semibold leading-none text-gold-deep">
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </Container>
      </div>
    </>
  );
}
