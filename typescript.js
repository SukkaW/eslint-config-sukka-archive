// THIS CODE WAS AUTOMATICALLY GENERATED
// DO NOT EDIT THIS CODE BY HAND
// YOU CAN REGENERATE IT USING npm run build

module.exports = {
  plugins: ['@typescript-eslint', '@fluffyfox'],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
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
  ],
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
    'no-empty-static-block': 'error',
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
    'prefer-object-has-own': 'error',
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    radix: 'error',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
    yoda: 'error',
    'no-await-in-loop': 'warn',
    'no-console': 'warn',
    'no-constant-condition': 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-constant-binary-expression': 'error',
    'no-extra-parens': 'off',
    'no-loss-of-precision': 'off',
    'no-promise-executor-return': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable-loop': ['error', { ignore: [] }],
    'no-unused-vars': 'off',
    'no-unused-private-class-members': 'error',
    'no-useless-backreference': 'error',
    'no-negated-in-lhs': 'off',
    'require-atomic-updates': 'off',
    'use-isnan': 'warn',
    'valid-jsdoc': 'off',
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'no-new-native-nonconstructor': 'error',
    'arrow-spacing': ['error', { before: true, after: true }],
    'generator-star-spacing': ['error', { before: false, after: true }],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-duplicate-imports': 'off',
    'no-restricted-exports': [
      'error',
      { restrictedNamedExports: ['default', 'then'] }
    ],
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
    'block-spacing': 'off',
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
    'key-spacing': 'off',
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
    'no-lonely-if': 'error',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['**', '+'],
          ['**', '-'],
          ['**', '*'],
          ['**', '/'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['%', '**'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: true
      }
    ],
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
    'quote-props': [
      'error',
      'as-needed',
      { keywords: false, unnecessary: true, numbers: false }
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    semi: 'off',
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'space-before-blocks': 'off',
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
      },
      'addEventListener',
      'blur',
      'close',
      'closed',
      'confirm',
      'defaultStatus',
      'defaultstatus',
      'event',
      'external',
      'find',
      'focus',
      'frameElement',
      'frames',
      'history',
      'innerHeight',
      'innerWidth',
      'length',
      'location',
      'locationbar',
      'menubar',
      'moveBy',
      'moveTo',
      'name',
      'onblur',
      'onerror',
      'onfocus',
      'onload',
      'onresize',
      'onunload',
      'open',
      'opener',
      'opera',
      'outerHeight',
      'outerWidth',
      'pageXOffset',
      'pageYOffset',
      'parent',
      'print',
      'removeEventListener',
      'resizeBy',
      'resizeTo',
      'screen',
      'screenLeft',
      'screenTop',
      'screenX',
      'screenY',
      'scroll',
      'scrollbars',
      'scrollBy',
      'scrollTo',
      'scrollX',
      'scrollY',
      'self',
      'status',
      'statusbar',
      'stop',
      'toolbar',
      'top'
    ],
    'no-undef-init': 'error',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble'
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble'
      }
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' }
    ],
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false }
    ],
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNumber: true, allowAny: true, allowBoolean: true }
    ],
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'separate-type-imports'
      }
    ],
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/consistent-type-definitions': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'comma', requireLast: false },
        singleline: { delimiter: 'comma', requireLast: false }
      }
    ],
    '@typescript-eslint/consistent-generic-constructors': [
      'error',
      'constructor'
    ],
    '@typescript-eslint/no-base-to-string': [
      'error',
      { ignoredTypeNames: ['Error', 'RegExp', 'URL', 'URLSearchParams'] }
    ],
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-dynamic-delete': 'warn',
    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        allowConstructorOnly: true,
        allowEmpty: true,
        allowWithDecorator: true
      }
    ],
    '@typescript-eslint/no-invalid-void-type': [
      'error',
      { allowInGenericTypeArguments: true, allowAsThisParameter: true }
    ],
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-literal-enum-member': [
      'error',
      { allowBitwiseExpressions: true }
    ],
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-return-this-type': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/unified-signatures': [
      'error',
      { ignoreDifferentlyNamedParameters: true }
    ],
    '@fluffyfox/array/no-unneeded-flat-map': 'error',
    '@fluffyfox/array/prefer-from': 'error',
    '@fluffyfox/browser/no-set-html': 'off',
    '@fluffyfox/browser/prefer-location-assign': 'warn',
    '@fluffyfox/jsx/no-template-literal': 'error',
    '@fluffyfox/jsx/no-unneeded-nested': 'error',
    '@fluffyfox/string/no-locale-case': 'warn',
    '@fluffyfox/string/no-simple-template-literal': 'error',
    '@fluffyfox/type/no-instanceof-wrapper': 'error',
    '@fluffyfox/unicode/no-bidi': 'warn',
    '@fluffyfox/unicode/no-invisible': 'warn',
    '@fluffyfox/ban-eslint-disable': ['error', 'allow-with-description'],
    '@fluffyfox/no-redundant-variable': 'error',
    '@fluffyfox/no-single-return': 'error',
    '@fluffyfox/no-top-level': 'off',
    '@fluffyfox/prefer-early-return': ['error', { maximumStatements: 10 }],
    '@fluffyfox/prefer-fetch': 'error',
    '@fluffyfox/prefer-timer-id': 'warn',
    '@fluffyfox/browser/prefer-dataset': 'off',
    '@fluffyfox/browser/prefer-event-target': 'warn',
    '@fluffyfox/browser/prefer-keyboard-event-key': 'warn',
    '@fluffyfox/browser/prefer-modern-dom-apis': 'error',
    '@fluffyfox/browser/prefer-text-content': 'warn',
    '@fluffyfox/string/no-unneeded-to-string': 'error',
    '@fluffyfox/type/no-force-cast-via-top-type': 'error',
    '@fluffyfox/type/no-wrapper-type-reference': 'error',
    '@fluffyfox/no-default-error': 'warn',
    '@fluffyfox/no-unsafe-date': 'warn',
    '@typescript-eslint/default-param-last': 'error',
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
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ],
    '@typescript-eslint/no-duplicate-imports': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/block-spacing': ['error', 'always'],
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true }
    ],
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/comma-spacing': [
      'error',
      { before: false, after: true }
    ],
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/key-spacing': [
      'error',
      { beforeColon: false, afterColon: true }
    ],
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
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/space-before-blocks': 'error',
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
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'] },
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.mjs',
          '.cjs',
          '.ts',
          '.tsx',
          '.mts',
          '.cts',
          '.d.ts'
        ]
      },
      typescript: { alwaysTryTypes: true }
    }
  }
};
