## immer

> 官方介绍：Create the next immutable state tree by simply modifying the current tree.

immer 可以使你像操作原对象一样，操作不可变对象。下面举例说明。

假设你有一个 todo list:

```javascript
const baseState = [
  {
    title: "学习ts",
    done: true,
  },
  {
    title: "尝试immer",
    done: false,
  },
];
```

现在我想增加一条 todo，并更改一条 todo，但是不想改变原 todo list，可以这样做：

```javascript
// 浅拷贝数组，这样对nextState操作不影响原数组
const nextState = baseState.slice();

// 替换第一层元素，因为 nextState 是新拷贝的，这样更改不会影响原数组的[1]元素
nextState[1] = {
  ...nextState[1], // 浅拷贝第一层元素
  done: true, // 期望的更新
};

// 因为 nextState 是新拷贝的， 所以使用 push 方法是安全的
nextState.push({ title: "学习vue源码" });
```

可以看到上面的操作我们不得不小心翼翼的浅拷贝要更改的地方，以免影响原数组。

有了 immer 后我们可以像操作原数组一样，轻松的实现不可变操作：

```javascript
import { produce } from "immer";

const nextState = produce(baseState, (draft) => {
  draft[1].done = true;
  draft.push({ title: "Tweet about it" });
});
```

### 用 immer + vue 实现可回退的编辑

index.vue:

```vue
<template>
  <ul v-for="(user, i) in userArr" :key="i">
    <li>{{ user.name }}-{{ user.age }}</li>
    <button @click="del(i)">删除</button>
  </ul>
  <button @click="add">添加</button>
  <button @click="fallback">撤回</button>

  <hr />
  changes: {{ changes }}
  <hr />
  inverseChanges: {{ inverseChanges }}
</template>

<script setup lang="ts">
import { applyPatches, type Immutable } from "immer";
import { useImmer } from "./immer";

type User = { name: string; age: number };
type ImmUser = Immutable<User>;
type ImmUserList = ReadonlyArray<ImmUser>;

// inverseChanges changes为了视图展示这里做成响应式
const [userArr, updateItems, changes, inverseChanges] = useImmer<ImmUserList>([
  {
    name: "wujin",
    age: 12,
  },
  {
    name: "mayun",
    age: 30,
  },
]);

const add = () => {
  updateItems((draft: User[]) => {
    draft.push({ name: "", age: 0 });
  });
};

const del = (i: number) => {
  updateItems((draft: User[]) => {
    draft.splice(i, 1);
  });
};

const fallback = () => {
  if (inverseChanges.value.length === 0) return;
  userArr.value = applyPatches(userArr.value, [inverseChanges.value.pop()]);
};
</script>
```

immer.ts

```typescript
import { produce, enablePatches } from "immer";
import { shallowRef, type ShallowRef } from "vue";

// 启用对 Patches 的支持。
enablePatches();

export function useImmer<T>(
  baseState: T
): [
  ShallowRef<T>,
  (updater: any) => void,
  ShallowRef<any[]>,
  ShallowRef<any[]>
] {
  const state = shallowRef(baseState);

  const update = (updater: any) => {
    state.value = produce<T>(
      state.value,
      updater,
      (patches, inversePatches) => {
        // 要开启 才生效
        // 产生的第三个参数是一个回调，patches 将从这里产生
        changes.value.push(...patches);
        inverseChanges.value.push(...inversePatches);
      }
    );
  };

  // 用于 merge 合并
  const changes = shallowRef<any[]>([]);
  // 用于回退操作
  const inverseChanges = shallowRef<any[]>([]);

  return [state, update, changes, inverseChanges];
}
```

## mitt

> 官方介绍：Tiny 200b functional event emitter / pubsub.

### vue3 中的应用

main.ts

```typescript
import { createApp } from "vue";
import { createPinia } from "pinia";
import mitt from "mitt";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import Tree from "@/components/Tree.vue";

const app = createApp(App);

app.component("Tree", Tree);

const mit = mitt();

app.use(createPinia());
app.use(router);
app.mount("#app");

app.config.globalProperties.$bus = mit;
```

mitt.d.ts

```typescript
declare let atest: boolean;
import "@vue/runtime-core";
import mit from "mitt";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $bus: ReturnType<typeof mit>;
  }
}
```

:::warning
该声明文件内容含有 import,不可与全局的声明文件写到一起，否则全局声明会失效。具体参考[声明文件](/typescript/settings/)。
:::

### 源码

```typescript
// 定义 event key 的类型
export type EventType = string | symbol;

// An event handler can take an optional event argument
// and should not return a value
export type Handler<T = unknown> = (event: T) => void;
export type WildcardHandler<T = Record<string, unknown>> = (
  type: keyof T,
  event: T[keyof T]
) => void;

// An array of all currently registered event handlers for a type
export type EventHandlerList<T = unknown> = Array<Handler<T>>;
export type WildCardEventHandlerList<T = Record<string, unknown>> = Array<
  WildcardHandler<T>
>;

// A map of event types and their corresponding event handlers.
export type EventHandlerMap<Events extends Record<EventType, unknown>> = Map<
  keyof Events | "*",
  EventHandlerList<Events[keyof Events]> | WildCardEventHandlerList<Events>
>;

export interface Emitter<Events extends Record<EventType, unknown>> {
  all: EventHandlerMap<Events>;

  on<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): void;
  on(type: "*", handler: WildcardHandler<Events>): void;

  off<Key extends keyof Events>(
    type: Key,
    handler?: Handler<Events[Key]>
  ): void;
  off(type: "*", handler: WildcardHandler<Events>): void;

  emit<Key extends keyof Events>(type: Key, event: Events[Key]): void;
  emit<Key extends keyof Events>(
    type: undefined extends Events[Key] ? Key : never
  ): void;
}

/**
 * Mitt: Tiny (~200b) functional event emitter / pubsub.
 * @name mitt
 * @returns {Mitt}
 */
export default function mitt<Events extends Record<EventType, unknown>>(
  all?: EventHandlerMap<Events>
): Emitter<Events> {
  type GenericEventHandler =
    | Handler<Events[keyof Events]>
    | WildcardHandler<Events>;
  all = all || new Map();

  return {
    /**
     * A Map of event names to registered handler functions.
     */
    all,

    /**
     * Register an event handler for the given type.
     * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
     * @param {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on<Key extends keyof Events>(type: Key, handler: GenericEventHandler) {
      const handlers: Array<GenericEventHandler> | undefined = all!.get(type);
      if (handlers) {
        handlers.push(handler);
      } else {
        all!.set(type, [handler] as EventHandlerList<Events[keyof Events]>);
      }
    },

    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    off<Key extends keyof Events>(type: Key, handler?: GenericEventHandler) {
      const handlers: Array<GenericEventHandler> | undefined = all!.get(type);
      if (handlers) {
        if (handler) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        } else {
          all!.set(type, []);
        }
      }
    },

    /**
     * Invoke all handlers for the given type.
     * If present, `'*'` handlers are invoked after type-matched handlers.
     *
     * Note: Manually firing '*' handlers is not supported.
     *
     * @param {string|symbol} type The event type to invoke
     * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit<Key extends keyof Events>(type: Key, evt?: Events[Key]) {
      let handlers = all!.get(type);
      if (handlers) {
        (handlers as EventHandlerList<Events[keyof Events]>)
          .slice()
          .map((handler) => {
            handler(evt!);
          });
      }

      handlers = all!.get("*");
      if (handlers) {
        (handlers as WildCardEventHandlerList<Events>)
          .slice()
          .map((handler) => {
            handler(type, evt!);
          });
      }
    },
  };
}
```
