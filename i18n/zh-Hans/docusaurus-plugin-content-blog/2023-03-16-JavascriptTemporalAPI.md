---
slug: JavascriptTemporalAPI
title: 博客项目中用到的 Temporal API
authors: yancyqi
tags: [JavaScript, Temporal, API]
---

Date 对象一直是 ECMAScript 长期以来的痛点，

新的 Temporal API 将取代它，目前处于 Stage 3 阶段。

Temporal API 提供用于处理日期和时间的标准对象和函数。

<!--truncate-->

Temporal API 主要解决以下问题：

- 为日期和时间计算提供易于使用的 API

- 对所有时区的一流支持，包括 DST 安全算法

- 仅处理表示固定日期和时间的对象

- 分析严格指定的字符串格式

- 支持非公历，如农历

# 博客项目中用到的 Temporal API：

## Temporal.Now

```javascript
// Temporal.Now.plainDateISO()

// 获取系统时区和ISO-8601日历中的当前日期

Temporal.Now.plainDateISO().toString()

// 2023-03-16
```

## Temporal.PlainDate

```javascript
// Temporal.PlainDate.from()

const date = Temporal.PlainDate.from(Temporal.Now.plainDateISO().toString())

console.log(date.toString())
// 2023-03-16

console.log(`${date.year}-${date.month}-${date.day}`)
// 2023-3-16

const monthNumStr = date.month <= 10
    ? (`0${date.month}`)
    : date.month
const dateNumStr = date.day <= 10
    ? (`0${date.day}`)
    : date.day
dateStr = `${monthNumStr}-${dateNumStr}`

console.log(`${dateStr}`)
// 03-16
```

在这个项目中使用 Temporal API 替换了原来的 Date 对象实现

```javascript title="使用 Date 对象实现"
const date = new Date()
const fullYear = date.getFullYear()
const monthNumStr = (date.getMonth() + 1) <= 10
    ? (`0${(date.getMonth() + 1).toString()}`)
    : (date.getMonth() + 1)
const dateNumStr = date.getDate() <= 10
    ? (`0${date.getDate().toString()}`)
    : date.getDate()
dateStr = `${monthNumStr}-${dateNumStr}`
```

```jsx live
function GetDate(props) {
  const [date, setDate] = useState(new Date())
  const fullYear = date.getFullYear()
  const monthNumStr = (date.getMonth() + 1) <= 10
    ? (`0${(date.getMonth() + 1).toString()}`)
    : (date.getMonth() + 1)
  const dateNumStr = date.getDate() <= 10
    ? (`0${date.getDate().toString()}`)
    : date.getDate()
  const dateStr = `${monthNumStr}-${dateNumStr}`

  return (
        <div>{dateStr}</div>
  )
}
```