/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ai-studio-assets.limewire.media',
          },
        ],
      },
};

export default nextConfig;
