/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    urlImports: ['http://localhost:3001'],
  },
}

module.exports = nextConfig
