module.exports = {
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
