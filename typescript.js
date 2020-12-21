// THIS CODE WAS AUTOMATICALLY GENERATED
// DO NOT EDIT THIS CODE BY HAND
// YOU CAN REGENERATE IT USING npm run build

module.exports = {
  rules: {
    'accessor-pairs': 'off',
    'array-callback-return': ['error', { allowImplicit: true }],
    'block-scoped-var': 'error',
    'class-methods-use-this': ['error', { exceptMethods: [] }],
    curly: ['error', 'multi-line'],
    'default-case': ['error', { commentPattern: '^no default$' }],
    'default-case-last': 'error',
    'default-param-last': 'off',
    'dot-notation': 'off',
    'dot-location': ['error', 'property'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-constructor-return': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-native-reassign': 'off',
    'no-implicit-coercion': [
      'off',
      { boolean: false, number: true, string: true, allow: [] }
    ],
    'no-implicit-globals': 'off',
    'no-implied-eval': 'off',
    'no-invalid-this': 'off',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'off',
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated'
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.'
      }
    ],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-unmodified-loop-condition': 'off',
    'no-unused-expressions': 'off',
    'no-useless-call': 'off',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-regex-literals': 'error',
    radix: 'error',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
    yoda: 'error',
    'no-await-in-loop': 'error',
    'no-console': 'warn',
    'no-constant-condition': 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-extra-parens': 'off',
    'no-loss-of-precision': 'off',
    'no-unreachable-loop': ['off', { ignore: [] }],
    'no-unused-vars': 'off',
    'no-useless-backreference': 'error',
    'no-negated-in-lhs': 'off',
    'require-atomic-updates': 'off',
    'use-isnan': 'warn',
    'valid-jsdoc': 'off',
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'generator-star-spacing': ['error', { before: false, after: true }],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-duplicate-imports': 'off',
    'no-useless-constructor': 'off',
    'no-useless-rename': [
      'error',
      { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false }
    ],
    'no-var': 'warn',
    'object-shorthand': [
      'error',
      'always',
      { ignoreConstructors: false, avoidQuotes: true }
    ],
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: false, allowUnboundThis: true }
    ],
    'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
    'prefer-numeric-literals': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'error',
    'prefer-template': 'warn',
    'rest-spread-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'after'],
    'array-bracket-newline': ['off', 'consistent'],
    'array-element-newline': ['off', { multiline: true, minItems: 5 }],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': 'off',
    camelcase: 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false
        }
      }
    ],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': 'off',
    'eol-last': ['error', 'always'],
    'function-call-argument-newline': ['off', 'consistent'],
    'func-call-spacing': 'off',
    'function-paren-newline': ['error', 'consistent'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    indent: 'off',
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': 'off',
    'linebreak-style': 'error',
    'lines-between-class-members': 'off',
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List'
        ]
      }
    ],
    'new-parens': 'error',
    'no-array-constructor': 'off',
    'no-bitwise': 'warn',
    'no-multi-assign': ['error'],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'prefer-exponentiation-operator': 'error',
    'operator-linebreak': ['error', 'before'],
    quotes: 'off',
    semi: 'off',
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'space-before-blocks': 'error',
    'space-before-function-paren': 'off',
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'off',
    'space-unary-ops': [
      'error',
      { words: true, nonwords: false, overrides: {} }
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: { exceptions: ['-', '+'], markers: ['=', '!', '/'] },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'],
          balanced: true
        }
      }
    ],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'off',
    'no-label-var': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
      },
      { selector: 'function', format: ['camelCase', 'PascalCase'] },
      { selector: 'typeLike', format: ['PascalCase'] }
    ],
    '@typescript-eslint/default-param-last': 'off',
    '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-invalid-this': 'off',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false
      }
    ],
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false
      }
    ],
    '@typescript-eslint/no-loss-of-precision': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    '@typescript-eslint/no-duplicate-imports': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true }
    ],
    '@typescript-eslint/comma-dangle': 'error',
    '@typescript-eslint/comma-spacing': [
      'error',
      { before: false, after: true }
    ],
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true }
        }
      }
    ],
    '@typescript-eslint/lines-between-class-members': ['error', 'always'],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ],
    '@typescript-eslint/space-infix-ops': 'error',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true }
    ],
    '@typescript-eslint/no-namespace': 'off'
  },
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'constructor-super': 'off',
        'getter-return': 'off',
        'no-const-assign': 'off',
        'no-dupe-args': 'off',
        'no-dupe-class-members': 'off',
        'no-dupe-keys': 'off',
        'no-func-assign': 'off',
        'no-import-assign': 'off',
        'no-new-symbol': 'off',
        'no-obj-calls': 'off',
        'no-redeclare': 'off',
        'no-setter-return': 'off',
        'no-this-before-super': 'off',
        'no-undef': 'off',
        'no-unreachable': 'off',
        'no-unsafe-negation': 'off',
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'valid-typeof': 'off'
      }
    }
  ]
};
