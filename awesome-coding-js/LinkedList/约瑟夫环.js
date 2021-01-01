/**
 * 题目：
 * 0,1,...,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字。
 */

/**
 * 解法1：用链表模拟环
 * 用链表模拟一个环
 * 模拟游戏场景
 * 记录头节点的前一个节点current，以保证我们找到的要删除的节点是current.next
 * 每次循环m次找到目标节点删除，直到链表只剩下一个节点
 * 时间复杂度O(m*n) 空间复杂度O(n)
 */

const lastRemaining_linked = (n, m) => {
	if (n < 1 || m < 1) {
		return -1
	}
	// 生成环
	const head = { val: 0 }
	let current = head
	for (let i = 1; i < n; i++) {
		current.next = { val: i }
		current = current.next
	}
	current.next = head

	// kill
	while (current.next != current) {
		for (let i = 0; i < m - 1; i++) {
			current = current.next
		}
		current.next = current.next.next
	}
	return current.val
}
/**
 * 解法2：用数组模拟
 * 每次计算下标，需要考虑末尾条件
 *
 */
const lastRemaining_array = (n, m) => {
	if (n < 1 || m < 1) {
		return -1
	}
	// 生成环
	const array = []
	let index = 0
	for (let i = 0; i < n; i++) {
		array[i] = i
	}

	// kill
	while (array.length > 1) {
		index = ((index + m) % array.length) - 1
		if (index >= 0) {
			array.splice(index, 1)
		} else {
			array.shift()
			index = 0
		}
	}
	return array[0]
}
/**
 * 解法3:数学推导
 * f(n) = (f(n-1)+m)%n 即 f(n,m) = (f(n-1,m)+m)%n
 * 使用递归求解 边界条件为 n=1
 */
function LastRemaining_Solution(n, m) {
	if (n < 1 || m < 1) {
		return -1
	} else {
		return joseoh(n, m)
	}
}

function joseoh(n, m) {
	if (n === 1) {
		return 0
	}
	return (joseoh(n - 1, m) + m) % n
}
