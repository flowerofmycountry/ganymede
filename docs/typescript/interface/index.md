## 约束

```typescript
interface Name {
  firstName: string;
  lastName: string;
}

function getName({ firstName, lastName }: Name) {
  return firstName + "-" + lastName;
}

getName({
  firstName: "lebron",
  lastName: 23,
}); // error

getName({
  firstName: "lebron",
  lastName: "james",
}); // ok

getName({
  firstName: "lebron",
  lastName: "james",
  middel: "666",
}); // error

let obj = {
  firstName: "lebron",
  lastName: "james",
  middel: "666",
};

// 鸭式辨型法
getName(obj); // ok, 当多一个或者多多个属性时，提取变量的方法，可以绕过检查。
```

## 可选属性 和 索引签名

<b><font color="#26c6da">一旦定义了索引签名，那么其他属性的类型都必须是它的类型的子集。</font></b>

下面这个例子中，定义了索引签名 `[propName: string]: string`， 但是 `age?: number`，number 不是 string 的子类型，故报错。

```typescript
interface Person {
  readonly name: string;
  age?: number;
  [propName: string]: string;
}

let tom: Person = {
  name: "Tom",
  age: 25,
  gender: "male",
};

// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.
```

## 用接口定义函数的形状

接口定义函数的形状时，对等号左侧进行类型限制。参数类型，个数，返回值对不上，使用或赋值时会报错。

```typescript
interface MyFunction {
  (a: string): void;
}

const myFunc1: MyFunction = (p1: string) => {}; // 赋值时OK

myFunc1("11"); // 使用时OK

const myFunc2: MyFunction = (p1: string, ...items: any[]) => {}; // 赋值时OK

myFunc2("11", 2, 3, 4); // 使用时ERROR

const myFunc3: MyFunction = (p1: string, p2?: number) => {}; // 赋值时OK

myFunc3("11", 2); // 使用时ERROR

const myFunc4: MyFunction = (p1: string, p2: number = 1) => {}; // 赋值时OK

myFunc4("11", 2); // 使用时ERROR

const myFunc5: MyFunction = (p1: string, p2: number = 1) => {
  return "";
}; // 返回值 '' 不匹配void  赋值时也OK

const myFunc6: MyFunction = (p1: number) => {}; // 赋值时ERROR  p1 是 number

export default {};
```

## 混合接口

接口中即定义了函数，又定义了属性。

其实本质是约束了一个具有属性的函数。js 中的函数本质是对象，可以添加属性。

```typescript
interface Counter {
  (): void;
  count: number;
}

let getCounter = (): Counter => {
  let fn = function () {
    fn.count++;
  } as Counter; // 这里需要强制类型转换

  fn.count = 0;

  return fn;
};

const countAddOne = getCounter();

countAddOne();
countAddOne();
countAddOne();

console.log(countAddOne.count); // 3
```

## 鸭式辨型法

一个“有类型”的对象赋值给明确类型的参数：（myObj 会被类型推论为 `{ size: number; label: string }`）

```typescript
interface LabeledValue {
  label: string;
}
function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj); // OK
```

一个“无类型”的对象赋值给明确类型的参数：

```typescript
interface LabeledValue {
  label: string;
}
function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}
printLabel({ size: 10, label: "Size 10 Object" }); // Error
```

上面代码，在参数里写对象就相当于是**直接给 labeledObj 赋值**，这个对象有严格的类型定义，所以不能多参或少参。而当你在外面将该对象用另一个变量 `myObj` 接收，`myObj` 不会经过额外属性检查，但会根据类型推论为 `let myObj: { size: number; label: string } = { size: 10, label: "Size 10 Object" };`，然后将这个 `myObj` 再赋值给 `labeledObj`，此时根据**类型的兼容性**，两种类型对象，参照鸭式辨型法，因为都具有 `label` 属性，所以被认定为两个相同，故而可以用此法来绕开多余的类型检查。

再看一个例子：

```typescript
interface A {
  name: string;
}

interface B {
  name: string;
  age: number;
}

var a: A = { name: "wujin" };

var b: B = { name: "zhangxin1", age: 12 };

a = b; // ok 多属性可赋值给少属性的
// b = a; // error 少属性不可可赋值给多属性的
```

- 多属性可以赋值给少属性的类型。
- 少属性的类型不可赋值给多属性的类型。

一句话总结就是**可多不可少**。

## 接口合并

1. 同名接口会合并。
2. 同名接口的同名属性需要类型一样，否则报错。
3. 同名接口的同名方法会形成重载。
