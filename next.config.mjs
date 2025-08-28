import mdx from "@next/mdx"
import createNextIntlPlugin from "next-intl/plugin"

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
})

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
  },
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  // Dokploy için gerekli
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

export default withNextIntl(withMDX(nextConfig))
