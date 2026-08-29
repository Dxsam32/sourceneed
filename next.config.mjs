import { legacyRedirects } from "./redirects/legacy-redirects.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return legacyRedirects.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
