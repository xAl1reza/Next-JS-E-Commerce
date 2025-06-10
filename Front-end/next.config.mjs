/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false ,
  images: {
    remotePatterns: [new URL(`${process.env.API_PROTOCOL}://${process.env.API_HOSTNAME}/**`)],
  },
};

export default nextConfig;
