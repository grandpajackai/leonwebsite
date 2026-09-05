"use client";

import { useState, type FormEvent } from "react";
import type { Locale, SiteContent } from "@/content/types";
import { submitToWeb3Forms } from "@/lib/forms";

type Status = "idle" | "submitting" | "sent" | "error";

const chatCopy: Record<
  Locale,
  {
    label: string;
    title: string;
    body: string;
    send: string;
    sending: string;
    sentTitle: string;
    sentBody: string;
    error: string;
  }
> = {
  en: {
    label: "Text us",
    title: "Text us",
    body: "Leave your number and we'll call you back. For an active emergency, calling is faster.",
    send: "Send",
    sending: "Sending…",
    sentTitle: "Got it!",
    sentBody: "We'll call you back shortly.",
    error: "Something went wrong — please call us instead.",
  },
  es: {
    label: "Envíenos un mensaje",
    title: "Escríbanos",
    body: "Déjenos su número y le llamamos. Si es una emergencia activa, llamar es más rápido.",
    send: "Enviar",
    sending: "Enviando…",
    sentTitle: "¡Listo!",
    sentBody: "Le llamaremos en breve.",
    error: "Algo salió mal — mejor llámenos.",
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
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const chat = chatCopy[locale];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData();
    formData.append("phone", phone);
    formData.append("subject", "New text-us request — leonroofingandrestoration.com");
    const success = await submitToWeb3Forms(formData);
    setStatus(success ? "sent" : "error");
  }

  return (
    <div className="fixed bottom-[78px] right-4 z-[60] flex flex-col items-end gap-2.5 lg:bottom-[22px] lg:right-[22px]">
      {open && (
        <div className="w-[290px] max-w-[calc(100vw-32px)] overflow-hidden rounded-[14px] border border-navy/10 bg-white shadow-widget-open">
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
            {status === "sent" ? (
              <div className="text-center">
                <div className="mx-auto mb-3 h-8 w-8 rounded-full bg-amber" />
                <p className="m-0 mb-1 font-sans text-[14.5px] font-bold leading-[1.3] text-navy">
                  {chat.sentTitle}
                </p>
                <p className="m-0 font-sans text-[13.5px] leading-[1.5] text-navy/70">
                  {chat.sentBody}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p className="mb-3.5 font-sans text-[13.5px] leading-[1.55] text-navy/70">
                  {chat.body}
                </p>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={c.contactPage.fields.phone}
                  className="mb-2.5 w-full rounded-btn border border-navy/22 bg-[#fdfdfc] px-[13px] py-3 text-[14.5px]"
                />
                {status === "error" && (
                  <p className="m-0 mb-2.5 font-sans text-[12.5px] font-medium leading-[1.4] text-red-600">
                    {chat.error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-btn bg-amber py-[13px] text-center font-sans text-sm font-bold leading-none text-ink transition-colors hover:bg-amber-hover disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? chat.sending : chat.send}
                </button>
              </form>
            )}
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
