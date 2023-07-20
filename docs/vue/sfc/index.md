## style 标签

### 组件作用域 CSS

使用 `scoped` 后，父组件的样式将不会渗透到子组件中。**不过，子组件的<font size="5">根节点</font>会同时被父组件的作用域样式和子组件的作用域样式影响。** 这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。

如下面的例子中，父组件和子组件同时拥有 `.box` 的 class。预想是显示两个盒子，大盒子套小盒子。然而，编译出的结果是小盒子的样式被大盒子覆盖了！

父组件：

```vue
<template>
  <div class="box">
    <A />
  </div>
</template>

<script setup lang="ts">
import A from "./components/A.vue";
</script>

<style scoped>
.box {
  height: 800px; /*不同*/
  width: 800px; /*不同*/
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

子组件的根节点 `div` 的样式 class 也是 `.box`：

```vue
<template>
  <div class="box"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box {
  height: 600px; /*不同*/
  width: 600px; /*不同*/
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

:::warning
如果子组件模板中的写法像下面这样，`.box` 选中的 `div` 就不是根节点了，也就不会被父组件样式所影响。

```vue
<template>
  <div class="box"></div>
  <div></div>
</template>
```

:::

编译的出的 html：

```html
<div data-v-472cff63 class="box">
  <div data-v-752b2823 data-v-472cff63 class="box"></div>
</div>
```

下面编译出的两个样式都选中了子组件的`div`，上面的样式会被覆盖：

```css
.box[data-v-752b2823] {
  height: 600px;
  width: 600px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 交集选择器，覆盖了上面的样式，最终显示800px大小的盒子*/
.box[data-v-472cff63] {
  height: 800px;
  width: 800px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 更多内容

- 深度选择器 `:deep`
- 插槽选择器 `:slotted`
- 全局选择器 `:global`
- CSS 中的 `v-bind()`
- CSS Modules

请参考[官网](https://cn.vuejs.org/api/sfc-css-features.html#scoped-css)。

## script 标签

## template 标签
