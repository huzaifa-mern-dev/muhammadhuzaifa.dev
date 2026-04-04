/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─── Image Optimisation ───────────────────────────────────────────────────
  // Allow next/image to optimise images from these external domains.
  // Add domains here as you integrate project thumbnail hosting etc.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**', // allow any path under github.com
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // also usually needed for github pictures
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'www.vhv.rs', // also usually needed for github pictures
        pathname: '/**',
      },
    ],
  },

  // ─── Strict Mode ─────────────────────────────────────────────────────────
  // Highlights potential problems in development (double-invokes effects).
  reactStrictMode: true,

  // ─── Bundle Analyser (optional) ──────────────────────────────────────────
  // Uncomment and install @next/bundle-analyzer to inspect bundle sizes:
  // const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' });
  // module.exports = withBundleAnalyzer(nextConfig);
};

module.exports = nextConfig;
