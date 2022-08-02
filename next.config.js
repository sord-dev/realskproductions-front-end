/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    INSTAGRAM_USER_TOKEN: process.env.INSTAGRAM_USER_TOKEN
  }
}

module.exports = nextConfig
