"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/types";

export default function LocaleSwitchLink({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);
  segments[0] = locale;
  const href = `/${segments.join("/")}`;

  return (
    <Link
      href={href}
      className="rounded-[5px] border border-white/25 px-2.5 py-2 font-mono text-[11px] font-semibold leading-none tracking-[.1em] text-white/60 transition-colors hover:border-amber hover:text-white"
    >
      {label}
    </Link>
  );
}
