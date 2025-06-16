const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/tugasbesar2/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;