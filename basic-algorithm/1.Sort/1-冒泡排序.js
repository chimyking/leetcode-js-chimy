/**
 * 冒泡排序
 * @param {*} arr
 */
function bubleSort(arr) {
	if (Array.isArray(arr) && arr.length > 1) {
		let len = arr.length

		for (let i = 0; i < len - 1; i++) {
			let flag = true
			for (let j = 0; j < len - 1 - i; j++) {
				if (arr[j] > arr[j + 1]) {
					let temp = arr[j + 1] // 元素交换
					arr[j + 1] = arr[j]
					arr[j] = temp
					flag = false
				}
			}
			if (flag) {
				return arr
			}
		}
		return arr
	}
}

// console.log(bubleSort([4, 2, 5, 4, 2, 7, 8, 9, 6, 4, 2, 1]))

function bubleSort2(nums) {
	if (!Array.isArray(nums)) {
		throw new Error('请输入一个数组')
	}
	let len = nums.length
	if (len < 2) {
		return nums
	}
	let i, j, temp, flag
	for (i = 0; i < len - 1; i++) {
		flag = true
		// 先选出大的
		for (j = 0; j < len - i - 1; j++) {
			if (nums[j] > nums[j + 1]) {
				temp = nums[j + 1]
				nums[j + 1] = nums[j]
				nums[j] = temp
				flag = false
			}
		}
		if (flag) {
			return nums
		}
	}
	return nums
}

console.log(bubleSort2([10, 5, 3, 7, 8, 9, 6, 4, 2, 1]))
