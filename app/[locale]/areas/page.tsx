import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import type { Locale } from "@/content/types";
import { isLocale } from "@/lib/i18n";
import Container from "@/components/Container";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const c = getContent(params.locale as Locale);
  return { title: `${c.areasPage.title} | LEON`, description: c.areasPage.sub };
}

export default function AreasPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const c = getContent(params.locale as Locale);

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
          <div className="mb-[34px] flex h-[300px] items-center justify-center rounded-card bg-stripe-light text-center font-mono text-[10px] font-medium leading-[1.6] tracking-[.08em] text-black/42">
            {c.areasPage.mapNote}
          </div>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {c.areasPage.counties.map((county) => (
              <div
                key={county.name}
                className="rounded-card border border-navy/11 bg-white p-[26px]"
              >
                <h2 className="m-0 mb-4 font-sans text-[21px] font-bold leading-[1.2] tracking-[-.01em] text-navy">
                  {county.name}
                </h2>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 font-sans text-sm font-normal leading-[1.4] text-navy/70">
                  {county.cities.map((city) => (
                    <span key={city}>{city}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
