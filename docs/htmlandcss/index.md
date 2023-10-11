## float

### 1. 设定 float 属性后会有行内块级元素特性。

比如 span 设置 float 后，可以设置宽高。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <!-- 删掉 float 看变化-->
    <style>
      .test {
        float: left;
        background-color: red;
        height: 100px;
        width: 200px;
      }
    </style>
  </head>
  <body>
    <span class="test">你好</span>
  </body>
</html>
```

### 2. 子元素设定 float 属性，父元素没有形成 BFC，会导致高度塌陷。即子元素浮在上空，没有填充父元素。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>float和margin塌陷</title>
    <style>
      .parent {
        /*尝试加 overflow: hidden; 形成BFC*/
        border: 1px solid #000;
      }

      .sub {
        float: left;
        height: 100px;
        width: 100px;
        background-color: skyblue;
      }
    </style>
  </head>
  <body>
    <div class="parent">
      <div class="sub"></div>
    </div>
  </body>
</html>
```

### 3.解决 margin 塌陷:使元素位于不同 BFC

生成 BFC 的几种方法:

- float 属性不为 none
- position 的属性不为 static 或 relative
- overflow 的属性不为 visible
- display 的属性值为 flex,inline-flex,inline-block,table-cell 或 table-caption
- body 本身是一个 BFC

## flex

### 1. flex:1 自伸缩的元素，加 min-height:0 可以使超出内容隐藏但存在。宽度同理。

配合 overflow 来处理超出部分。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>flex和minheight</title>
    <style>
      .parent {
        display: flex;
        flex-direction: column;
        height: 500px;
        width: 200px;
        border: 1px solid #000;
      }

      .sub1 {
        height: 100px;
      }

      .sub2 {
        height: 200px;
      }

      .sub3 {
        flex: 1;
        /* 如果去掉，sub3中的内容会超出容器 */
        min-height: 0;
        overflow: hidden;
        background-color: aqua;
      }
    </style>
  </head>
  <body>
    <div class="parent">
      <div class="sub1"></div>
      <div class="sub2"></div>
      <div class="sub3">
        <div style="height: 1000px"></div>
      </div>
    </div>
  </body>
</html>
```



## class 命名

- 组件化

``` html
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img src="img/logo.svg"/>
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">you have a message</p>
  </div>
</div>
```

- 原子化

``` html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl flex items-center space-x-4">
  <div class="flex-shrink-0">
    <img src="img/logo.svg"/>
  </div>
  <div>
    <h4 class="text-xl font-medium text-black">ChitChat</h4>
    <p class="text-gray-500">you have a message</p>
  </div>
</div>
```

## Tailwind CSS

## vim

- 普通模式 --NORMAL--
- 插入模式 --INSERT--
- 可视模式 --VISUAL--
- 命令模式 :


