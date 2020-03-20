<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-02 09:34:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-20 15:07:39
 -->

# vue-cli-plugin-aepe-lint

## 使用须知

> 本 vue-cli 插件 适用于 vscode 编辑器
>
> 1. 在 vue 项目中使用 `vue add vue-cli-plugin-aepe-lint` 安装组件。
> 2. 为了保证良好的使用条件 请在 vscode 上需要安装 `prettier` 插件
> 3. 该项目优化了 commit 的样式，请按照如下标准进行 commit

## 在 vuecli3.0+ 项目中安装

```bash
vue add aepe-lint
```

## 在 vuecli3.0+ 项目中的使用方式

### 格式化代码

```bash
yarn prettier
yarn eslint:fix
```

## `git commit` 操作

> 如果 git 需要按照文件进行 commit 请使用 `git add src/*/.*` 后进行 `yarn commit`

```js
yarn commit // git commit 操作请使用
yarn gd// 代替git add .
```
