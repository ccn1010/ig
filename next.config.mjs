/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'scontent-hkg1-2.cdninstagram.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
