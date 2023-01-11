// THIS CODE WAS AUTOMATICALLY GENERATED
// DO NOT EDIT THIS CODE BY HAND
// YOU CAN REGENERATE IT USING npm run build

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:import/recommended'
  ],
  plugins: ['node', '@dimensiondev'],
  rules: {
    'accessor-pairs': 'off',
    'array-callback-return': ['error', { allowImplicit: true }],
    'block-scoped-var': 'error',
    'class-methods-use-this': ['error', { exceptMethods: [] }],
    curly: ['error', 'multi-line'],
    'default-case': ['error', { commentPattern: '^no default$' }],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': ['error', { allowKeywords: true }],
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
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
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
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false
      }
    ],
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
    'no-extra-parens': [
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
    'no-loss-of-precision': 'warn',
    'no-promise-executor-return': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable-loop': ['error', { ignore: [] }],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ],
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
    'no-useless-constructor': 'error',
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
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    camelcase: [
      'warn',
      {
        properties: 'never',
        ignoreDestructuring: false,
        ignoreImports: true,
        ignoreGlobals: true,
        allow: ['^UNSAFE_', '^experimental_', '^__DEV__']
      }
    ],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
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
    'func-call-spacing': ['error', 'never'],
    'function-paren-newline': ['error', 'consistent'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': [
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
    'linebreak-style': 'error',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ],
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
    'no-array-constructor': 'error',
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
    quotes: ['error', 'single'],
    'quote-props': [
      'error',
      'as-needed',
      { keywords: false, unnecessary: true, numbers: false }
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    semi: ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
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
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true }
    ],
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
    '@dimensiondev/array/no-unneeded-flat-map': 'error',
    '@dimensiondev/array/prefer-from': 'error',
    '@dimensiondev/browser/no-set-html': 'off',
    '@dimensiondev/browser/prefer-location-assign': 'warn',
    '@dimensiondev/jsx/no-template-literal': 'error',
    '@dimensiondev/jsx/no-unneeded-nested': 'error',
    '@dimensiondev/string/no-locale-case': 'warn',
    '@dimensiondev/string/no-simple-template-literal': 'error',
    '@dimensiondev/type/no-instanceof-wrapper': 'error',
    '@dimensiondev/unicode/no-bidi': 'warn',
    '@dimensiondev/unicode/no-invisible': 'warn',
    '@dimensiondev/ban-eslint-disable': ['error', 'allow-with-description'],
    '@dimensiondev/no-redundant-variable': 'error',
    '@dimensiondev/no-single-return': 'error',
    '@dimensiondev/no-top-level': 'warn',
    '@dimensiondev/no-unsafe-date': 'warn',
    '@dimensiondev/prefer-early-return': ['error', { maximumStatements: 10 }],
    '@dimensiondev/prefer-fetch': 'error',
    '@dimensiondev/prefer-timer-id': 'warn',
    strict: 'warn',
    'handle-callback-err': 'off',
    'no-buffer-constructor': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
    'node/no-deprecated-api': [
      'error',
      { ignoreModuleItems: ['url.parse', 'url.resolve'] }
    ]
  },
  env: { node: true, es6: true }
};
