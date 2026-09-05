import type { Review } from "@/content/types";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-[9px] border border-navy/12 bg-[#faf9f6] px-[22px] py-5">
      <div className="mb-2.5 flex gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={`h-[11px] w-[11px] rounded-[2px] ${
              i < review.rating ? "bg-amber" : "bg-navy/12"
            }`}
          />
        ))}
      </div>
      <p className="text-pretty m-0 mb-2 font-sans text-[14px] font-normal leading-[1.55] text-navy/78">
        “{review.quote}”
      </p>
      <div className="font-sans text-[13px] font-semibold leading-none text-navy">
        {review.name}
      </div>
    </div>
  );
}
