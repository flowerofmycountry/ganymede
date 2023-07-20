## TypeScript Compiler API

[官方文档](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API)

compiler API 有三个主要部分：

- Program - 代表了一个完整的 TypeScript 项目，可以用来获取项目的结构信息，或者对项目进行修改
- Compiler Host - 用来提供文件系统的访问，以及一些其他的定制化的行为
- Source File - 代表了一个 TypeScript 文件，可以用来获取文件的结构信息，或者对文件进行修改
