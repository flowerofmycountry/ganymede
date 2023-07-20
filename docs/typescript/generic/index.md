## 泛型约束

```typescript
// 要求泛型类型必须有length属性
let getLength = <T extends { length: number }>(target: T) => {
  return target.length;
};

// getLength(12); // error 无length属性
getLength("111"); // ok string有length属性
```

## 在泛型中使用类型参数

一个泛型被另一个泛型所约束。

```typescript
let getProp = <T, K extends keyof T>(target: T, key: K) => {
  return target[key];
};

const obj = {
  a: "a",
  b: "b",
};

//getProp(obj, "c") // error;
getProp(obj, "a"); // ok
```
