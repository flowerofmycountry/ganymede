import{_ as s,c as a,o as n,a as l}from"./app.1b85acd6.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"按位逻辑运算符","slug":"按位逻辑运算符","link":"#按位逻辑运算符","children":[{"level":3,"title":"左移运算符 <<","slug":"左移运算符","link":"#左移运算符","children":[]},{"level":3,"title":"右移运算符 >>","slug":"右移运算符","link":"#右移运算符","children":[]},{"level":3,"title":"无符号右移运算符 >>>","slug":"无符号右移运算符","link":"#无符号右移运算符","children":[]},{"level":3,"title":"按位与运算符 &","slug":"按位与运算符","link":"#按位与运算符","children":[]},{"level":3,"title":"按位或运算符 |","slug":"按位或运算符","link":"#按位或运算符","children":[]},{"level":3,"title":"异或运算符 ^","slug":"异或运算符","link":"#异或运算符","children":[]},{"level":3,"title":"取反运算符 ~","slug":"取反运算符","link":"#取反运算符","children":[]},{"level":3,"title":"运用","slug":"运用","link":"#运用","children":[]}]}],"relativePath":"knowledge/index.md"}'),o={name:"knowledge/index.md"},p=l(`<h2 id="按位逻辑运算符" tabindex="-1">按位逻辑运算符 <a class="header-anchor" href="#按位逻辑运算符" aria-hidden="true">#</a></h2><h3 id="左移运算符" tabindex="-1">左移运算符 <code>&lt;&lt;</code> <a class="header-anchor" href="#左移运算符" aria-hidden="true">#</a></h3><p>用来将一个数的各二进制位全部左移若干位，移动的位数由右操作数指定，右操作数必须是非负值，其右边空出的位用 <code>0</code> 填补，高位左移溢出则舍弃该高位。</p><p>简单介绍一种方便计算的方法：</p><ul><li>8 &lt;&lt; 1 的值为 8 * 2 = 16；</li><li>8 &lt;&lt; 2 的值为 8 * (2^2) = 32；</li><li>8 &lt;&lt; n 的值为 8 *（2^n）。</li></ul><h3 id="右移运算符" tabindex="-1">右移运算符 <code>&gt;&gt;</code> <a class="header-anchor" href="#右移运算符" aria-hidden="true">#</a></h3><p>按二进制形式把所有的数字向右移动对应位移位数，低位移出(舍弃)，高位的空位补符号位，即正数补 <code>0</code>，负数补 <code>1</code>。</p><h3 id="无符号右移运算符" tabindex="-1">无符号右移运算符 <code>&gt;&gt;&gt;</code> <a class="header-anchor" href="#无符号右移运算符" aria-hidden="true">#</a></h3><p>按二进制形式把所有的数字向右移动对应位移位数，低位移出(舍弃)，高位的空位补 <code>0</code>。</p><h3 id="按位与运算符" tabindex="-1">按位与运算符 <code>&amp;</code> <a class="header-anchor" href="#按位与运算符" aria-hidden="true">#</a></h3><p>两位同时为 <code>1</code>，结果才为 <code>1</code>，否则为 <code>0</code></p><p>例如：<code>3 &amp; 5</code> 即 <code>0000 0011 &amp; 0000 0101 = 0000 0001</code> 因此，<code>3 &amp; 5</code> 的值得 <code>1</code>。</p><p>另，负数按补码形式参加按位与运算。</p><h3 id="按位或运算符" tabindex="-1">按位或运算符 <code>|</code> <a class="header-anchor" href="#按位或运算符" aria-hidden="true">#</a></h3><p>参加运算的两个对象只要有一个为 <code>1</code>，其值为 <code>1</code></p><p>例如: <code>3 | 5</code>　即 <code>0000 0011| 0000 0101 = 0000 0111</code> 因此，<code>3 | 5</code>的值得<code>7</code>。</p><p>另，负数按补码形式参加按位或运算。</p><h3 id="异或运算符" tabindex="-1">异或运算符 <code>^</code> <a class="header-anchor" href="#异或运算符" aria-hidden="true">#</a></h3><p>参加运算的两个对象，如果两个相应位为 <strong>异</strong>（值不同），则该位结果为 <code>1</code>，否则为 <code>0</code>。</p><h3 id="取反运算符" tabindex="-1">取反运算符 <code>~</code> <a class="header-anchor" href="#取反运算符" aria-hidden="true">#</a></h3><p>对一个二进制数按位取反，即将 <code>0</code> 变 <code>1</code>，<code>1</code> 变 <code>0</code>。</p><h3 id="运用" tabindex="-1">运用 <a class="header-anchor" href="#运用" aria-hidden="true">#</a></h3><p>当业务中一个对象同时具有不固定的多种类型时，可用左移枚举来定义类型。修改用 <code>|</code>，查找用 <code>&amp;</code>。</p><p>参考 <strong>vue3</strong> 代码：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ShapeFlags</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  ELEMENT </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 0000 0000 0001 表示一个普通的HTML元素</span></span>
<span class="line"><span style="color:#A6ACCD;">  FUNCTIONAL_COMPONENT </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 0000 0000 0010 函数式组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  STATEFUL_COMPONENT </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 0000 0000 0100 有状态组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  TEXT_CHILDREN </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 0000 0000 1000 子节点是文本</span></span>
<span class="line"><span style="color:#A6ACCD;">  ARRAY_CHILDREN </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 0000 0001 0000 子节点是数组</span></span>
<span class="line"><span style="color:#A6ACCD;">  SLOTS_CHILDREN </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 0000 0010 0000 子节点是插槽</span></span>
<span class="line"><span style="color:#A6ACCD;">  TELEPORT </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 0000 0100 0000 表示vnode描述的是个teleport组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  SUSPENSE </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 0000 1000 0000 表示vnode描述的是个suspense组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  COMPONENT_SHOULD_KEEP_ALIVE </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 0001 0000 0000 表示需要被keep-live的有状态组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  COMPONENT_KEPT_ALIVE </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 0010 0000 0000 已经被keep-live的有状态组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  COMPONENT </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ShapeFlags</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">STATEFUL_COMPONENT </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> ShapeFlags</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">FUNCTIONAL_COMPONENT</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 0000 0001 0010 组件，有状态组件和函数式组件的统称</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> rawVNode </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">shapeFlag</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ShapeFlags</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">FUNCTIONAL_COMPONENT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断是否是该类型</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (rawVNode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shapeFlag </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> ShapeFlags</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">FUNCTIONAL_COMPONENT) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">是</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// != 0</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">不是</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断是否是其中之一</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  rawVNode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shapeFlag </span><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">  (ShapeFlags</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">FUNCTIONAL_COMPONENT </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> ShapeFlags</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">STATEFUL_COMPONENT)</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">是</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// != 0</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">不是</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断是否 TEXT_CHILDREN 类型</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (rawVNode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shapeFlag </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> ShapeFlags</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">TEXT_CHILDREN) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">是</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">不是</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 0</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 添加一个 TEXT_CHILDREN 类型</span></span>
<span class="line"><span style="color:#A6ACCD;">rawVNode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shapeFlag </span><span style="color:#89DDFF;">|=</span><span style="color:#A6ACCD;"> ShapeFlags</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">TEXT_CHILDREN</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断是否 TEXT_CHILDREN 类型</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (rawVNode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shapeFlag </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> ShapeFlags</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">TEXT_CHILDREN) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">是</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// != 0</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">不是</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,25),e=[p];function t(c,r,D,y,F,C){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{i as __pageData,d as default};