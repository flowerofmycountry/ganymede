import{_ as s,c as a,o as n,a as p}from"./app.1b85acd6.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"pnpm 优势","slug":"pnpm-优势","link":"#pnpm-优势","children":[]},{"level":2,"title":"pnpm-workspace.yaml","slug":"pnpm-workspace-yaml","link":"#pnpm-workspace-yaml","children":[]},{"level":2,"title":"为特定 workspace 安装依赖","slug":"为特定-workspace-安装依赖","link":"#为特定-workspace-安装依赖","children":[]}],"relativePath":"packagetools/pnpm/index.md"}'),l={name:"packagetools/pnpm/index.md"},e=p(`<h2 id="pnpm-优势" tabindex="-1">pnpm 优势 <a class="header-anchor" href="#pnpm-优势" aria-hidden="true">#</a></h2><p><a href="https://pnpm.io/zh/" target="_blank" rel="noreferrer">官网</a></p><p>对于重复的包，建立软连接，因此 pnpm 好处：</p><ul><li>减少硬盘</li><li>减少带宽</li><li>速度快</li></ul><h2 id="pnpm-workspace-yaml" tabindex="-1">pnpm-workspace.yaml <a class="header-anchor" href="#pnpm-workspace-yaml" aria-hidden="true">#</a></h2><p>定义了 工作空间 的根目录，并能够使您从工作空间中包含 / 排除目录。 默认情况下，包含所有子目录。</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F07178;">packages</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># 所有包都在packages/的直接子目录中</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">packages/*</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># 所有包都在components/的子目录中</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">components/**</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># 排除测试目录中的包</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">!**/test/**</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="为特定-workspace-安装依赖" tabindex="-1">为特定 workspace 安装依赖 <a class="header-anchor" href="#为特定-workspace-安装依赖" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@flowerofmycountry/utils</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lodash</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@flowerofmycountry/ui</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@flowerofmycountry/utils@</span><span style="color:#A6ACCD;">*</span></span>
<span class="line"></span></code></pre></div>`,10),o=[e];function t(c,r,i,y,d,D){return n(),a("div",null,o)}const h=s(l,[["render",t]]);export{m as __pageData,h as default};