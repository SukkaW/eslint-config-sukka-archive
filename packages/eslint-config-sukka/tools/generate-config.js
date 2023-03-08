/* eslint-disable no-console -- Intended by using in CLI */

/* utility */
const picocolors = require('picocolors');
const { writeFileSync, mkdirSync } = require('fs');
const { Linter } = require('eslint');
const { deepmerge: createDeepMerge } = require('@fastify/deepmerge');
const deepmerge = createDeepMerge({
  all: true,
  mergeArray(options) {
    // overwrite instead of concatenating arrays
    return (target, source) => options.clone(source);
  }
});

const path = require('path');
const outputRoot = path.resolve(__dirname, '../dist');

/* sukka rules */
const sukkaBestPracticesRules = require('../src/config/best-practices');
const sukkaErrorRules = require('../src/config/error');
const sukkaEs6Rules = require('../src/config/es6');
const sukkaStyleRules = require('../src/config/style');
const sukkaVariablesRules = require('../src/config/variables');
const sukkaTypeScriptRules = require('../src/config/typescript');

// const septsEslintRules = require('../src/config/from-septs');
// const septsEslintTypeScriptRules = require('../src/config/from-septs-ts-only');

/* external rules */
const { default: typescriptESLintBuiltinRules } = require('@typescript-eslint/eslint-plugin/dist/rules');

/* sukka eslint config base */
const CONFIG_BASE_BASE = require('../src/base/base');
const CONFIG_BASE_NODE = require('../src/base/node');
const CONFIG_BASE_LEGACY = require('../src/base/legacy');
const CONFIG_BASE_TYPESCRIPT = require('../src/base/typescript');
const CONFIG_BASE_REACT = require('../src/base/react');

/* utility */
const eslintLinter = new Linter();

console.log('========== generate base.js ==========');

writeConfig(
  deepmerge(
    {
      rules: {
        ...sukkaBestPracticesRules,
        ...sukkaErrorRules,
        ...sukkaEs6Rules,
        ...sukkaStyleRules,
        ...sukkaVariablesRules
      }
    },
    CONFIG_BASE_BASE
  ),
  'base.js'
);

console.log('========== generate node.js ==========');

writeConfig(
  deepmerge(
    {
      rules: {
        ...sukkaBestPracticesRules,
        ...sukkaErrorRules,
        ...sukkaEs6Rules,
        ...sukkaStyleRules,
        ...sukkaVariablesRules
        // ...septsEslintRules
      }
    },
    CONFIG_BASE_NODE
  ),
  'node.js'
);

console.log('========== generate legacy.js ==========');

writeConfig(
  deepmerge(
    {
      rules: {
        ...sukkaBestPracticesRules,
        ...sukkaErrorRules,
        ...sukkaEs6Rules,
        ...sukkaStyleRules,
        ...sukkaVariablesRules
      }
    },
    CONFIG_BASE_LEGACY
  ),
  'legacy.js'
);

console.log('========== generate react.js ==========');

writeConfig(
  deepmerge(
    {
      rules: {
        ...sukkaBestPracticesRules,
        ...sukkaErrorRules,
        ...sukkaEs6Rules,
        ...sukkaStyleRules,
        ...sukkaVariablesRules
        // ...septsEslintRules
      }
    },
    CONFIG_BASE_REACT
  ),
  'react.js'
);

console.log('========== generate typescript.js ==========');

const TS_ESLINT_RULE_NAME_PREFIX = '@typescript-eslint/';
const MAX_RULE_NAME_LENGTH = Object.keys(typescriptESLintBuiltinRules).reduce(
  (acc, name) => Math.max(acc, name.length),
  0
);
const ESLINT_BASE_RULES_TO_BE_OVERRIDDEN = new Map(
  Object.entries(typescriptESLintBuiltinRules)
    .filter(([, rule]) => {
      return rule.meta.docs?.extendsBaseRule;
    })
    .map(
      ([ruleName, rule]) => [
        ruleName,
        typeof rule.meta.docs?.extendsBaseRule === 'string'
          ? rule.meta.docs?.extendsBaseRule
          : ruleName
      ]
    )
);

const generatedTsConfigRules = {
  ...sukkaBestPracticesRules,
  ...sukkaErrorRules,
  ...sukkaEs6Rules,
  ...sukkaStyleRules,
  ...sukkaVariablesRules,
  ...sukkaTypeScriptRules
  // ...septsEslintRules,
  // ...septsEslintTypeScriptRules
};

Object.entries(generatedTsConfigRules).forEach(([ruleName, ruleConfig]) => {
  if (ESLINT_BASE_RULES_TO_BE_OVERRIDDEN.has(ruleName)) {
    console.log(
      ruleName
        .padStart(TS_ESLINT_RULE_NAME_PREFIX.length + ruleName.length)
        .padEnd(TS_ESLINT_RULE_NAME_PREFIX.length + MAX_RULE_NAME_LENGTH),
      '=',
      picocolors.green('off')
    );
    generatedTsConfigRules[ruleName] = 'off';

    console.log(
      `${picocolors.dim(TS_ESLINT_RULE_NAME_PREFIX)}${ruleName.padEnd(MAX_RULE_NAME_LENGTH)}`,
      '=',
      ruleConfig === 'error'
        ? picocolors.red(ruleConfig)
        : picocolors.yellow(ruleConfig)
    );
    generatedTsConfigRules[`${TS_ESLINT_RULE_NAME_PREFIX}${ruleName}`] = ruleConfig;
  }

  if (ruleName === 'camelcase') {
    console.log(
      ruleName
        .padStart(TS_ESLINT_RULE_NAME_PREFIX.length + ruleName.length)
        .padEnd(TS_ESLINT_RULE_NAME_PREFIX.length + MAX_RULE_NAME_LENGTH),
      '=',
      picocolors.green('off')
    );
    generatedTsConfigRules.camelcase = 'off';
  }
});

console.log(
  'no-namespace'
    .padStart(TS_ESLINT_RULE_NAME_PREFIX.length + 'no-namespace'.length)
    .padEnd(TS_ESLINT_RULE_NAME_PREFIX.length + MAX_RULE_NAME_LENGTH),
  '=',
  picocolors.green(typescriptESLintBuiltinRules['no-namespace'])
);

console.log(
  `${picocolors.dim(TS_ESLINT_RULE_NAME_PREFIX)}${'no-namespace'.padEnd(MAX_RULE_NAME_LENGTH)}`,
  '=',
  picocolors.red('off')
);
generatedTsConfigRules[`${TS_ESLINT_RULE_NAME_PREFIX}no-namespace`] = 'off';

writeConfig(
  deepmerge(
    {
      rules: generatedTsConfigRules
    },
    CONFIG_BASE_TYPESCRIPT
  ),
  'typescript.js'
);

/* ==================== Utility Functions ==================== */

function addAutoGeneratedComment(code) {
  return [
    '// THIS CODE WAS AUTOMATICALLY GENERATED',
    '// DO NOT EDIT THIS CODE BY HAND',
    '// YOU CAN REGENERATE IT USING npm run build',
    '',
    code
  ].join('\n');
}

/**
 * Helper function writes configuration.
 */
function writeConfig(config, filePath) {
  const code = `module.exports = ${JSON.stringify(config)}`;

  const configStr = eslintLinter.verifyAndFix(
    addAutoGeneratedComment(code),
    CONFIG_BASE_NODE
  );

  mkdirSync(outputRoot, { recursive: true });
  writeFileSync(path.join(outputRoot, filePath), configStr.output);
}
