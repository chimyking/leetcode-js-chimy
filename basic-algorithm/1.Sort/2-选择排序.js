/**
 * 选择排序
 * @param {*} arr
 */
function selectionSort(arr) {
	let len = arr.length
	let minIndex, temp
	for (let i = 0; i < len - 1; i++) {
		minIndex = i
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j
			}
		}
		temp = arr[i]
		arr[i] = arr[minIndex]
		arr[minIndex] = temp
	}
	return arr
}
// console.log(selectionSort([10, 5, 3, 7, 8, 9, 6, 4, 2, 1]))

function selectionSort2(nums) {
	if (!Array.isArray(nums)) {
		throw new Error('请输入一个数组')
	}
	let len = nums.length
	if (len < 2) {
		return nums
	}
	let i, j, temp, minIndex
	for (i = 0; i < len - 1; i++) {
		// 先选出小的
		minIndex = i
		for (j = i + 1; j < len; j++) {
			if (nums[j] < nums[minIndex]) {
				minIndex = j
			}
		}
		temp = nums[minIndex]
		nums[minIndex] = nums[i]
		nums[i] = temp
	}
	return nums
}
console.log(selectionSort2([10, 5, 3, 7, 8, 5, 9, 6, 4, 2, 1]))
