const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    // Configures for antfu's config
    // Enable stylistic formatting rules
    // stylistic: true,

    // Or customize the stylistic rules
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
      semi: false, // 禁止使用分号
      trailingComma: 'none', // 禁止尾随逗号
    },

    // TypeScript and Vue are auto-detected, you can also explicitly enable them:
    typescript: true,
    vue: true,

    // Disable jsonc and yaml support
    jsonc: false,
    yaml: false,

    // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
    ignores: [
      // './fixtures',
      // ...globs
      'node_modules/*',
      'src-tauri/*',
      'build/*',
      'docs/*',
      'blog/*',
      'i18n/*',
      '**/*.js',
      'README.md'
    ],

    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: ['@docusaurus'],
        extends: ['plugin:@docusaurus/recommended'],
        rules: {
          '@docusaurus/string-literal-i18n-messages': 'error',
          '@docusaurus/no-untranslated-text': [
            'warn',
            {
              ignoredStrings: ['·', '—', '×'],
            },
          ],
          'style/comma-dangle': ['error', 'never'],
          'style/eol-last': ['error', 'never'],
          'style/noiundefinedunused-vars': ['error', 'never'],
          'style/quote-props': ['error', 'as-needed'],
          'style/jsx-quotes': 'off',
          'style/jsx-indent': 'off',
          'style/jsx-closing-tag-location': 'off',
          'ts/no-unsafe-assignment': 'off',
          'ts/no-var-requires': 'off',
          'ts/no-require-imports': 'off',
          'ts/strict-boolean-expressions': 'off',
          'vue/valid-attribute-name': 'off',
        },
      },
    ],
  },

  // From the second arguments they are ESLint Flat Configs
  // you can have multiple configs
  // {
  //   files: ['**/*.ts'],
  //   rules: {},
  // },
)