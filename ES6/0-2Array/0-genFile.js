const fs = require('fs')
const path = require('path')

let ignor = [
	'length',
	'name',
	'prototype',
	'constructor',
	'observe',
	'big',
	'bold',
	'fixed',
	'fontcolor',
	'italics',
	'link',
	'small',
	'fontsize',
	'strike',
	'sup',
	'sub',
	'substr',
	'blink'
]
let staticFuns = Object.getOwnPropertyNames(Array)
let index = 1
staticFuns.forEach(ele => {
	if (!ignor.includes(ele)) {
		const data = new Uint8Array(Buffer.from(`Array.${ele}()`))
		fs.writeFile(
			path.resolve(__dirname, `${index++}-Array.${ele}.js`),
			data,
			err => {
				if (err) throw err
				console.log('文件已被保存')
			}
		)
	}
})

let prototypeFuns = Object.getOwnPropertyNames(Array.prototype)
prototypeFuns.forEach(ele => {
	if (!ignor.includes(ele)) {
		const data = new Uint8Array(Buffer.from(`let test ="a" ;test.${ele}()`))
		fs.writeFile(
			path.resolve(__dirname, `${index++}-Array.prototype.${ele}.js`),
			data,
			err => {
				if (err) throw err
				console.log('文件已被保存')
			}
		)
	}
})
