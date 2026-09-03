import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import type { Locale } from "@/content/types";
import { isLocale } from "@/lib/i18n";
import { buildMetadata, SITE_NAME } from "@/lib/seo";
import Container from "@/components/Container";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";

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
    path: "/about",
    title: `${c.aboutPage.title} | ${SITE_NAME}`,
    description: c.aboutPage.sub,
  });
}

export default function AboutPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const c = getContent(params.locale as Locale);

  return (
    <>
      <div className="bg-navy pb-[52px] pt-[54px] text-white">
        <Container className="grid grid-cols-1 items-center gap-11 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <h1 className="text-balance m-0 mb-4 font-sans text-[34px] font-extrabold leading-[1.05] tracking-[-.03em] sm:text-[46px]">
              {c.aboutPage.title}
            </h1>
            <p className="text-pretty m-0 font-sans text-base font-normal leading-[1.58] text-white/74 sm:text-[17px]">
              {c.aboutPage.sub}
            </p>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-lg sm:min-h-[400px]">
            {c.aboutPage.img ? (
              <Image
                src={`/${c.aboutPage.img}`}
                alt="Uriah Leon, Leon Roofing & Restoration"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 22%" }}
              />
            ) : (
              <PlaceholderPhoto
                dark
                label={c.aboutPage.photo}
                className="h-full w-full"
              />
            )}
          </div>
        </Container>
      </div>

      <div className="bg-white py-14">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div className="flex flex-col gap-5">
            {c.aboutPage.body.map((p) => (
              <p
                key={p}
                className="text-pretty m-0 font-sans text-base font-normal leading-[1.65] text-navy/78 sm:text-[17px]"
              >
                {p}
              </p>
            ))}
          </div>
          <div className="border-l border-navy/14 pl-8">
            <div className="mb-4 font-mono text-[10.5px] font-medium leading-none tracking-[.12em] text-navy/50">
              {c.aboutPage.credsTitle}
            </div>
            <div className="flex flex-col gap-3 font-sans text-[15px] font-semibold leading-[1.35] text-navy">
              {c.aboutPage.creds.map((cr) => (
                <span key={cr}>{cr}</span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-14">
        <Container>
          <h2 className="m-0 mb-6 font-sans text-[26px] font-bold leading-[1.15] tracking-[-.02em] text-navy sm:text-[30px]">
            {c.aboutPage.valuesTitle}
          </h2>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-navy/14 bg-navy/14 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {c.aboutPage.values.map((v) => (
              <div key={v.h} className="bg-white px-6 py-[26px]">
                <h3 className="m-0 mb-2 font-sans text-[17px] font-bold leading-[1.25] text-navy">
                  {v.h}
                </h3>
                <p className="m-0 font-sans text-sm font-normal leading-[1.55] text-navy/66">
                  {v.p}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
