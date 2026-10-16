import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // The Docker image sets NEXT_OUTPUT=standalone to emit a self-contained server in
  // .next/standalone. Heroku and local builds use the regular output with `next start`.
  output: process.env.NEXT_OUTPUT === 'standalone' ? 'standalone' : undefined,
  experimental: {
    viewTransition: true
  }
};

export default nextConfig;
