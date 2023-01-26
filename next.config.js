/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: () => [
    {
      source: "/",
      destination: "/from",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
