/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["es-MX"],
    defaultLocale: "es-MX",
  },
};

module.exports = {
  env: {
      mongodburl: "mongodb://localhost:27017/bhdb",
  }
};