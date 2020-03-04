/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.01%)
 * Total Accepted:    71.1K
 * Total Submissions: 306.8K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum1 = function (nums) {
  if (nums.length < 3) {
    return []
  }
  let map = {}
  let result = []
  nums.forEach((val, index) => {
    if (map[val]) {
      map[val].push(index)
    } else {
      map[val] = [index]
    }
  })
  nums.forEach((val, index) => {
    for (let key of Object.keys(map)) {
      let targetKey = 0 - val - key

      if (!map[targetKey]) {
        continue
      }
      if (targetKey == val && val == key) {
        if (map['0'].length >= 3) {
          if (!result.includes('0,0,0')) {
            result.push('0,0,0')
          }
        }
        continue
      }
      if ((targetKey == val && map[targetKey].length <= 1) ||
        (targetKey == key && map[targetKey].length <= 1) ||
        (val == key && map[val].length <= 1)) {
        continue
      } else {
        let arra = [val, key, targetKey].sort().join(',')
        if (!result.includes(arra)) {
          result.push(arra)
        }
      }

    }
  })
  return result.map(item => item.split(','))
};




/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum2 = function (nums) {
  let result = []
  if (nums.length < 3) {
    return result
  }
  let aMap = {}
  let bMap = {}
  let zero = 0


  nums.forEach(val => {
    if (val === 0) {
      zero++
    } else if (val > 0) {
      aMap[val] ? aMap[val]++ : aMap[val] = 1
    } else if (val < 0) {
      bMap[val] ? bMap[val]++ : bMap[val] = 1
    }
  })

  if (zero >= 3) {
    result.push('0,0,0')
  }

  for (let _a of Object.keys(aMap)) {

    let a = Number(_a)
    for (let _b of Object.keys(bMap)) {
      let b = Number(_b)
      if (a + b === 0 && zero > 0) {
        result.push(`${b},0,${a}`)
        continue
      }
      let lastVal = 0 - a - b
      if (lastVal > 0) {
        if (!aMap[lastVal]) {
          continue
        }
        if (lastVal === a && aMap[a] === 1) {
          continue
        }
      } else {
        if (!bMap[lastVal]) {
          continue
        }
        if (lastVal === b && bMap[b] === 1) {
          continue
        }
      }
      let str = [a, b, lastVal].sort().join(',')
      if (!result.includes(str)) {
        result.push(str)
      }


    }
  }

  return result.map(item => item.split(','))
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = []
  let length = nums.length;
  nums.sort((a, b) => a - b) 
  if (nums[0] <= 0 && nums[length - 1] >= 0) { 
    for (let i = 0; i < length - 2;) {
      if (nums[i] > 0) break;
      let first = i + 1
      let last = length - 1
      do {
        if (first >= last || nums[i] * nums[last] > 0) break 
        let result = nums[i] + nums[first] + nums[last]
        if (result === 0) { 
          res.push([nums[i], nums[first], nums[last]])
        }
        if (result <= 0) { 
          while (first < last && nums[first] === nums[++first]) {} 
        } else { 
          while (first < last && nums[last] === nums[--last]) {}
        }
      } while (first < last)
      while (nums[i] === nums[++i]) {}
    }
  }
  return res
}