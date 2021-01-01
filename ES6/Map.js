// Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。
const myMap = new Map()
// 1.Map.prototype.clear()  移除Map对象的所有键/值对 。
// 2.Map.prototype.delete(key)如果 Map 对象中存在该元素，则移除它并返回 true；否则如果该元素不存在则返回 false。随后调用 Map.prototype.has(key) 将返回 false 。
// 3.Map.prototype.entries()
// 4.Map.prototype.forEach(callbackFn[, thisArg])
// 5.Map.prototype.get(key)
// 6.Map.prototype.has(key)
// 7.Map.prototype.keys()
// 8.Map.prototype.set(key, value)
// 9.Map.prototype.values()

// 使用 for..of 方法迭代 Map

const { log } = console
let keyObj = {}
let keyFunc = function() {}
let keyString = 'a string'
myMap.set(keyString, "和键'a string'关联的值")
myMap.set(keyObj, '和键keyObj关联的值')
myMap.set(keyFunc, '和键keyFunc关联的值')
myMap.get('a string') // "和键'a string'关联的值"
log(myMap.size) // 3
log(myMap.get(keyString)) // "和键'a string'关联的值"
log(myMap.get(keyObj)) // "和键keyObj关联的值"
log(myMap.get(keyFunc)) // "和键keyFunc关联的值"

// 使用 for..of 方法迭代 Map
for (let [key, value] of myMap) {
	log(key + '==' + value)
}
// a string==和键'a string'关联的值
// [object Object]==和键keyObj关联的值
// function() {}==和键keyFunc关联的值

for (let value of myMap.values()) {
	console.log(value)
}
// 和键'a string'关联的值
// 和键keyObj关联的值
// 和键keyFunc关联的值
for (let [key, value] of myMap.entries()) {
	console.log(key + ' = ' + value)
}
// a string = 和键'a string'关联的值
// [object Object] = 和键keyObj关联的值
// function() {} = 和键keyFunc关联的值

myMap.forEach(function(value, key) {
	console.log(key + ' = ' + value)
})
// a string = 和键'a string'关联的值
// [object Object] = 和键keyObj关联的值
// function() {} = 和键keyFunc关联的值

log([...myMap])
// [
// 	(['a string', "和键'a string'关联的值"],
// 	[{}, '和键keyObj关联的值'],
// 	[[(Function: keyFunc)], '和键keyFunc关联的值'])
// ]
let kvArray = [
	['key1', 'value1'],
	['key2', 'value2']
]

const myMap2 = new Map(kvArray)
log(myMap2) // Map { 'key1' => 'value1', 'key2' => 'value2' }
log(Array.from(myMap2)) // [ [ 'key1', 'value1' ], [ 'key2', 'value2' ] ]
log([...myMap2]) // [(['key1', 'value1'], ['key2', 'value2'])]
