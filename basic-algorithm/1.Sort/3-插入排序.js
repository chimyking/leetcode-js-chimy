/**
 * 插入排序
 * @param {*} arr
 */
function insertionSort(arr) {
	let len = arr.length
	let current, j
	for (let i = 1; i < len; i++) {
		current = arr[i]
		j = i - 1 //默认已排序的元素
		while (j >= 0 && arr[j] > current) {
			//在已排序好的队列中从后向前扫描
			arr[j + 1] = arr[j] //已排序的元素大于新元素，将该元素移到一下个位置
			j--
		}
		arr[j + 1] = current
	}
	return arr
}
function insertionSort2(nums) {
	if (!Array.isArray(nums)) {
		throw new Error('请输入一个数组')
	}
	let len = nums.length
	if (len < 2) {
		return nums
	}
	let i, j, current
	for (i = 1; i < len; i++) {
		j = i - 1
		current = nums[i]
		while (j >= 0 && nums[j] > current) {
			nums[j + 1] = nums[j]
			j--
		}
		nums[j + 1] = current
	}
	return nums
}

console.log('================')
console.log(insertionSort2([10, 5, 3, 7, 8, 9, 6, 4, 2, 1]))
