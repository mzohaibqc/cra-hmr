/* eslint-disable react-hooks/rules-of-hooks */
const { override, addBabelPlugin, addWebpackAlias, useBabelRc } = require('customize-cra');

// Import your eslint configuration here
const eslintConfig = require('./.eslintrc.js');

const useEslintConfig = (configRules) => (config) => {
  const updatedRules = config.module.rules.map((rule) => {
    // Only target rules that have defined a `useEslintrc` parameter in their options
    if (rule.use && rule.use.some((use) => use.options && use.options.useEslintrc !== void 0)) {
      const ruleUse = rule.use[0];
      const baseOptions = ruleUse.options;
      const baseConfig = baseOptions.baseConfig || {};
      const newOptions = {
        useEslintrc: false,
        ignore: true,
        baseConfig: { ...baseConfig, ...configRules },
      };
      ruleUse.options = newOptions;
      return rule;

      // Rule not using eslint. Do not modify.
    } else {
      return rule;
    }
  });

  config.module.rules = updatedRules;
  return config;
};

// Support environment -specific settings
const env = process.env.NODE_ENV;
const envs = {
  development: override(
    addBabelPlugin('react-hot-loader/babel'),
    addWebpackAlias({
      'react-dom': process.env.NODE_ENV === 'production' ? 'react-dom' : '@hot-loader/react-dom',
    }),
    useEslintConfig(eslintConfig), // Use your imported .eslintrc.js file here
    useBabelRc(),
  ),
  production: override(useBabelRc()),
};

module.exports = envs[env];
