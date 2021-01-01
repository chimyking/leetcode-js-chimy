/**
 * 输入一个链表，输出该链表中倒数第k个结点。
 */

const findKthToTail = (head, k) => {
	if (!head || !k) return null
	let front = head
	let result = head
	let index = 1
	while (front.next) {
		index++
		front = front.next
		if (index > k) {
			result = result.next
		}
	}
	return k <= index && result
}
