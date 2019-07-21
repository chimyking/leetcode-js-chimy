/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (41.87%)
 * Total Accepted:    12.5K
 * Total Submissions: 29.9K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 * 
 * 示例 1:
 * 
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->1->2->3
 * 输出: 2->3
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {
   ListNode
 }
 head
   *
   @return {
     ListNode
   }
 */
var deleteDuplicates = function (head) {

  if (!head.next) {
    return head
  }

  let point = head
  while (point) {
    if (point.next && point.next.val === point.val) {
      let target = point.next
      while (target){
        
        // 到了边界
        // 找到了不一样的数子

        if (!target){
          break
        }

        if (target.val !==)

      }
    }
  }
  return head
};