## ref

在 vue2 中定义响应式对象：

```vue
<script>
// data定义为方法，且返回一个新对象，为了复用
export default {
  data() {
    return {
      name: "老伍",
    };
  },
};
</script>
```

在 vue3 setup 语法糖中：

```vue
<template>
  <div>
    <span>在插值语法中使用ref对象不需要.value</span>
    <hr />
    {{ man.name }}
    <button @click="man.name = '小张'">点击改变Ref</button>
    <hr />
    {{ shallowMan.name }}
    <button @click="shallowMan.name = '小张'">点击改变shallowRef</button>
    <button @click="shallowMan = { name: '小张' }">点击改变shallowRef</button>
    <hr />
    <!--下面发现不生效，其实在模板语法中，
    isRef(man)其实等于isRef(man.value),所以都显示false-->
    man：{{ isRef(man) }}
    <br />
    shallowMan：{{ isRef(shallowMan) }}
    <br />
    poorMan：{{ isRef(poorMan) }}
    <br />
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, isRef } from "vue";
import type { Ref } from "vue";

type Person = {
  name: string;
};

const poorMan = {
  name: "老伍",
};

// const man: Ref<Person> = ref({
//   name: '老伍'
// })
const man = ref<Person>({
  name: "老伍",
});

// 浅层次的响应式
// shallowMan.value.name = 'aaa' 不生效
// shallowMan.value = { name: 'aaa'} 生效
const shallowMan = shallowRef<Person>({
  name: "老伍",
});

console.log(isRef(poorMan)); // false
console.log(isRef(shallowMan)); // false
console.log(isRef(man)); // true
</script>

<style scoped></style>
```

::: warning
在插值语法中使用 ref 对象不需要.value。
如果在模板中写 isRef(man)其实等价与 isRef(man.value)，所以都显示 false
:::

## shallowRef 和 triggerRef

**shallowRef：** ref() 的浅层作用形式。

和 ref() 不同，浅层 ref 的内部值将会原样存储和暴露，并且不会被深层递归地转为响应式。只有对 .value 的访问是响应式的。(即 `shallowRef.value.xxx` 的访问和赋值不做 `track` 和 `trigger`，所以 `shallowRef.value.xxx` 的赋值不会触发视图的更新)

shallowRef() 常常用于对大型数据结构的性能优化或是与外部的状态管理系统集成。

**triggerRef：** 强制触发依赖于一个浅层 ref 的副作用，这通常在对浅引用的内部值进行深度变更后使用。(即触发 `shallowRef.value` 的 `trigger`，所以视图更新)

```vue
<template>
  <div>
    {{ one.name }}
    <hr />
    {{ two.age }}
    <hr />
    <button @click="change1">点我改变值1</button>
    <hr />
    <button @click="change2">点我改变值2</button>
    <hr />
    <button @click="change3">点我改变值3</button>
    <hr />
    <button @click="change4">点我改变值3</button>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, triggerRef } from "vue";

const one = ref({
  name: "wujin",
});

const two = shallowRef({
  age: 12,
});

// 单独修改two.value.age  --> 不变
const change1 = () => {
  two.value.age = 100;
};

// 单独修改two.value  --> 改变
const change2 = () => {
  two.value = {
    age: 200,
  };
};

// triggerRef 强制刷新 shallowRef的值  --> 改变
const change3 = () => {
  two.value.age = 300;
  triggerRef(two);
};

// ref 和 shallowRef 一起用的话，会使shallowRef失效  --> 改变
// 下面这个例子中shallowRef的的值竟然改变了！
// 因为ref中调用了 triggerRef
const change4 = () => {
  one.value.name = "zhang";
  two.value.age = 400;
};
</script>

<style scoped></style>
```

## customRef

下面是官网的例子，实现了 ref 响应式的防抖。

