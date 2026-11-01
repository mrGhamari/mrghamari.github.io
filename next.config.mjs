/** @type {import('next').NextConfig} */
// Served from the root of https://mrghamari.github.io/ (a <user>.github.io repo),
// so no basePath is needed.
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
  trailingSlash: true,
  // One root layout per language (app/(en), app/(fa)), so the 404 page is
  // app/global-not-found.tsx.
  experimental: { globalNotFound: true },
};

export default nextConfig;
