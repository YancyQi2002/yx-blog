---
slug: eventloopofbrowser
title: 浏览器的事件循环
                  
author: Yancy Qi
author_title: 前端开发者
author_url: https://yancyqi2002.github.io/Personal-page/
author_image_url: https://avatars1.githubusercontent.com/u/63138264?s=460&u=2db0085943a7df4193922bc39dd3cb2b47e1f15d&v=4
tags: [前端, 浏览器]

---

import useBaseUrl from '@docusaurus/useBaseUrl';

<!--truncate-->

## 1   为什么 js 在浏览器中有事件循环的机制？

JS 是单线程的

event loop

## 2   两种任务？

宏任务：整体代码，setTimeout, setInterval, I/O操作

微任务：new Promise().then(), MutaionObserver (前端的回溯)

## 3   为什么要引入微任务的概念，只有宏任务可以吗？

宏任务 先进先出的原则执行。

## 4   Node 中的事件循环和浏览器中的事件循环有什么区别？

### 宏任务的执行顺序：

1. timers 定时器： 执行已经安排的 setTimeout 和 setInterval 的回调函数
2. pending callback 待定回调：执行延迟到下一个循环迭代的I/O回调
3. idle, prepare: 仅系统内部使用
4. poll:  检索新的I/O事件，执行与I/O相关的回调
5. check:  执行setImmediate()回调函数
6. close callbacks:  socket.on('close', () => {})

### 微任务和宏任务在 node 的执行顺序：

#### Node v10 及以前：

1. 执行完一个阶段中的所有任务
2. 执行nextTick队列里的内容
3. 执行完成微任务队列的内容

#### Node v10 以后：

和浏览器中的事件循环一致

## 5 例题

1. 

<img alt="" src={useBaseUrl('img/2021-03-01-eventloopofbrowser01.png')} />

```javascript
解答：

script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout

```

2. 

<img alt="" src={useBaseUrl('img/2021-03-01-eventloopofbrowser02.png')} />

```javascript
解答：

start
children4
// 第一轮宏任务结束，尝试清空微任务队列，发现没有微任务
children2
// 第二轮宏任务结束，尝试清空微任务队列
children3
children5
children7
children6

```

3. 

<img alt="" src={useBaseUrl('img/2021-03-01-eventloopofbrowser03.png')} />

```javascript
解答：

3
end
2
4

如果注释掉第7行的resolve(2),结果：

3
end
4
1

```

