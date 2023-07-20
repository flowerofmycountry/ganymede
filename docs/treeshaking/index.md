## tree-shaking

**_Tree-shaking (摇树)_** 是一个术语，通常指通过打包工具"摇"我们的代码，将未引用代码 (Dead Code) "摇" 掉。在打包工具构建的项目中，都有一个入口文件，相当于一棵树的主干，入口文件有很多依赖的模块，相当于树枝，虽然依赖了某些模块，但其实只使用其中的某些方法，通过 Tree Shaking ，将没有使用的方法摇掉，这样来达到删除无用代码的目的。

tree-shaking 虽然能够消除无用代码，但仅针对 ES6 模块语法，因为 ES6 模块采用的是静态分析，从字面量对代码进行分析。对于必须执行到才知道引用什么模块的 CommonJS 动态分析模块他就束手无策了。

例如下面代码：

```js
let myModlue = null;
if (Math.random() > 0.5) {
  myModlue = require("a");
} else {
  myModlue = require("b");
}
```

请问此时哪个模块用到了，哪个模块没用到？

不过我们可以通过插件支持 CommonJS 转 ES6 然后实现 tree-shaking。

treeshake 大概是这样：

1. 模块解析
2. 标记代码或模块是否可 Tree-shaking
3. 去除无用代码或模块
4. 通过 chunks 生成代码(字符串)并写入文件

## SideEffect（副作用）

**_sideEffetcs（package.json 配置项）_** 作用于整个模块，它不会分析整个模块内部的代码是否具有副作用：

当你对模块设置了 `"sideEffects": false`，就表明这个模块没有副作用，相当于告诉 Webpack：喂！我没有副作用啊，如果我的导出值没有被别的模块使用那就请把我清除掉吧！

当你对模块设置了 `"sideEffects": true`，就表明这个模块有副作用，相当于告诉 Webpack：喂！我有副作用啊，就算我没有被别的模块导入（指导出值被使用）也不要把我清除啊！

也就是说，只要你的包不是用来做 **_polyfill_** 之类的事情，就尽管放心的给他加上 `sideEffects: false` 吧！

:::info
polyfill 举个例子，老浏览器不支持 Map， `new Map()`会报错，那么我就用 Object 的方式实现一个 Map 的构造函数，那么再`new Map()`就不会报错了。
:::

因此，对于 CSS 文件，需要使用 `sideEffects: ['css文件路径']` 标记所有 CSS 文件，来保留所有 CSS 文件，以及对 CSS 文件的导入语句。

如果你仍想对 CSS 文件使用 `"sideEffects: false"`，并且想保留这个 CSS 文件，可以这样：

```js
import styleeee from "./style.css";
console.log(styleeee);
```

这样的话，CSS 文件的导出值（默认导出值）被消费，Terser 就不会将其 shake 掉。

还有 **_optimization.usedExports（webpack 配置项）_**，开启后利用 `/*#__PURE__*/` 注释标记一个 **_函数调用_** 不存在副作用，让 webpack 放心 **_“摇”_** 起来

参考 [webpack tree-shaking 文档](https://webpack.docschina.org/guides/tree-shaking/)。

在 rollup 中，通过 [treeshake 配置](https://rollupjs.org/configuration-options/#treeshake)项来控制 treeshake。

## 按需导入

假如你的开发环境使用了 npm 或者 yarn 等包管理工具，并且使用 webpack，rollup 等打包工具进行构建，你所引入的大型类库，组件库都可使用 tree-shaking 特性只打包需要的模块以减少包体积。

随便来几个相关按需导入介绍：[arco design](https://arco.design/vue/docs/start), [ElementPlus UI](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5), [Echarts](https://echarts.apache.org/handbook/zh/basics/import)等。

大多 UI 组件库会提供两种按需导入方式：

1. 自动导入
   所有工作有插件完成。
2. 手动导入
   组件的导入手动完成，样式的导入由插件完成。
