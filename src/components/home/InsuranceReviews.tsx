import Link from "next/link";
import type { Locale, SiteContent } from "@/content/types";
import Container from "../Container";
import ReviewCard from "../ReviewCard";

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
          <h2 className="m-0 mb-4 font-sans text-2xl font-bold leading-[1.2] tracking-[-.02em] text-navy">
            {c.home.reviewsTitle}
          </h2>
          <div className="flex flex-col gap-3">
            {c.home.reviews.map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
