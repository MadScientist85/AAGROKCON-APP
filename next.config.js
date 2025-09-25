/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only include valid and necessary options
  reactStrictMode: true,
  swcMinify: true,
  // Remove experimental.lightningcss if it's causing issues
  experimental: {
    // Add any valid experimental features here
  },
  // Add any other valid configuration options here
};

// Use export default for ES modules
export default nextConfig;
