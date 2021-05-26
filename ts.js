module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2018
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
  rules: {
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
    'node/no-missing-import': [
      'error',
      {
        tryExtensions: [
          '.js',
          '.json',
          '.node',
          '.ts'
        ]
      }
    ]
  }
};
