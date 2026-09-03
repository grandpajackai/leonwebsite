/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: no Node server anywhere (GitHub Pages today, plain
  // nginx-on-EC2 later if that's the move — both just serve files).
  output: "export",
  // Every route becomes a real directory + index.html (e.g.
  // en/services/water-extraction/index.html) instead of a bare
  // en/services/water-extraction.html — the least ambiguous, most
  // portable shape across static hosts.
  trailingSlash: true,
  images: {
    // next/image's on-demand resize API needs a live server, which a
    // static export doesn't have. This makes it emit plain <img
    // src="/assets/..."> pointing at the original file instead of the
    // (non-existent, on a static host) /_next/image optimizer route.
    unoptimized: true,
  },
};

export default nextConfig;
