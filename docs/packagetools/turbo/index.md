## [repo](https://turbo.build/repo/docs)

用 pnpm 来创建项目

```cmd
E:\其他项目>pnpm dlx create-turbo@latest
../.pnpm-store/v3/tmp/dlx-4468           | +116 ++++++++++++
../.pnpm-store/v3/tmp/dlx-4468           | Progress: resolved 116, reused 74, downloaded 42, added 116, done

>>> TURBOREPO

>>> Welcome to Turborepo! Let's get you set up with a new codebase.

? Where would you like to create your turborepo? ./my-turborepo
? Which package manager do you want to use? pnpm

Downloading files. This might take a moment.

>>> Created a new Turborepo with the following:

apps
 - apps\docs
 - apps\web
packages
 - packages\eslint-config-custom
 - packages\tsconfig
 - packages\ui

Installing packages. This might take a couple of minutes.

>>> Success! Created a new Turborepo at "my-turborepo".
Inside that directory, you can run several commands:

  pnpm run build
     Build all apps and packages

  pnpm run dev
     Develop all apps and packages

  pnpm run lint
     Lint all apps and packages

Turborepo will cache locally by default. For an additional
speed boost, enable Remote Caching with Vercel by
entering the following command:

  pnpm dlx turbo login

We suggest that you begin by typing:

  cd my-turborepo
  pnpm dlx turbo login
```

下面的这个 turbo.json 文件定义了 3 个 task: build，lint 和 dev。

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "lint": {},
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

`turbo run <task>`(`turbo <task> `)

当运行 turbo hello 会报错，因为 (turbo.json)[https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks#defining-a-pipeline] 中未定 hello 这个 task。

当运行 `turbo lint`，注意终端的 log，会发生下面几件事：

1. 多个脚本将同时运行，每个脚本都以 docs:lint、ui:lint 或 web:lint 开头。
2. 它们都会成功，你将在终端中看到 3 个成功。
3. 你还会看到缓存为 0，总数为 3。我们稍后会介绍它的含义。

每个 workspace 下的 package.json。

apps/web/package.json

```json
{
  "scripts": {
    "lint": "next lint"
  }
}
```

apps/docs/package.json

```json
{
  "scripts": {
    "lint": "next lint"
  }
}
```

packages/ui/package.json

```json
{
  "scripts": {
    "lint": "eslint \"**/*.ts*\""
  }
}
```

如果我们多次运行 `lint` 命令，你会在命令行中看到：

1. 出现了 `docs:lint`、`web:lint` 和 `ui:lint` 的缓存命中、重放日志。
2. 你会看到 3 个缓存，总共 3 个。
3. 总的运行时间应小于 100ms，并且 `>>> FULL TURBO` 出现。

`turbo` 可以察觉我们的代码没有改变，它只是找到之前的日志，并且打印。

### 发布包

如果使用正确的工具，将包从 monorepo 发布到 npm 会是一种非常令人满意和流畅的体验。

#### changesets

在子项目的 `package.json` 中指定 `private:true`，可以完全跳过该包的发布。

## [pack](https://turbo.build/pack/docs)

下一代 webpack，比 vite 还要牛？
