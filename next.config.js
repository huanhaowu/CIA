const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  experimental: {
    serverActions: true
  }
})


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
