/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-02 10:12:53
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-06 18:47:58
 */
const path = require('path');
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:vue/essential', 'plugin:prettier/recommended'],
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
        ecmaFeatures: {
          legacyDecorators: true,
          jsx: true,
        },
      },
      rules: {
        'vue/singleline-html-element-content-newline': [
          'error',
          {
            ignoreWhenNoAttributes: true,
            ignoreWhenEmpty: true,
            ignores: ['pre', 'textarea'],
          },
        ],
        'vue/html-closing-bracket-newline': [
          'error',
          {
            singleline: 'never',
            multiline: 'always',
          },
        ],
        'vue/html-self-closing': [
          'error',
          {
            html: {
              void: 'never',
              normal: 'always',
              component: 'always',
            },
            svg: 'always',
            math: 'always',
          },
        ],
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
  settings: {},
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 打包时禁止debugger
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0, // 打包时禁止console
    'no-alert': process.env.NODE_ENV === 'production' ? 2 : 0, // 打包时禁止console
    'no-unused-vars': 1,
    'no-var': 1,
    'class-methods-use-this': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
};
