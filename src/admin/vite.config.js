const { mergeConfig } = require('vite');

module.exports = (config) => {
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
      dedupe: [
        '@codemirror/autocomplete',
        '@codemirror/commands',
        '@codemirror/lang-json',
        '@codemirror/language',
        '@codemirror/lint',
        '@codemirror/search',
        '@codemirror/state',
        '@codemirror/theme-one-dark',
        '@codemirror/view',
        '@lezer/common',
        '@lezer/highlight',
        '@lezer/lr',
      ],
    },
    optimizeDeps: {
      dedupe: [
        '@codemirror/autocomplete',
        '@codemirror/commands',
        '@codemirror/lang-json',
        '@codemirror/language',
        '@codemirror/lint',
        '@codemirror/search',
        '@codemirror/state',
        '@codemirror/theme-one-dark',
        '@codemirror/view',
        '@lezer/common',
        '@lezer/highlight',
        '@lezer/lr',
      ],
    },
  });
};
