// 下面的函数调用都返回 true
Array.isArray([])
Array.isArray([1])
Array.isArray(new Array())
Array.isArray(new Array('a', 'b', 'c', 'd'))
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype)

// 下面的函数调用都返回 false
Array.isArray()
Array.isArray({})
Array.isArray(null)
Array.isArray(undefined)
Array.isArray(17)
Array.isArray('Array')
Array.isArray(true)
Array.isArray(false)
Array.isArray(new Uint8Array(32))
Array.isArray({ __proto__: Array.prototype })
