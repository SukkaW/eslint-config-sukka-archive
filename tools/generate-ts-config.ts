import * as chalk from 'chalk';
import { writeFileSync } from 'fs';
import { Linter } from 'eslint';

import { format, resolveConfig } from 'prettier';
import * as eslintConfigSukka from '../node';

import { rules as eslintRecommendedRules } from 'eslint/conf/eslint-recommended';
import typescriptESLintBuiltinRules from '@typescript-eslint/eslint-plugin/dist/rules';
import { overrides as typescriptESLintBuiltinOverrides } from '@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended';

import * as sukkaBestPracticesRules from '../rules/best-practices';
import * as sukkaErrorRules from '../rules/error'
import * as sukkaEs6Rules from '../rules/es6'
import * as sukkaStyleRules from '../rules/style'
import * as sukkaVariablesRules from '../rules/variables'

interface LinterConfigRules {
  [name: string]: any
}

const eslintLinter = new Linter();
const prettierConfig = resolveConfig.sync(__dirname);

const SUKKA_RULES_ENTRIES = new Map(Object.entries({
  ...sukkaBestPracticesRules,
  ...sukkaErrorRules,
  ...sukkaEs6Rules,
  ...sukkaStyleRules,
  ...sukkaVariablesRules
}));

const RULE_NAME_PREFIX = '@typescript-eslint/';

const ESLINT_BASE_RULES_TO_BE_OVERRIDDEN = new Map(
  Object.entries(typescriptESLintBuiltinRules)
    .filter(([, rule]) => rule.meta.docs?.extendsBaseRule)
    .map(([ruleName, rule]) => [
      ruleName,
      typeof rule.meta.docs?.extendsBaseRule === 'string'
        ? rule.meta.docs?.extendsBaseRule
        : ruleName,
    ] as const)
);

const BASE_TS_CONFIG = {
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
  overrides: typescriptESLintBuiltinOverrides
}

const generatedTsConfigRules: LinterConfigRules = {
  ...sukkaBestPracticesRules,
  ...sukkaErrorRules,
  ...sukkaEs6Rules,
  ...sukkaStyleRules,
  ...sukkaVariablesRules
};

console.log('========== generate typescript.js ==========')

SUKKA_RULES_ENTRIES.forEach((ruleConfig, ruleName) => {
  if (ESLINT_BASE_RULES_TO_BE_OVERRIDDEN.has(ruleName)) {
    console.log(`${chalk.yellow('eslint:recommended')} ${chalk.green(ruleName)} needs to be overridden by ${chalk.yellow('plugin:@typescript-eslint/recommended')}`);

    generatedTsConfigRules[ruleName] = 'off';
    generatedTsConfigRules[`${RULE_NAME_PREFIX}${ruleName}`] = ruleConfig;
  }
});

// Handle "camelcase" seperatelly
console.log(`${chalk.yellow('eslint:recommended')} ${chalk.green('camelcase')} needs to be overridden mannually`);

generatedTsConfigRules.camelcase = 'off';
generatedTsConfigRules['@typescript-eslint/naming-convention'] = [
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
];

writeConfig({
  ...BASE_TS_CONFIG,
  rules: generatedTsConfigRules
}, 'typescript.js');

function addAutoGeneratedComment(code: string): string {
  return [
    '// THIS CODE WAS AUTOMATICALLY GENERATED',
    '// DO NOT EDIT THIS CODE BY HAND',
    '// YOU CAN REGENERATE IT USING npm run build',
    '',
    code,
  ].join('\n');
}

/**
 * Helper function writes configuration.
 */
function writeConfig(config, filePath: string): void {
  // note: we use `export =` because ESLint will import these configs via a commonjs import
  const code = `module.exports = ${JSON.stringify(config)}`;

  const configStr = eslintLinter.verifyAndFix(
    format(addAutoGeneratedComment(code), {
      parser: 'babel',
      ...prettierConfig
    }),
    eslintConfigSukka
  );

  writeFileSync(filePath, configStr.output);
}
