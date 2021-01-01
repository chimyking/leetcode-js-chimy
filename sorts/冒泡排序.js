/**
 * 思路:从大到小或者从小到大
 *
 * 两次遍历
 * @param {*} arr
 */
function sort(arr) {
	let sorted
	for (let i = 0; i < arr.length - 1; i++) {
		sorted = true
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] < arr[j + 1]) {
				;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
				sorted = false
			}
		}
		if (sorted) {
			break
		}
	}
}
