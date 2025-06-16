import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/<tugasbesar2>/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;