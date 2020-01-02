/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-02 10:13:22
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-01-02 10:23:51
 */
module.exports = {
    printWidth: 100, // 文稿的最大宽度
    tabWidth: 4, // 标签缩进的宽度
    useTabs: false, // 是否使用制表符
    semi: true, // 是否在每个语句末尾添加分号
    singleQuote: true, // 是否使用单引号
    quoteProps: 'as-needed', // 对象中的引号 as-needed | consistent | preserve
    jsxSingleQuote: true, // JSX中使用单引号
    trailingComma: 'all', // 是否增加尾随逗号 none | es5 | all
    bracketSpacing: true, // 对象括号旁内增加空格
    jsxBracketSameLine: false, // JSX语法 ">" 放在最后一行的末尾
    arrowParens: 'always', // 箭头函数参数是否有括号 always | avoid
    requirePragma: false, // 启用文件顶部注释来格式化文件 @prettier
    insertPragma: false, // 启用文件顶部插入标记来格式化文件 @format
    proseWrap: 'never', // 超过最大宽度处理代码 always | never | preserve
    htmlWhitespaceSensitivity: 'css', // HTML全局空格敏感度 css | strict | ignore
    vueIndentScriptAndStyle: true, // 是否缩进vue文件的script和style标签内容endOfLine
    endOfLine: 'lf', // 换行符 auto | lf | crlf | cr
};
