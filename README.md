# Yancy Qi's Blog

一个基于 **Docusaurus 3** 构建的现代化、高性能个人博客系统，支持多主题切换、国际化、数学公式渲染等丰富功能。

## ✨ 主要特性

### 🎨 主题系统
- **智能主题切换**: 支持明暗主题切换
- **特殊日期主题**: 在特定纪念日自动应用特殊主题（如清明节等）
- **主题持久化**: 主题选择自动保存

### 🚀 性能优化
- **Docusaurus 3**: 基于最新版本，性能大幅提升
- **实验性功能**: 启用多项性能优化实验

### 🎯 技术特性
- **TypeScript**: 完整的类型支持
- **Tailwind CSS 4**: 最新版本的原子化 CSS 框架
- **DaisyUI**: 基于 Tailwind 的组件库
- **React 19**: 最新版本的 React 框架
- **Tauri**: 支持构建跨平台桌面应用

## 📁 项目结构

```
yx-blog/
├── blog/                    # 博客文章目录
│   ├── authors.yml         # 作者信息
│   ├── tags.yml           # 标签配置
│   └── [文章目录]/         # 按日期组织的博客文章
├── docs/                   # 文档目录
│   ├── intro.md           # 文档首页
│   ├── jingju/            # 京剧相关内容
│   ├── network-components-and-management/  # 网络组件管理
│   └── operatingsystem/   # 操作系统相关
├── src/                    # 源代码目录
│   ├── components/         # React 组件
│   ├── css/               # 样式文件
│   ├── interface/         # TypeScript 接口定义
│   ├── pages/             # 页面组件
│   └── theme/             # 主题定制
├── src-tauri/             # Tauri 桌面应用配置
├── static/                 # 静态资源
├── docusaurus.config.ts   # Docusaurus 配置
├── sidebars.ts            # 侧边栏配置
├── tailwind.config.js     # Tailwind CSS 配置
└── package.json           # 项目依赖配置
```

## 🚀 快速开始

### 环境要求
- **包管理器**: 推荐使用 Bun

### 安装依赖

```bash
# 使用 Bun (推荐)
bun install
```

### 开发模式

```bash
# 启动开发服务器
bun run start
```

### 构建生产版本

```bash
# 构建静态文件
bun run build
```

### 本地预览构建结果

```bash
# 启动本地服务器预览构建结果
bun run serve
```

## 🙏 致谢

- [Docusaurus](https://docusaurus.io/) - 优秀的静态网站生成器
- [Tailwind CSS](https://tailwindcss.com/) - 实用的 CSS 框架
- [DaisyUI](https://daisyui.com/) - 精美的组件库
- [Tauri](https://tauri.app/) - 跨平台桌面应用框架
