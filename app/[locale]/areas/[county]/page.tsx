import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import type { Locale } from "@/content/types";
import { isLocale, locales, PHONE_DISPLAY, PHONE_TEL } from "@/lib/i18n";
import { buildMetadata, SITE_NAME } from "@/lib/seo";
import { areaSchema } from "@/lib/schema";
import Container from "@/components/Container";
import ServiceCtaBand from "@/components/service/ServiceCtaBand";

const copy: Record<
  Locale,
  {
    crumb: string;
    citiesTitle: string;
    servicesTitle: string;
    allAreas: string;
  }
> = {
  en: {
    crumb: "SERVICE AREAS",
    citiesTitle: "Cities we cover",
    servicesTitle: "Services in this county",
    allAreas: "← All service areas",
  },
  es: {
    crumb: "ÁREAS DE SERVICIO",
    citiesTitle: "Ciudades que cubrimos",
    servicesTitle: "Servicios en este condado",
    allAreas: "← Todas las áreas de servicio",
  },
};

export function generateStaticParams() {
  const en = getContent("en");
  return locales.flatMap((locale) =>
    en.areasPage.counties.map((county) => ({ locale, county: county.slug }))
  );
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; county: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const c = getContent(locale);
  const county = c.areasPage.counties.find((x) => x.slug === params.county);
  if (!county) return {};
  return buildMetadata({
    locale,
    path: `/areas/${county.slug}`,
    title: `${county.name} | ${SITE_NAME}`,
    description: county.intro,
  });
}

export default function CountyPage({
  params,
}: {
  params: { locale: string; county: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const c = getContent(locale);
  const county = c.areasPage.counties.find((x) => x.slug === params.county);
  if (!county) notFound();

  const t = copy[locale];
  const bySlug = new Map(c.services.map((s) => [s.slug, s]));
  const schema = areaSchema(locale, county.name, county.intro, `/areas/${county.slug}`);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="bg-navy pb-12 pt-[54px] text-white">
        <Container>
          <div className="mb-3.5 font-mono text-[10.5px] font-medium leading-none tracking-[.1em] text-white/45">
            {t.crumb}
          </div>
          <h1 className="m-0 mb-3.5 font-sans text-[36px] font-extrabold leading-none tracking-[-.03em] sm:text-[50px]">
            {county.name}
          </h1>
          <p className="text-pretty m-0 max-w-[660px] font-sans text-base font-normal leading-[1.58] text-white/72 sm:text-[17px]">
            {county.intro}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={PHONE_TEL}
              className="rounded-btn bg-amber px-6 py-4 font-sans text-[15.5px] font-bold leading-none text-ink transition-colors hover:bg-amber-hover"
            >
              {PHONE_DISPLAY}
            </a>
            <Link
              href={`/${locale}/contact`}
              className="rounded-btn border border-white/28 px-6 py-4 font-sans text-[15.5px] font-semibold leading-none text-white transition-colors hover:border-amber hover:text-amber"
            >
              {c.ctaForm}
            </Link>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-[52px]">
        <Container>
          <div className="mb-3.5 border-b border-navy/18 pb-3.5 font-mono text-[11px] font-medium leading-none tracking-[.14em] text-navy/50">
            {t.citiesTitle}
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 font-sans text-sm font-normal leading-[1.4] text-navy/70 sm:grid-cols-3 lg:grid-cols-4">
            {county.cities.map((city) => (
              <span key={city}>{city}</span>
            ))}
          </div>
        </Container>
      </div>

      <div className="bg-white py-[52px]">
        <Container>
          <div className="mb-[22px] border-b border-navy/18 pb-3.5 font-mono text-[11px] font-medium leading-none tracking-[.14em] text-navy/50">
            {t.servicesTitle}
          </div>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {c.servicesPage.groups.flatMap((group) => group.items).map((slug) => {
              const s = bySlug.get(slug);
              if (!s) return null;
              return (
                <Link
                  key={slug}
                  href={`/${locale}/services/${slug}`}
                  className="flex flex-col gap-2 rounded-card border border-navy/11 bg-paper p-5 transition-[box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <h3 className="m-0 font-sans text-[16.5px] font-bold leading-[1.25] tracking-[-.01em] text-navy">
                    {s.title}
                  </h3>
                  <p className="text-pretty m-0 font-sans text-[13.5px] font-normal leading-[1.5] text-navy/62">
                    {s.blurb}
                  </p>
                </Link>
              );
            })}
          </div>
          <Link
            href={`/${locale}/areas`}
            className="mt-8 inline-block font-sans text-sm font-semibold leading-none text-gold-deep"
          >
            {t.allAreas}
          </Link>
        </Container>
      </div>

      <ServiceCtaBand c={c} />
    </>
  );
}
