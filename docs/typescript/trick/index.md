## 小技巧

#### 分支

相亲信息中，男性问工资，女性问身高，可以使用联合类型表示：

```typescript
type DatingInfo = {
  name: string;
  age: number;
} & (
  | {
      gender: "male";
      salary: 20000;
    }
  | {
      gender: "female";
      height: 170;
    }
);
```
