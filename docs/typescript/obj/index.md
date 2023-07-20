## object、Object 和 {}

小 object 代表的是所有非原始类型，也就是说我们不能把 number、string、boolean、symbol、bigint 原始类型赋值给 object。在严格模式下，null 和 undefined 类型也不能赋给 object。

```typescript
let lowerCaseObject: object;
lowerCaseObject = 1; // ts(2322)
lowerCaseObject = "a"; // ts(2322)
lowerCaseObject = true; // ts(2322)
lowerCaseObject = null; // ts(2322)
lowerCaseObject = undefined; // ts(2322)
lowerCaseObject = {}; // ok
```

大 Object 代表所有拥有 toString、hasOwnProperty 方法的类型，所以所有原始类型、非原始类型都可以赋给 Object。同样，在严格模式下，null 和 undefined 类型也不能赋给 Object。

```typescript
let upperCaseObject: Object;
upperCaseObject = 1; // ok
upperCaseObject = "a"; // ok
upperCaseObject = true; // ok
upperCaseObject = null; // ts(2322)
upperCaseObject = undefined; // ts(2322)
upperCaseObject = {}; // ok
```

{}空对象类型和大 Object 一样，也是表示原始类型和非原始类型的集合，并且在严格模式下，null 和 undefined 也不能赋给 {}。

```typescript
let ObjectLiteral: {};
ObjectLiteral = 1; // ok
ObjectLiteral = "a"; // ok
ObjectLiteral = true; // ok
ObjectLiteral = null; // ts(2322)
ObjectLiteral = undefined; // ts(2322)
ObjectLiteral = {}; // ok
type isLiteralCaseObjectExtendsUpperCaseObject = {} extends Object
  ? true
  : false; // true
type isUpperCaseObjectExtendsLiteralCaseObject = Object extends {}
  ? true
  : false; // true
upperCaseObject = ObjectLiteral;
ObjectLiteral = upperCaseObject;
```

<b><font color="#26c6da">综上结论：{}、大 Object 是比小 object 更宽泛的类型（least specific），{} 和大 Object 可以互相代替，用来表示原始类型（null、undefined 除外）和非原始类型；而小 object 则表示非原始类型。</font></b>
