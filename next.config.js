/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://bayutapi.youssefhany.dev/:path*',
      },
    ]
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    formats: ["image/webp"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
