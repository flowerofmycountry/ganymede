import{_ as s,c as n,o as a,a as l}from"./app.1b85acd6.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"全局的定义组件被识别","slug":"全局的定义组件被识别","link":"#全局的定义组件被识别","children":[]},{"level":2,"title":"自定义组件库组件","slug":"自定义组件库组件","link":"#自定义组件库组件","children":[]}],"relativePath":"vscode/volar/index.md"}'),o={name:"vscode/volar/index.md"},p=l(`<h2 id="全局的定义组件被识别" tabindex="-1">全局的定义组件被识别 <a class="header-anchor" href="#全局的定义组件被识别" aria-hidden="true">#</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// components.d.ts</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vue/runtime-core</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Vue 3</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// declare module &#39;vue&#39; {   // Vue 2.7</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// declare module &#39;@vue/runtime-dom&#39; {  // Vue &lt;= 2.6.14</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">GlobalComponents</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    RouterLink</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">RouterLink</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    RouterView</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">RouterView</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"></span></code></pre></div><h2 id="自定义组件库组件" tabindex="-1">自定义组件库组件 <a class="header-anchor" href="#自定义组件库组件" aria-hidden="true">#</a></h2><p>两种方式：</p><ol><li><p>参考 arco design</p><p>组件库编写 component.ts。自己项目无需做配置。</p></li><li><p>参考 element plus</p><p>组件库编写 globals.d.ts。自己项目通过 tsconfig 指定 types。</p></li></ol>`,5),e=[p];function t(c,r,i,y,F,D){return a(),n("div",null,e)}const _=s(o,[["render",t]]);export{u as __pageData,_ as default};