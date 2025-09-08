/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/website2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/website2/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;

module.exports = nextConfig;
