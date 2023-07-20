## 按位逻辑运算符

### 左移运算符 `<<`

用来将一个数的各二进制位全部左移若干位，移动的位数由右操作数指定，右操作数必须是非负值，其右边空出的位用 `0` 填补，高位左移溢出则舍弃该高位。

简单介绍一种方便计算的方法：

- 8 << 1 的值为 8 \* 2 = 16；
- 8 << 2 的值为 8 \* (2^2) = 32；
- 8 << n 的值为 8 \*（2^n）。

### 右移运算符 `>>`

按二进制形式把所有的数字向右移动对应位移位数，低位移出(舍弃)，高位的空位补符号位，即正数补 `0`，负数补 `1`。

### 无符号右移运算符 `>>>`

按二进制形式把所有的数字向右移动对应位移位数，低位移出(舍弃)，高位的空位补 `0`。

### 按位与运算符 `&`

两位同时为 `1`，结果才为 `1`，否则为 `0`

例如：`3 & 5` 即 `0000 0011 & 0000 0101 = 0000 0001` 因此，`3 & 5` 的值得 `1`。

另，负数按补码形式参加按位与运算。

### 按位或运算符 `|`

参加运算的两个对象只要有一个为 `1`，其值为 `1`

例如: `3 | 5`　即 `0000 0011| 0000 0101 = 0000 0111` 因此，`3 | 5`的值得`7`。

另，负数按补码形式参加按位或运算。

### 异或运算符 `^`

参加运算的两个对象，如果两个相应位为 **异**（值不同），则该位结果为 `1`，否则为 `0`。

### 取反运算符 `~`

对一个二进制数按位取反，即将 `0` 变 `1`，`1` 变 `0`。

### 运用

当业务中一个对象同时具有不固定的多种类型时，可用左移枚举来定义类型。修改用 `|`，查找用 `&`。

参考 **vue3** 代码：

```typescript
export const enum ShapeFlags {
  ELEMENT = 1, // 0000 0000 0001 表示一个普通的HTML元素
  FUNCTIONAL_COMPONENT = 1 << 1, // 0000 0000 0010 函数式组件
  STATEFUL_COMPONENT = 1 << 2, // 0000 0000 0100 有状态组件
  TEXT_CHILDREN = 1 << 3, // 0000 0000 1000 子节点是文本
  ARRAY_CHILDREN = 1 << 4, // 0000 0001 0000 子节点是数组
  SLOTS_CHILDREN = 1 << 5, // 0000 0010 0000 子节点是插槽
  TELEPORT = 1 << 6, // 0000 0100 0000 表示vnode描述的是个teleport组件
  SUSPENSE = 1 << 7, // 0000 1000 0000 表示vnode描述的是个suspense组件
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8, // 0001 0000 0000 表示需要被keep-live的有状态组件
  COMPONENT_KEPT_ALIVE = 1 << 9, // 0010 0000 0000 已经被keep-live的有状态组件
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT, // 0000 0001 0010 组件，有状态组件和函数式组件的统称
}

const rawVNode = {
  shapeFlag: ShapeFlags.FUNCTIONAL_COMPONENT,
};

// 判断是否是该类型
if (rawVNode.shapeFlag & ShapeFlags.FUNCTIONAL_COMPONENT) {
  console.log("是"); // != 0
} else {
  console.log("不是");
}

// 判断是否是其中之一
if (
  rawVNode.shapeFlag &
  (ShapeFlags.FUNCTIONAL_COMPONENT | ShapeFlags.STATEFUL_COMPONENT)
) {
  console.log("是"); // != 0
} else {
  console.log("不是");
}

// 判断是否 TEXT_CHILDREN 类型
if (rawVNode.shapeFlag & ShapeFlags.TEXT_CHILDREN) {
  console.log("是");
} else {
  console.log("不是"); // 0
}

// 添加一个 TEXT_CHILDREN 类型
rawVNode.shapeFlag |= ShapeFlags.TEXT_CHILDREN;

// 判断是否 TEXT_CHILDREN 类型
if (rawVNode.shapeFlag & ShapeFlags.TEXT_CHILDREN) {
  console.log("是"); // != 0
} else {
  console.log("不是");
}
```
