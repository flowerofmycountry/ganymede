## 枚举

```typescript
enum SEX {
  MALE,
  FEMALE,
}
```

编译后：

```javascript
"use strict";

var SEX;
(function (SEX) {
  SEX[(SEX["MALE"] = 0)] = "MALE";
  SEX[(SEX["FEMALE"] = 1)] = "FEMALE";
})(SEX || (SEX = {}));
```

等价于：

```javascript
"use strict";

var SEX = {};
SEX["MALE"] = 0;
SEX[0] = "MALE";
SEX["FEMALE"] = 1;
SEX[1] = "FEMALE";
```

:::warning
如上面的例子，数字枚举可以反向取值。

而字符串枚举则不可以。
:::

## 常量枚举

按上面的例子，编译后不会生成 SEX 对象，只会在使用的地方直接用值来替换。

```typescript
const enum SEX {
  MALE,
  FEMALE,
}

// 如果不使用则不会编译生成任何代码。
console.log(0 === SEX.MALE);
```

编译后：

```typescript
"use strict";
// 如果不使用则不会编译生成任何代码。
console.log(0 === 0 /* SEX.MALE */);
```
