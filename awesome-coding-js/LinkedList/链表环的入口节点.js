/**
 * 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null
 */
/**
 * 思路:
 * 声明两个指针 P1 P2
 * 1.判断链表是否有环： P1 P2 从头部出发，P1走两步，P2走一步，如果可以相遇，则环存在
 * 2.从环内某个节点开始计数，再回到此节点时得到链表环的长度 length
 * 3.P1、P2 回到head节点，让 P1 先走 length 步 ，当P2和P1相遇时即为链表环的起点
 */

const entryNodeOfLoop = (head) => {
	if (!head || !head.next) {
		return null
	}
	let p1 = head.next
	let p2 = head.next.next
	// 1.判断是否有环

	while (p1 != p2) {
		if (p1 === null || p2 === null) {
			return null
		}
		// 快慢指针
		p1 = p1.next
		p2 = p2.next.next
	}
	// 2. 获取环的长度
	let temp = p1
	let length = 1
	p1 = p1.next
	while (temp !== p1) {
		p1 = p1.next
		length++
	}
	// 3.找到公共节点
	p1 = p2 = head
	while (length-- > 0) {
		p2 = p2.next
	}
	while (p1 !== p2) {
		p1 = p1.next
		p2 = p2.next
	}
	return p1
}
