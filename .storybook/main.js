const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType }) {
    config.plugins.push(vanillaExtractPlugin());

    // return the customized config
    return config;
  },
};
