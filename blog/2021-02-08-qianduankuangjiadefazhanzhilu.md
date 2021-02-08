---
slug: qianduankuangjiadefazhanzhilu
title: 前端框架的发展之路
                  
author: Yancy Qi
author_title: 前端开发者
author_url: https://yancyqi2002.github.io/Personal-page/
author_image_url: https://avatars1.githubusercontent.com/u/63138264?s=460&u=2db0085943a7df4193922bc39dd3cb2b47e1f15d&v=4
tags: [前端]

---


- ~~jQuery~~
- ~~AngularJS （ Angular 1 ）~~
- Angular （ Angular 2 + ）
- Vue
- React
- Webpack

<!--truncate-->

## jQuery

- dom 操作艺术
- 封装 $
- 兼容性
- 插件机制
- 语言增强
- 。。。

## Angular 1
完整的后端数据体系
- mvvm 时代
- 数据驱动
- 编译器  （完整实现 compiler）
- 依赖注入
- 服务

## Vue

### vue 2 

引入 虚拟DOM

### vue 3 

编译器优化

virtual DOM 完全重写，mounting & patching 提速 100%；

更多编译时 （compile-time）提醒以减少 runtime 开销；

基于 Proxy 观察者机制以满足全语言覆盖以及更好的性能；

放弃 Object.defineProperty ，使用更快的原生 Proxy；

组件实例初始化速度提高 100%;

提速一倍 / 内存使用降低一半；

#### Vue 3 源码

vue 源码 [**点击访问**](https://github.com/vuejs/vue-next)

mini-vue 源码 [**点击访问**](https://github.com/cuixiaorui/mini-vue)

仿写 mini-vue [**点击访问**](https://github.com/YancyQi2002/mini-vue-demo)

## React

### React 17

使用JSX时，编译器使其转换为浏览器可以理解的React函数调用。旧的JSX转换会把JSX转换为React.createElement(...)调用。
