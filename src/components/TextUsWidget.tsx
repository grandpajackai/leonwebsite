"use client";

import { useState } from "react";
import type { Locale, SiteContent } from "@/content/types";

const chatCopy: Record<
  Locale,
  { label: string; title: string; body: string; send: string }
> = {
  en: {
    label: "Text us",
    title: "Text us",
    body: "Leave your number and we’ll call you back. For an active emergency, calling is faster.",
    send: "Send",
  },
  es: {
    label: "Envíenos un mensaje",
    title: "Escríbanos",
    body: "Déjenos su número y le llamamos. Si es una emergencia activa, llamar es más rápido.",
    send: "Enviar",
  },
};

export default function TextUsWidget({
  locale,
  c,
}: {
  locale: Locale;
  c: SiteContent;
}) {
  const [open, setOpen] = useState(false);
  const chat = chatCopy[locale];

  return (
    <div className="fixed bottom-[22px] right-[22px] z-[60] flex flex-col items-end gap-2.5">
      {open && (
        <div className="w-[290px] overflow-hidden rounded-[14px] border border-navy/10 bg-white shadow-widget-open">
          <div className="flex items-center justify-between bg-navy px-[18px] py-4 text-white">
            <span className="font-sans text-[14.5px] font-bold leading-[1.2]">
              {chat.title}
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="font-sans text-[17px] leading-none text-white/60"
            >
              ×
            </button>
          </div>
          <div className="p-[18px]">
            <p className="mb-3.5 font-sans text-[13.5px] leading-[1.55] text-navy/70">
              {chat.body}
            </p>
            <input
              type="tel"
              placeholder={c.contactPage.fields.phone}
              className="mb-2.5 w-full rounded-btn border border-navy/22 bg-[#fdfdfc] px-[13px] py-3 text-[14.5px]"
            />
            <button className="w-full rounded-btn bg-amber py-[13px] text-center font-sans text-sm font-bold leading-none text-ink transition-colors hover:bg-amber-hover">
              {chat.send}
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2.5 rounded-pill bg-navy px-5 py-[15px] font-sans text-[14.5px] font-bold leading-none text-white shadow-widget transition-colors hover:bg-[#12222f]"
      >
        <span className="h-2 w-2 rounded-full bg-amber" />
        {chat.label}
      </button>
    </div>
  );
}
