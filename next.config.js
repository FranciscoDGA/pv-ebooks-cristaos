/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com', 'images.unsplash.com'],
    unoptimized: true,
  },
  reactStrictMode: true,
  basePath: '',
  output: 'standalone',
};

module.exports = nextConfig;
