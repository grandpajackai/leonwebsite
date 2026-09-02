import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import type { Locale } from "@/content/types";
import { isLocale, locales } from "@/lib/i18n";
import Container from "@/components/Container";
import ServiceHero from "@/components/service/ServiceHero";
import IncludesGrid from "@/components/service/IncludesGrid";
import HowItGoes from "@/components/service/HowItGoes";
import FaqAccordion from "@/components/service/FaqAccordion";
import ServiceSidebar from "@/components/service/ServiceSidebar";
import ServiceCtaBand from "@/components/service/ServiceCtaBand";

export function generateStaticParams() {
  const en = getContent("en");
  return locales.flatMap((locale) =>
    en.services.map((s) => ({ locale, slug: s.slug }))
  );
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const c = getContent(params.locale as Locale);
  const svc = c.services.find((s) => s.slug === params.slug);
  if (!svc) return {};
  return { title: `${svc.title} | LEON`, description: svc.blurb };
}

export default function ServicePage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const c = getContent(locale);
  const svc = c.services.find((s) => s.slug === params.slug);
  if (!svc) notFound();

  const related = c.services.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <>
      <ServiceHero locale={locale} c={c} svc={svc} />
      <div className="bg-paper py-[52px]">
        <Container className="grid grid-cols-1 items-start gap-9 lg:grid-cols-[1.4fr_.6fr]">
          <div>
            <IncludesGrid title={c.includesTitle} items={svc.includes} />
            <HowItGoes title={c.stepsTitle} steps={svc.steps} />
            <FaqAccordion title={c.faqTitle} faqs={svc.faqs} />
          </div>
          <ServiceSidebar locale={locale} c={c} related={related} />
        </Container>
      </div>
      <ServiceCtaBand c={c} />
    </>
  );
}
