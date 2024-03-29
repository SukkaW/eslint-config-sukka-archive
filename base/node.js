module.exports = {
  extends: ['eslint:recommended', 'plugin:n/recommended', 'plugin:import/recommended'],
  plugins: ['n', '@fluffyfox'],
  rules: {
    // Strict Mode
    strict: 'warn',

    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 'off',

    // disallow use of the Buffer() constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',

    // disallow use of new operator with the require function
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // disallow use of process.env
    'no-process-env': 'off',

    // disallow process.exit()
    'no-process-exit': 'off',

    // restrict usage of specified node modules
    'no-restricted-modules': 'off',

    // disallow use of synchronous methods (off by default)
    'no-sync': 'off',

    // I still use them
    'n/no-deprecated-api': ['error', {
      ignoreModuleItems: ['url.parse', 'url.resolve']
    }]
  },
  env: {
    node: true,
    es6: true
  }
};
