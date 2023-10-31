const merge = require('webpack-merge').default;

/**
 * Load config from .json in config directory
 */
const loadConfigs = stage => require(`./config/${stage}.json`);

/**
 * Is production env
 */
const production = process.env.NODE_ENV === 'production';

/**
 * Build stage
 */
const stage = process.env.STAGE_NAME || 'dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: merge(loadConfigs(stage), production ? {} : loadConfigs('local')),
  reactStrictMode: true,

  webpack: config =>
    merge(config, {
      resolve: {
        alias: {
          '@styles': '/src/styles',
          '@img': '/public/img'
        }
      }
    })
};

module.exports = nextConfig;
