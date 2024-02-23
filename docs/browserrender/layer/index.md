## 分层 - Layer

现代浏览器基本都会有分层的步骤，古时候是没有的。

分层的目的是： 一个层的元素改变后不会影响别的层重绘。

跟堆叠上下文有关的属性会影响分层结果，如 `z-index`, `opacity`, `transform` 等。

`will-change` 这个属性会很大程度影响决策。

![layer](./images/layer.png)
