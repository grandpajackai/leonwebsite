import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import type { Locale } from "@/content/types";
import { isLocale } from "@/lib/i18n";
import { buildMetadata, SITE_NAME } from "@/lib/seo";
import Container from "@/components/Container";

// Order services are checked in when deduping shared photos below —
// thermal-imaging and claims currently reuse the same thermal-camera
// photo, so whichever comes first here is the one that keeps it.
const SERVICE_ORDER = [
  "water-extraction",
  "structural-drying",
  "mold",
  "storm",
  "sewage",
  "tarping",
  "hvac",
  "thermal-imaging",
  "roofing",
  "roof-cleaning",
  "packout",
  "claims",
  "rebuild",
  "commercial",
];

const copy: Record<
  Locale,
  { byService: string; recentRebuilds: string; recentRebuildsNote: string }
> = {
  en: {
    byService: "Work by service",
    recentRebuilds: "Recent rebuild & remodel work",
    recentRebuildsNote:
      "Interior finish-out from our reconstruction & rebuild crew — the phase that follows drying, demo and repairs.",
  },
  es: {
    byService: "Trabajos por servicio",
    recentRebuilds: "Trabajos recientes de reconstrucción y remodelación",
    recentRebuildsNote:
      "Acabados interiores de nuestra cuadrilla de reconstrucción — la fase que sigue al secado, la demolición y las reparaciones.",
  },
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
    path: "/work",
    title: `${c.workPage.title} | ${SITE_NAME}`,
    description: c.workPage.sub,
  });
}

export default function WorkPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const c = getContent(locale);
  const t = copy[locale];

  const bySlug = new Map(c.services.map((s) => [s.slug, s]));
  const seenImg = new Set<string>();
  const serviceTiles = SERVICE_ORDER.map((slug) => bySlug.get(slug))
    .filter((s): s is NonNullable<typeof s> => !!s?.img)
    .filter((s) => {
      if (seenImg.has(s.img as string)) return false;
      seenImg.add(s.img as string);
      return true;
    });

  const rebuildTiles = c.workPage.captions.map((caption, i) => ({
    caption,
    n: String(i + 1).padStart(2, "0"),
    src: `/assets/work/job-${String(i + 1).padStart(2, "0")}.jpg`,
  }));

  return (
    <>
      <div className="bg-navy pb-12 pt-[54px] text-white">
        <Container>
          <h1 className="m-0 mb-3.5 font-sans text-[36px] font-extrabold leading-none tracking-[-.03em] sm:text-[50px]">
            {c.workPage.title}
          </h1>
          <p className="text-pretty m-0 max-w-[640px] font-sans text-base font-normal leading-[1.58] text-white/72 sm:text-[17px]">
            {c.workPage.sub}
          </p>
        </Container>
      </div>

      <div className="bg-paper py-11">
        <Container>
          <div className="mb-[22px] border-b border-navy/18 pb-3.5 font-mono text-[11px] font-medium leading-none tracking-[.14em] text-navy/50">
            {t.byService}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
            {serviceTiles.map((s) => (
              <Link
                key={s.slug}
                href={`/${locale}/services/${s.slug}`}
                className="group overflow-hidden rounded-card border border-navy/10 bg-white transition-[box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <div className="relative h-[220px] w-full bg-[#e4e0d9]">
                  <Image
                    src={`/${s.img}`}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                    style={{ objectPosition: "center 22%" }}
                  />
                </div>
                <div className="px-[15px] py-[13px] font-sans text-[13.5px] font-semibold leading-[1.3] text-navy">
                  {s.title}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>

      <div className="bg-white py-11 pb-16">
        <Container>
          <div className="mb-2 border-b border-navy/18 pb-3.5 font-mono text-[11px] font-medium leading-none tracking-[.14em] text-navy/50">
            {t.recentRebuilds}
          </div>
          <p className="text-pretty m-0 mb-[22px] mt-3 max-w-[640px] font-sans text-[14.5px] font-normal leading-[1.55] text-navy/62">
            {t.recentRebuildsNote}
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
            {rebuildTiles.map((tile) => (
              <div
                key={tile.src}
                className="overflow-hidden rounded-card border border-navy/10 bg-paper"
              >
                <div className="relative h-[250px] w-full bg-[#e4e0d9]">
                  <Image
                    src={tile.src}
                    alt={tile.caption}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-2.5 px-[15px] py-[13px]">
                  <span className="font-sans text-[13px] font-medium leading-[1.3] text-navy/72">
                    {tile.caption}
                  </span>
                  <span className="font-mono text-[9.5px] font-medium leading-none tracking-[.08em] text-navy/35">
                    {tile.n}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
