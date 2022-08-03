/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
<<<<<<< HEAD
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
=======
  env: {
    INSTAGRAM_USER_TOKEN: process.env.INSTAGRAM_USER_TOKEN
  }
}
>>>>>>> working

module.exports = nextConfig;
