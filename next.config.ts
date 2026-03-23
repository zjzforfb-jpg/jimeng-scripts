import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/jimeng-scripts',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
