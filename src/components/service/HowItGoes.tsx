import type { ServiceStep } from "@/content/types";

export default function HowItGoes({
  title,
  steps,
}: {
  title: string;
  steps: ServiceStep[];
}) {
  return (
    <div>
      <h2 className="m-0 mb-4 mt-9 font-sans text-[22px] font-bold leading-[1.2] tracking-[-.02em] text-navy sm:text-[27px]">
        {title}
      </h2>
      <div className="flex flex-col">
        {steps.map((step, i) => (
          <div
            key={step.h}
            className="grid grid-cols-[38px_1fr] gap-4 border-t border-navy/16 py-4"
          >
            <span className="font-mono text-[11px] font-medium leading-[1.6] text-gold-deep">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="font-sans text-[15.5px] font-bold leading-[1.3] text-navy">
                {step.h}
              </div>
              <div className="font-sans text-sm font-normal leading-[1.55] text-navy/66">
                {step.p}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
