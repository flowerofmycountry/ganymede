## 类型断言

```typescript
let str: any = "666";

const len1 = (<string>str).length;

// 推荐，上面的方式与JSX兼容不好
const len2 = (str as string).length;
```

## 非空断言和确定赋值断言

```typescript
let mayNullOrUndefinedOrString: null | undefined | string;
mayNullOrUndefinedOrString!.toString(); // ok 非空断言
mayNullOrUndefinedOrString.toString(); // ts(2531)

let x!: number; // 确定赋值断言
initialize();
console.log(2 * x); // Ok

function initialize() {
  x = 10;
}
```

## const 断言

```typescript
// Type is { x: number; y: number; }
const obj1 = {
  x: 1,
  y: 2,
};
// Type is { x: 1; y: number; }
const obj2 = {
  x: 1 as const,
  y: 2,
};
// Type is { readonly x: 1; readonly y: 2; }
const obj3 = {
  x: 1,
  y: 2,
} as const;

// Type is number[]
const arr1 = [1, 2, 3];
// Type is readonly [1, 2, 3]
const arr2 = [1, 2, 3] as const;
```

## 类型推断

根据初始值类型推断：定义和赋值同时写才会自动类型推断。否则认为是 any;

```typescript
let a;

a = 1; // ok
a = false; // ok
a = "123213"; // ok

let b = 1;

b = false; // error
```

根据上下文类型推断：

```typescript
enum FOOD {
  Pig,
  Chicken,
  Duck,
}

interface Person {
  eat?: (food: FOOD) => void;
}

const p: Person = {};

p.eat = (food) => {
  // 这里 food 会被自动推断为 FOOD
  console.log(food);
};

p.eat!("s"); // error
p.eat!(FOOD.Chicken); // ok
```

## 类型拓宽

const 推断为字面量类型。

let 推断为字面量类型的父类型。

```typescript
let str = "this is string"; // 类型是 string
let strFun = (str = "this is string") => str; // 类型是 (str?: string) => string;
const specifiedStr = "this is string"; // 类型是 'this is string'
let str2 = specifiedStr; // 类型是 'string'
let strFun2 = (str = specifiedStr) => str; // 类型是 (str?: string) => string;

/** -----分界线------- */
let x = null; // 类型拓宽成 any
let y = undefined; // 类型拓宽成 any

/** -----分界线------- */
const z = null; // 类型是 null

/** -----分界线------- */
let anyFun = (param = null) => param; // 形参类型是 null
let z2 = z; // 类型是 null
let x2 = x; // 类型是 null
let y2 = y; // 类型是 undefined

/** -----分界线------- */
interface Vector3 {
  x: number;
  y: number;
  z: number;
}

function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
  return vector[axis];
}

let x = "x"; // 这里如果是const，下面的代码就可通过
let vec = { x: 10, y: 20, z: 30 };
// 类型“string”的参数不能赋给类型“"x" | "y" | "z"”的参数。
getComponent(vec, x); // Error
```

## 类型缩小

通过 `typeof xxx === "yyy"` 和控制流语句（包括但不限于 if、三目运算符、switch 分支）将联合类型收敛为更具体的类型。
`typeof xxx === "yyy"` 的方式只适用于 `number`, `string`, `boolean`, `symbol`。对象可用 `instanceof` 来进行缩小。

## 标签联合 或 可辨识联合

帮助类型检查器缩小类型的另一种常见方法是在它们上放置一个明确的 “标签”，即在不同的接口上写一个相同的属性名：

```typescript
interface UploadEvent {
  type: "upload"; // 可辨识标签
  filename: string;
  contents: string;
}

interface DownloadEvent {
  type: "download"; // 可辨识标签
  filename: string;
}

type AppEvent = UploadEvent | DownloadEvent; // 联合类型

function handleEvent(e: AppEvent) {
  switch (e.type) {
    case "download":
      e; // Type is DownloadEvent
      break;
    case "upload":
      e; // Type is UploadEvent
      break;
  }
}
```

## 类型保护

```typescript
function isString(value: string | number): value is string {
  return typeof value === "string";
}

const x: string | number = Math.random() > 0.5 ? "asd" : 12;

if (isString(x)) {
  x.length; // 被推断为string
} else {
  x.toFixed(); // 被推断为number
}
```

## 类型别名

同名的类型别名会覆盖，不会像接口一样合并。

类型别名的属性中可以使用自己，用于定义树形或嵌套结构。

```typescript
type Item = {
  name: string;
  children: Item[];
};
```

### 兼容性

类型别名 和 接口 相互兼容

```typescript
type MyType = {
  name: string;
};

interface MyInterface {
  name: string;
  age: number;
}

let v1: MyType = {
  name: "wujin",
};

let v2: MyInterface = {
  name: "zhangxin",
  age: 88,
};

v1 = v2; // 兼容性，可多不可少
v2 = v1; // error
```

### 拓展

却别与接口用 `extends` 拓展，类型别名用 `&` 进行拓展。

```typescript
type MyType = {
  name: string;
};

interface MyInterface {
  name: string;
}

type MyType2 = MyType & {
  age: number;
};

interface MyInterface2 extends MyInterface {
  age: number;
}

const v1: MyType2 = { name: "wujin", age: 1 };

const v2: MyInterface2 = { name: "wujin", age: 1 };
```

## 索引访问操作符

```typescript
interface MyInterface {
  a: number;
  b: boolean;
  c: string;
  d: symbol;
  e: null;
  f: undefined;
  g: never;
}

type MyKey = keyof MyInterface;
type MyKey2 = "a" | "b" | "c" | "d" | "e" | "f" | "g";

// MyType 为 string|number|boolean|symbol|undefined|null 不会包含never的联合类型
type MyType = MyInterface[MyKey];

// MyType2 为 string|number|boolean|symbol|undefined|null 不会包含never的联合类型
type MyType2 = MyInterface[MyKey2];
```
