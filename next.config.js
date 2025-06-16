/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // ✅ this enables static export
  basePath: '/tugasbesar2',     // ✅ name of your GitHub repo
  assetPrefix: '/tugasbesar2',
  images: {
    unoptimized: true           // ✅ required to make <Image> work with export
  }
};

module.exports = nextConfig;