"use client";

import { useState, type FormEvent } from "react";
import type { SiteContent } from "@/content/types";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/i18n";

const inputClass =
  "rounded-btn border border-navy/22 bg-[#fdfdfc] px-3.5 py-[13px] font-sans text-[15px] text-navy";
const labelClass =
  "flex flex-col gap-[7px] font-sans text-xs font-semibold leading-none text-navy";

// The site is a fully static export (no server anywhere), so form
// submission goes through Web3Forms — a free relay built for exactly
// this: a static site POSTs here, they forward it to the destination
// email tied to this access key. No account/backend of our own needed.
// Get a key at https://web3forms.com (just enter an email, no signup)
// and set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY. Until that's set, the form
// falls back to the old local-only "success" demo behavior so the site
// never looks broken in the meantime.
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type Status = "idle" | "submitting" | "sent" | "error";

const uiCopy = {
  en: {
    sending: "Sending…",
    errorPrefix: "Something went wrong sending that — please call us instead at",
    errorSuffix: "or try submitting again.",
  },
  es: {
    sending: "Enviando…",
    errorPrefix: "Algo salió mal al enviar esto — mejor llámenos al",
    errorSuffix: "o intente enviarlo de nuevo.",
  },
};

export default function ContactForm({ c }: { c: SiteContent }) {
  const [status, setStatus] = useState<Status>("idle");
  const [fileCount, setFileCount] = useState(0);
  const t = c.lang === "ES" ? uiCopy.es : uiCopy.en;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("sent");
      return;
    }

    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New request — leonroofingandrestoration.com");

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: formData });
      const result = await res.json();
      setStatus(result.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-panel border border-navy/12 bg-white px-10 py-14 text-center">
        <div className="mx-auto mb-5 h-11 w-11 rounded-full bg-amber" />
        <h2 className="m-0 mb-2.5 font-sans text-[26px] font-bold leading-[1.2] text-navy">
          {c.contactPage.sentTitle}
        </h2>
        <p className="m-0 mb-6 font-sans text-[15.5px] font-normal leading-[1.55] text-navy/66">
          {c.contactPage.sentBody}
        </p>
        <a
          href={PHONE_TEL}
          className="inline-block rounded-btn bg-navy px-[26px] py-[15px] font-sans text-base font-bold leading-none text-white"
        >
          {PHONE_DISPLAY}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-panel border border-navy/12 bg-white p-8"
    >
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <label className={labelClass}>
          {c.contactPage.fields.name}
          <input type="text" name="name" required className={inputClass} />
        </label>
        <label className={labelClass}>
          {c.contactPage.fields.phone}
          <input type="tel" name="phone" required className={inputClass} />
        </label>
        <label className={labelClass}>
          {c.contactPage.fields.email}
          <input type="email" name="email" className={inputClass} />
        </label>
        <label className={labelClass}>
          {c.contactPage.fields.address}
          <input type="text" name="address" className={inputClass} />
        </label>
        <label className={labelClass}>
          {c.contactPage.fields.damage}
          <select name="damage" className={inputClass}>
            {c.contactPage.damageOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          {c.contactPage.fields.when}
          <select name="when" className={inputClass}>
            {c.contactPage.whenOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          {c.contactPage.fields.carrier}
          <input type="text" name="carrier" className={inputClass} />
        </label>
        <label className={labelClass}>
          {c.contactPage.fields.claim}
          <input type="text" name="claim" className={inputClass} />
        </label>
        <label className={labelClass}>
          {c.contactPage.fields.role}
          <select name="role" className={inputClass}>
            {c.contactPage.roleOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          {c.contactPage.fields.callback}
          <select name="callback" className={inputClass}>
            {c.contactPage.callbackOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-[18px] flex flex-col gap-[7px] font-sans text-xs font-semibold leading-none text-navy">
        {c.contactPage.fields.photos}
        <span className="cursor-pointer rounded-[9px] border-[1.5px] border-dashed border-navy/28 bg-[#faf9f6] px-5 py-[26px] text-center font-sans text-[13.5px] font-normal leading-[1.5] text-navy/55 transition-colors hover:border-amber hover:bg-[#fffdf6]">
          {fileCount > 0
            ? `${fileCount} ${fileCount === 1 ? "photo" : "photos"} selected`
            : c.contactPage.dropNote}
          <input
            type="file"
            name="photos"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => setFileCount(e.target.files?.length ?? 0)}
          />
        </span>
      </label>

      {status === "error" && (
        <p className="m-0 mt-[18px] rounded-btn border border-red-200 bg-red-50 px-4 py-3 font-sans text-[13.5px] font-medium leading-[1.5] text-red-700">
          {t.errorPrefix}{" "}
          <a href={PHONE_TEL} className="font-bold underline">
            {PHONE_DISPLAY}
          </a>
          , {t.errorSuffix}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-[22px] w-full rounded-[8px] bg-amber py-[17px] text-center font-sans text-base font-bold leading-none text-ink transition-colors hover:bg-amber-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? t.sending : c.contactPage.submit}
      </button>
      <p className="m-0 mt-3.5 font-sans text-xs font-normal leading-[1.5] text-navy/50">
        {c.contactPage.privacy}
      </p>
    </form>
  );
}
