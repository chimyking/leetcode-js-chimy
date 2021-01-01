/**
 * 思路:
 * 1. 边界情况处理
 *  1.1 空字符串
 *  1.2 非法字符串
 *  1.3 长度超长
 * 2. 主逻辑(双指针)
 *  2.1 i指针指向字符串首
 *  2.2 j指针指向i的下一位，并初始化化count=1
 *    2.2.1 如果j = i; => j = j+1,Loop,直到 j != i
 *    2.2.2 如果j!= i; => i = j
 *  2.3 i = i+count-1;重复2.2
 * @param {*} inputStr
 */
function compressStr(inputStr) {
	if (check(inputStr)) {
		let res = ''
		let count = 1
		let curChar = ''
		for (let i = 0; i < inputStr.length; i++) {
			let j = i + 1
			curChar = inputStr.charAt(i)
			res = res + curChar
			while (inputStr.charAt(j) === curChar) {
				count++
				j++
			}
			if (count !== 1) {
				res = res + count
				i = i + count - 1
				count = 1
			}
		}
		return res // 返回结果
	}
}

/**
 * 递归实现
 * @param {*} inputStr
 */
function compressStr2(inputStr) {
	if (check(inputStr)) {
		const compress = (str, prefix) => {
			if (!str) {
				return prefix
			}
			let index = 1
			let count = 1
			const firstChart = str.charAt(0)
			let res = firstChart
			while (str.charAt(index) === firstChart) {
				index++
				count++
			}
			if (count !== 1) {
				res += count
			}
			return compress(str.substring(index), prefix + res)
		}
		return compress(inputStr, '')
	}
}

function check(inputStr) {
	const reg = /^[A-Za-z]{1,100}$/
	if (reg.test(inputStr)) {
		return true
	} else if (inputString.length > 100) {
		throw 'more than 100 characters!'
	} else if (inputString.length === 0) {
		throw 'empty characters!'
	} else {
		throw 'invalid characters!'
	}
}

console.log(compressStr2('aabccccaaa')) // a2bc4a3
console.log(compressStr('aabccccaaa')) // a2bc4a3
