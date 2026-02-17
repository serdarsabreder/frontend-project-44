import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      'node_modules/',
      'package-lock.json',
      'dist/',
      'build/'
    ]
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      // Пример правила (можно убрать, если не нужно)
      'no-console': 'off'
      'semi': ['error', 'always']
    }
  }
]);

