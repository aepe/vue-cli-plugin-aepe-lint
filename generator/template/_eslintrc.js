/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-02 10:12:53
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-02 16:19:11
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
            // plugins: ['plugin:vue/recommended'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: 'babel-eslint',
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
            },
            rules: {
                '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
                '@typescript-eslint/explicit-function-return-type': 'error',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/typedef': [
                    'error',
                    {
                        variableDeclaration: true,
                    },
                ],
            },
        },
    ],
    rules: {
        'prettier/prettier': 'error',
        'no-console': 'off',
        'array-callback-return': 'off',
    },
};
