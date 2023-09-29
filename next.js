// eslint config for next.js 

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'standard',
    "plugin:@typescript-eslint/strict-type-checked",
    "prettier"
    ],
  plugins: ["@typescript-eslint", "jsx-a11y", "prettier"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': ["error", {
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
    }],
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',    
  },
}