module.exports = {
  images: {
    domains: ['i.scdn.co'] // Spotify Album Art
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  }
};
