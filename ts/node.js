module.exports = {
  extends: [
    'plugin:node/recommended',
    ...[
      '../ts',
      '../rules/node'
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
    ],
    'node/file-extension-in-import': [
      'error',
      'never',
      {
        tryExtensions: [
          '.js',
          '.json',
          '.node',
          '.ts'
        ]
      }
    ],
    'node/no-unpublished-import': [
      'error',
      {
        tryExtensions: [
          '.js',
          '.json',
          '.node',
          '.ts',
          '.d.ts'
        ]
      }
    ]
  }
};
