## 分块 - Tiling

分块会将每⼀层分为多个⼩的区域, 其目的是让靠近浏览器视口的块优先进行下一步的光栅化。

![tiling1](./images/tiling1.png)

![tiling2](./images/tiling2.png)

合成线程也在渲染进程中。合成线程启动多个分块线程进行分块。
