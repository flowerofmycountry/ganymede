## 基础

- public 类内部，子类，类外部都可访问
- protected 类内部，子类可访问
- private 类内部可访问
- readonly 只能在构造函数中赋值，不能用于静态属性

下面的注释多看看：

```typescript
class Person {
  height: number; // 默认public
  public readonly gene: string;
  public money?: number; // 可选属性，可以不赋值

  // 如果加上 protected 修饰符，则不能通过person创建实例， 只能通过子类创建实例
  // 和抽象类很像
  constructor(
    private age: number,
    public name: string,
    height: number,
    money?: number
  ) {
    this.height = height;
    this.gene = "活泼的基因";
    this.money = money;
  }

  say() {
    // 实例方法中的this是通过类创建的实例
    console.log(this.age, this.name, this.height);
    // this.gene = "好动的基因" error  只能在构造函数中赋值
  }

  static food: string; // 静态属性
  static eat() {
    // 静态方法中的this是类本身，可访问类上的静态方法和属性
    console.log(this.food);
  }
}

const p = new Person(20, "WUJIN", 190);

p.say();

Person.food = "蛋挞";
Person.eat();

class Student extends Person {
  book: string;
  constructor(name: string, book: string) {
    super(18, name, 160);
    this.book = book;
  }

  // 重写父类方法
  say() {
    // this.age 是private 无法访问
    console.log("重写后的say:", this.name, this.height);
  }
}

const s = new Student("xiaowang", "三国演义");
s.say();

Student.eat(); // 还是蛋挞  共享父类的静态属性
```

## 存取器

```typescript
class Person {
  private _age: number = 0;

  set age(value: number) {
    if (value < 0 || value >= 200) {
      throw new Error("请输入正确的年龄");
    }
    this._age = value;
  }

  get age() {
    return this._age;
  }

  get nextYearAge() {
    return this._age + 1;
  }
}

const p = new Person();

// p.nextYearAge = 1 // 没有set error

// p.age = -1; // 运行时报错

p.age = 10;

console.log(p.age);
console.log(p.nextYearAge);
```

## 抽象类与接口来约束类

抽象类可以有具体实现：

```typescript
abstract class Person {
  abstract name: string;
  abstract myNameIs(): void;

  // 子类可不实现，可重写
  getEyesCount() {
    console.log(2);
  }
}

class Student extends Person {
  public name: string; // 必须实现
  constructor(name: string) {
    super();
    this.name = name;
  }

  // 必须实现
  myNameIs() {
    console.log(this.name);
  }
}

const s = new Student("wujin");
s.getEyesCount();
s.myNameIs();
```

- 接口只定义形状
- 接口也可以继承类，只继承形状，不继承实现

```typescript
class Person {
  public name: string = "";
  say() {
    console.log(this.name);
  }
}

interface PersonInterface extends Person {
  age: number;
}

class Student implements PersonInterface {
  age = 0; // 必须实现
  name = ""; // 必须实现

  // 必须实现
  say() {
    console.log(this.name + "-" + this.age);
  }
}
```
