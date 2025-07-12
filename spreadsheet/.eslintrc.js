module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier' // Add this only if you're using Prettier
  ],
  settings: {
    react: {
      version: 'detect' // 👈 This fixes the version warning
    }
  },
  rules: {
    // 👇 Optional: disable "assigned but only used as type" warning
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }]
  }
};
