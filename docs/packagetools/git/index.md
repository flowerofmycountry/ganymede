## Git global setup

```bash
git config --global user.name xxxx
git config --global user.email xxx@yyy.com
```

## 在命令行上创建一个新的存储库

```bash
git clone https://aaa.bbb.com/ccc/ddd.git
cd geely-tsp-config-center
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

## 从命令行推送现有空的存储库

```bash
cd existing_folder
git init
git remote add origin https://aaa.bbb.com/ccc/ddd.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

## 从命令行推送已有存储库

```bash
cd existing_repo
git remote add origin https://aaa.bbb.com/ccc/ddd.git
git push -u origin --all
git push -u origin --tags
```

## commit message 提交规范

- **feat**：新增功能
- **fix**：bug 修复
- **docs**：文档更新
- **style**：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
- **refactor**：重构代码(既没有新增功能，也没有修复 bug)
- **perf**：性能, 体验优化
- **test**：新增测试用例或是更新现有测试
- **build**：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
- **ci**：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交
- **chore**：不属于以上类型的其他类，比如构建流程, 依赖管理
- **revert**：回滚某个更早之前的提交
