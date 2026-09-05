import type { Locale, Review } from "@/content/types";
import ReviewCard from "../ReviewCard";

const label: Record<Locale, { one: string; many: string }> = {
  en: { one: "Customer review", many: "Customer reviews" },
  es: { one: "Reseña de cliente", many: "Reseñas de clientes" },
};

export default function ServiceReviews({
  locale,
  reviews,
}: {
  locale: Locale;
  reviews: Review[];
}) {
  const t = label[locale];
  return (
    <div>
      <div className="mb-4 mt-9 font-mono text-[10.5px] font-medium leading-none tracking-[.12em] text-navy/50">
        {reviews.length > 1 ? t.many : t.one}
      </div>
      <div className="flex flex-col gap-3">
        {reviews.map((r) => (
          <ReviewCard key={r.name} review={r} />
        ))}
      </div>
    </div>
  );
}
