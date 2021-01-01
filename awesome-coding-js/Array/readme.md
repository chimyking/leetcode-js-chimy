# 数组

数组是我们在开发中最常见到的数据结构了，用于按顺序存储元素的集合。但是元素可以随机存取，因为数组中的每个元素都可以通过数组索引来识别。插入和删除时要移动后续元素，还要考虑扩容问题，插入慢。

## 数组 API

- Array.from(arrayLike[, mapFn[, thisArg]])
- Array.isArray(obj)
- Array.of(element0[, element1[, ...[, elementN]]])
- Array.prototype.concat()
  - var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
- Array.prototype.copyWithin()
  - arr.copyWithin(target[, start[, end]])
- Array.prototype.entries()
  - 一个新的 Array 迭代器对象
- Array.prototype.every()
  - arr.every(callback[, thisArg])
- Array.prototype.fill()
  - arr.fill(value[, start[, end]])
- Array.prototype.filter()
  - var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
- Array.prototype.find()
  - arr.find(callback[, thisArg])
- Array.prototype.findIndex()
  - arr.findIndex(callback[, thisArg])
- Array.prototype.flat()
  - var newArray = arr.flat([depth])
- Array.prototype.flatMap()
- Array.prototype.forEach()
  - arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
- Array.prototype.includes()
  - arr.includes(valueToFind[, fromIndex])
- Array.prototype.indexOf()
  - arr.indexOf(searchElement[, fromIndex])
- Array.prototype.join()
  - arr.join([separator])
- Array.prototype.keys()
  - arr.keys()
  - 一个新的 Array 迭代器对象。
- Array.prototype.lastIndexOf()
  - arr.lastIndexOf(searchElement[, fromIndex])
- Array.prototype.map()

```Array.prototype.map()
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array
}[, thisArg])
```

- Array.prototype.pop()
  - arr.pop()
- Array.prototype.push()
  - arr.push(element1, ..., elementN)
- Array.prototype.reduce()
  - arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
- Array.prototype.reduceRight()
- Array.prototype.reverse()
  - arr.reverse()
- Array.prototype.shift()
  - arr.shift()
- Array.prototype.slice()
  - arr.slice([begin[, end]])
- Array.prototype.some()
  - arr.some(callback(element[, index[, array]])[, thisArg])
- Array.prototype.sort()
  - arr.sort([compareFunction])
- Array.prototype.splice()
  - array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
- Array.prototype.toLocaleString()
  - arr.toLocaleString([locales[,options]]);
- Array.prototype.toString()
- Array.prototype.unshift()
  - arr.unshift(element1, ..., elementN)
- Array.prototype.values()
  - arr.values()
  - 一个新的 Array 迭代对象。
- Array.prototype[@@iterator]()
- get Array[@@species]

## 双指针

- [调整数组顺序使奇数位于偶数前面](./双指针/调整数组顺序使奇数位于偶数前面.js)
- [和为 S 的两个数字](./双指针/和为S的两个数字.js)
- [和为 S 的连续正整数序列](./双指针/和为S的连续正整数序列.js)

## N 数之和问题

- [两数之和](./N数之和问题/两数之和.js)
- [三数之和](./N数之和问题/三数之和.js)
- [四数之和](./N数之和问题/四数之和.js)

## 二维数组

- [构建乘积数组](./二维数组/构建乘积数组.js)
- [顺时针打印矩阵](./二维数组/顺时针打印矩阵.js)

## 数据统计

- [数组中出现次数超过数组长度一半的数字](./数据统计/数组中出现次数超过数组长度一半的数字.js)
- [连续子数组的最大和](./数据统计/连续子数组的最大和.js)
- [扑克牌顺子](./数据统计/扑克牌顺子.js)
- [第一个只出现一次的字符](./数据统计/第一个只出现一次的字符.js)
