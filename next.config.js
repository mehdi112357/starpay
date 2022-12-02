/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    APP_URL: process.env.APP_URL,
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
