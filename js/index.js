module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    '../rules/possible-problems',
    '../rules/suggestions',
    '../rules/layout-formatting',
    '../rules/deprecated'
  ].map(require.resolve),
  rules: {}
};
