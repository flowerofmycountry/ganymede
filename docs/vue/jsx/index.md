## jsx 和 tsx

- v-show 支持
- v-if 不支持 用三元表达式答题
- ref 不会自动解包，需要手动 .value
- v-for 不支持 用 map 代替
- v-bind 用 {} 代替

### 写法一

```tsx
export default function () {
  return (
    <div>
      <input type="button" value="按我" />
    </div>
  );
}
```

### 写法二

```tsx
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {
      name: "喜刷刷",
    };
  },
  render() {
    return <div>{this.name}</div>;
  },
});
```

### 写法三

```tsx
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    age: Number,
  },
  emits: ["on-click"],
  setup(props, { emit }) {
    const name = ref("小司机");
    const fn = () => {
      alert("触发了");
      emit("on-click", name);
    };
    return () => (
      <div onClick={() => fn()}>{name.value + ": " + props.age}</div>
    );
  },
});
```
