/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true, // обязательно для App Router
  },
};

export default nextConfig;
