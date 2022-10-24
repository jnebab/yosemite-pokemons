/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => [
    {
      source: "/api/v2/:path(.*)",
      destination: "https://pokeapi.co/api/v2/:path",
    },
  ],
};

module.exports = nextConfig;
