module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  rules: {
    semi: 0,
    'react-hooks/exhaustive-deps': 0,
    'react-native/no-inline-styles': 0,
    eqeqeq: 0,
    '@typescript-eslint/no-unused-vars': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', orderImportKind: 'asc' },
      },
    ],
  },
}
