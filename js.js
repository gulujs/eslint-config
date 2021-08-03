module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  extends: [
    './rules/possible-errors',
    './rules/best-practices',
    './rules/strict-mode',
    './rules/variables',
    './rules/stylistic-issues',
    './rules/ecmascript-6',
    './rules/deprecated'
  ].map(require.resolve),
  rules: {}
};
