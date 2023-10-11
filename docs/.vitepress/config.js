import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { SearchPlugin } from "vitepress-plugin-search";
import { VitePWA } from "vite-plugin-pwa";
import intro from "./routes/intro";
import vueNav from "./routes/vue";
import tsNav from "./routes/ts";
import reactNav from "./routes/react";
import packageToolsNav from "./routes/packageTools";
import viteCompression from 'vite-plugin-compression'


console.log("process.env.NODE_ENV", process.env.NODE_ENV);

// 载入模块
var Segment = require("segment");
// 创建实例
var segment = new Segment();
// 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
segment.useDefault();
// 开始分词
// console.log(segment.doSegment('这是一个基于Node.js的中文分词模块。'));

var options = {
  // 采用分词器优化，
  encode: function (str) {
    return segment.doSegment(str, { simple: true });
  },
  tokenize: "forward", // 解决汉字搜索问题。来源：https://github.com/emersonbottero/vitepress-plugin-search/issues/11

  // 以下代码返回完美的结果，但内存与空间消耗巨大，索引文件达到80M+
  // encode: false,
  // tokenize: "full",
};

export default withMermaid(
  defineConfig({
    // app level config options
    lang: "zh-CN",
    title: "GANYMEDE33333",
    // 部署的基础路径
    base: "/",
    description: "行百里者半九十",
    // Theme related configurations.
    themeConfig: {
      logo: "/logo.svg",
      nav: [
        {
          text: "首页",
          link: "/",
        },
        {
          text: "百度",
          link: "https://www.baidu.com/",
          target: "_blank",
        },
      ],
      sidebar: [
        intro,
        vueNav,
        reactNav,
        tsNav,
        packageToolsNav,
        {
          text: "vscode",
          items: [
            {
              text: "prettier插件",
              link: "/vscode/prettier/",
            },
            {
              text: "Vue Language Features (Volar)",
              link: "/vscode/volar/",
            },
          ],
        },
        {
          text: "常用类库",
          link: "/commonlibs/",
        },
        {
          text: "JavaScript",
          link: "/javascript/",
        },
        {
          text: "JSDoc",
          link: "/jsdoc/",
        },
        {
          text: "HTML/CSS",
          link: "/htmlandcss/",
        },
        {
          text: "Tree-shaking",
          link: "/treeshaking/",
        },
        {
          text: "正则表达式",
          link: "/regexp/",
        },
        {
          text: "计算机知识",
          link: "/knowledge/",
        },
        {
          text: "实战",
          link: "/InAction/",
        },
        {
          text: "网络",
          link: "/web/",
        },
        {
          text: "面试",
          link: "/interview/",
        },
      ],
    },
    vite: {
      plugins: process.env.NODE_ENV === 'production' ? 
      [VitePWA(), SearchPlugin(options), viteCompression({
        threshold: 1024000,
      })] :
      [SearchPlugin(options)],
      server: {
        port: 3000,
      },
    },
  })
);

// export default
