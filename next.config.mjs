/** @type {import('next').NextConfig} */
const nextConfig = {
  // Linting is a dev-only concern here; don't let ESLint block production builds.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
