const bestPracticesRules = require('./rules/best-practices');
const errorRules = require('./rules/error');
const es6Rules = require('./rules/es6');
const styleRules = require('./rules/style');
const variablesRules = require('./rules/variables');

module.exports = {
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  plugins: ['node'],
  rules: {
    ...bestPracticesRules,
    ...errorRules,
    ...variablesRules,
    ...styleRules,
    ...es6Rules,

    // Strict Mode
    'strict': 'warn',

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

    'no-mixed-operators': 'error',

    // I still use them
    'node/no-deprecated-api': ['error', {
      'ignoreModuleItems': ['url.parse', 'url.resolve']
    }]
  },
  env: {
    node: true,
    es6: true
  }
};
