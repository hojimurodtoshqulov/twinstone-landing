import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local placeholder assets are SVG; allow next/image to optimize them.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
