import Image from "next/image";
import type { SiteContent } from "@/content/types";
import Container from "../Container";

export default function EquipmentBand({ c }: { c: SiteContent }) {
  return (
    <div className="border-t border-navy/8 bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-[.95fr_1.05fr]">
        <div className="flex flex-col justify-center gap-4 py-14 pl-0 pr-0 lg:py-14 lg:pl-8 lg:pr-10">
          <span className="font-mono text-[11px] font-medium leading-none tracking-[.14em] text-navy/50">
            EQUIPMENT
          </span>
          <h2 className="text-balance m-0 font-sans text-[26px] font-bold leading-[1.15] tracking-[-.02em] text-navy sm:text-[30px]">
            {c.home.equipTitle}
          </h2>
          <p className="text-pretty m-0 font-sans text-[15.5px] font-normal leading-[1.62] text-navy/70">
            {c.home.equipBody}
          </p>
        </div>
        <div
          role="img"
          aria-label="Leon service van loaded with drying equipment"
          className="relative min-h-[260px] lg:min-h-[380px]"
        >
          <Image
            src="/assets/photos/van.jpg"
            alt="Leon service van loaded with drying equipment"
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "center 22%" }}
          />
        </div>
      </Container>
    </div>
  );
}
