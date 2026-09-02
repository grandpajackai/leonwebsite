import type { Config } from "tailwindcss";

// Design tokens use precise opacities (e.g. rgba(12,21,32,.66)) that fall
// outside Tailwind's default 0/5/10/20/25.../100 opacity-modifier scale, so
// the full 0-100 range is exposed here to make bare `/NN` modifiers
// (text-navy/66, bg-white/16, ...) resolve for any value used in the design.
const fullOpacityScale = Object.fromEntries(
  Array.from({ length: 101 }, (_, i) => [String(i), String(i / 100)])
);

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      opacity: fullOpacityScale,
      colors: {
        navy: "#0c1520",
        ink: "#12100b",
        amber: "#f2b21a",
        "amber-hover": "#ffc63c",
        gold: "#e6bb5c",
        "gold-deep": "#b8850c",
        paper: "#f7f5f1",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1400px",
      },
      borderRadius: {
        card: "10px",
        panel: "12px",
        btn: "7px",
        pill: "100px",
      },
      boxShadow: {
        "card-hover": "0 10px 26px rgba(12,21,32,.12)",
        "header-sticky": "0 2px 14px rgba(0,0,0,.18)",
        widget: "0 10px 26px rgba(12,21,32,.3)",
        "widget-open": "0 18px 44px rgba(12,21,32,.28)",
      },
      backgroundImage: {
        "stripe-light":
          "repeating-linear-gradient(135deg,#dedad2 0 7px,#e9e5de 7px 14px)",
        "stripe-dark":
          "repeating-linear-gradient(135deg,rgba(255,255,255,.10) 0 7px,rgba(255,255,255,.04) 7px 14px)",
      },
    },
  },
  plugins: [],
};

export default config;
