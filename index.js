module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'standard',
    "plugin:@typescript-eslint/strict-type-checked",
    "prettier"
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
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
    files: ['*.js', '*.jsx', '*.ts, *.tsx']
  },
}
