/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/hb",
        destination: "198.13.51.27:8081/",
      },
    ];
  },
};
