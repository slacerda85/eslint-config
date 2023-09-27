module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended','standard-with-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react'],
  rules: {
    'no-useless-constructor': 'off', // allow syntatic sugar
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        jsxSingleQuote: false,
        trailingComma: 'all',
        arrowParens: 'avoid',
        semi: false,
        printWidth: 80,
        useTabs: false,
        tabWidth: 2,
        endOfLine: 'lf',
        plugins: ['prettier-plugin-tailwindcss'],
      },
    ],
  },
}
