## 元组

```typescript
// 元组类型的可选元素
type Point = [number, number?, number?];

const x: Point = [10]; // 一维坐标点
const xy: Point = [10, 20]; // 二维坐标点
const xyz: Point = [10, 20, 10]; // 三维坐标点

// 元组类型的剩余元素
type RestTupleType = [number, ...string[]];
let restTuple: RestTupleType = [666, "Semlinker", "Kakuqo", "Lolo"];

// 只读的元组类型
const point: readonly [number, number] = [10, 20];

export default {};
```

元组需要明确指定类型，否则会类型推导为联合类型的数组。

```typescript
const tuple: [number, string] = [10, "hello"];
const [first, second] = tuple; // first -> number, second -> string

const notTuple = [10, "hello"];
const [third, fourth] = notTuple; // third -> (number | string)[], fourth -> (number | string)[]
```
