const { overrides: typescriptESLintBuiltinOverrides } = require('@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended');

module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  /**
   * This is a compatibility ruleset that:
   * - disables rules from eslint:recommended which are already handled by TypeScript.
   * - enables rules that make sense due to TS's typechecking / transpilation.
   */
  overrides: typescriptESLintBuiltinOverrides,
  rules: {}
};
