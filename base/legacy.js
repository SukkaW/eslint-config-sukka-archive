module.exports = {
  extends: ['eslint:recommended'],
  rules: {
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
