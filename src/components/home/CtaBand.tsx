import type { SiteContent } from "@/content/types";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/i18n";
import Container from "../Container";

export default function CtaBand({ c }: { c: SiteContent }) {
  return (
    <div className="bg-amber py-11 text-ink">
      <Container className="flex flex-wrap items-center justify-between gap-7">
        <div>
          <h2 className="m-0 mb-2 font-sans text-[26px] font-extrabold leading-[1.1] tracking-[-.025em] sm:text-[34px]">
            {c.home.ctaTitle}
          </h2>
          <p className="m-0 font-sans text-[15.5px] font-medium leading-[1.4] opacity-82">
            {c.home.ctaSub}
          </p>
        </div>
        <a
          href={PHONE_TEL}
          className="whitespace-nowrap rounded-[8px] bg-ink px-[30px] py-[19px] font-sans text-2xl font-extrabold leading-none text-white"
        >
          {PHONE_DISPLAY}
        </a>
      </Container>
    </div>
  );
}
