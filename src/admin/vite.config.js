const path = require('node:path');
const { mergeConfig } = require('vite');

const CODEMIRROR_SINGLETONS = [
  '@codemirror/autocomplete',
  '@codemirror/commands',
  '@codemirror/lang-json',
  '@codemirror/language',
  '@codemirror/lint',
  '@codemirror/search',
  '@codemirror/state',
  '@codemirror/theme-one-dark',
  '@codemirror/view',
  '@uiw/codemirror-extensions-basic-setup',
  '@uiw/react-codemirror',
  '@lezer/common',
  '@lezer/highlight',
  '@lezer/lr',
  '@lezer/json',
  'codemirror',
  'crelt',
  'style-mod',
];

const resolveFromDesignSystem = (moduleName) => {
  const designSystemRoot = path.dirname(require.resolve('@strapi/design-system/package.json'));

  return require.resolve(moduleName, { paths: [designSystemRoot] });
};

const singletonAliases = Object.fromEntries(
  CODEMIRROR_SINGLETONS.map((moduleName) => [moduleName, resolveFromDesignSystem(moduleName)])
);

module.exports = (config) => {
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
        ...singletonAliases,
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
        '@uiw/codemirror-extensions-basic-setup',
        '@uiw/react-codemirror',
        '@lezer/common',
        '@lezer/highlight',
        '@lezer/json',
        '@lezer/lr',
        'codemirror',
        'crelt',
        'style-mod',
      ],
    },
    optimizeDeps: {
      include: CODEMIRROR_SINGLETONS,
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
        '@uiw/codemirror-extensions-basic-setup',
        '@uiw/react-codemirror',
        '@lezer/common',
        '@lezer/highlight',
        '@lezer/json',
        '@lezer/lr',
        'codemirror',
        'crelt',
        'style-mod',
      ],
    },
  });
};
