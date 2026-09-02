import type { SiteContent } from "@/content/types";
import Container from "../Container";

export default function ProcessBand({ c }: { c: SiteContent }) {
  return (
    <div className="bg-navy py-[60px] text-white">
      <Container>
        <h2 className="m-0 mb-2.5 font-sans text-[26px] font-bold leading-[1.13] tracking-[-.02em] sm:text-[32px]">
          {c.home.processTitle}
        </h2>
        <p className="m-0 mb-8 max-w-[640px] font-sans text-[15.5px] font-normal leading-[1.6] text-white/66">
          {c.home.processSub}
        </p>
        <div className="grid grid-cols-1 gap-px border border-white/16 bg-white/16 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(210px,1fr))]">
          {c.home.process.map((st) => (
            <div key={st.t} className="bg-navy px-5 pb-7 pt-6">
              <div className="font-mono text-[10px] font-medium leading-none tracking-[.13em] text-amber">
                {st.t}
              </div>
              <h3 className="mb-2 mt-3.5 font-sans text-[17px] font-bold leading-[1.22]">
                {st.h}
              </h3>
              <p className="m-0 font-sans text-[13.5px] font-normal leading-[1.55] text-white/62">
                {st.p}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
