import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getContent } from "@/content";
import type { Locale } from "@/content/types";
import { isLocale, locales } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextUsWidget from "@/components/TextUsWidget";
import StickyCallBar from "@/components/StickyCallBar";
import "../globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Leon Roofing & Restoration",
  description:
    "Emergency water, mold, storm and fire damage restoration across South Florida — then the rebuild that puts the house back.",
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const c = getContent(locale);

  return (
    <html lang={locale}>
      <body
        className={`${archivo.variable} ${plexMono.variable} flex min-h-screen flex-col bg-paper pb-16 font-sans lg:pb-0`}
      >
        <Header locale={locale} c={c} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} c={c} />
        <TextUsWidget locale={locale} c={c} />
        <StickyCallBar locale={locale} />
      </body>
    </html>
  );
}
