// Shared by every form on the site (contact page, text-us widget) — see
// the longer explanation in ContactForm.tsx for why this goes through
// Web3Forms rather than a backend of our own.
export const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitToWeb3Forms(formData: FormData): Promise<boolean> {
  if (!WEB3FORMS_ACCESS_KEY) return false;
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);
  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: formData });
    const result = await res.json();
    return !!result.success;
  } catch {
    return false;
  }
}
