import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import type { Locale } from "@/content/types";
import { isLocale } from "@/lib/i18n";
import { buildMetadata, SITE_NAME } from "@/lib/seo";
import Container from "@/components/Container";

const mapAlt: Record<Locale, string> = {
  en: "Map of Leon Roofing & Restoration's service area — Miami-Dade, Broward, and Palm Beach counties",
  es: "Mapa del área de servicio de Leon Roofing & Restoration — condados de Miami-Dade, Broward y Palm Beach",
};

const viewCounty: Record<Locale, string> = {
  en: "View coverage in this county →",
  es: "Ver cobertura en este condado →",
};

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
    path: "/areas",
    title: `${c.areasPage.title} | ${SITE_NAME}`,
    description: c.areasPage.sub,
  });
}

export default function AreasPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const c = getContent(locale);

  return (
    <>
      <div className="bg-navy pb-12 pt-[54px] text-white">
        <Container>
          <h1 className="m-0 mb-3.5 font-sans text-[36px] font-extrabold leading-none tracking-[-.03em] sm:text-[50px]">
            {c.areasPage.title}
          </h1>
          <p className="text-pretty m-0 max-w-[660px] font-sans text-base font-normal leading-[1.58] text-white/72 sm:text-[17px]">
            {c.areasPage.sub}
          </p>
        </Container>
      </div>

      <div className="bg-paper py-9 pb-16">
        <Container>
          <div className="relative mb-[34px] aspect-[8/3] w-full overflow-hidden rounded-card">
            <Image
              src="/assets/areas/service-areas-map.png"
              alt={mapAlt[locale]}
              fill
              sizes="(min-width: 1024px) 1120px, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {c.areasPage.counties.map((county) => (
              <div
                key={county.name}
                className="flex flex-col rounded-card border border-navy/11 bg-white p-[26px]"
              >
                <h2 className="m-0 mb-4 font-sans text-[21px] font-bold leading-[1.2] tracking-[-.01em] text-navy">
                  {county.name}
                </h2>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 font-sans text-sm font-normal leading-[1.4] text-navy/70">
                  {county.cities.map((city) => (
                    <span key={city}>{city}</span>
                  ))}
                </div>
                <Link
                  href={`/${locale}/areas/${county.slug}`}
                  className="mt-5 font-sans text-[13.5px] font-semibold leading-none text-gold-deep"
                >
                  {viewCounty[locale]}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
