## 组件通信（父子）

`props`注意点：

1. ts 写法，如果不是必传属性记得加问号，否则控制台报警告
2. 属性名用驼峰，外面传值用横杠 `-`
3. ts 写法，引用类型要使用 函数形式
4. js 写法 type 要大写开头的类型，如 `String`，而不是 `string`

下面的例子介绍了父传子`props`，子传父`emits`，`expose`。

子组件

```vue
<template>
  <div class="sub-box">
    <h1>我是子组件</h1>
    name:{{ name }}
    <hr />
    age:{{ age }}
    <hr />
    likes:{{ likes }}
    <hr />
    bodyHeight:{{ bodyHeight }}
    <hr />
    <button @click="send">给父组件传值</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// lang = ts 时可以 这么写

const props = withDefaults(
  defineProps<{
    name?: string;
    age: number;
    likes?: string[]; // 如果不是必传属性记得加问号，否则控制台报警告
    bodyHeight: number; // 这里用驼峰，外面传值用斜杠
  }>(),
  {
    name: "伍晋",
    likes: () => ["足球"], // 引用类型要使用 函数形式
  }
);

// js 写法
// defineProps({
//   foo: {
//     type: String, // 注意这里要大写开头的类型
//     default: '默认值',
//   },
//   bar: {
//     type: Number,
//     required: true,
//   },
// })

// ts写法
const emit = defineEmits<{
  (e: "on-getmessage", ...args: number[]): void;
}>();

// js写法
// const emit = defineEmits(['on-getmessage'])

const send = () => {
  emit("on-getmessage", 1, 2, 3, 4, 5);
};

defineExpose({
  name: "伍晋",
  sayHello() {
    console.log("hello");
  },
});
</script>

<style scoped lang="less">
.sub-box {
  border: 1px solid skyblue;
}
</style>
```

父组件

```vue
<template>
  <div class="p-box">
    我是父组件
    <Sub
      :age="18"
      :body-height="180"
      @on-getmessage="getMessage"
      ref="subRef"
    ></Sub>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Sub from "./sub.vue";
const subRef = ref<InstanceType<typeof Sub>>();

const getMessage = (...args: any) => {
  console.log(args);
};

subRef.value?.sayHello();
</script>

<style scoped lang="less">
.p-box {
  border: 1px solid yellowgreen;
  padding: 10px;
}
</style>
```

## 组件通信（兄弟，任意）

兄弟组件间传参有两种方式：

- 通过父组件作为桥梁做事件派发
- 通过全局事件总线（任意组件间）

### 通过父组件作为桥梁做事件派发

父组件：

```vue
<template>
  <div>
    <A @on-click="getMsg"></A>
    <B :msg="messageFromA"></B>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import A from "./components/A.vue";
import B from "./components/B.vue";

// 父组件作为桥梁
const messageFromA = ref("");

const getMsg = (msg: string) => {
  messageFromA.value = msg;
};
</script>
```

兄弟组件 A：

```vue
<template>
  <div class="box">
    <button @click="emitB">派发事件</button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

// 自定义事件
const emit = defineEmits(["on-click"]);

// 点击派发事件
const emitB = () => {
  emit("on-click", "我是A，收到请回答");
};
</script>

<style scoped>
.box {
  height: 200px;
  width: 200px;
  background-color: skyblue;
}
</style>
```

兄弟组件 B：

```vue
<template>
  <div class="box">来自A的信息：{{ msg }}</div>
</template>

<script setup lang="ts">
// 通过props传递信息
defineProps({
  msg: String,
});
</script>

<style scoped>
.box {
  height: 200px;
  width: 200px;
  background-color: yellowgreen;
}
</style>
```

### 通过全局事件总线

`vue2` 中的 `$bus`。第三方类库 `pubsub`，`mitt` 等都可以做这件事。

## 递归组件

递归组件在使用事件会有冒泡产生，记得阻止！

```vue
<template>
  <div @click.stop="onClick(i)" v-for="i in data" class="tree">
    <input type="checkbox" v-model="i.checked" />
    <span>{{ i.name }}</span>
    <Tree v-if="i.childs && i.childs.length > 0" :data="i.childs"></Tree>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
export interface Tree {
  name: string;
  checked: boolean;
  childs?: Tree[];
}

defineProps<{
  data?: Tree[];
}>();

const onClick = (item: Tree) => {
  console.log(item);
};
</script>

<style scoped>
.tree {
  margin-left: 10px;
}
</style>
```

使用递归组件

