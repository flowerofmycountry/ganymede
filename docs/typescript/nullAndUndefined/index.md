## null 和 undefined

默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给其他类型。

但是如果你在 tsconfig.json 指定了 `"strictNullChecks":true` ，null 和 undefined 只能赋值给 void 和它们各自的类型。
