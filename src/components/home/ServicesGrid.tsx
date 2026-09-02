import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "@/content/types";
import Container from "../Container";
import PlaceholderPhoto from "../PlaceholderPhoto";

const HOME_ORDER = [
  "water-extraction",
  "structural-drying",
  "mold",
  "hvac",
  "thermal-imaging",
  "tarping",
  "roofing",
  "roof-cleaning",
];

export default function ServicesGrid({
  locale,
  c,
}: {
  locale: Locale;
  c: SiteContent;
}) {
  const bySlug = new Map(c.services.map((s) => [s.slug, s]));

  return (
    <div className="bg-paper py-16">
      <Container>
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-5">
          <h2 className="m-0 font-sans text-[28px] font-bold leading-[1.1] tracking-[-.025em] text-navy sm:text-[34px]">
            {c.home.servicesTitle}
          </h2>
          <Link
            href={`/${locale}/services`}
            className="whitespace-nowrap font-sans text-[13.5px] font-semibold leading-none text-gold-deep"
          >
            {c.servicesPage.title} →
          </Link>
        </div>
        <p className="m-0 mb-7 font-sans text-[15.5px] font-normal leading-[1.5] text-navy/62">
          {c.home.servicesSub}
        </p>
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {HOME_ORDER.map((slug, i) => {
            const s = bySlug.get(slug);
            if (!s) return null;
            const num = String(i + 1).padStart(2, "0");
            return (
              <Link
                key={slug}
                href={`/${locale}/services/${slug}`}
                className="group overflow-hidden rounded-card border border-navy/11 bg-white transition-[box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <div className="relative h-28">
                  {s.img ? (
                    <Image
                      src={`/${s.img}`}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                      style={{ objectPosition: "center 22%" }}
                    />
                  ) : (
                    <PlaceholderPhoto label={s.photo} className="h-full w-full" />
                  )}
                </div>
                <div className="px-[22px] pb-6 pt-5">
                  <div className="font-mono text-[10.5px] font-medium leading-none tracking-[.12em] text-gold-deep">
                    {num}
                  </div>
                  <h3 className="my-[11px] mt-[11px] font-sans text-xl font-bold leading-[1.2] tracking-[-.01em] text-navy">
                    {s.title}
                  </h3>
                  <p className="text-pretty m-0 font-sans text-[14.5px] font-normal leading-[1.55] text-navy/66">
                    {s.blurb}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
