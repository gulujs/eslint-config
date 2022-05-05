module.exports = {
  extends: [
    'plugin:node/recommended',
    ...[
      '../ts',
      '../rules/node'
    ].map(require.resolve)
  ],
  rules: {
    'node/no-missing-import': 'off',
    'node/file-extension-in-import': 'off',
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
