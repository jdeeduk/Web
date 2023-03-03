/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'play.google.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
