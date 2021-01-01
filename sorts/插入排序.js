/**
 * 思路:从大到小或者从小到大
 *
 * 两次遍历
 * @param {*} arr
 */
function sort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let j = i - 1
		let key = arr[i]

		// sorted array
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j]
			j--
		}
		arr[j + 1] = key
	}
}

function binarySort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let key = arr[i]
		let left = 0
		let right = i - 1

		// sorted array
		while (left < right) {
			let middle = parseInt((left + rigth) / 2)
			if (key < arr[middle]) {
				right = middle - 1
			} else {
				left = middle + 1
			}
		}
		for (let j = i - 1; j >= left; j--) {
			arr[j + 1] = arr[j]
		}
		arr[left] = key
	}
}
