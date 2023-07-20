## tsconfig.json

1. files - 设置要编译的文件的名称；
2. include - 设置需要进行编译的文件，支持路径模式匹配；
3. exclude - 设置无需进行编译的文件，支持路径模式匹配；
4. compilerOptions - 设置与编译流程相关的选项。

```javascript
{
  "compilerOptions": {

    "incremental": true,                // 增量编译
    "tsBuildInfoFile": "./buildFile",   // 增量编译文件的存储位置
    "diagnostics": true,                // 打印编译信息

    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": ["DOM","ES2020"],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 解析非相对模块的基地址，默认为当前目录
    "paths": {
      "jquery": ["node_modules/jquery/dist/jquery.slim.min.js"]
    },                           // 路径映射，相对于 baseUrl。比如示例中我们想引入 jquery 精简版本，可以制定它的相对路径。
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 设置声明文件目录，默认 node_modules/@types
    "types": [],                           // 这是声明文件包，如果设置了某一个声明文件，那么编译器只会加载这个声明文件。
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
  }
}

```

## 声明文件

1. 当前编译上下文找该变量的定义，以及 tsconfig.json 中的 lib 配置。
2. 变量所在模块的 index.d.ts 声明文件中查找（或其 package.json 中 types 字段指向文件）
3. 通常由 npm 包的维护者提供 node_modules/@types/npm 包名 查找声明。
   通常由社区提供，以@types/开头的声明文件，如：npm install @types/jquery
4. 通过配置文件 tsconfig.json 中的 typeRoots 和 types 字段指向的其他目录

声明文件的编写，根据原库的模块方式分好多情况，可参考[官网](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)。

> <b><font color="#26c6da">TypeScript 与 ECMAScript 2015 一样，任何包含顶级 import 或者 export 的文件（包括 `.d.ts`）都被当成一个模块。相反地，如果一个文件不带有 <font color="red">顶级</font> 的 import 或者 export 声明，那么它的内容被视为全局可见的（因此对模块也是可见的）。如果有 `import`、`export` 语法，又想定义全局类型，这时候就要手动 declare global 。</font></b>

用 vite 构建的项目中会有 env.d.ts 这个声明文件。这个声明文件可以让 ts 代码识别 vue 文件。如果我们在其中自己加入了 `import`、`export` 语法，那么这个定义便不是全局的了，会失效。

其中三斜线指令也是为了保证该定义在全局，如果用 import 导入，那么这个定义便不是全局的了，会失效。

```typescript
/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";

  const component: DefineComponent<{}, {}, any>;
  export default component; // 这里有 export, 但不是顶级的，所以是全局可见的
}
```

arco-design-vue 中有 [component.ts](https://github.com/arco-design/arco-design-vue/blob/main/packages/web-vue/components/components.ts) 这个文件（编译后会产生声明文件）。其中的 `export {}` 让文件成为一个模块。如果类型声明在模块之外，该声明会覆盖而不是扩充原本的类型 。

```typescript
// component.ts
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    AAffix: typeof import("@arco-design/web-vue")["Affix"];
    AAlert: typeof import("@arco-design/web-vue")["Alert"];
  }
}

export {}; // 这里的导出是为了让这个文件成为一个模块，而不是全局的
```

上面这个文件编译后生成 component.d.ts。因为有 `export {}`，所以 typescript 会找已有的 "@vue/runtime-core" 模块尝试合并。如果找不到，这个文件则毫无意义。因为文件本身是个模块，"@vue/runtime-core" 这个模块在文件模块内，只有文件内能访问到 "@vue/runtime-core"，且文件模块自身没有导出任何东西。

下面再用一个代码说明：

```typescript
// a.d.ts
declare module "xxxyyyzzz" {
  export interface User {
    name: string;
    age: number;
  }
}

// import { User } from "xxxyyyzzz";
// 这么写可以访问到 User
// 但是毫无意义

export {}; // export {} 存在则下面的代码会报错
```

```typescript
// xx.ts
import { User } from "xxxyyyzzz"; // 当上面的 export {} 不存在时，这里才能找到模块

const user: User = {
  name: "John",
  age: 30,
};
```
