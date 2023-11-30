/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingIncludes: {
      '/': ['./node_modules/webr/**'],
    },
  },
}

module.exports = nextConfig
