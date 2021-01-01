// Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
// Array.from(arrayLike[, mapFn[, thisArg]])
// Array.from()
const { log } = console
//  1.从 String 生成数组
let arr1 = Array.from('foo')
log(arr1) // [ 'f', 'o', 'o' ]

// 2.从 Set 生成数组
const set = new Set(['foo', 'bar', 'baz', 'foo'])
const arr2 = Array.from(set)
log(arr2) // [ "foo", "bar", "baz" ]

// 3.从 Map 生成数组
/**
 * new Map([iterable])
 *
 * let map = new Map([])
 * map.clear()
 * map.delete()
 * map.entries()
 * map.forEach()
 * map.get()
 * map.has()
 * map.keys()
 * map.set()
 * map.values()
 */
const map = new Map([
	[1, 2],
	[2, 3],
	[4, 8]
])

let arr3 = Array.from(map)
log(arr3) // [ [ 1, 2 ], [ 2, 3 ], [ 4, 8 ] ]

const mapper = new Map([
	['1', 'a'],
	['2', 'b']
])
Array.from(mapper.values())
// ['a', 'b'];

Array.from(mapper.keys())
// ['1', '2'];

// 从类数组对象（arguments）生成数组
function f() {
	return Array.from(arguments)
}
f(1, 2, 3)
// [ 1, 2, 3 ]

Array.from([1, 2, 3], x => x + x)
// [2, 4, 6]

Array.from({ length: 5 }, (v, i) => i)
// [0, 1, 2, 3, 4]

// 数组去重合并
function combine() {
	let arr = [].concat.apply([], arguments) //没有去重复的新数组
	return Array.from(new Set(arr))
}

var m = [1, 2, 2],
	n = [2, 3, 3]
console.log(combine(m, n))
