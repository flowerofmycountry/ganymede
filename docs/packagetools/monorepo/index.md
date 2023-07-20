## monorepo

### 何时使用？

充分条件：

- 多个项目相互依赖
- 功能，版本之间存在强关联
- 项目中存在多个编译入口，且构建条件存在差异

次要条件：

- 希望在团队中共享知识
- 降低项目管理成本

### 用 pnpm 实现 monorepo

1. 创建 pnpm-workspace.yaml
2. 引用仓库中的项目

   推荐项目 name：@xxx/yyy

   ```json
   {
     "name": "@demo/main",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "dependencies": {
       "@demo/core": "workspace:*"
     },
     "keywords": [],
     "author": "",
     "license": "ISC"
   }
   ```

3. 安装依赖，推荐用哪个到哪个项目目录下安装
