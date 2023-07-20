## 完整定义 与 类型推导

```typescript
// 函数定义
let addFunc: (a: number, b: number) => number;

// 函数实现
addFunc = function (a: number, b: number): number {
  return a + b;
};

// 上面是完整的函数实现
// 下面是省略的类型推导
let addFunc2 = function (a: number, b: number) {
  return a + b;
};
```

也可用 type 来做函数声明。

## 函数重载

```typescript
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}
const a = reverse(1); // a的类型推断为number
```

或：

使用接口的方式进行方法重载时， ~~**要么**定义方法的返回值需要一致~~，**要么**具体实现的返回值定义为 `any`。

```typescript
interface IReverse {
  (x: number): number | string; // 返回值类型一致
  (x: string): number | string; // 返回值类型一致
}

const reverse: IReverse = (x: number | string) => {
  return x;
};

const a = reverse(1); // a的类型推断为 number | string
```

可以看出上面的方式虽然不报错，但最后类型推导不智能，所以我们会使用下面这种方式：

```typescript
interface IReverse {
  (x: number): number;
  (x: string): string;
}

// 具体实现的返回值定义为 any
const reverse: IReverse = (x: number | string): any => {
  return x;
};

const a = reverse(1); // a的类型推断为 number
```

## 兼容性

函数赋值时，参数个数 **可少不可多**：

```typescript
let fun1 = (a: number, b: number) => {};
let fun2 = (a: number) => {};
let fun3 = (a: number, b: number, c: number) => {};

fun1 = fun2; // ok
fun1 = fun3; // error
```

参数类型 **可多不可少**：

```typescript
let fun1 = (a: number | string) => {};
let fun2 = (a: number) => {};

fun1 = fun2; // error
fun2 = fun1; // ok
```

返回值类型 **可少不可多**：

```typescript
let fun3 = (a: number) =>
  Math.random() > 0.5 ? Math.random().toString() : Math.random();

let fun4 = (a: number) => 0;

fun3 = fun4; // ok
fun4 = fun3; // error
```
