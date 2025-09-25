/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@supabase/supabase-js"],
  },
  images: {
    domains: ["api.sam.gov"],
  },
  // Remove invalid options:
  // - swcMinify
  // - cssLoaderOptions
  // - transpilePackages
};

module.exports = nextConfig;

