module.exports = {
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
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' }
  ],
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-call': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true, allowAny: true, allowBoolean: true }],
  '@typescript-eslint/unbound-method': 'error',
  '@typescript-eslint/prefer-includes': 'warn',
  '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports', disallowTypeAnnotations: true }]
};
