import type { SiteContent } from "@/content/types";
import Container from "../Container";

export default function ProofBand({ c }: { c: SiteContent }) {
  return (
    <div className="bg-ink py-[52px] text-white">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <h2 className="m-0 mb-3.5 font-sans text-[26px] font-bold leading-[1.13] tracking-[-.02em] sm:text-[32px]">
            {c.home.proofTitle}
          </h2>
          <p className="text-pretty m-0 font-sans text-[15.5px] font-normal leading-[1.62] text-white/68">
            {c.home.proofBody}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-white/16 bg-white/16 sm:grid-cols-3">
          {c.home.proofPoints.map((p) => (
            <div key={p.h} className="bg-ink px-[22px] py-6">
              <div className="mb-4 h-[22px] w-[22px] rounded-full bg-amber opacity-90" />
              <h3 className="m-0 mb-2 font-sans text-[16.5px] font-bold leading-[1.25]">
                {p.h}
              </h3>
              <p className="m-0 font-sans text-[13.5px] font-normal leading-[1.55] text-white/62">
                {p.p}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
