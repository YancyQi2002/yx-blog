---
slug: rspack-jingju-site
title: 基于 Rspress 快速搭建一个京剧剧本站点
authors: yancyqi
tags: [Rspress, Rspack, React, 前端]
---

基于 Rspress 快速搭建一个京剧剧本站点

<!--truncate-->

## 0 概述

### 为什么使用 Rspress？

**构建性能**

以 Rspress 官网文档的内容为例，Rspress、Docusaurus 和 Nextra 三者的性能对比情况如下：

- 冷启动：![](./rspack-jingju-site-1.png#md-h-fit)

- 热更新：![](./rspack-jingju-site-2.png#md-h-fit)

- 冷构建：![](./rspack-jingju-site-3.png#md-h-fit)

Rspress 使用了一个基于 Rust 的 Bundler：Rspack，内置多种性能优化手段，比如多线程并行编译、增量编译等等，相比社区传统的打包工具，有 5 ～ 10 倍的性能提升。

Rspress 的 Markdown 编译器（即 @rspress/mdx-rs）相比社区的 JS 版本的编译器，有近 20 倍的性能提升：

![](./rspack-jingju-site-4.png#md-h-fit)

## 1 开始

通过脚手架创建:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
    <TabItem value="npm" label="npm">
    
    ```bash
    npm create rspress@latest
    ```
    
    </TabItem>
    <TabItem value="yarn" label="yarn">
    
    ```bash
    yarn create rspress@latest
    ```
    
    </TabItem>
    <TabItem value="pnpm" label="pnpm">
    
    ```bash
    pnpm create rspress@latest
    ```
    
    </TabItem>
    <TabItem value="bun" label="bun">
    
    ```bash
    bun create rspress@latest
    ```
    
    </TabItem>
</Tabs>

![](./rspack-jingju-site-5.png#md-h-fit)

到这里再执行完 `pnpm install` 就安装完毕，用 VSCode-Insiders 打开项目可以看到项目结构如下：

```
rspress-jingju-site
├── docs
│   ├── guide
│   │   ├── _meta.json
│   │   └── index.md
│   ├── public
│   ├── _meta.json
│   ├── index.md
│   └── hello.md
├── node_modules
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── rspress.config.ts
└── tsconfig.json
```

运行 `pnpm run dev` 查看效果如图：

![](./rspack-jingju-site-6.png#md-h-fit)

## 2 切换

bun 在 4 月 1 日发布的版本正式支持 Windows，所以执行以下命令安装 bun：

```powershell
# on windows
powershell -c "irm bun.sh/install.ps1 | iex"
```

![](./rspack-jingju-site-7.png#md-h-fit)

安装完bun后在项目目录下运行 `bun install` 命令安装需要的依赖

## 3 文档

添加一些CSS样式和docs

项目结构如下：

```
rspress-jingju-site
├── docs
│   ├── ...
│   │   ├── ...
│   │   └── ...
│   ├── _meta.json
│   └── index.md
├── styles
│   └── index.css
├── node_modules
├── .gitignore
├── package.json
├── bun.lockb
├── postcss.config.js
├── rspress.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 4 预览

执行命令 `bun run build` 打包：

![](./rspack-jingju-site-8.png#md-h-fit)

执行命令 `bun run preview` 本地预览：

![](./rspack-jingju-site-9.png#md-h-fit)

## 5 推送

将本地代码推送到GitHub仓库上：

Github仓库：[YancyQi2002/xiqu-script-site (github.com)](https://github.com/YancyQi2002/xiqu-script-site?tab=readme-ov-file)

## 6 部署

### 通过 Netlify 部署

Netlify 是一个 Web 应用部署平台，它可以让你直接将你的项目部署到 Netlify 上，而不需要你自己搭建服务器

导入 Github 仓库，然后配置一些基础信息就可以部署了，主要配置下面两个字段：

|       字段        |      值       |            说明             |
| :---------------: | :-----------: | :-------------------------: |
|   Build command   | bun run build | 填写项目中的构建 build 命令 |
| Publish directory |   doc_build   | 写项目中 build 后的产物目录 |

完成部署：[Rspress-Jingju-Site (xiqu-script-site.netlify.app)](https://xiqu-script-site.netlify.app/)

![](./rspack-jingju-site-10.png#md-h-fit)