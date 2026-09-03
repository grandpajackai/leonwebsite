// Runs after `next build` (output: "export"). Static hosts (GitHub Pages,
// Cloudflare Pages, S3, nginx-on-EC2, ...) have no server, so the
// locale-detect-and-redirect that used to live in middleware.ts has to
// happen as a plain static file instead:
//   - out/index.html   — the "/" route Next never generates on its own
//                         (only /en and /es exist), redirects by browser
//                         language, client-side.
//   - out/.nojekyll     — GitHub Pages runs everything through Jekyll by
//                         default, which ignores/breaks any path starting
//                         with "_" — including Next's own "_next/" asset
//                         folder. This file turns that off. Harmless on
//                         hosts that don't use Jekyll.
//   - out/CNAME          — tells GitHub Pages which custom domain to serve
//                          and auto-provision HTTPS for. Same
//                          NEXT_PUBLIC_SITE_URL / fallback pair as
//                          src/lib/seo.ts (duplicated, not imported — this
//                          plain Node script runs outside Next's TS/path-
//                          alias resolution).

import { writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(rootDir, "out");

if (!existsSync(outDir)) {
  console.error(`postbuild-static: ${outDir} does not exist — did "next build" run first?`);
  process.exit(1);
}

const redirectHtml = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Leon Roofing & Restoration</title>
<meta http-equiv="refresh" content="0; url=/en/">
<style>
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0c1520;font-family:Helvetica,Arial,sans-serif;color:#fff}
  .card{text-align:center;padding:32px}
  img{width:64px;height:auto;margin-bottom:16px}
  h1{font-size:20px;font-weight:800;letter-spacing:.08em;margin:0 0 4px}
  p{font-size:13px;color:rgba(255,255,255,.6);margin:0 0 20px}
  a{display:inline-block;margin:0 6px;padding:12px 22px;border-radius:7px;background:#f2b21a;color:#12100b;font-weight:700;text-decoration:none;font-size:14px}
</style>
<script>
  var lang = (navigator.language || "en").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  location.replace("/" + lang + "/");
</script>
</head>
<body>
<div class="card">
<img src="/assets/leon-lion-mark-900.png" alt="">
<h1>LEON ROOFING &amp; RESTORATION</h1>
<p>Redirecting… / Redirigiendo…</p>
<a href="/en/">English</a>
<a href="/es/">Español</a>
</div>
</body>
</html>
`;

writeFileSync(path.join(outDir, "index.html"), redirectHtml);
writeFileSync(path.join(outDir, ".nojekyll"), "");

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://leonroofingandrestoration.com";
const siteUrl = /^https?:\/\//.test(rawSiteUrl) ? rawSiteUrl : `https://${rawSiteUrl}`;
const host = new URL(siteUrl).hostname;
writeFileSync(path.join(outDir, "CNAME"), host + "\n");
console.log(`postbuild-static: wrote CNAME (${host})`);

console.log("postbuild-static: wrote index.html + .nojekyll");
