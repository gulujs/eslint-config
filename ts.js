module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:node/recommended',
    ...[
      './js',
      './rules/node',
      './rules/typescript'
    ].map(require.resolve)
  ],
  rules: {}
};
