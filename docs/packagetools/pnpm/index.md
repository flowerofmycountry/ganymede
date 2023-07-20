## pnpm 优势

[官网](https://pnpm.io/zh/)

对于重复的包，建立软连接，因此 pnpm 好处：

- 减少硬盘
- 减少带宽
- 速度快

## pnpm-workspace.yaml

定义了 工作空间 的根目录，并能够使您从工作空间中包含 / 排除目录。 默认情况下，包含所有子目录。

```yaml
packages:
  # 所有包都在packages/的直接子目录中
  - 'packages/*'
  # 所有包都在components/的子目录中
  - 'components/**'
  # 排除测试目录中的包
  - '!**/test/**'
```

## 为特定 workspace 安装依赖

```bash
pnpm -F @flowerofmycountry/utils add lodash
```

```bash
pnpm -F @flowerofmycountry/ui add @flowerofmycountry/utils@*
```
