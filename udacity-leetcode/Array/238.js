// https: //leetcode-cn.com/problems/product-of-array-except-self/

// 给定长度为 n 的整数数组 nums， 其中 n > 1， 返回输出数组 output， 其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

// 示例:

// 输入: [1, 2, 3, 4]
// 输出: [24, 12, 8, 6]
// 说明: 请不要使用除法， 且在 O(n) 时间复杂度内完成此题。

// 进阶：
// 你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的， 输出数组不被视为额外空间。）

/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // 边界
    if (!nums || !Array.isArray(nums) || nums.length < 1) {
        return []
    }

    let n = nums.length
    let result = new Array(n)
    // 0
    // if (nums.includes(0)) {
    //     result.fill(0)
    //     return result
    // }


    // 暴力求解
    let l2r = []
    let r2l = []

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            l2r[i] = nums[i]
        } else {
            l2r[i] = nums[i] * l2r[i - 1]
        }
    }
    console.log(l2r)
    for (let i = n - 1; i >= 0; i--) {
        if (i === n - 1) {
            r2l[i] = nums[i]
        } else {
            r2l[i] = nums[i] * r2l[i + 1]
        }
    }

    console.log(r2l)

    for (let i = 0; i < n; i++) {

        if (i === 0) {
            result[i] = r2l[i + 1]
        } else if (i === n - 1) {
            result[i] = l2r[i - 1]
        } else {
            result[i] = l2r[i - 1] * r2l[i + 1]
        }
    }

    return result
};
productExceptSelf([1, 2, 3, 4])