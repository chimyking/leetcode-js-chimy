class Node {
	constructor(element) {
		this.element = element
		this.prev = null
		this.next = null
	}
}

/**
 * 基础
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个节点
 * 5) 求链表的中间节点
 *
 * 算法应用
 * 1) 约瑟夫问题
 * 2) 从尾到头答应单链表
 * 3) 单链表实现约瑟夫环
 * 4) 逆置/反转单链表
 * 5) k个节点为一组进行翻转
 * 6) 返回链表中间(1/2)节点(扩展返回链表1/K节点)
 * 7) 单链表排序(冒泡&快速排序)
 * 8) 查找单链表的中间节点，要求只能遍历一次链表
 * 9) 查找单链表的倒数第K个节点，要求只能遍历一次链表
 * 10) 删除链表的单数第K个节点
 * 11) 判断单链表是否带环？若带环，求环的长度？求环的入口？并计算每个算法的时间复杂度和空间复杂度
 * 12) 判断两个链表是否相交，若相交，求交点(假设链表不带环)
 * 13) 判断两个链表是否相交，若相交，求交点(假设链表可能带环)
 * 14) 求两个已排序单链表中相同的数据
 * 15) 合并两个有序链表，合并后依然有序
 *
 * leetcode 真题
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
class LinkedListAlgo {
	constructor(double) {
		this.head = new Node('head', double)
		this.double = double // 是否
	}
	// 链表基础操作(增删改查)
	// 链表应用
	// leetcode 真题
}
