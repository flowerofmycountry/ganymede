import{_ as e,c as a,o as i,a as l}from"./app.1b85acd6.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"组件通信","slug":"组件通信","link":"#组件通信","children":[{"level":3,"title":"websoket","slug":"websoket","link":"#websoket","children":[]},{"level":3,"title":"vue3 内置指令","slug":"vue3-内置指令","link":"#vue3-内置指令","children":[]},{"level":3,"title":"vue3 修饰符","slug":"vue3-修饰符","link":"#vue3-修饰符","children":[]},{"level":3,"title":"es6","slug":"es6","link":"#es6","children":[]},{"level":3,"title":"回流重绘","slug":"回流重绘","link":"#回流重绘","children":[]},{"level":3,"title":"解决浅拷贝 什么时候不能用JSON","slug":"解决浅拷贝-什么时候不能用json","link":"#解决浅拷贝-什么时候不能用json","children":[]},{"level":3,"title":"路由守卫","slug":"路由守卫","link":"#路由守卫","children":[]},{"level":3,"title":"路由模式","slug":"路由模式","link":"#路由模式","children":[]},{"level":3,"title":"mixin","slug":"mixin","link":"#mixin","children":[]},{"level":3,"title":"插槽","slug":"插槽","link":"#插槽","children":[]},{"level":3,"title":"请求 封装过Ajax吗","slug":"请求-封装过ajax吗","link":"#请求-封装过ajax吗","children":[]},{"level":3,"title":"vue3的新特性","slug":"vue3的新特性","link":"#vue3的新特性","children":[]},{"level":3,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[]},{"level":3,"title":"$set","slug":"set","link":"#set","children":[]},{"level":3,"title":"v-if v-show区别使用场景","slug":"v-if-v-show区别使用场景","link":"#v-if-v-show区别使用场景","children":[]},{"level":3,"title":"webpack","slug":"webpack","link":"#webpack","children":[]},{"level":3,"title":"Uniapp","slug":"uniapp","link":"#uniapp","children":[]},{"level":3,"title":"nexttick","slug":"nexttick","link":"#nexttick","children":[]}]},{"level":2,"title":"封装element-ui（tree组件）添加一个不支持的功能如何正常调用","slug":"封装element-ui-tree组件-添加一个不支持的功能如何正常调用","link":"#封装element-ui-tree组件-添加一个不支持的功能如何正常调用","children":[{"level":3,"title":"1、localstorage如果数据量过大的话，使用什么技术（index DB）两面都问了","slug":"_1、localstorage如果数据量过大的话-使用什么技术-index-db-两面都问了","link":"#_1、localstorage如果数据量过大的话-使用什么技术-index-db-两面都问了","children":[]},{"level":3,"title":"2、讲一下最近的项目，难点，怎么解决的","slug":"_2、讲一下最近的项目-难点-怎么解决的","link":"#_2、讲一下最近的项目-难点-怎么解决的","children":[]},{"level":3,"title":"3、本地存储讲一下 localStorage等","slug":"_3、本地存储讲一下-localstorage等","link":"#_3、本地存储讲一下-localstorage等","children":[]},{"level":3,"title":"4、watch和computed区别","slug":"_4、watch和computed区别","link":"#_4、watch和computed区别","children":[]},{"level":3,"title":"5、vue2,vue3 区别","slug":"_5、vue2-vue3-区别","link":"#_5、vue2-vue3-区别","children":[]},{"level":3,"title":"6、组件通信","slug":"_6、组件通信","link":"#_6、组件通信","children":[]},{"level":3,"title":"7、websocket断联怎么处理","slug":"_7、websocket断联怎么处理","link":"#_7、websocket断联怎么处理","children":[]},{"level":3,"title":"8、es6新语法","slug":"_8、es6新语法","link":"#_8、es6新语法","children":[]},{"level":3,"title":"9、promise","slug":"_9、promise","link":"#_9、promise","children":[]},{"level":3,"title":"10、闭包","slug":"_10、闭包","link":"#_10、闭包","children":[]},{"level":3,"title":"11、重排重绘","slug":"_11、重排重绘","link":"#_11、重排重绘","children":[]},{"level":3,"title":"12、query、params区别啥的，hash和history","slug":"_12、query、params区别啥的-hash和history","link":"#_12、query、params区别啥的-hash和history","children":[]},{"level":3,"title":"13、nexttick 原理","slug":"_13、nexttick-原理","link":"#_13、nexttick-原理","children":[]},{"level":3,"title":"14、跨域","slug":"_14、跨域","link":"#_14、跨域","children":[]},{"level":3,"title":"15、git merge 和 rebase 区别","slug":"_15、git-merge-和-rebase-区别","link":"#_15、git-merge-和-rebase-区别","children":[]},{"level":3,"title":"16、uniapp 打包 apk 与 h5 套壳区别","slug":"_16、uniapp-打包-apk-与-h5-套壳区别","link":"#_16、uniapp-打包-apk-与-h5-套壳区别","children":[]},{"level":3,"title":"1.promise。","slug":"_1-promise。","link":"#_1-promise。","children":[]},{"level":3,"title":"2.vue2和3的区别。","slug":"_2-vue2和3的区别。","link":"#_2-vue2和3的区别。","children":[]},{"level":3,"title":"3.setup的原理。","slug":"_3-setup的原理。","link":"#_3-setup的原理。","children":[]},{"level":3,"title":"4闭包。","slug":"_4闭包。","link":"#_4闭包。","children":[]},{"level":3,"title":"5call,apply,bind。","slug":"_5call-apply-bind。","link":"#_5call-apply-bind。","children":[]},{"level":3,"title":"6vue样式修改。","slug":"_6vue样式修改。","link":"#_6vue样式修改。","children":[]},{"level":3,"title":"7路由权限。","slug":"_7路由权限。","link":"#_7路由权限。","children":[]},{"level":3,"title":"8跨域。","slug":"_8跨域。","link":"#_8跨域。","children":[]},{"level":3,"title":"9vuex。","slug":"_9vuex。","link":"#_9vuex。","children":[]},{"level":3,"title":"10就是项目里的一些东西包括用户权限，项目难点，树状结构等等","slug":"_10就是项目里的一些东西包括用户权限-项目难点-树状结构等等","link":"#_10就是项目里的一些东西包括用户权限-项目难点-树状结构等等","children":[]},{"level":3,"title":"vue-router用过吗？怎么实现路由跳转的？路由跳转有几种方法？","slug":"vue-router用过吗-怎么实现路由跳转的-路由跳转有几种方法","link":"#vue-router用过吗-怎么实现路由跳转的-路由跳转有几种方法","children":[]},{"level":3,"title":"es6新语法","slug":"es6新语法","link":"#es6新语法","children":[]},{"level":3,"title":"keep-ailve","slug":"keep-ailve","link":"#keep-ailve","children":[]},{"level":3,"title":"promise","slug":"promise","link":"#promise","children":[]},{"level":3,"title":"echerts","slug":"echerts","link":"#echerts","children":[]},{"level":3,"title":"uiapp","slug":"uiapp","link":"#uiapp","children":[]},{"level":3,"title":"跨域问题","slug":"跨域问题","link":"#跨域问题","children":[]},{"level":3,"title":"本地存储","slug":"本地存储","link":"#本地存储","children":[]},{"level":3,"title":"table渲染数据量大导致堆栈溢出如何解决","slug":"table渲染数据量大导致堆栈溢出如何解决","link":"#table渲染数据量大导致堆栈溢出如何解决","children":[]},{"level":3,"title":"query、params","slug":"query、params","link":"#query、params","children":[]},{"level":3,"title":"hash和history","slug":"hash和history","link":"#hash和history","children":[]},{"level":3,"title":"webpack","slug":"webpack-1","link":"#webpack-1","children":[]},{"level":3,"title":"nginx","slug":"nginx","link":"#nginx","children":[]},{"level":3,"title":"vue2和vue3的区别","slug":"vue2和vue3的区别","link":"#vue2和vue3的区别","children":[]},{"level":3,"title":"项目搭建步骤以及搭建所需package","slug":"项目搭建步骤以及搭建所需package","link":"#项目搭建步骤以及搭建所需package","children":[]},{"level":3,"title":"组件封装","slug":"组件封装","link":"#组件封装","children":[]},{"level":3,"title":"根据权限展示路由","slug":"根据权限展示路由","link":"#根据权限展示路由","children":[]},{"level":3,"title":"微前端","slug":"微前端","link":"#微前端","children":[]},{"level":3,"title":"1、localstorage如果数据量过大的话，使用什么技术（index DB）两面都问了","slug":"_1、localstorage如果数据量过大的话-使用什么技术-index-db-两面都问了-1","link":"#_1、localstorage如果数据量过大的话-使用什么技术-index-db-两面都问了-1","children":[]},{"level":3,"title":"2、讲一下最近的项目，难点，怎么解决的","slug":"_2、讲一下最近的项目-难点-怎么解决的-1","link":"#_2、讲一下最近的项目-难点-怎么解决的-1","children":[]},{"level":3,"title":"3、本地存储讲一下 localStorage等","slug":"_3、本地存储讲一下-localstorage等-1","link":"#_3、本地存储讲一下-localstorage等-1","children":[]},{"level":3,"title":"4、watch和computed区别","slug":"_4、watch和computed区别-1","link":"#_4、watch和computed区别-1","children":[]},{"level":3,"title":"5、uiapp传参","slug":"_5、uiapp传参","link":"#_5、uiapp传参","children":[]},{"level":3,"title":"6、组件通信","slug":"_6、组件通信-1","link":"#_6、组件通信-1","children":[]},{"level":3,"title":"7、websocket断联怎么处理","slug":"_7、websocket断联怎么处理-1","link":"#_7、websocket断联怎么处理-1","children":[]},{"level":3,"title":"8、es6新语法","slug":"_8、es6新语法-1","link":"#_8、es6新语法-1","children":[]},{"level":3,"title":"9、promise","slug":"_9、promise-1","link":"#_9、promise-1","children":[]},{"level":3,"title":"10、闭包","slug":"_10、闭包-1","link":"#_10、闭包-1","children":[]},{"level":3,"title":"11、重排重绘","slug":"_11、重排重绘-1","link":"#_11、重排重绘-1","children":[]}]}],"relativePath":"interview/index.md"}'),r={name:"interview/index.md"},h=l('<h2 id="组件通信" tabindex="-1">组件通信 <a class="header-anchor" href="#组件通信" aria-hidden="true">#</a></h2><h3 id="websoket" tabindex="-1"><a href="https://geek-docs.com/websocket/websocket-tutorials/websockets-overview.html" target="_blank" rel="noreferrer">websoket</a> <a class="header-anchor" href="#websoket" aria-hidden="true">#</a></h3><h3 id="vue3-内置指令" tabindex="-1">vue3 内置指令 <a class="header-anchor" href="#vue3-内置指令" aria-hidden="true">#</a></h3><p><code>v-bind</code> 动态的绑定一个或多个 attribute，也可以是组件的 prop。</p><p>动态地绑定 HTML 属性或组件 prop 到表达式。例如：<code>v-bind:title=&quot;message&quot;</code> 绑定元素的 <code>title</code> 属性到 Vue 实例的 <code>message</code> 属性的值。</p><p>常用组件库封装中attribute透传：<code>v-bind=&quot;$attrs&quot;</code> <code>v-bind=&quot;$listeners&quot;</code></p><p><code>v-model</code></p><p><code>v-on</code></p><p><code>v-if</code></p><p><code>v-for</code> <code>v-show</code> <code>v-else</code> <code>v-else-if</code> <code>v-pre</code> <code>v-cloak</code> <code>v-once</code> <code>v-html</code></p><p><code>v-text</code> 更新元素的文本内容。</p><p><code>v-slot</code></p><p><code>v-is</code></p><h3 id="vue3-修饰符" tabindex="-1">vue3 修饰符 <a class="header-anchor" href="#vue3-修饰符" aria-hidden="true">#</a></h3><p>事件修饰符:</p><ul><li>.stop</li><li>.prevent</li><li>.self</li><li>.capture</li><li>.once</li><li>.passive</li></ul><p>（键盘，鼠标）按键修饰符:</p><ul><li>.exact 修饰符允许控制触发一个事件所需的确定组合的系统按键修饰符。</li><li>.enter</li><li>.tab</li><li>.left</li><li>.right</li><li>.middle</li><li>...</li></ul><p>v-model 修饰符:</p><ul><li>.lazy</li><li>.number</li><li>.trim</li></ul><h3 id="es6" tabindex="-1">es6 <a class="header-anchor" href="#es6" aria-hidden="true">#</a></h3><h3 id="回流重绘" tabindex="-1">回流重绘 <a class="header-anchor" href="#回流重绘" aria-hidden="true">#</a></h3><h3 id="解决浅拷贝-什么时候不能用json" tabindex="-1">解决浅拷贝 什么时候不能用JSON <a class="header-anchor" href="#解决浅拷贝-什么时候不能用json" aria-hidden="true">#</a></h3><h3 id="路由守卫" tabindex="-1">路由守卫 <a class="header-anchor" href="#路由守卫" aria-hidden="true">#</a></h3><h3 id="路由模式" tabindex="-1">路由模式 <a class="header-anchor" href="#路由模式" aria-hidden="true">#</a></h3><h3 id="mixin" tabindex="-1">mixin <a class="header-anchor" href="#mixin" aria-hidden="true">#</a></h3><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-hidden="true">#</a></h3><h3 id="请求-封装过ajax吗" tabindex="-1">请求 封装过Ajax吗 <a class="header-anchor" href="#请求-封装过ajax吗" aria-hidden="true">#</a></h3><h3 id="vue3的新特性" tabindex="-1">vue3的新特性 <a class="header-anchor" href="#vue3的新特性" aria-hidden="true">#</a></h3><h3 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-hidden="true">#</a></h3><h3 id="set" tabindex="-1">$set <a class="header-anchor" href="#set" aria-hidden="true">#</a></h3><h3 id="v-if-v-show区别使用场景" tabindex="-1">v-if v-show区别使用场景 <a class="header-anchor" href="#v-if-v-show区别使用场景" aria-hidden="true">#</a></h3><h3 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-hidden="true">#</a></h3><h3 id="uniapp" tabindex="-1">Uniapp <a class="header-anchor" href="#uniapp" aria-hidden="true">#</a></h3><h3 id="nexttick" tabindex="-1">nexttick <a class="header-anchor" href="#nexttick" aria-hidden="true">#</a></h3><h2 id="封装element-ui-tree组件-添加一个不支持的功能如何正常调用" tabindex="-1">封装element-ui（tree组件）添加一个不支持的功能如何正常调用 <a class="header-anchor" href="#封装element-ui-tree组件-添加一个不支持的功能如何正常调用" aria-hidden="true">#</a></h2><h3 id="_1、localstorage如果数据量过大的话-使用什么技术-index-db-两面都问了" tabindex="-1">1、localstorage如果数据量过大的话，使用什么技术（index DB）两面都问了 <a class="header-anchor" href="#_1、localstorage如果数据量过大的话-使用什么技术-index-db-两面都问了" aria-hidden="true">#</a></h3><h3 id="_2、讲一下最近的项目-难点-怎么解决的" tabindex="-1">2、讲一下最近的项目，难点，怎么解决的 <a class="header-anchor" href="#_2、讲一下最近的项目-难点-怎么解决的" aria-hidden="true">#</a></h3><h3 id="_3、本地存储讲一下-localstorage等" tabindex="-1">3、本地存储讲一下 localStorage等 <a class="header-anchor" href="#_3、本地存储讲一下-localstorage等" aria-hidden="true">#</a></h3><h3 id="_4、watch和computed区别" tabindex="-1">4、watch和computed区别 <a class="header-anchor" href="#_4、watch和computed区别" aria-hidden="true">#</a></h3><h3 id="_5、vue2-vue3-区别" tabindex="-1">5、vue2,vue3 区别 <a class="header-anchor" href="#_5、vue2-vue3-区别" aria-hidden="true">#</a></h3><h3 id="_6、组件通信" tabindex="-1">6、组件通信 <a class="header-anchor" href="#_6、组件通信" aria-hidden="true">#</a></h3><h3 id="_7、websocket断联怎么处理" tabindex="-1">7、websocket断联怎么处理 <a class="header-anchor" href="#_7、websocket断联怎么处理" aria-hidden="true">#</a></h3><h3 id="_8、es6新语法" tabindex="-1">8、es6新语法 <a class="header-anchor" href="#_8、es6新语法" aria-hidden="true">#</a></h3><h3 id="_9、promise" tabindex="-1">9、promise <a class="header-anchor" href="#_9、promise" aria-hidden="true">#</a></h3><h3 id="_10、闭包" tabindex="-1">10、闭包 <a class="header-anchor" href="#_10、闭包" aria-hidden="true">#</a></h3><h3 id="_11、重排重绘" tabindex="-1">11、重排重绘 <a class="header-anchor" href="#_11、重排重绘" aria-hidden="true">#</a></h3><h3 id="_12、query、params区别啥的-hash和history" tabindex="-1">12、query、params区别啥的，hash和history <a class="header-anchor" href="#_12、query、params区别啥的-hash和history" aria-hidden="true">#</a></h3><h3 id="_13、nexttick-原理" tabindex="-1">13、nexttick 原理 <a class="header-anchor" href="#_13、nexttick-原理" aria-hidden="true">#</a></h3><h3 id="_14、跨域" tabindex="-1">14、跨域 <a class="header-anchor" href="#_14、跨域" aria-hidden="true">#</a></h3><h3 id="_15、git-merge-和-rebase-区别" tabindex="-1">15、git merge 和 rebase 区别 <a class="header-anchor" href="#_15、git-merge-和-rebase-区别" aria-hidden="true">#</a></h3><h3 id="_16、uniapp-打包-apk-与-h5-套壳区别" tabindex="-1">16、uniapp 打包 apk 与 h5 套壳区别 <a class="header-anchor" href="#_16、uniapp-打包-apk-与-h5-套壳区别" aria-hidden="true">#</a></h3><h3 id="_1-promise。" tabindex="-1">1.promise。 <a class="header-anchor" href="#_1-promise。" aria-hidden="true">#</a></h3><h3 id="_2-vue2和3的区别。" tabindex="-1">2.vue2和3的区别。 <a class="header-anchor" href="#_2-vue2和3的区别。" aria-hidden="true">#</a></h3><h3 id="_3-setup的原理。" tabindex="-1">3.setup的原理。 <a class="header-anchor" href="#_3-setup的原理。" aria-hidden="true">#</a></h3><h3 id="_4闭包。" tabindex="-1">4闭包。 <a class="header-anchor" href="#_4闭包。" aria-hidden="true">#</a></h3><h3 id="_5call-apply-bind。" tabindex="-1">5call,apply,bind。 <a class="header-anchor" href="#_5call-apply-bind。" aria-hidden="true">#</a></h3><h3 id="_6vue样式修改。" tabindex="-1">6vue样式修改。 <a class="header-anchor" href="#_6vue样式修改。" aria-hidden="true">#</a></h3><h3 id="_7路由权限。" tabindex="-1">7路由权限。 <a class="header-anchor" href="#_7路由权限。" aria-hidden="true">#</a></h3><h3 id="_8跨域。" tabindex="-1">8跨域。 <a class="header-anchor" href="#_8跨域。" aria-hidden="true">#</a></h3><h3 id="_9vuex。" tabindex="-1">9vuex。 <a class="header-anchor" href="#_9vuex。" aria-hidden="true">#</a></h3><h3 id="_10就是项目里的一些东西包括用户权限-项目难点-树状结构等等" tabindex="-1">10就是项目里的一些东西包括用户权限，项目难点，树状结构等等 <a class="header-anchor" href="#_10就是项目里的一些东西包括用户权限-项目难点-树状结构等等" aria-hidden="true">#</a></h3><h3 id="vue-router用过吗-怎么实现路由跳转的-路由跳转有几种方法" tabindex="-1">vue-router用过吗？怎么实现路由跳转的？路由跳转有几种方法？ <a class="header-anchor" href="#vue-router用过吗-怎么实现路由跳转的-路由跳转有几种方法" aria-hidden="true">#</a></h3><h3 id="es6新语法" tabindex="-1">es6新语法 <a class="header-anchor" href="#es6新语法" aria-hidden="true">#</a></h3><h3 id="keep-ailve" tabindex="-1">keep-ailve <a class="header-anchor" href="#keep-ailve" aria-hidden="true">#</a></h3><h3 id="promise" tabindex="-1">promise <a class="header-anchor" href="#promise" aria-hidden="true">#</a></h3><h3 id="echerts" tabindex="-1">echerts <a class="header-anchor" href="#echerts" aria-hidden="true">#</a></h3><h3 id="uiapp" tabindex="-1">uiapp <a class="header-anchor" href="#uiapp" aria-hidden="true">#</a></h3><h3 id="跨域问题" tabindex="-1">跨域问题 <a class="header-anchor" href="#跨域问题" aria-hidden="true">#</a></h3><h3 id="本地存储" tabindex="-1">本地存储 <a class="header-anchor" href="#本地存储" aria-hidden="true">#</a></h3><h3 id="table渲染数据量大导致堆栈溢出如何解决" tabindex="-1">table渲染数据量大导致堆栈溢出如何解决 <a class="header-anchor" href="#table渲染数据量大导致堆栈溢出如何解决" aria-hidden="true">#</a></h3><h3 id="query、params" tabindex="-1">query、params <a class="header-anchor" href="#query、params" aria-hidden="true">#</a></h3><h3 id="hash和history" tabindex="-1">hash和history <a class="header-anchor" href="#hash和history" aria-hidden="true">#</a></h3><h3 id="webpack-1" tabindex="-1">webpack <a class="header-anchor" href="#webpack-1" aria-hidden="true">#</a></h3><h3 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h3><h3 id="vue2和vue3的区别" tabindex="-1">vue2和vue3的区别 <a class="header-anchor" href="#vue2和vue3的区别" aria-hidden="true">#</a></h3><h3 id="项目搭建步骤以及搭建所需package" tabindex="-1">项目搭建步骤以及搭建所需package <a class="header-anchor" href="#项目搭建步骤以及搭建所需package" aria-hidden="true">#</a></h3><h3 id="组件封装" tabindex="-1">组件封装 <a class="header-anchor" href="#组件封装" aria-hidden="true">#</a></h3><h3 id="根据权限展示路由" tabindex="-1">根据权限展示路由 <a class="header-anchor" href="#根据权限展示路由" aria-hidden="true">#</a></h3><h3 id="微前端" tabindex="-1">微前端 <a class="header-anchor" href="#微前端" aria-hidden="true">#</a></h3><h3 id="_1、localstorage如果数据量过大的话-使用什么技术-index-db-两面都问了-1" tabindex="-1">1、localstorage如果数据量过大的话，使用什么技术（index DB）两面都问了 <a class="header-anchor" href="#_1、localstorage如果数据量过大的话-使用什么技术-index-db-两面都问了-1" aria-hidden="true">#</a></h3><h3 id="_2、讲一下最近的项目-难点-怎么解决的-1" tabindex="-1">2、讲一下最近的项目，难点，怎么解决的 <a class="header-anchor" href="#_2、讲一下最近的项目-难点-怎么解决的-1" aria-hidden="true">#</a></h3><h3 id="_3、本地存储讲一下-localstorage等-1" tabindex="-1">3、本地存储讲一下 localStorage等 <a class="header-anchor" href="#_3、本地存储讲一下-localstorage等-1" aria-hidden="true">#</a></h3><h3 id="_4、watch和computed区别-1" tabindex="-1">4、watch和computed区别 <a class="header-anchor" href="#_4、watch和computed区别-1" aria-hidden="true">#</a></h3><h3 id="_5、uiapp传参" tabindex="-1">5、uiapp传参 <a class="header-anchor" href="#_5、uiapp传参" aria-hidden="true">#</a></h3><h3 id="_6、组件通信-1" tabindex="-1">6、组件通信 <a class="header-anchor" href="#_6、组件通信-1" aria-hidden="true">#</a></h3><h3 id="_7、websocket断联怎么处理-1" tabindex="-1">7、websocket断联怎么处理 <a class="header-anchor" href="#_7、websocket断联怎么处理-1" aria-hidden="true">#</a></h3><h3 id="_8、es6新语法-1" tabindex="-1">8、es6新语法 <a class="header-anchor" href="#_8、es6新语法-1" aria-hidden="true">#</a></h3><h3 id="_9、promise-1" tabindex="-1">9、promise <a class="header-anchor" href="#_9、promise-1" aria-hidden="true">#</a></h3><h3 id="_10、闭包-1" tabindex="-1">10、闭包 <a class="header-anchor" href="#_10、闭包-1" aria-hidden="true">#</a></h3><h3 id="_11、重排重绘-1" tabindex="-1">11、重排重绘 <a class="header-anchor" href="#_11、重排重绘-1" aria-hidden="true">#</a></h3><p>还有一些，都是基础的query、params区别啥的，hash和history</p><p>vue2中computed与watch哪个有缓存机制 如何解决跨域问题 , request all 如何使用的 , css三大特性以及那些属性可以继承 , less scss 有什么区别 是否使用过css变量 简单讲一讲 , 然后vue3 he vue2 父子组件传值有哪些不同 , setup语法糖 , uniapp 如何下拉刷新和上拉加载 主要是项目 围绕项目的混入 mixins 鉴权 tree用法，echart 3d，vue2,vue3的区别</p><p>盒子水平垂直居中 vue diff算法 修改UI框架（例如element-ui）样式-----主要是想知道那个css deep属性 css特性 多维数组是否使用过 树状图自定义 vuex刷新丢失怎么解决 vue2和vue3的优缺点 localstorage sessstorage cookie的区别 动态路由 文本编辑器二次开发 项目遇到的难点和解决办法</p><p>$set 和 $nextTick 的作用和原理； create 里面怎么操作 dom 修饰符都有什么<br> 媒体查询 rem<br> 还有一些项目中的问题</p><p>Vue.的生命周期你在项目中经常封装的组件有哪些Vue.中操作 dom.在哪个生命周期里操作 Vuex Vue2 和 vue3 有什么区别Uniapp的生命周期Axios 的二次封装返回重连以及重复取消Uniapp的页面跳转项目上的东西</p><p>1，父子组件传值 2，WebSocket 3cooike 4minxin 5组件封装 6项目中遇到什么难点如何解决</p><p>vue组件传参，登录注册权限怎么实现的，keep-alive，component和watch区别，hash和history的区别，query和params区别， rem 媒体查询 vue2和3的区别</p><p>面vue ①dom元素实现垂直水平居中的方法 ②promise用过吗？ 里边的几个方法概括一下，实用场景 ③vue2和vue3有什么区别？ ④keep-alive用过吗？主要什么作用，怎么做优化的 ⑤vuex用过吗？vue里边实用场景？持久化存储用过吗？简单介绍一下 ⑥localstorage用过吗？ 实用场景，存储多大空间？ 如果空间不够了需要存储其他数据怎么办？ ⑦vue-router用过吗？怎么实现路由跳转的？路由跳转有几种方法？ ⑧路由模式有几种？ 路由模式的区别？你的工作常用哪种路由模式？ ⑨路由传参有几种？简单说一下，params和query传参的区别，区别就是一个会在uel地址栏显示一个不会，name别名传参会显示参数值，刷新页面参数值会丢失 10、闭包用过吗？你对闭包的了解，优点缺点？使用场景？ 11、原型，原型链简单讲一下？ 12、跨域问题怎么解决的？跨域的了解，解决跨域的方法</p><p>组件的通信方式 vuex和pinia的区别 组件的封装 keep-alive的原理 nexttike的原理 promise和async/await 简历中的项目 响应式数据的原理 vue-router的理解 params和query的区别 hash和history的区别 本地存储的方案以及大量数据的存储</p><p>2.项目中有着登录功能（详细说一下登录功能如何实现，以及rbac，再或者按钮级别的rbac） 3.简单说一下webpack 在项目中怎么使用的webpack 4.跨域 都有哪些？ 都是否使用过？ 怎么使用？ 5.为什么离职？</p><p>介绍数组的常用方法 去重一般有哪些用法 es6中的new set怎么去重 keep alive新增的生命周期 vue 依赖注入 路由鉴权 对按钮的鉴权</p><p>回流延伸的问题，如何优化回流,然后还有设计模式,webwork</p>',103),d=[h];function t(n,s,c,u,o,p){return i(),a("div",null,d)}const k=e(r,[["render",t]]);export{_ as __pageData,k as default};