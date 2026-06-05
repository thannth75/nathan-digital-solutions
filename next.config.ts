import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optionally disable SWC minification if memory is the issue
  // swcMinify: false,
};

export default nextConfig;
