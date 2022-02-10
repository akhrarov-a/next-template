const merge = require('webpack-merge').default;

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  webpack: config =>
    merge(config, {
      resolve: {
        alias: {
          '@styles': '/src/styles'
        }
      }
    })
};
