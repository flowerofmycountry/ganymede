## 属性

属性是被冻结的

设置默认值： 

```js
函数组件.defaultProps = {
    x:0
}
```

做属性规则校验：

```js
import PropTypes from "prop-types"

函数组件.propTypes = {
    title: PropTypes.string.isRequired;
}
```

## 插槽

```js
const {children} = props

React.Children.forEach(children, (slot)=>{

})
```