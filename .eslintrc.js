module.exports = {
  root: true,
  ignorePatterns: '**/dist',
  overrides: [{
    files: ['*.js'],
    extends: './packages/eslint-config-sukka/dist/node.js',
    rules: {
      'no-unused-expressions': 'off',
      'node/no-extraneous-require': 'off',
      strict: 'off'
    },
    parserOptions: {
      ecmaVersion: 2021
    }
  }, {
    files: ['*.ts'],
    extends: './packages/eslint-config-sukka/dist/typescript.js',
    rules: {},
    parserOptions: {
      project: './tsconfig.json'
    }
  }]
};
