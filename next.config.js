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
  // Disable routes for separate pages to force all navigation to stay on the main page
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/experience',
        destination: '/#experience',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/#contact',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
