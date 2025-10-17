/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [
    {
      source: "/",
      destination: "/from",
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
