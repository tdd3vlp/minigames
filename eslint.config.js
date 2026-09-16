import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig(
  globalIgnores(['dist/']),
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  unicorn.configs.recommended,

  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
      },
    },
    linterOptions: {
      noInlineConfig: true,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  eslintConfigPrettier,
);
