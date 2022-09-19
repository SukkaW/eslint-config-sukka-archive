module.exports = {
  '@typescript-eslint/naming-convention': [
    'warn',
    {
      selector: 'variable',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
      leadingUnderscore: 'allowSingleOrDouble',
      trailingUnderscore: 'allowSingleOrDouble'
    },
    // Allow camelCase functions (23.2), and PascalCase functions (23.8)
    {
      selector: 'function',
      format: ['camelCase', 'PascalCase'],
      leadingUnderscore: 'allowSingleOrDouble',
      trailingUnderscore: 'allowSingleOrDouble'
    },
    // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
    {
      selector: 'typeLike',
      format: ['PascalCase'],
      leadingUnderscore: 'allowallowSingleOrDouble',
      trailingUnderscore: 'allowSingleOrDouble'
    }
  ],
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' }
  ],
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
  '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true, allowAny: true, allowBoolean: true }],
  '@typescript-eslint/unbound-method': 'error',
  '@typescript-eslint/prefer-includes': 'warn',
  '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports', disallowTypeAnnotations: true }],
  '@typescript-eslint/consistent-type-definitions': 'warn'
};
