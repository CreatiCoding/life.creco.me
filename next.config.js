/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => {
    return require("./next.rewrites.json");
  },
};

module.exports = nextConfig;
