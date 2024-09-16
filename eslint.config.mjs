import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'no-console': 'warn',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'react/prop-types': 'off'
    }
  },
  // 排除文件
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'service/',
      'components/svgs/',
      'scripts/',
      'babel.config.js',
    ]
  }
];