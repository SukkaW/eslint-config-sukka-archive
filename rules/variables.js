module.exports = {
  // disallow labels that share a name with a variable
  // https://eslint.org/docs/rules/no-label-var
  'no-label-var': 'error',

  // disallow use of variables before they are defined
  'no-use-before-define': ['error', { functions: true, classes: true, variables: true }]
};
