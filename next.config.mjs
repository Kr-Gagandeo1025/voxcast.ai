/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ai-studio-assets.limewire.media',
          },{
            protocol: 'https',
            hostname: 'img.clerk.com',
          }
        ],
      },
};

export default nextConfig;