官网中做成了一个 [hook](https://vuejs.org/api/reactivity-advanced.html#customref)，可复用。我这里方便实验，写到了一起。

```vue
<template>
  <div>
    {{ text }}
    <button @click="change">请使劲点我</button>
  </div>
</template>

<script setup lang="ts">
import { customRef } from "vue";

let timeout: number | undefined;

// 通过customRef,实现防抖，停止点击1秒后才响应变化
const MyRef = <T>(value: T) => {
  return customRef((track, trigger) => {
    return {
      get() {
        // 依赖收集
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          // 依赖更新
          trigger();
        }, 1000);
      },
    };
  });
};

const text = MyRef("wujin");

const change = () => {
  text.value = Math.random() + "";
};

// 打开 chrome 的调试工具，设置开启 enable custom formatters
// 会在控制台看到更友好的打印出ref和reactive对象
console.log(text);
</script>

<style scoped></style>
```

::: tip
打开 chrome 的调试工具，设置开启 enable custom formatters。
会在控制台看到更友好的打印出 ref 和 reactive 对象
:::

## reactive 和 shallowReactive

和 `ref`，`shallowRef` 相同，且有同样的问题。
同时使用，会使 `shallowReactive` 被影响，失效。

## readonly 和 shallowReadonly

接受一个对象 (不论是响应式还是普通的) 或是一个 `ref`，返回一个原值的只读代理。

只读代理是深层的：对任何嵌套属性的访问都将是只读的。它的 `ref` 解包行为与 `reactive()` 相同，但解包得到的值是只读的。

要避免深层级的转换行为，请使用 `shallowReadonly()` 作替代。

```vue
<template>
  <div>
    <form action="">
      <input type="text" v-model="form.name" />
      <input type="text" v-model="form.password" />
      <!-- 在form表单中的submit有默认事件，要.prevent修饰符阻止 -->
      <button type="submit" @click.prevent="onSubmit">提交</button>
      <button type="button" @click="onChange">改变1</button>
      <button type="button" @click="onChange2">改变2</button>
      <button type="button" @click="onChange3">改变3</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, readonly } from "vue";

let form = reactive({
  name: "",
  password: "",
});

// readonlyForm 不可改变， 但是form可改变
const readonlyForm = readonly(form);

const onSubmit = () => {
  console.log(form.name, form.password);
};

const onChange = () => {
  // reactive 是proxy代理的对象，直接赋值会破坏响应式结构
  // 无效
  form = {
    name: "",
    password: "",
  };
};

const onChange2 = () => {
  readonlyForm.name = "wang";
  console.log(form, readonlyForm);
};

// readonlyForm虽然无法改变 但是原值改变， 会影响readonlyForm的值
const onChange3 = () => {
  form.name = "wang";
  console.log(form, readonlyForm);
};
</script>

<style scoped></style>
```

## to 系列

### toRef()

基于响应式对象上的一个属性，创建一个对应的 ref。这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然。

对普通对象无用！

```vue
<template>
  <div>normalPerson: {{ normalPerson }}</div>
  <div>reactivePerson: {{ reactivePerson }}</div>
  <button @click="change">change</button>
</template>

<script setup lang="ts">
import { reactive, toRef, toRefs, toRaw } from "vue";

const normalPerson = {
  name: "normal",
  age: 23,
  like: ["篮球"],
};

const reactivePerson = reactive({
  name: "reactive",
  age: 23,
  like: ["篮球"],
});

// 非响应式对象，没有任何用
const noramlLike = toRef(normalPerson, "like");

// 响应式对象 提取
const reactiveLike = toRef(reactivePerson, "like");

const { name } = toRefs(reactivePerson);

const change = () => {
  // 非响应式对象，没有任何用
  noramlLike.value.push("足球");

  // 响应式对象 提取
  reactiveLike.value.push("足球");
  name.value = "reactive toRefs";

  // 将 reactive 变为普通对象
  console.log(reactivePerson, toRaw(reactivePerson));

  // 对 ref 对象无效
  console.log(name, toRaw(name));
};
</script>

<style scoped></style>
```

## computed

```vue
<template>
  <div>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
    <div>{{ fullName1 }}</div>
    <input type="text" v-model="fullName2" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const firstName = ref("111");
const lastName = ref("222");

const fullName1 = computed<string>(() => {
  return firstName.value + "---" + lastName.value;
});

const fullName2 = computed(
  {
    get: () => firstName.value + "~~~~~~" + lastName.value,
    set: (val) => {
      firstName.value = val.split("~~~~~~")[0];
      lastName.value = val.split("~~~~~~")[1];
    },
  },
  {
    onTrack(e) {
      //  收集依赖 firstName lastName
      console.log("onTrack", e);
    },
    onTrigger(e) {
      // 以来更新
      console.log("onTrigger", e);
    },
  }
);
</script>

<style scoped></style>
```

## watch

1. 侦听 ref 的对象，需要开启 deep
2. 侦听 reactive 的对象，无需开启 deep
3. 侦听对象的话，oldvalue 和 newvalue 相同，都是 newvalue
4. 侦听对象中的具体属性，需要函数的形式
5. 可以侦听多个来源，回调函数接受两个数组，分别对应来源数组中的新值和旧值
6. 侦听器返回一个函数，调用后可停止侦听

第三个可选的参数是一个对象，支持以下这些选项：

- immediate：在侦听器创建时立即触发回调。第一次调用时旧值是 undefined。
- deep：如果源是对象，强制深度遍历，以便在深层级变更时触发回调。参考深层侦听器。
- flush：调整回调函数的刷新时机。参考回调的刷新时机及 watchEffect()。
- onTrack / onTrigger：调试侦听器的依赖。参考调试侦听器。

```vue
<template>
  <div>打开控制台查看</div>
  <div>strRef：{{ strRef }}</div>
  <div>objRef{{ objRef }}</div>
  <div>objReactive{{ objReactive }}</div>

  <button @click="strRef += 1">改变strRef</button>
  <button @click="objRef.info.age += 1">改变objRef</button>
  <button @click="objReactive.info.age += 1">改变objReactive</button>

  <button @click="stop()">停止侦听strRef</button>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";

const strRef = ref("");

const objRef = ref({
  info: {
    name: "wujin",
    age: 18,
  },
});

const objReactive = reactive({
  info: {
    name: "wujin",
    age: 18,
  },
});

const stop = watch(strRef, (newValue, oldValue) => {
  console.log("newValue", newValue);
  console.log("oldValue", oldValue);
});

watch(
  objRef,
  (newValue, oldValue) => {
    console.log("newValue", newValue);
    console.log("oldValue", oldValue);
  },
  {
    deep: true, // ref, 开启deep可以监听到， 但是newValue 和 oldValue的值一样，因为监听了对象
    immediate: true, // 在侦听器创建时立即触发回调。第一次调用时旧值是 undefined
  }
);

watch(objReactive, (newValue, oldValue) => {
  console.log("newValue", newValue);
  console.log("oldValue", oldValue);
}); //  reactive, 不用开启deep， 但是newValue 和 oldValue的值一样，因为监听了对象

// 如果想获得oldValue中具体属性值，需要监听某个属性
watch(
  () => objReactive.info.age,
  (newValue, oldValue) => {
    console.log("监听age---newValue", newValue);
    console.log("监听age---oldValue", oldValue);
  }
);
</script>

<style scoped></style>
```

## watchEffect

与 watch 的区别：

1. watch 的依赖收集是通过第一个参数指定的。而 watchEffect 的依赖收集是动态的，在运行的时候收集。且每次运行重新收集依赖。
2. watchEffect 在创建组件后立即运行，然后收集依赖。这个第一运行很有必要，因为没有这一次运行，就没有依赖收集，也就没有下一次触发 watchEffect。

下面的例子很好的说明了上面两点：

```vue
<template>
  <div>打开控制台查看，按注释点击按钮</div>
  <button @click="btn1">btn1</button>
  <button @click="btn2">btn2</button>
  <button @click="btn3">btn3</button>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
const counter = ref(0);
const enabled = ref(false);

// watchEffect 会被立即执行，因为 “enabled“ 为 false, 此时仅收集到 “enabled” 依赖
watchEffect((onCleanup) => {
  onCleanup(() => {
    console.log("用来注册清理回调");
  });
  console.log("watchEffect执行了");
  if (enabled.value) console.log(counter.value);
});

// btn1，最先点。无反应, 不会触发watchEffect，因为没收集到 “counter” 依赖
const btn1 = () => {
  counter.value += 1;
};

// btn2，第二个点。
// 点击前依赖：‘enabled’
// 点击后的依赖变为：‘enabled’，‘counter’
// 点击btn2后再点btn1 ,则会触发watchEffect
const btn2 = () => {
  enabled.value = true;
  counter.value += 1;
};

// btn3，第三个点。
// 点击前的依赖变为：‘enabled’，‘counter’
// 点击后依赖：‘enabled’
// 点击btn3后再点btn1 , 不会触发watchEffect
const btn3 = () => {
  enabled.value = false;
  counter.value += 1;
};
</script>

<style scoped></style>
```
