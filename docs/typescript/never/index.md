## never

never 类型同 null 和 undefined 一样，也是任何类型的子类型，也可以赋值给任何类型。

但是没有类型是 never 的子类型或可以赋值给 never 类型（除了 never 本身之外），即使 any 也不可以赋值给 never

```typescript
// 异常
function err(msg: string): never {
  // OK
  throw new Error(msg);
}

// 死循环
function loopForever(): never {
  // OK
  while (true) {}
}
```

在 TypeScript 中，可以利用 never 类型的特性来实现全面性检查，具体示例如下：

```typescript
type Foo = string | number;

function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === "string") {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === "number") {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo;
  }
}
```

如果有一天你的同事修改了 Foo 的类型：

```typescript
type Foo = string | number | boolean;
```

然而他忘记同时修改 controlFlowAnalysisWithNever 方法中的控制流程，这时候 else 分支的 foo 类型会被收窄为 boolean 类型，导致无法赋值给 never 类型，这时就会产生一个编译错误。通过这个方式，我们可以确保 controlFlowAnalysisWithNever 方法总是穷尽了 Foo 的所有可能类型。 通过这个示例，我们可以得出一个结论：<b><font color="#26c6da">使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码。</font></b>
