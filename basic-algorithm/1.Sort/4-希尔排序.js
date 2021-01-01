/**
 * 希尔排序
 * @param {*} arr
 */
function shellSort(arr) {
	let len = arr.length,
		temp,
		gap = 1
	console.time('希尔排序耗时')
	while (gap < len / 3) {
		//动态定义间隔序列
		gap = gap * 3 + 1
	}
	for (gap; gap > 0; gap = Math.floor(gap / 3)) {
		for (let i = gap; i < len; i++) {
			temp = arr[i]
			let j = i - gap
			for (; j >= 0 && arr[j] > temp; j -= gap) {
				arr[j + gap] = arr[j]
			}
			arr[j + gap] = temp
			console.log('arr  :', arr)
		}
	}
	console.timeEnd('希尔排序耗时')
	return arr
}
/**
 * 优化版的插入排序
 * @param {}} nums
 */
function shellSort2(nums) {
	if (!Array.isArray(nums)) {
		throw new Error('请输入一个数组')
	}
	let len = nums.length
	if (len < 2) {
		return nums
	}
	let gap = 1
	let i, j
	let temp
	while (gap < len / 3) {
		gap = gap * 3 + 1
	}
	for (gap; gap > 0; gap = Math.floor(gap / 3)) {
		for (i = gap; i < len; i++) {
			j = i - gap
			temp = nums[i]
			while (j >= 0 && nums[j] > temp) {
				nums[j + gap] = nums[j]
				j -= gap
			}
			nums[j + gap] = temp
		}
	}
	return nums
}
console.log(shellSort2([10, 5, 3, 7, 8, 9, 6, 4, 2, 1]))
