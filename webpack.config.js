const commonConfig = require('./build-utils/webpack.common');
const webpackMerge = require('webpack-merge');

const addons = addonsArg => {
  const addons = [].concat.apply([], [addonsArg]).filter(Boolean);

  return addons.map(addonName => require(`./build-utils/addons/webpack.${addonName}.js`));
};

module.exports = (env = { env: 'prod' }) => {
  const envConfig = require(`./build-utils/webpack.${env.env}.js`);
  const mergedConfig = webpackMerge(commonConfig, envConfig, ...addons(env.addons));
  return mergedConfig;
};
