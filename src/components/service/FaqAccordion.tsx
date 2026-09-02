"use client";

import { useState } from "react";
import type { ServiceFaq } from "@/content/types";

export default function FaqAccordion({
  title,
  faqs,
}: {
  title: string;
  faqs: ServiceFaq[];
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      <h2 className="m-0 mb-4 mt-9 font-sans text-[22px] font-bold leading-[1.2] tracking-[-.02em] text-navy sm:text-[27px]">
        {title}
      </h2>
      <div className="flex flex-col gap-px overflow-hidden rounded-card border border-navy/12 bg-navy/12">
        {faqs.map((faq, i) => {
          const open = openIndex === i;
          return (
            <div key={faq.q} className="bg-white">
              <button
                onClick={() => setOpenIndex(open ? -1 : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 px-[22px] py-[18px] text-left transition-colors hover:bg-[#faf9f6]"
              >
                <span className="font-sans text-[15px] font-semibold leading-[1.35] text-navy">
                  {faq.q}
                </span>
                <span className="flex-none font-sans text-[19px] font-normal leading-none text-gold-deep">
                  {open ? "−" : "+"}
                </span>
              </button>
              {open && (
                <div className="text-pretty max-w-[760px] px-[22px] pb-5 font-sans text-[14.2px] font-normal leading-[1.62] text-navy/68">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