```vue
<template>
  <Tree :data="data"></Tree>
</template>

<script setup lang="ts">
import { reactive } from "vue";
interface Tree {
  name: string;
  checked: boolean;
  childs?: Tree[];
}

const data = reactive<Tree[]>([
  {
    name: "1",
    checked: true,
    childs: [
      {
        name: "1-1",
        checked: true,
      },
      {
        name: "1-2",
        checked: true,
      },
    ],
  },
  {
    name: "2",
    checked: false,
  },
  {
    name: "3",
    checked: false,
    childs: [
      {
        name: "3-1",
        checked: false,
      },
      {
        name: "3-2",
        checked: false,
        childs: [
          { name: "3-2-1", checked: false },
          {
            name: "3-2-2",
            checked: false,
            childs: [{ name: "3-2-2-1", checked: false }],
          },
        ],
      },
    ],
  },
]);
</script>

<style scoped></style>
```

## 将组件注册为全局组件

```ts
import { createApp } from "vue";
// import { IconStar } from '@arco-design/web-vue/es/icon'
import { createPinia } from "pinia";
import mitt from "mitt";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import Tree from "@/components/Tree.vue";

const app = createApp(App);

// 注册全局组件
app.component("Tree", Tree);

const mit = mitt();

app.use(createPinia());
app.use(router);
app.mount("#app");

app.config.globalProperties.$bus = mit;
```

## 动态组件

使用动态组件用 `ref`, `reactive` 包裹，会使组件里的属性变为响应式，造成性能浪费。
解决办法时使用 `markRaw` 和 `shallowRef`。

```vue
<template>
  <div class="tabContainer">
    <span
      v-for="(btn, index) in btns"
      @click="onSwitch(btn, index)"
      class="btn"
      :class="[active === index ? 'active' : '']"
    >
      {{ btn.name }}
    </span>

    <component :is="comID"></component>
    <component :is="btns[active].com"></component>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, markRaw, shallowRef } from "vue";
import AComponent from "./A.vue";
import BComponent from "./B.vue";
import CComponent from "./C.vue";

const comID = shallowRef(AComponent);

const active = ref(0);

const btns = reactive([
  {
    name: "A组件",
    com: markRaw(AComponent),
  },
  {
    name: "B组件",
    com: markRaw(BComponent),
  },
  {
    name: "C组件",
    com: markRaw(CComponent),
  },
]);

const onSwitch = (btn: any, index: number) => {
  comID.value = btn.com;
  active.value = index;
};
</script>

<style scoped lang="less">
.active {
  background: skyblue;
}
.tabContainer {
  .btn {
    border: 1px solid #000;
    margin: 10px;
    cursor: pointer;
  }
}
</style>
```

## 插槽

插槽知识点：

1. 默认插槽
2. 具名插槽
3. 插槽作用域
4. 动态插槽

```vue
<template>
  <div>
    <button @click="switchDynamic">切换动态插槽</button>
    <MyBody>
      <template #header="{ data, index }"
        >插槽作用域 {{ index }} - {{ data.name }}</template
      >
      <template v-slot:default>我是默认插槽</template>
      <template #footer>我是具名插槽</template>
      <template #[name]>我是动态的</template>
    </MyBody>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MyBody from "./MyBody.vue";

const name = ref("dynamic1");

const switchDynamic = () => {
  if (name.value === "dynamic1") {
    name.value = "dynamic2";
  } else {
    name.value = "dynamic1";
  }
};
</script>

<style scoped lang="less"></style>
```

```vue
<template>
  <div class="mybody">
    <header>
      <div v-for="(item, index) in general108">
        <slot name="header" :data="item" :index="index"></slot>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
    <div>
      <div>dynamic1</div>
      <slot name="dynamic1"></slot>
    </div>
    <div>
      <div>dynamic2</div>
      <slot name="dynamic2"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

interface General {
  name: string;
  nickname: string;
}

const general108 = reactive<General[]>([
  {
    name: "宋江",
    nickname: "及时雨",
  },
  {
    name: "卢俊义",
    nickname: "玉麒麟",
  },
  {
    name: "吴用",
    nickname: "智多星",
  },
  {
    name: "公孙胜",
    nickname: "入云龙",
  },
]);
</script>

<style scoped lang="less">
.mybody {
  header {
    height: 100px;
    background: skyblue;
  }
  main {
    height: 200px;
    background: yellowgreen;
  }
  footer {
    height: 100px;
    background: tomato;
  }
}
</style>
```

## 异步组件

在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件。Vue 提供了 `defineAsyncComponent` 方法来实现此功能。

我们可以打开浏览器开发者工具，将网速调至 Slow 3G 看到骨架效果。

```vue
<template>
  <div>
    <Suspense>
      <AsyncCom />
      <template #fallback>
        <Skeleton />
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

import Skeleton from "./simpleskeleton.vue";
const AsyncCom = defineAsyncComponent(() => import("./asyncCom.vue"));
</script>

<style scoped></style>
```

