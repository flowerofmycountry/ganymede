import{_ as e,c as a,o as i,a as l}from"./app.1b85acd6.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"组件通信","slug":"组件通信","link":"#组件通信","children":[{"level":3,"title":"websoket","slug":"websoket","link":"#websoket","children":[]},{"level":3,"title":"vue3 内置指令","slug":"vue3-内置指令","link":"#vue3-内置指令","children":[]},{"level":3,"title":"vue3 修饰符","slug":"vue3-修饰符","link":"#vue3-修饰符","children":[]},{"level":3,"title":"es6","slug":"es6","link":"#es6","children":[]},{"level":3,"title":"回流重绘","slug":"回流重绘","link":"#回流重绘","children":[]},{"level":3,"title":"解决浅拷贝 什么时候不能用JSON","slug":"解决浅拷贝-什么时候不能用json","link":"#解决浅拷贝-什么时候不能用json","children":[]},{"level":3,"title":"路由守卫","slug":"路由守卫","link":"#路由守卫","children":[]},{"level":3,"title":"路由模式","slug":"路由模式","link":"#路由模式","children":[]},{"level":3,"title":"mixin","slug":"mixin","link":"#mixin","children":[]},{"level":3,"title":"插槽","slug":"插槽","link":"#插槽","children":[]},{"level":3,"title":"请求 封装过Ajax吗","slug":"请求-封装过ajax吗","link":"#请求-封装过ajax吗","children":[]},{"level":3,"title":"vue3的新特性","slug":"vue3的新特性","link":"#vue3的新特性","children":[]},{"level":3,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[]},{"level":3,"title":"$set","slug":"set","link":"#set","children":[]},{"level":3,"title":"v-if v-show区别使用场景","slug":"v-if-v-show区别使用场景","link":"#v-if-v-show区别使用场景","children":[]},{"level":3,"title":"webpack","slug":"webpack","link":"#webpack","children":[]},{"level":3,"title":"Uniapp","slug":"uniapp","link":"#uniapp","children":[]},{"level":3,"title":"nexttick","slug":"nexttick","link":"#nexttick","children":[]}]},{"level":2,"title":"封装element-ui（tree组件）添加一个不支持的功能如何正常调用","slug":"封装element-ui-tree组件-添加一个不支持的功能如何正常调用","link":"#封装element-ui-tree组件-添加一个不支持的功能如何正常调用","children":[{"level":3,"title":"1、localstorage如果数据量过大的话，使用什么技术（index DB）两面都问了","slug":"_1、localstorage如果数据量过大的话-使用什么技术-index-db-两面都问了","link":"#_1、localstorage如果数据量过大的话-使用什么技术-index-db-两面都问了","children":[]},{"level":3,"title":"2、讲一下最近的项目，难点，怎么解决的","slug":"_2、讲一下最近的项目-难点-怎么解决的","link":"#_2、讲一下最近的项目-难点-怎么解决的","children":[]},{"level":3,"title":"3、本地存储讲一下 localStorage等","slug":"_3、本地存储讲一下-localstorage等","link":"#_3、本地存储讲一下-localstorage等","children":[]},{"level":3,"title":"4、watch和computed区别","slug":"_4、watch和computed区别","link":"#_4、watch和computed区别","children":[]},{"level":3,"title":"5、vue2,vue3 区别","slug":"_5、vue2-vue3-区别","link":"#_5、vue2-vue3-区别","children":[]},{"level":3,"title":"6、组件通信","slug":"_6、组件通信","link":"#_6、组件通信","children":[]},{"level":3,"title":"7、websocket断联怎么处理","slug":"_7、websocket断联怎么处理","link":"#_7、websocket断联怎么处理","children":[]},{"level":3,"title":"8、es6新语法","slug":"_8、es6新语法","link":"#_8、es6新语法","children":[]},{"level":3,"title":"9、promise","slug":"_9、promise","link":"#_9、promise","children":[]},{"level":3,"title":"10、闭包","slug":"_10、闭包","link":"#_10、闭包","children":[]},{"level":3,"title":"11、重排重绘","slug":"_11、重排重绘","link":"#_11、重排重绘","children":[]},{"level":3,"title":"12、query、params区别啥的，hash和history","slug":"_12、query、params区别啥的-hash和history","link":"#_12、query、params区别啥的-hash和history","children":[]},{"level":3,"title":"13、nexttick 原理","slug":"_13、nexttick-原理","link":"#_13、nexttick-原理","children":[]},{"level":3,"title":"14、跨域","slug":"_14、跨域","link":"#_14、跨域","children":[]},{"level":3,"title":"15、git merge 和 rebase 区别","slug":"_15、git-merge-和-rebase-区别","link":"#_15、git-merge-和-rebase-区别","children":[]},{"level":3,"title":"16、uniapp 打包 apk 与 h5 套壳区别","slug":"_16、uniapp-打包-apk-与-h5-套壳区别","link":"#_16、uniapp-打包-apk-与-h5-套壳区别","children":[]},{"level":3,"title":"1.promise。","slug":"_1-promise。","link":"#_1-promise。","children":[]},{"level":3,"title":"2.vue2和3的区别。","slug":"_2-vue2和3的区别。","link":"#_2-vue2和3的区别。","children":[]},{"level":3,"title":"3.setup的原理。","slug":"_3-setup的原理。","link":"#_3-setup的原理。","children":[]},{"level":3,"title":"4闭包。","slug":"_4闭包。","link":"#_4闭包。","children":[]},{"level":3,"title":"5call,apply,bind。","slug":"_5call-apply-bind。","link":"#_5call-apply-bind。","children":[]},{"level":3,"title":"6vue样式修改。","slug":"_6vue样式修改。","link":"#_6vue样式修改。","children":[]},{"level":3,"title":"7路由权限。","slug":"_7路由权限。","link":"#_7路由权限。","children":[]},{"level":3,"title":"8跨域。","slug":"_8跨域。","link":"#_8跨域。","children":[]},{"level":3,"title":"9vuex。","slug":"_9vuex。","link":"#_9vuex。","children":[]},{"level":3,"title":"10就是项目里的一些东西包括用户权限，项目难点，树状结构等等","slug":"_10就是项目里的一些东西包括用户权限-项目难点-树状结构等等","link":"#_10就是项目里的一些东西包括用户权限-项目难点-树状结构等等","children":[]},{"level":3,"title":"vue-router用过吗？怎么实现路由跳转的？路由跳转有几种方法？","slug":"vue-router用过吗-怎么实现路由跳转的-路由跳转有几种方法","link":"#vue-router用过吗-怎么实现路由跳转的-路由跳转有几种方法","children":[]},{"level":3,"title":"es6新语法","slug":"es6新语法","link":"#es6新语法","children":[]},{"level":3,"title":"keep-ailve","slug":"keep-ailve","link":"#keep-ailve","children":[]},{"level":3,"title":"promise","slug":"promise","link":"#promise","children":[]},{"level":3,"title":"echerts","slug":"echerts","link":"#echerts","children":[]},{"level":3,"title":"uiapp","slug":"uiapp","link":"#uiapp","children":[]},{"level":3,"title":"跨域问题","slug":"跨域问题","link":"#跨域问题","children":[]},{"level":3,"title":"本地存储","slug":"本地存储","link":"#本地存储","children":[]},{"level":3,"title":"table渲染数据量大导致堆栈溢出如何解决","slug":"table渲染数据量大导致堆栈溢出如何解决","link":"#table渲染数据量大导致堆栈溢出如何解决","children":[]},{"level":3,"title":"query、params","slug":"query、params","link":"#query、params","children":[]},{"level":3,"title":"hash和history","slug":"hash和history","link":"#hash和history","children":[]},{"level":3,"title":"webpack","slug":"webpack-1","link":"#webpack-1","children":[]},{"level":3,"title":"nginx","slug":"nginx","link":"#nginx","children":[]},{"level":3,"title":"vue2和vue3的区别","slug":"vue2和vue3的区别","link":"#vue2和vue3的区别","children":[]},{"level":3,"title":"项目搭建步骤以及搭建所需package","slug":"项目搭建步骤以及搭建所需package","link":"#项目搭建步骤以及搭建所需package","children":[]},{"level":3,"title":"组件封装","slug":"组件封装","link":"#组件封装","children":[]},{"level":3,"title":"根据权限展示路由","slug":"根据权限展示路由","link":"#根据权限展示路由","children":[]},{"level":3,"title":"微前端","slug":"微前端","link":"#微前端","children":[]},{"level":3,"title":"1、localstorage如果数据量过大的话，使用什么技术（index DB）两面都问了","slug":"_1、localstorage如果数据量过大的话-使用什么技术-index-db-两面都问了-1","link":"#_1、localstorage如果数据量过大的话-使用什么技术-index-db-两面都问了-1","children":[]},{"level":3,"title":"2、讲一下最近的项目，难点，怎么解决的","slug":"_2、讲一下最近的项目-难点-怎么解决的-1","link":"#_2、讲一下最近的项目-难点-怎么解决的-1","children":[]},{"level":3,"title":"3、本地存储讲一下 localStorage等","slug":"_3、本地存储讲一下-localstorage等-1","link":"#_3、本地存储讲一下-localstorage等-1","children":[]},{"level":3,"title":"4、watch和computed区别","slug":"_4、watch和computed区别-1","link":"#_4、watch和computed区别-1","children":[]},{"level":3,"title":"5、uiapp传参","slug":"_5、uiapp传参","link":"#_5、uiapp传参","children":[]},{"level":3,"title":"6、组件通信","slug":"_6、组件通信-1","link":"#_6、组件通信-1","children":[]},{"level":3,"title":"7、websocket断联怎么处理","slug":"_7、websocket断联怎么处理-1","link":"#_7、websocket断联怎么处理-1","children":[]},{"level":3,"title":"8、es6新语法","slug":"_8、es6新语法-1","link":"#_8、es6新语法-1","children":[]},{"level":3,"title":"9、promise","slug":"_9、promise-1","link":"#_9、promise-1","children":[]},{"level":3,"title":"10、闭包","slug":"_10、闭包-1","link":"#_10、闭包-1","children":[]},{"level":3,"title":"11、重排重绘","slug":"_11、重排重绘-1","link":"#_11、重排重绘-1","children":[]}]}],"relativePath":"interview/index.md"}'),r={name:"interview/index.md"},h=l("",103),d=[h];function t(n,s,c,u,o,p){return i(),a("div",null,d)}const k=e(r,[["render",t]]);export{_ as __pageData,k as default};