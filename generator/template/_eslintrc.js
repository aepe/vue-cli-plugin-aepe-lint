/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-02 10:12:53
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-06 14:02:47
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'plugin:vue/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 8,
        ecmaFeatures: {
          legacyDecorators: true,
          jsx: true,
        },
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        experimentalDecorators: true,
        ecmaFeatures: {
          legacyDecorators: true,
        },
      },
      rules: {
        '@typescript-eslint/semi': ['error'],
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/explicit-function-return-type': 0,
      },
    },
  ],
  rules: {
    'no-console': 'off',
    'array-callback-return': 'off',
    'vue/singleline-html-element-content-newline': 0,
    'prettier/prettier': 0,
    'import/newline-after-import': 0,
  },
};
