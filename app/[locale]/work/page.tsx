import type { Metadata } from "next";
import Image from "next/image";
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
  return { title: `${c.workPage.title} | LEON`, description: c.workPage.sub };
}

export default function WorkPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const c = getContent(params.locale as Locale);

  const tiles = c.workPage.captions.map((caption, i) => ({
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

      <div className="bg-paper py-11 pb-16">
        <Container className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
          {tiles.map((tile) => (
            <div
              key={tile.src}
              className="overflow-hidden rounded-card border border-navy/10 bg-white"
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
        </Container>
      </div>
    </>
  );
}
