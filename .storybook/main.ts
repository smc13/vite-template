module.exports = {
  stories: ['../packages/ui/**/*.stories.mdx', '../packages/ui/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true, // 👈 Disables telemetry
  },
  features: {
    storyStoreV7: true,
  },
}
