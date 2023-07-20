## Suspense 组件

`<Suspense>` 接受两个插槽：`#default` 和 `#fallback`。它将在内存中渲染默认插槽的同时展示后备插槽内容。

如果在渲染时遇到异步依赖项 (异步组件 和具有 `async setup()` 的组件)，它将等到所有异步依赖项解析完成时再显示默认插槽。

[异步组件](/vue/component/#异步组件) 和 [async setup](/vue/component/#async-setup) 两节已经演示了如何使用。

## Teleport 传送组件

可以将你的组件传送到任意 DOM 节点上。

```vue
<template>
  <div>
    <teleport to="body"><Dialog></Dialog></teleport>
  </div>
</template>

<script setup lang="ts">
import Dialog from "./dialog.vue";
</script>
```

dialog.vue：

```vue
<template>
  <div class="box">对话框</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box {
  height: 200px;
  width: 200px;
  background-color: skyblue;
}
</style>
```

效果如下

```html
<html lang="en">
  <head>
    ...
  </head>
  <body>
    <div id="app" data-v-app="">
      <div data-v-7a7a37b1=""><!--teleport start--><!--teleport end--></div>
    </div>
    <script type="module" src="/src/main.ts"></script>

    <div data-v-a4f65bf8="" class="box">对话框</div>
  </body>
</html>
```

## keep-alive 缓存组件

keep-alive 用来缓存组件，如下面例子中，如果没有 `keep-alive`，组件切走后，表单入力将会丢失。

### include 和 exclude

`<KeepAlive>` 默认会缓存内部的所有组件实例，但我们可以通过 `include` 和 `exclude` prop 来定制该行为。

它会根据组件的 `name` 选项进行匹配，所以组件如果想要条件性地被 `KeepAlive` 缓存，就必须显式声明一个 name 选项。

在 `3.2.34` 或以上的版本中，使用 `<script setup>` 的单文件组件会自动根据文件名生成对应的 `name` 选项，无需再手动声明。

`<script setup>` 中需要有内容参与编译，才可以根据文件名生成对应的 `name` 选项。可以在[Vue SFC 演练场](https://sfc.vuejs.org/#eNp9kM1Kw0AQx19l2UsV2uy9FEEEX8DrXmI61oRkd9ndRKTk3qKkBsVTsHooHhU9tvVpmo03X8FN0kNR6O3/MfyYmTE+FsJJYsB9TBllA+VJX2ikQMfiiDKPM8VDcEI+OuiU2dJkUzPJzXxRFTfl7HPz9RqoavX4/ZZXy3vzVPysbstZXmXvzI3AfLyYYlo9zM3krnNo4aSlW641GiIRuhqsQ2gw9JNGILRZP5eLNTo7PWkK0jYDsjNf76mvw60krcZd7EeCS92LXOEEijN707hm0G2hKO6jJqkze3TtKb7UWqg+IerCqz8RKIfLEbHKkTHTfgQOqKh3LvmVAmnBFHd3GMSGCcieBDYECXIf88/oP26NTSlLcfoL57Wjuw==)中实验一下。

### max

我们可以通过传入 `max` prop 来限制可被缓存的最大组件实例数。`<KeepAlive>` 的行为在指定了 `max` 后类似一个 LRU 缓存：如果缓存的实例数量即将超过指定的那个最大数量，则最久没有被访问的缓存实例将被销毁，以便为新的实例腾出空间。

```vue
<KeepAlive :max="10">
  <component :is="activeComponent" />
</KeepAlive>
```

### 缓存实例的生命周期

当一个组件实例从 DOM 上移除但因为被 `<KeepAlive>` 缓存而仍作为组件树的一部分时，它将变为不活跃状态而不是被卸载。当一个组件实例作为缓存树的一部分插入到 DOM 中时，它将重新被激活。

一个持续存在的组件可以通过 `activated` 和 `deactivated` 选项来注册相应的两个状态的生命周期钩子

请注意：

1. `activated` 在组件挂载时也会调用，并且 `deactivated` 在组件卸载时也会调用。

2. 这两个钩子不仅适用于 `<KeepAlive>` 缓存的根组件，也适用于缓存树中的后代组件。

### 例子

```vue
<template>
  <div>
    <button @click="switchBtn">切换组件</button>
    <keep-alive :include="['A']">
      <A v-if="isA"></A>
      <B v-else></B>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import A from "./A.vue";
import B from "./B.vue";

const isA = ref(true);

const switchBtn = () => {
  isA.value = !isA.value;
};
</script>

<style scoped></style>
```

A.vue:

```vue
<template>
  <div>
    <h1>A组件</h1>
    <form action="/">
      <input type="radio" name="sex" id="" />
      男
      <input type="radio" name="sex" id="" />
      女
      <hr />
      姓名：
      <input type="text" v-model="name" />
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const name = ref("");
</script>
```

B.vue:

```vue
<template>
  <div>
    <h1>B组件</h1>
    <form action="/">
      年龄：
      <input type="text" v-model="age" />
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const age = ref();
</script>
```

## Transition 过渡动画组件

触发条件：

- 由 `v-if` 所触发的切换
- 由 `v-show` 所触发的切换
- 由特殊元素 `<component>` 切换的动态组件
- 改变特殊的 `key` 属性

参考[官网](https://cn.vuejs.org/guide/built-ins/transition.html#the-transition-component)。
