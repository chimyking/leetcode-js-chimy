class Node {
	constructor(element) {
		this.element = element
		this.prev = null
		this.next = null
	}
}
/**
leetcode 真题
2. 两数相加
19. 删除链表的倒数第N个节点
21. 合并两个有序链表  
23. 合并K个排序链表  
61. 旋转链表
138.	复制带随机指针的链表  
141.	环形链表  
142. 环形链表 II  
148. 排序链表  
160. 相交链表  
206. 反转链表  
234. 回文链表  
237.	删除链表中的节点  
328	奇偶链表  
 */
class Node {
	constructor(data, double) {
		if (double) {
			this.prev = null // 前驱
		}
		this.data = data // 数据
		this.next = null // 后继
	}
}
class LinkedListLeetcode {
	constructor(double) {
		this.head = new Node('head', double)
		this.double = double // 是否
	}
}
