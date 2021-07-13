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
    'max-len': [
      'warn',
      {
        code: 160,
        tabWidth: 4,
        ignoreComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
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
