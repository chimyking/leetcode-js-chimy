/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 * 
 * 给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
 * 示例:
 *    输入: [1,2,3,4]
 *    输出: [24,12,8,6]
 * 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 * 
 * 
 * 进阶：你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
 * 
 */
/**
 * 两个循环，
 * 1.先求出从右往左，除自身以外，右边所有数值的乘积
 * 2.从左往右，依次算出自身以外左边的乘积，乘以以上数组响应索引的元素，就是对应结果
 *  得到最终答案
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    let left2right = []
    let temp = 1
    for (let i = 0; i <= nums.length - 1; i++) {
        left2right[i] = temp
        temp *= nums[i]
    }

    let result = []
    temp = 1
    for (let j = nums.length - 1; j >= 0; j--) {
        result.unshift(temp * left2right[j])
        temp *= nums[j]
    }

    console.log(result)
};

/**
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf2 = function (nums) {


    // 数组长度
    let len = nums.length;

    // 当前元素，左边乘积
    let left = 1;

    // 当前元素，右边乘积
    let right = 1;

    // 结果
    let output = Array(len).fill(1);

    for (let i = 0; i < len - 1; i++) {

        left *= nums[i]

        right *= nums[len - i - 1]

        // output[i] = left[i-1] * right[i+1]
        output[i + 1] *= left;

        output[len - i - 2] *= right;
    }

    console.log(output)
    return output;
};

productExceptSelf2([1, 2, 3, 4])