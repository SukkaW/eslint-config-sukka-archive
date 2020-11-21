const bestPracticesRules = require('./rules/best-practices');
const errorRules = require('./rules/error');
const es6Rules = require('./rules/es6');
const styleRules = require('./rules/style');
const variablesRules = require('./rules/variables');

module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],

  rules: {
    ...bestPracticesRules,
    ...errorRules,
    ...variablesRules,
    ...styleRules,
    ...es6Rules,

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    'brace-style': 'off',
    '@typescript-eslint/brace-style': styleRules['brace-style'],

    // Replace Airbnb 'camelcase' rule with '@typescript-eslint/naming-convention'
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    camelcase: 'off',
    // The `@typescript-eslint/naming-convention` rule allows `leadingUnderscore` and `trailingUnderscore` settings. However, the existing `no-underscore-dangle` rule already takes care of this.
    '@typescript-eslint/naming-convention': [
      'warn',
      // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
      },
      // Allow camelCase functions (23.2), and PascalCase functions (23.8)
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase']
      },
      // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
      {
        selector: 'typeLike',
        format: ['PascalCase']
      }
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
    // The TypeScript version also adds 3 new options, all of which should be set to the same value as the base config
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': styleRules['comma-dangle'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': styleRules['comma-spacing'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': bestPracticesRules['dot-notation'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': styleRules['func-call-spacing'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    indent: 'off',
    '@typescript-eslint/indent': styleRules.indent,

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': styleRules['keyword-spacing'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': styleRules['lines-between-class-members'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': styleRules['no-array-constructor'],

    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': errorRules['no-extra-parens'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
    'no-implied-eval': 'off',
    'no-new-func': 'off',
    '@typescript-eslint/no-implied-eval': bestPracticesRules['no-implied-eval'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': bestPracticesRules['no-loop-func'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': bestPracticesRules['no-unused-expressions'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': errorRules['no-unused-vars'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': variablesRules['no-use-before-define'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': es6Rules['no-useless-constructor'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    quotes: 'off',
    '@typescript-eslint/quotes': styleRules.quotes,

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    semi: 'off',
    '@typescript-eslint/semi': styleRules.semi,

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': styleRules['space-before-function-paren']
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // The following rules are already checked (more thoroughly) by the TypeScript compiler
        // Some of the rules also fail in TypeScript files, for example: https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
        'constructor-super': 'off',
        'getter-return': 'off',
        'no-const-assign': 'off',
        'no-dupe-args': 'off',
        'no-dupe-class-members': 'off',
        'no-dupe-keys': 'off',
        'no-func-assign': 'off',
        'no-new-symbol': 'off',
        'no-obj-calls': 'off',
        'no-redeclare': 'off',
        'no-this-before-super': 'off',
        'no-undef': 'off',
        'no-unreachable': 'off',
        'no-unsafe-negation': 'off',
        'valid-typeof': 'off'
      }
    }
  ]
};
