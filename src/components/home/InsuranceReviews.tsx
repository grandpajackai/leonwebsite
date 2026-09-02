import Link from "next/link";
import type { Locale, SiteContent } from "@/content/types";
import Container from "../Container";

export default function InsuranceReviews({
  locale,
  c,
}: {
  locale: Locale;
  c: SiteContent;
}) {
  const claims = c.services.find((s) => s.slug === "claims");

  return (
    <div className="border-y border-navy/8 bg-white py-[58px]">
      <Container className="grid grid-cols-1 gap-11 lg:grid-cols-2">
        <div>
          <span className="font-mono text-[11px] font-medium leading-none tracking-[.14em] text-navy/50">
            INSURANCE
          </span>
          <h2 className="my-3.5 font-sans text-[26px] font-bold leading-[1.15] tracking-[-.02em] text-navy sm:text-[30px]">
            {c.home.claimTitle}
          </h2>
          <p className="text-pretty m-0 mb-5 font-sans text-[15.5px] font-normal leading-[1.62] text-navy/70">
            {c.home.claimBody}
          </p>
          <div className="flex flex-col gap-2.5 font-sans text-[14.5px] font-normal leading-[1.4] text-navy">
            {c.home.claimPoints.map((p) => (
              <div key={p} className="flex items-center gap-[11px]">
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-amber" />
                {p}
              </div>
            ))}
          </div>
          {claims && (
            <Link
              href={`/${locale}/services/claims`}
              className="mt-[22px] inline-block font-sans text-sm font-semibold leading-none text-gold-deep"
            >
              {claims.title} →
            </Link>
          )}
        </div>
        <div>
          <h2 className="m-0 mb-1.5 font-sans text-2xl font-bold leading-[1.2] tracking-[-.02em] text-navy">
            {c.home.reviewsTitle}
          </h2>
          <div className="mb-4 font-mono text-[10px] font-medium leading-none tracking-[.1em] text-navy/40">
            {c.home.reviewsNote}
          </div>
          <div className="flex flex-col gap-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-[9px] border border-dashed border-navy/28 bg-[#faf9f6] px-[22px] py-5"
              >
                <div className="mb-2.5 flex gap-1">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <span
                      key={star}
                      className="h-[11px] w-[11px] rounded-[2px] bg-amber"
                    />
                  ))}
                </div>
                <div className="mb-[7px] h-[9px] rounded-[5px] bg-navy/10" />
                <div className="mb-[7px] h-[9px] w-[82%] rounded-[5px] bg-navy/10" />
                <div className="h-[9px] w-[54%] rounded-[5px] bg-navy/10" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
