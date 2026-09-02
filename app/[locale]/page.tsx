import { getContent } from "@/content";
import type { Locale } from "@/content/types";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Hero from "@/components/home/Hero";
import ProofBand from "@/components/home/ProofBand";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProcessBand from "@/components/home/ProcessBand";
import EquipmentBand from "@/components/home/EquipmentBand";
import RecentWork from "@/components/home/RecentWork";
import InsuranceReviews from "@/components/home/InsuranceReviews";
import CtaBand from "@/components/home/CtaBand";

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const c = getContent(locale);

  return (
    <>
      <Hero locale={locale} c={c} />
      <ProofBand c={c} />
      <ServicesGrid locale={locale} c={c} />
      <ProcessBand c={c} />
      <EquipmentBand c={c} />
      <RecentWork locale={locale} c={c} />
      <InsuranceReviews locale={locale} c={c} />
      <CtaBand c={c} />
    </>
  );
}
