import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // All images are served from /public via static imports, so no remote
  // image hosts are allowed. Add specific hostnames under
  // images.remotePatterns if you ever load external images.
};

export default nextConfig;
