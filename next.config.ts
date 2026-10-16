import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // The Docker image sets NEXT_OUTPUT=standalone to emit a self-contained server in
  // .next/standalone. Heroku and local builds use the regular output with `next start`.
  output: process.env.NEXT_OUTPUT === 'standalone' ? 'standalone' : undefined,
  // Dev only: lets a phone on the local network load the dev server's scripts. Without this,
  // pages load from this computer's network address but don't respond to taps. Update it if the
  // addresses change.
  allowedDevOrigins: ['192.168.4.36', '192.168.4.37'],
  experimental: {
    viewTransition: true
  },
  // About is now the home page; keep old /about links working. Temporary (307) so browsers don't
  // cache it, in case /about becomes its own page again.
  async redirects() {
    return [{source: '/about', destination: '/', permanent: false}];
  }
};

export default nextConfig;
