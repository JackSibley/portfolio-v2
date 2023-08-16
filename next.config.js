/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/hb",

        destination: "https://198.13.51.27:8081",
      },
    ];
  },
};

module.exports = nextConfig;
