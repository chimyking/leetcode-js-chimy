// Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
// new Set([iterable])
// Set.prototype.add()
// Set.prototype.clear()
// Set.prototype.delete()
// Set.prototype.entries()
// Set.prototype.forEach()
// Set.prototype.has()
// Set.prototype.values()
let mySet = new Set()

mySet.add(1) // Set [ 1 ]
mySet.add(5) // Set [ 1, 5 ]
mySet.add(5) // Set [ 1, 5 ]
mySet.add('some text')

console.log(mySet) // Set { 1, 5, 'some text' }

// 2. 迭代Set
for (let item of mySet) console.log(item)
for (let item of mySet.keys()) console.log(item)
for (let item of mySet.values()) console.log(item)
// 1
// 5
// some text

for (let [key, value] of mySet.entries()) console.log(key + '-' + value)
// 1-1
// 5-5
// some text-some text
// Set 和 Array互换
let mySet2 = new Set([1, 2, 3, 4])
mySet2.size // 4
;[...mySet2] // [1,2,3,4]

// 可以通过如下代码模拟求交集
let set1 = new Set()
let set2 = new Set()
let intersection = new Set([...set1].filter(x => set2.has(x)))

// 可以通过如下代码模拟求差集
let difference = new Set([...set1].filter(x => !set2.has(x)))

// 实现基本集合操作=======================
// 子集
function isSuperset(set, subset) {
	for (let elem of subset) {
		if (!set.has(elem)) {
			return false
		}
	}
	return true
}
// 并集
function union(setA, setB) {
	let _union = new Set(setA)
	for (let elem of setB) {
		_union.add(elem)
	}
	return _union
}

// 交集
function intersection(setA, setB) {
	let _intersection = new Set()
	for (let elem of setB) {
		if (setA.has(elem)) {
			_intersection.add(elem)
		}
	}
	return _intersection
}

// 去重
function symmetricDifference(setA, setB) {
	let _difference = new Set(setA)
	for (let elem of setB) {
		if (_difference.has(elem)) {
			_difference.delete(elem)
		} else {
			_difference.add(elem)
		}
	}
	return _difference
}

// 差集
function difference(setA, setB) {
	let _difference = new Set(setA)
	for (let elem of setB) {
		_difference.delete(elem)
	}
	return _difference
}

// 数组去重
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5]
console.log([...new Set(numbers)])
