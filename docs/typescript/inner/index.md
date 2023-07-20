## 泛型工具类型

### 1.typeof

### 2.keyof

### 3.in

```typescript
type Keys = "a" | "b" | "c";

type Obj = {
  [p in Keys]: any;
}; // -> { a: any, b: any, c: any }
```

### 4.infer

记录类型到一个新的泛型中。

```typescript
// T 如果是函数类型，会把返回值类型记录到R 中，并返回 R，否则返回any
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
```

### 5.extends

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity(3); // Error, number doesn't have a .length property

loggingIdentity({ length: 10, value: 3 });
```

## 内置的工具类型

### 1.Partial

`Partial<T>` 将类型的属性变成可选，只有第一层

定义：

```typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

举例：

```typescript
type NewUserInfo = Partial<UserInfo>;
const xiaoming: NewUserInfo = {
  name: "xiaoming",
};
```

### 2.DeepPartial

`DeepPartial<T>` 将类型的属性变成可选，支持深层

定义：

```typescript
type DeepPartial<T> = {
  // 如果是 object，则递归类型
  [U in keyof T]?: T[U] extends object ? DeepPartial<T[U]> : T[U];
};
```

举例：

```typescript
interface UserInfo {
    id: string;
    name: string;
    fruits: {
        appleNumber: number;
        orangeNumber: number;
    }
}

type NewUserInfo = Partial<UserInfo>;

// Property 'appleNumber' is missing in type '{ orangeNumber: number; }' but required in type '{ appleNumber: number; orangeNumber: number; }'.
const xiaoming: NewUserInfo = {
    name: 'xiaoming',
    fruits: {
        orangeNumber: 1,
    }
}


type DeepNewUserInfo = type DeepPartial<UserInfo>;

// ok
const xiaoming: DeepNewUserInfo = {
    name: 'xiaoming',
    fruits: {
        orangeNumber: 1,
    }
}

```

### 3.Required

`Required<T>` 将类型的属性变成必选

定义：

```typescript
type Required<T> = {
  [P in keyof T]-?: T[P];
};
```

举例：

```typescript

```

### 4.Readonly

`Readonly<T>` 的作用是将某个类型所有属性变为只读属性，也就意味着这些属性不能被重新赋值。

定义：

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

举例：

```typescript

```

### 5.Pick

Pick 从某个类型中挑出一些属性出来

定义：

```typescript
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

举例：

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

### 6.Record

`Record<K extends keyof any, T>` 的作用是将 K 中所有的属性的值转化为 T 类型。

定义：

```typescript
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```

举例：

```typescript
interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const x: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};
```

### 7.ReturnType

用来得到一个函数的返回值类型

定义：

```typescript
type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;
```

举例：

```typescript
type Func = (value: number) => string;
const foo: ReturnType<Func> = "1";
```

### 8.Exclude

`Exclude<T, U>` 的作用是将某个类型中属于另一个的类型移除掉。

定义：

```typescript
type Exclude<T, U> = T extends U ? never : T;
```

举例：

```typescript
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number
```

### 9.Extract

`Extract<T, U>` 的作用是从 T 中提取出 U。

定义：

```typescript
type Extract<T, U> = T extends U ? T : never;
```

举例：

```typescript
type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T1 = Extract<string | number | (() => void), Function>; // () =>void
```

### 10.Omit

`Omit<T, K extends keyof any>` 的作用是使用 T 类型中除了 K 类型的所有属性，来构造一个新的类型。

定义：

```typescript
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

举例：

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

### 11.NonNullable

`NonNullable<T>` 的作用是用来过滤类型中的 null 及 undefined 类型。

定义：

```typescript
type NonNullable<T> = T extendsnull | undefined ? never : T;

```

举例：

```typescript
type T0 = NonNullable<string | number | undefined>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]
```

### 12.Parameters

`Parameters<T>` 的作用是用于获得函数的参数类型组成的元组类型。

定义：

```typescript
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
```

举例：

```typescript
type A = Parameters<() => void>; // []
type B = Parameters<typeofArray.isArray>; // [any]
type C = Parameters<typeofparseInt>; // [string, (number | undefined)?]
type D = Parameters<typeofMath.max>; // number[]
```

## 内置对象

JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。

内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。

### IArguments

```typescript
function sum() {
  let args: IArguments = arguments;
}
```

其他更多参考[TypeScript 核心库的定义文件](https://github.com/Microsoft/TypeScript/tree/main/src/lib)。
