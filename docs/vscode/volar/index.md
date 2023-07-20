## 全局的定义组件被识别

```typescript
// components.d.ts
declare module "@vue/runtime-core" {
  // Vue 3
  // declare module 'vue' {   // Vue 2.7
  // declare module '@vue/runtime-dom' {  // Vue <= 2.6.14
  export interface GlobalComponents {
    RouterLink: typeof import("vue-router")["RouterLink"];
    RouterView: typeof import("vue-router")["RouterView"];
  }
}

export {};
```

## 自定义组件库组件

两种方式：

1. 参考 arco design

   组件库编写 component.ts。自己项目无需做配置。

2. 参考 element plus

   组件库编写 globals.d.ts。自己项目通过 tsconfig 指定 types。
