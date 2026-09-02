import type { SiteContent } from "@/content/types";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/i18n";

export default function ContactSidebar({ c }: { c: SiteContent }) {
  const contactLabel =
    c.nav.find((n) => n.slug === "contact")?.label ?? c.contactPage.title;

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-panel bg-navy p-[26px] text-white">
        <div className="mb-2.5 font-sans text-[19px] font-bold leading-[1.2]">
          {c.contactPage.urgentTitle}
        </div>
        <p className="m-0 mb-[18px] font-sans text-sm font-normal leading-[1.55] text-white/68">
          {c.contactPage.urgentBody}
        </p>
        <a
          href={PHONE_TEL}
          className="block rounded-[8px] bg-amber py-4 text-center font-sans text-xl font-extrabold leading-none text-ink"
        >
          {PHONE_DISPLAY}
        </a>
      </div>

      <div className="flex flex-col gap-3.5 rounded-panel border border-navy/12 bg-white p-6">
        <div className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[.12em] text-navy/50">
          {contactLabel}
        </div>
        <a
          href={`mailto:${EMAIL}`}
          className="break-all font-sans text-sm font-semibold leading-[1.4] text-navy"
        >
          {c.footer.email}
        </a>
        <div className="font-sans text-sm font-normal leading-[1.5] text-navy/66">
          {c.topbar}
        </div>
        <div className="h-px bg-navy/12" />
        <div className="flex flex-col gap-[9px] font-sans text-[13.5px] font-normal leading-[1.4] text-navy">
          {c.aboutPage.creds.map((cr) => (
            <span key={cr}>{cr}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
