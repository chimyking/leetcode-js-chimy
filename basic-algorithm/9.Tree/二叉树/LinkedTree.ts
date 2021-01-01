class TreeNode {
	left
	data
	right
	parent
	constructor(left, data, right, parent) {
		this.left = left
		this.data = data
		this.right = right
		this.parent = parent
	}
}
enum CreateType {
	preorder, // 先序遍历
	inorder, // 中序遍历
	postorder, // 后序遍历
}
/**
 * 链式二叉树
 * https://blog.csdn.net/qq_36368991/article/details/102652086
 */
class LinkedTree {
	root
	constructor(arr: Array<any>, createType: CreateType) {}
	// =============================创建======================================
	// =============================遍历======================================
	// =============================增加节点===================================
	// =============================删除节点===================================
	/**
	 * 先序遍历 递归
	 */
	preorder_recur(node) {
		if (!node) {
			node = this.root
		}
		console.log(node.data)
		this.preorder_recur(node.left)
		this.preorder_recur(node.right)
	}
	/**
	 * 先序遍历 非递归
	 * 思路: 脑子里想一个指针，按照先序遍历的顺序在二叉树上移动；每移动一步，
	 *
	 */
	preorder(node) {
		if (!node) {
			node = this.root
		}
		let stack = []
		let res = []
		stack.push(node)
		if (node === null) {
			return []
		}
		while (stack.length > 0) {
			let node = stack.pop()
			res.push(node.val)
			if (node.right) {
				stack.push(node.right)
			}
			if (node.left) {
				stack.push(node.left)
			}
		}
		return res
	}
	/**
	 * 中序遍历 非递归
	 */
	inorder(node) {
		if (!node) {
			node = this.root
		}
		let stack = []
		let res = []
		if (node === null) {
			return []
		}
		while (node !== null || stack.length > 0) {
			while (node !== null) {
				stack.push(node)
				node = node.left
			}
			node = stack.pop()
			res.push(node.data)
			node = node.right
		}
	}
	/**
	 * 中序遍历 递归
	 */
	inorder_recur(node) {
		if (!node) {
			node = this.root
		}
		this.preorder_recur(node.left)
		console.log(node.data)
		this.preorder_recur(node.right)
	}
	/**
	 * 后序遍历 非递归
	 */
	postorder(node) {
		if (!node) {
			node = this.root
		}
		let stack = []
		let res = []
		if (node === null) {
			return []
		}
		stack.push(node)
		while (stack.length > 0) {
			let node = stack.pop()
			res.unshift(node.val)
			if (node.left) {
				stack.push(node.left)
			}
			if (node.right) {
				stack.push(node.right)
			}
		}
	}
	/**
	 * 后序遍历 递归
	 */
	postorder_recur(node) {
		if (!node) {
			node = this.root
		}
		this.preorder_recur(node.left)
		this.preorder_recur(node.right)
		console.log(node.data)
	}

	/**
	 * 层序遍历
	 */
	levelOrder(root) {
		let nodequeue = []
		let res = []
		if (root === null) {
			return []
		}
		nodequeue.push(root)
		let level = 0
		while (nodequeue.length > 0) {
			res[level] = []
			let len = nodequeue.length
			for (let i = 0; i < len; i++) {
				let node = nodequeue.shift()
				res[level].push(node.val)
				if (node.left) {
					nodequeue.push(node.left)
				}
				if (node.right) {
					nodequeue.push(node.right)
				}
			}
			level++
		}
	}
	/**
	 * 路径查找
	 * @param root
	 */
	binaryTreePaths(root) {
		let nodestack = []
		let res = []
		let pathstack = []
		if (root === null) {
			return res
		}
		nodestack.push(root)
		pathstack.push(root.val.toString())
		while (nodestack.length > 0) {
			let node = nodestack.pop()
			let path = pathstack.pop()
			if (node.left === null && node.right === null) {
				res.unshift(path)
			}
			if (node.left) {
				nodestack.push(node.left)
				pathstack.push(path + '->' + node.left.val)
			}
			if (node.right) {
				nodestack.push(node.right)
				pathstack.push(path + '->' + node.right.val)
			}
		}
		return res
	}
}
