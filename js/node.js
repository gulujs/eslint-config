module.exports = {
  extends: [
    'plugin:node/recommended',
    ...[
      '../js',
      '../rules/node'
    ].map(require.resolve)
  ],
  rules: {}
};
