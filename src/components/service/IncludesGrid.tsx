import type { HeadingBody } from "@/content/types";

export default function IncludesGrid({
  title,
  items,
}: {
  title: string;
  items: HeadingBody[];
}) {
  return (
    <div>
      <h2 className="m-0 mb-[18px] font-sans text-[22px] font-bold leading-[1.2] tracking-[-.02em] text-navy sm:text-[27px]">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-navy/12 bg-navy/12 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.h} className="bg-white px-6 py-[22px]">
            <h3 className="m-0 mb-[7px] font-sans text-base font-bold leading-[1.25] text-navy">
              {item.h}
            </h3>
            <p className="m-0 font-sans text-[13.8px] font-normal leading-[1.55] text-navy/66">
              {item.p}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
