## 短路 与 (`&&`) 或 (`||`)

### 短路

短路的意思是左边执行后能知道结果就不执行右边。

如果是 `||`，左边如果是 `true`， 则右边不会执行。 例如：

- `2 == 1 + 1 || console.log('执行')`
- `1 == 1 + 1 || console.log('执行')`

如果是 `&&`, 如果左边是 `false`，则右边不会执行。例如：

- `2 == 1 + 1 && console.log('执行')`
- `1 == 1 + 1 && console.log('执行')`

下面两端代码意义相同：

- `step > max_step && (step = min_step);`
- `if (step > max_step) step = min_step;`

### 短路与或运算中的 `false`

`""`，`false`，`0`，`null`，`undefined`，`NaN` 会被当成 `false` 处理。

其他的都是 `true`。

<!-- prettier-ignore -->
::: warning 
  字符串 `"false"` 也会被当做 true 处理。 
:::

### 返回

js 的与或**并不只是**返回 `true` 和 `false` 的布尔值。

`a || b`：如果 **a** 是`true`，那么 **b** 不管是`true`还是`false`，都返回`true`。因此不用判断 **b** 了，这个时候刚好判断
到 **a**，因此返回 **a**。

如果 **a** 是 `false`，那么就要判断 **b**，如果 **b** 是 true，那么返回`true`，如果 **b** 是`false`，返回`false`，其实不
就是返回 **b** 了吗。

`a && b`：如果 **a** 是 `false`，那么 **b** 不管是`true`还是`false`，都返回`false`，因此不用判断 **b** 了，这个时候刚好
判断到 **a**，因此返回 **a**。

如果 **a** 是 `true`，那么就要在判断 **b**，和刚刚一样，不管 **b** 是`true`是`false`，都返回 **b**。

### 练习

尝试得出下面的返回结果：

```javascript
var a = new Object(),
  b = 0,
  c = Number.NaN,
  d = 1,
  e = 'Hello'

console.log(a || (b && c) || (d && e))
```

<!-- prettier-ignore -->
::: tip
  在 js 中 `&&` 运算符优先级大于 `||`。 
:::

## js 中的 trick

### `+`

加法运算符（+）为两种不同的运算重载：数字加法和字符串连接。在求值时:

1. 首先将两个操作数[强制转换](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)为基本类型。
2. 如果有一方是字符串，另一方则会被转换为字符串，并且它们连接起来。
3. 如果双方都是 BigInt，则执行 BigInt 加法。如果一方是 BigInt 而另一方不是，会抛出 TypeError。
4. 否则，双方都会被转换为数字，执行数字加法。

```javascript
['a'] + 'b' === 'ab'
[1, 2] + 3 = '1,23'
```

### `==`

`==` 会进行类型转换，`===` 不会。

### `!!`

`!!` 会将值转换为布尔值。

## microtask（task） 和 macrotask

**macrotasks**: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering

**microtasks**: process.nextTick, Promises, queueMicrotask, MutationObserver

[事件循环](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)

![事件循环](./images/eventloop.png)

在每个宏任务之后，引擎会立即执行微任务队列中的所有任务，然后再运行任何其他宏任务或渲染或其他任何任务。

需要注意的是，每个事件循环都有一个正在运行的宏任务，他要么是空，要么是任务。这个宏任务执行完毕后，会执行微任务队列中的所
有任务。微任务执行过程中，也可以添加新的微任务，继续运行，直到微任务队列清空。进入下一次事件循环，取下一个宏任务执行。

```javascript
console.log('script start')

// setTimeout 是宏任务, 在下一次事件循环中，
// 如果宏任务队列中没有在其前面其他宏任务，则第一个执行
setTimeout(function () {
  console.log('setTimeout1')
}, 0)

// 在本次事件循环中，微任务是可以入队的，
// 所以本次事件循环会清空所有微任务，promise 在本次事件循环就可执行
Promise.resolve().then(function () {
  console.log('promise1')
})

// ----- console ------
// script start
// promise1
// setTimeout1
```

所以造成一种假象，就是微任务队列中的任务是比宏任务先执行。可以
看[setTimeout](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout)方法的 delay 参数。

或者可以这么理解，所有单个宏任务都视为一段程序的入口，执行完毕后，会立刻执行微任务队列中的所有任务，到微任务队列清空为止
。这一次的循环叫做一个事件循环。

<!-- prettier-ignore -->
::: tip 
任务队列中的任务只有当调用栈是空的时候才会将任务 push 进调用栈中执行。 
:::

- [视频](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [可视化演示 1](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
- [可视化演示 2](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
