/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (41.70%)
 * Total Accepted:    29K
 * Total Submissions: 69.6K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * 示例:
 * 
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 * 
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head === null) {
    return head;
  }

  var dummy = new ListNode(-1);
  dummy.next = head;
  prev = dummy;
  cur = head;

  while (prev !== null && prev.next !== null) {
    if (cur.val === val) {
      prev.next = cur.next;
      cur = prev.next;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }

  return dummy.next;


  // let prev = null;
  // let cur = head;
  // while (cur) {
  //   if (cur.val === val) {
  //     if (prev) {
  //       prev.next = cur.next; // 修改当前地址上的数据
  //     } else {
  //       head = cur.next;
  //     }
  //   } else {
  //     prev = cur; // 将 prev 指向到 cur 对应的地址(向下移动)
  //   }
  //   cur = cur.next; // 将 cur 变量指向到它的 next 下一个地址上
  // }
  // return head;



  // if (head === null) return null
  // head.next = removeElements(head.next, val)
  // return head.val === val ? head.next : head
};