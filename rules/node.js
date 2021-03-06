module.exports = {
  rules: {
    // ---------------
    // Possible Errors
    // ---------------

    // require error handling in callbacks
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/handle-callback-err.md
    'node/handle-callback-err': ['error', 'err'],

    // ensure Node.js-style error-first callback pattern is followed
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-callback-literal.md
    'node/no-callback-literal': 'off',

    // disallow the assignment to exports
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md
    'node/no-exports-assign': 'error',

    // disallow import declarations which import extraneous modules
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
    'node/no-extraneous-import': 'error',

    // disallow require() expressions which import extraneous modules
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md
    'node/no-extraneous-require': 'error',

    // disallow import declarations which import non-existence modules
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
    'node/no-missing-import': 'error',

    // disallow require() expressions which import non-existence modules
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
    'node/no-missing-require': 'error',

    // disallow new operators with calls to require
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-new-require.md
    'node/no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-path-concat.md
    'node/no-path-concat': 'off',

    // disallow the use of process.exit()
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md
    'node/no-process-exit': 'warn',

    // disallow bin files that npm ignores
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
    'node/no-unpublished-bin': 'error',

    // disallow import declarations which import private modules
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
    'node/no-unpublished-import': 'error',

    // disallow require() expressions which import private modules
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
    'node/no-unpublished-require': 'error',

    // disallow unsupported ECMAScript built-ins on the specified version
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md
    'node/no-unsupported-features/es-builtins': 'error',

    // disallow unsupported ECMAScript syntax on the specified version
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules', 'dynamicImport'] }],

    // disallow unsupported Node.js built-in APIs on the specified version
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md
    'node/no-unsupported-features/node-builtins': 'error',

    // make process.exit() expressions the same code path as throw
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
    'node/process-exit-as-throw': 'error',

    // suggest correct usage of shebang
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
    'node/shebang': 'error',

    // --------------
    // Best Practices
    // --------------

    // disallow deprecated APIs
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
    'node/no-deprecated-api': 'error',

    // ----------------
    // Stylistic Issues
    // ----------------

    // require return statements after callbacks
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/callback-return.md
    'node/callback-return': 'off',

    // enforce either module.exports or exports
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
    'node/exports-style': 'off',

    // enforce the style of file extensions in import declarations
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md
    'node/file-extension-in-import': ['error', 'always'],

    // require require() calls to be placed at top-level module scope
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/global-require.md
    'node/global-require': 'error',

    // disallow require calls to be mixed with regular variable declarations
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-mixed-requires.md
    'node/no-mixed-requires': 'error',

    // disallow the use of process.env
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-env.md
    'node/no-process-env': 'error',

    // disallow specified modules when loaded by import declarations
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-import.md
    'node/no-restricted-import': 'off',

    // disallow specified modules when loaded by require
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-require.md
    'node/no-restricted-require': 'off',

    // disallow synchronous methods
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-sync.md
    'node/no-sync': 'off',

    // enforce either Buffer or require("buffer").Buffer
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md
    'node/prefer-global/buffer': ['error', 'always'],

    // enforce either console or require("console")
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md
    'node/prefer-global/console': ['error', 'always'],

    // enforce either process or require("process")
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md
    'node/prefer-global/process': ['error', 'always'],

    // enforce either TextDecoder or require("util").TextDecoder
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md
    'node/prefer-global/text-decoder': ['error', 'always'],

    // enforce either TextEncoder or require("util").TextEncoder
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md
    'node/prefer-global/text-encoder': ['error', 'always'],

    // enforce either URLSearchParams or require("url").URLSearchParams
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params.md
    'node/prefer-global/url-search-params': ['error', 'always'],

    // enforce either URL or require("url").URL
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md
    'node/prefer-global/url': ['error', 'always'],

    // enforce require("dns").promises
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md
    'node/prefer-promises/dns': 'error',

    // enforce require("fs").promises
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md
    'node/prefer-promises/fs': 'error'
  }
};
