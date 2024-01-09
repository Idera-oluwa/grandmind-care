/** @type {import('next').NextConfig} */
const nextConfig = {
   output: "export",
   images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/Images/**',
      }, 
      {
        protocol: 'https',
        hostname: 'grandmindcare.co.uk',
        port: '',
        pathname: '/Images/**',
      },
    ],
  },
   trailingSlash:true,
    experimental: {
      serverActions: true,
    },
  };

module.exports = nextConfig
