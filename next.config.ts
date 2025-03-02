import withMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Extend your page extensions to include MDX
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // You can add other Next.js configurations here
}

export default withMDX({
  extension: /\.mdx?$/,
  // Optionally, you can add any MDX-specific configuration here
  // For example, you can set a remark or rehype plugin if needed.
  ...nextConfig
})