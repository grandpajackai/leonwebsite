import type { SiteContent } from "@/content/types";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/i18n";
import Container from "../Container";

export default function ServiceCtaBand({ c }: { c: SiteContent }) {
  return (
    <div className="bg-amber py-[34px] text-ink">
      <Container className="flex flex-wrap items-center justify-between gap-6">
        <span className="font-sans text-2xl font-extrabold leading-[1.15] tracking-[-.02em] sm:text-[27px]">
          {c.home.ctaTitle}
        </span>
        <a
          href={PHONE_TEL}
          className="whitespace-nowrap rounded-[8px] bg-ink px-[26px] py-4 font-sans text-xl font-extrabold leading-none text-white"
        >
          {PHONE_DISPLAY}
        </a>
      </Container>
    </div>
  );
}
