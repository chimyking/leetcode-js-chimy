/**
 * 给定一个包含 n 个整数的数组nums，判断 nums 中是否存在四个元素a，b，c，d ，使得 a + b + c + d = 0 ？找出所有满足条件且不重复的四元组。
 */

var fourSum = function (nums, target) {
	if (nums.length < 4) {
		return []
	}
	nums.sort((a, b) => a - b)
	const result = []
	for (let i = 0; i < nums.length - 3; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue
		}
		if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
			break
		}
		for (let j = i + 1; j < nums.length - 2; j++) {
			if (j > i + 1 && nums[j] === nums[j - 1]) {
				continue
			}
			let left = j + 1,
				right = nums.length - 1
			while (left < right) {
				const sum = nums[i] + nums[j] + nums[left] + nums[right]
				if (sum === target) {
					result.push([nums[i], nums[j], nums[left], nums[right]])
				}
				if (sum <= target) {
					while (nums[left] === nums[++left]);
				} else {
					while (nums[right] === nums[--right]);
				}
			}
		}
	}
	return result
}
