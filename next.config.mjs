/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/MySite-02',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
