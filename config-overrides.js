const rewirePostCSSNested = require('react-app-rewire-postcss-nested');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewirePostCSSNested(config, env);
  return config;
}