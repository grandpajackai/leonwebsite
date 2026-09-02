import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "@/content/types";
import Container from "../Container";

export default function RecentWork({
  locale,
  c,
}: {
  locale: Locale;
  c: SiteContent;
}) {
  const tiles = c.workPage.captions.slice(0, 4).map((caption, i) => ({
    caption,
    src: `/assets/work/job-${String(i + 1).padStart(2, "0")}.jpg`,
  }));

  return (
    <div className="bg-paper py-[60px]">
      <Container>
        <div className="flex flex-wrap items-baseline justify-between gap-5">
          <h2 className="m-0 font-sans text-[26px] font-bold leading-[1.1] tracking-[-.025em] text-navy sm:text-[32px]">
            {c.home.workTitle}
          </h2>
          <Link
            href={`/${locale}/work`}
            className="whitespace-nowrap font-sans text-[13.5px] font-semibold leading-none text-gold-deep"
          >
            {c.workPage.title} →
          </Link>
        </div>
        <p className="m-0 mb-6 mt-2 font-sans text-[15.5px] font-normal leading-[1.5] text-navy/62">
          {c.home.workSub}
        </p>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(230px,1fr))]">
          {tiles.map((tile) => (
            <div
              key={tile.src}
              className="overflow-hidden rounded-[9px] border border-navy/10 bg-white"
            >
              <div className="relative h-[200px] w-full bg-[#e4e0d9]">
                <Image
                  src={tile.src}
                  alt={tile.caption}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="px-3.5 py-3 font-sans text-[12.5px] font-medium leading-[1.3] text-navy/70">
                {tile.caption}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
