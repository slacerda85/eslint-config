module.exports = {
  extends: ['standard', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'no-useless-constructor': 'off', // allow syntatic sugar
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
