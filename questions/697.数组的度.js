/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 * 给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。
 * 你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 * 
 * 示例 1:
 * 输入: [1, 2, 2, 3, 1]
 * 输出: 2
 * 解释: 
 * 输入数组的度是2，因为元素1和2的出现频数最大，均为2.
 * 连续子数组里面拥有相同度的有如下所示:
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * 最短连续子数组[2, 2]的长度为2，所以返回2.
 * 
 * 示例 2:
 * 输入: [1,2,2,3,1,4,2]
 * 输出: 6
 * 
 * 
 * 注意:
 *      nums.length 在1到50,000区间范围内。
 *      nums[i] 是一个在0到49,999范围内的整数。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {

    let map = {
        // [val]: {
        //     start: null,
        //     end: null,
        //     count:0
        // },
        max: 1,
        minLength: 1
    }

    nums.forEach((item, index) => {

        if (map[item]) {
            map[item].end = index
            map[item].count += 1

            if (map[item].count > map.max) {
                map.max = map[item].count
                map.minLength = index - map[item].start
            }else if(map[item].count === map.max){
                map.minLength = (index - map[item].start ) < map.minLength ? (index - map[item].start ) : map.minLength
            }
        } else {
            map[item] = {
                start: index,
                end: index,
                count: 1
            }
        }

        
    })
    return map.max === 1 ? map.minLength : map.minLength + 1
};