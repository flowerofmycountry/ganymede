## 彻底搞懂

首先我们看一段代码:

```vue
<template>
  <div class="f-container">
    <a-layout style="height: 100%">
      <a-layout-header>
        <nav-header :name="name"></nav-header>
      </a-layout-header>
      <a-layout>
        <a-layout-sider style="width: auto" breakpoint="lg">
          <nav-side></nav-side>
        </a-layout-sider>
        <a-layout-content>
          <slot></slot>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Container",
};
</script>

<script setup lang="ts">
import navHeader from "./navHeader/index.vue";
import navSide from "./navSide/index.vue";

defineProps<{
  name: string;
}>();
</script>

<style scoped lang="less">
.f-container {
  height: 100%;
  .arco-layout-header {
    height: 60px;
  }

  .arco-layout-content {
    padding: 10px;
  }

  .arco-card {
    height: 200px;
    width: 200px;
  }
}
</style>
```

- .arco-layout-header 是 `<a-layout-header>` 的顶层样式类
- .arco-layout-content 是 `<a-layout>` 的顶层样式类
- .arco-card 是 `<slot></slot>` 中引入的组件的顶层样式类

最后显示 .arco-card 的设置的样式未生效，其他两个生效了。

我们看看编译后的 css 和 html:

```css
.f-container[data-v-d7a10674] {
  height: 100%;
}
.f-container .arco-layout-header[data-v-d7a10674] {
  height: 60px;
}
.f-container .arco-layout-content[data-v-d7a10674] {
  padding: 10px;
}
.f-container .arco-card[data-v-d7a10674] {
  height: 200px;
  width: 200px;
}
```

```html
<div data-v-d7a10674 class="f-container">
  <section data-v-d7a10674 class="arco-layout" style="height: 100%;">
    <header data-v-d7a10674 class="arco-layout-header">
      <div data-v-08f85754 data-v-d7a10674 class="header">
        <div data-v-08f85754 class="title">自定义UI组件库</div>
        <div data-v-08f85754 class="toolBar"></div>
        <div data-v-08f85754 class="avatar"></div>
      </div>
    </header>
    <section data-v-d7a10674 class="arco-layout arco-layout-has-sider">
      <div
        data-v-d7a10674
        class="arco-layout-sider arco-layout-sider-light"
        style="width: auto;"
      >
        <div class="arco-layout-sider-children">
          <div
            data-v-d7a10674
            class="arco-menu arco-menu-light arco-menu-vertical arco-menu-collapsed arco-menu-pop"
            style="height: 100%;"
          >

            </div>
          </div>
        </div>
        <!--v-if-->
      </div>
      <main data-v-d7a10674 class="arco-layout-content">
        <div data-v-0ef3d734 class="container">
          <!-- arco-card 在这里-->
          <!-- .f-container .arco-card[data-v-d7a10674] 这样的选择器无法选中，所以不展示-->
          <div
            data-v-0ef3d734
            class="arco-card arco-card-size-medium arco-card-bordered"
          >

            <div class="arco-card-body">欢迎光临</div>
          </div>
        </div>
      </main>
    </section>
  </section>
</div>
```

然后，我们修改代码，为 .arco-card 添加 deep 选择器:

```less
.f-container {
  height: 100%;
  .arco-layout-header {
    height: 60px;
  }

  .arco-layout-content {
    padding: 10px;
  }

  :deep(.arco-card) {
    height: 200px;
    width: 200px;
  }
}
```

再看一下编译后的 css 和 html：

```css
.f-container[data-v-d7a10674] {
  height: 100%;
}
.f-container .arco-layout-header[data-v-d7a10674] {
  height: 60px;
}
.f-container .arco-layout-content[data-v-d7a10674] {
  padding: 10px;
}

/** 加上 deep 后 scoped生成的标签跑到了父类上面 */
.f-container[data-v-d7a10674] .arco-card {
  height: 200px;
  width: 200px;
}
```

```html
<div data-v-d7a10674 class="f-container">
  <section data-v-d7a10674 class="arco-layout" style="height: 100%;">
    <header data-v-d7a10674 class="arco-layout-header">
      <div data-v-08f85754 data-v-d7a10674 class="header">
        <div data-v-08f85754 class="icon"></div>
        <div data-v-08f85754 class="title">自定义UI组件库</div>
        <div data-v-08f85754 class="toolBar"></div>
        <div data-v-08f85754 class="avatar"></div>
      </div>
    </header>
    <section data-v-d7a10674 class="arco-layout arco-layout-has-sider">
      <div
        data-v-d7a10674
        class="arco-layout-sider arco-layout-sider-light"
        style="width: auto;"
      >
        <div class="arco-layout-sider-children">
          <div
            data-v-d7a10674
            class="arco-menu arco-menu-light arco-menu-vertical arco-menu-collapsed arco-menu-pop"
            style="height: 100%;"
          >
            <div class="arco-menu-inner">
              <div
                class="arco-menu-pop arco-menu-pop-header arco-menu-has-icon"
                aria-haspopup="true"
              >
                <!-- header --><!--v-if--><span class="arco-menu-icon"></span
                ><span class="arco-menu-title">Navigation 1</span
                ><!-- suffix --><span class="arco-menu-icon-suffix"></span
                ><!--v-if-->
              </div>
              <!--teleport start--><!--teleport end-->
              <div
                class="arco-menu-pop arco-menu-pop-header arco-menu-has-icon"
                aria-haspopup="true"
              >
                <!-- header --><!--v-if--><span class="arco-menu-icon"></span
                ><span class="arco-menu-title">Navigation 2</span
                ><!-- suffix --><span class="arco-menu-icon-suffix"></span
                ><!--v-if-->
              </div>
              <!--teleport start--><!--teleport end-->
              <div
                class="arco-menu-pop arco-menu-pop-header arco-menu-has-icon"
                aria-haspopup="true"
              >
                <!-- header --><!--v-if--><span class="arco-menu-icon"></span
                ><span class="arco-menu-title">Navigation 3</span
                ><!-- suffix --><span class="arco-menu-icon-suffix"></span
                ><!--v-if-->
              </div>
              <!--teleport start--><!--teleport end-->
            </div>
            <div class="arco-menu-collapse-button"></div>
          </div>
        </div>
        <!--v-if-->
      </div>
      <main data-v-d7a10674 class="arco-layout-content">
        <div data-v-0ef3d734 class="container">
          <!-- html 并没有发生任何变化-->
          <div
            data-v-0ef3d734
            class="arco-card arco-card-size-medium arco-card-bordered"
          >
            <div class="arco-card-body">欢迎光临<!----></div>
          </div>
        </div>
      </main>
    </section>
  </section>
</div>
```
