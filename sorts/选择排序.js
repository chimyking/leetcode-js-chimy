function sort(arr) {
	let sorted
	for (let i = 0; i < arr.length - 1; i++) {
		sorted = true
		for (let j = i + 1; j < arr.length - 1; j++) {
			if (arr[j] < arr[i]) {
				;[arr[j], arr[i]] = [arr[i], arr[j]]
				sorted = false
			}
		}
		if (sorted) {
			break
		}
	}
}