asyncCom.vue:

```vue
<template>
  <div>name: {{ data.name }}</div>
  <div>age: {{ data.age }}</div>
  <div>nickName: {{ data.nickName }}</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const data = reactive({
  name: "詹姆斯",
  age: 18,
  nickName: "小皇帝",
});
</script>

<style scoped></style>
```

simpleskeleton.vue:

```vue
<template>
  <div>name: xxx</div>
  <div>age: xxx</div>
  <div>nickName: xxx</div>
</template>
```

## async setup

`<script setup>` 中可以使用顶层 `await`。结果代码会被编译成 `async setup()`

:::warning
async setup() 必须与 Suspense 内置组件组合使用，Suspense 目前还是处于实验阶段的特性，会在将来的版本中稳定。
:::

```vue
<template>
  <div>
    <Suspense>
      <AsyncSetup />
      <template #fallback>
        <Skeleton />
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import AsyncSetup from "./asyncSetup.vue";
import Skeleton from "./simpleskeleton.vue";
</script>

<style scoped></style>
```

asyncSetup.vue:

```vue
<template>
  <div>name: {{ data.name }}</div>
  <div>age: {{ data.age }}</div>
  <div>nickName: {{ data.nickName }}</div>
</template>

<script setup lang="ts">
interface Person {
  name: string;
  nickName: string;
  age: number;
}

const getData = () => {
  return new Promise<{
    data: Person;
  }>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          name: "詹姆斯",
          age: 18,
          nickName: "小皇帝",
        },
      });
    }, 2000);
  });
};

// 顶层await
const { data } = await getData();
</script>

<style scoped></style>
```

simpleskeleton.vue:

```vue
<template>
  <div>name: xxx</div>
  <div>age: xxx</div>
  <div>nickName: xxx</div>
</template>
```

## 依赖注入

可以实现父给子，父给孙传参。解决了 `props` 需要逐层传递的问题。

了解更多去[官网](https://cn.vuejs.org/guide/components/provide-inject.html)。也可以在[演练场](https://sfc.vuejs.org/#eNq9U8GO0zAQ/ZWROXTRNnGyQgiFFNH/yCV1nNQlsS3b6baqIiGEBAcu3DjwD4gLl/0dKOIvGCfZ3baXrrTSXiL7zWT85r2ZHZlrHa5bThKSOt7oOnf8TSYB0kKsgdW5tbOMLNQmIz2MgUXrnJLwltWCvcNgXnG4nEGMGZdxSofwbfIc6FCOYj08pfTgFbxaZoR2YLlrNdS5rLCgs/1jotHKONiBNmotCj4Fw0vooDSqgQlyntzlzEcwpHPfDAYyyZS0Djy5mf/xIn6eybHSxQThydQHEUzpQGIk5LY1B8uU5gUiIbYOO9/Bkotq6RJ4FUV689oj16Jwy0NgoUzBTQKx3oBVtSjgWRRFfagQFrveJlDWfEhetdaJchsgT8clFmb45aaP5bWoZCBQKnuAdz1Xzw+JkSkZmg+aXIcrqyRa2BPNxgCqmAzUPYay+HtGls5pm1BqS+a1WtlQmYriKTStdKLhIbdNsDDq2nKDhTPiS+DbHT7Zy3t2Vvwo3PofP3oAsMSdu0E8+nvWtPjYtZenrt0DT+za2MNZEa9Qg/3nr/tvP/bf3//79OXPzw9/bz7+vvk1xbFFY3f9bHfdYzZLyBVn7mSnjldnSBk25iHLcnWs+4tT3e+BJ9W9+w/fzLCc)中亲自试一下。

## attribute 透传

“透传 attribute”指的是传递给一个组件，却没有被该组件声明为 [`props` 或 `emits`](#组件通信-父子) 的 attribute 或者 `v-on` 事件监听器。最常见的例子就是 `class`、`style` 和 `id`。这些透传进来的 attribute 可以在模板的表达式中直接用 `$attrs` 访问到。

- 对于**单根节点**的组件： 透传的 attribute 会自动被添加到根元素上。
- 对于**非单根节点**的组件：没有自动 attribute 透传行为，需显示指定透传位置，否则会抛出警告。

了解更多去[官网](https://cn.vuejs.org/guide/components/attrs.html)。

## DOM 模板解析注意事项

1. 驼峰要转成短横线连字符
2. 不可以使用自闭合标签
3. 元素位置限制

参考[官网](https://cn.vuejs.org/guide/essentials/component-basics.html#dom-template-parsing-caveats)。
