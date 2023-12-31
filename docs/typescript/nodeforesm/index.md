本文参考这篇[文章](https://www.typescriptlang.org/docs/handbook/esm-node.html)。

### 抛出问题

在 nodejs 中使用[lowdb.js](https://github.com/typicode/lowdb)时会
有[问题](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)。

lowdb 只支持 esmodule。

node 的生态是构建在 commonjs 之上的，所以很多库都是 commonjs 的。

Node.js 中对 ESM 的支持现已在 Node.js 中实现。

```json
{
  "compilerOptions": {
    "module": "NodeNext" // 或 Node16
  }
}
```

这两个新模式带来了一些高级功能。

### package.json 新扩展 - type

此设置控制 `.js` 和 `.d.ts` 文件解释为 ES 模块或 CommonJS 模块

```json
{
  "type": "module" // "type"可以设置为"module"或"commonjs" (默认是"commonjs")
}
```

当设置为 "module" 时，

- `import` / `export` 和 顶层 `await` 将可以使用
- `import` 的文件扩展名不可省略
- imports might resolve differently from dependencies in node_modules
- 某些类似全局的值，如 `require()` 和 `__dirname` 不能直接使用
- CommonJS modules get imported under certain special rules
