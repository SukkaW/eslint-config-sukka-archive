// This require only contains constants and will be processed by JSON.stringify anyway
// eslint-disable-next-line node/no-unpublished-require -- This will be bundled into the final output
const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  // disallow labels that share a name with a variable
  // https://eslint.org/docs/rules/no-label-var
  'no-label-var': 'error',

  // disallow use of variables before they are defined
  'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],

  'no-restricted-globals': [
    'error',
    {
      name: 'isFinite',
      message:
          'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite'
    },
    {
      name: 'isNaN',
      message:
          'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan'
    }
  ].concat(confusingBrowserGlobals),

  // disallow use of undefined when initializing variables
  'no-undef-init': 'error'
};
