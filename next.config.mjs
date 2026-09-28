/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
