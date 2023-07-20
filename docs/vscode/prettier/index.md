## prettier

常用[配置](https://prettier.io/docs/en/configuration.html), 选择 `.js` 后缀的文件可写注释。

```javascript
// .prettierrc.js
module.exports = {
  printWidth: 120, //每行长度
  tabWidth: 2, // 缩进长度
  semi: false, // 行尾分号
  singleQuote: true, // 单引号
  htmlWhitespaceSensitivity: "ignore", // 忽略html中的空格，使用后行内元素可能会多出空格
  jsxSingleQuote: false, // jsx单引号
  bracketSpacing: true, // 花括号前后空格
  arrowParens: "always", // 箭头函数参数括号
  proseWrap: "always", // props换行，超出行宽折叠显示
};
```
