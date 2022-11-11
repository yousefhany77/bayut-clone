/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://bayut-api-v1:4000/:path*',
      },
    ]
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
