const bestPracticesRules = require('./rules/best-practices');
const errorRules = require('./rules/error');
const es6Rules = require('./rules/es6');
const styleRules = require('./rules/style');
const variablesRules = require('./rules/variables');

module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    ...bestPracticesRules,
    ...errorRules,
    ...variablesRules,
    ...styleRules,
    ...es6Rules,

    'comma-dangle': ['error', 'never'],
    'prefer-numeric-literals': 'off',
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated'
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.'
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.'
    }],
    'no-var': 'off',
    'prefer-object-spread': 'off',
    strict: ['error', 'safe']
  },
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  }
};
