/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 
 * 示例 1:
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 * 
 * 示例 2:
 * 输入: [-1,-100,3,99] 和 k = 2
 * 输出: [3,99,-1,-100]
 * 解释: 
 * 向右旋转 1 步: [99,-1,-100,3]
 * 向右旋转 2 步: [3,99,-1,-100]
 * 
 * 说明:
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 要求使用空间复杂度为 O(1) 的 原地 算法。
 */
/**
 * JS Array.unshift    Array.push
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate1 = function (nums, k) {
    while (nums.length - k >= 1) {
        let head = nums.shift()
        nums.push(head)
        k--
    }
    console.log(nums)
};

/**
 * 
 * @param {*} nums 
 * @param {*} k 
 */
var rotate2 = function (nums, k) {
    let len = nums.length
    nums.length = len + k
    for (let i = 0; i < len; i++) {
        // 移动到队尾
        if (i < k-1) {
            nums[len + i] = nums[i]
        }
    }
    for (let i = 0; i < len; i++) {
        // 依次往前移k位
        nums[i] = nums[i + k]
    }
    nums.length = len
};

Array.prototype.reverseFromLToR = function(left,right){
    if(right >= this.length){
        return;
    }

    while(left < right){
        var temp = this[left];
        this[left] = this[right];
        this[right] = temp;
        left++;
        right--;
    }
}

var rotate3 = function (nums, k) {
    k = k%nums.length;
    
    nums.reverse();
    nums.reverseFromLToR(0,k-1);
    nums.reverseFromLToR(k,nums.length-1);
};

rotate3([1,2,3,4,5,6,7],3)
rotate3([-1,-100,3,99],2)