## unknown 和 any

unknown 与 any 的最大区别是： 任何类型的值可以赋值给 any，同时 any 类型的值也可以赋值给任何类型。unknown 任何类型的值都可以赋值给它，但它在被缩小范围前只能赋值给 unknown 和 any。

如果想对 unknow 类型操作，需要类型守卫，类型断言缩小范围。

```typescript
function getDogName() {
  let x: unknown;
  return x;
}
const dogName = getDogName();
// 直接使用
const upName = dogName.toLowerCase(); // Error
// typeof
if (typeof dogName === "string") {
  const upName = dogName.toLowerCase(); // OK
}
// 类型断言
const upName = (dogName as string).toLowerCase(); // OK
```

如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：

```typescript
let myFavoriteNumber;
myFavoriteNumber = "seven";
myFavoriteNumber = 7;
```

## 其他点

1. unknown 与其他任何类型组成的交叉类型最后都是其他类型
2. unknown 与其他任何类型组成的联合类型最后都是 unknown
3. never 类型是 unknown 类型的子类型
4. typeof unknown 等于 never
