class Node {
	constructor(element) {
		this.element = element
		this.next = null
	}
}

/**
 * 简单的单向链表
 * 包含操作
 * 1. 创建一个链表
 * 2. 插入一个节点
 *  2.1 头插法
 *  2.2 尾插发
 *  2.3 指定位置后插入
 *  2.4 指定位置前插入
 * 3. 删除一个节点
 *  3.1 删除指定索引的节点
 *  3.2 删除指定值的节点
 * 4. 修改指定索引的值
 * 5. 查找
 *  5.1 返回指定位置的值，
 *  5.2 返回指定值得索引
 * 6. 遍历所有节点
 */
class SingleLinkedList {
	constructor() {
		this.head = new Node('head')
	}
	init(arr) {
		let initArr = []
		if (Array.isArray(arr)) {
			initArr = arr
		} else if (typeof arr === 'string' || typeof arr === 'number') {
			initArr = [arr]
		}
		initArr.forEach(item => {
			this.append(item)
		})
	}
	// 2.2
	append(value) {
		const newNode = new Node(value)
		let currentNode = this.head
		while (currentNode.next) {
			currentNode = currentNode.next
		}
		currentNode.next = newNode
	}
	// 2.3 指定位置后插入
	insertAfter(item, value) {
		let currentNode = this.head
		while (currentNode.next) {
			if (currentNode.element === item) {
				const newNode = new Node(value)
				newNode.next = currentNode.next
				currentNode.next = newNode
			}
			currentNode = currentNode.next
		}
	}
	// 3.1 删除指定索引的节点
	removeByIndex(index) {}
	// 3.2 删除指定值的节点
	removeByValue(index) {}
	// 4. 修改指定索引的值
	updateByIndex(index, value) {}
	// 5.1 返回指定位置的值，
	findByIndex(index) {}
	// 5.2 返回指定值得索引
	findByValue(index) {}
	// 6. 遍历所有节点
	travel() {
		let currentNode = this.head
		let showTest = `${currentNode.element}-->`
		while (currentNode.next) {
			currentNode = currentNode.next
			showTest += `${currentNode.element}-->`
		}
		showTest += `null`
		console.log(showTest)
	}
}
// const llist1 = new SingleLinkedList()
// llist1.append('chen')
// llist1.append('curry')
// llist1.append('sang')
// llist1.append('zhao') // head-->chen-->curry-->sang-->zhao-->null
// llist1.travel()
// console.log('-------------append------------')
// const llist2 = new SingleLinkedList()
// llist2.append('chen')
// llist2.append('curry')
// llist2.append('sang')
// llist2.append('zhao') // head-->chen-->curry-->sang-->zhao-->null
// llist2.travel()
// llist2.insertAfter('curry', 'chimy')
// llist2.travel()
// console.log('-------------insertAfter------------')
const llist3 = new SingleLinkedList()
llist3.init(['chen', 'curry', 'sang', 'zhao'])
llist3.insertBefore('curry', 'chimy')
llist3.travel()
