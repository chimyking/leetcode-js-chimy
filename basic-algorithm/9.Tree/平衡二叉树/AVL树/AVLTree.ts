class AVLNode {
	parent: AVLNode
	left: AVLNode
	right: AVLNode
	value: any
}
class AVLTree {
	constructor(arr) {}
	/**
	 * 求子树高度
	 * @param node
	 */
	height(node) {}
	/**
	 * 插入一个节点
	 * @param value
	 */
	insertNode(value) {}
	/**
	 * shanc
	 * @param value
	 */
	deleteNode(value) {}
	/**
	 * 目标节点是父节点的左节点，插入值比目标节点小
	 */
	ll_rotate(node) {}
	/**
	 *
	 * @param node
	 */
	rr_rotate(node) {}
	/**
	 *
	 * @param node
	 */
	lr_rotate(node) {}
	/**
	 *
	 * @param node
	 */
	rl_rotate(node) {}
}
