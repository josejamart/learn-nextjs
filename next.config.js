module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.optimization.minimize = false;
        config.optimization.minimizer = [];
  
      // Important: return the modified config
      return config
    },
  }