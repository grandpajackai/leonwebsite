import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import type { Locale } from "@/content/types";
import { isLocale } from "@/lib/i18n";
import { buildMetadata, SITE_NAME } from "@/lib/seo";
import Container from "@/components/Container";
import ContactForm from "@/components/contact/ContactForm";
import ContactSidebar from "@/components/contact/ContactSidebar";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const c = getContent(locale);
  return buildMetadata({
    locale,
    path: "/contact",
    title: `${c.contactPage.title} | ${SITE_NAME}`,
    description: c.contactPage.sub,
  });
}

export default function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const c = getContent(params.locale as Locale);

  return (
    <>
      <div className="bg-navy pb-11 pt-[50px] text-white">
        <Container>
          <h1 className="m-0 mb-3.5 font-sans text-[34px] font-extrabold leading-none tracking-[-.03em] sm:text-[46px]">
            {c.contactPage.title}
          </h1>
          <p className="text-pretty m-0 max-w-[620px] font-sans text-[15.5px] font-normal leading-[1.58] text-white/72 sm:text-[16.5px]">
            {c.contactPage.sub}
          </p>
        </Container>
      </div>

      <div className="bg-paper py-11 pb-16">
        <Container className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.35fr_.65fr]">
          <ContactForm c={c} />
          <ContactSidebar c={c} />
        </Container>
      </div>
    </>
  );
}
