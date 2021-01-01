/**
 * 输入两个链表，找出它们的第一个公共结点。
 */

/**
 * 思路：
 * 1.先找到两个链表的长度length1、length2
 * 2.让长一点的链表先走length2-length1步，让长链表和短链表起点相同
 * 3.两个链表一起前进，比较获得第一个相等的节点
 */

const getLength = (head) => {}
const findFirstCommonNode = (head1, head2) => {
	if (!head1 || !head2) {
		return null
	}
	// get the lengthes
	let length1 = getLength(head1)
	let length2 = getLength(head2)

	//
	let lang, short, interval
	if (length1 > length2) {
		lang = head1
		short = head2
		interval = length1 - length2
	} else {
		lang = head2
		short = head1
		interval = length2 - length1
	}
	while (interval--) {
		lang = lang.next
	}

	// main
	while (lang) {
		if (lang === short) {
			return lang
		}
		lang = lang.next
		short = short.next
	}
	return null
}
