/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.19%)
 * Total Accepted:    101.4K
 * Total Submissions: 296.5K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
if (strs.length === 0) {
  return ""
}
  let index = 1;
  let cStr = strs[0]
  while (index < strs.length) {
    cStr =  check(cStr, strs[index])
    index++
  }
  return cStr
};


function check(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let minLen = Math.min(len1, len2)

  let result = ''
  for (let index = 0; index < minLen; index++) {
    if (str1.charAt(index) === str2.charAt(index)) {
      result += str1.charAt(index)
    } else {
      return result
    }

  }
  return result
}


