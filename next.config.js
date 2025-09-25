/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['@prisma/client', 'prisma'],
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
