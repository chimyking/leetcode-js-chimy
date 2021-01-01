/**
 * 二叉树
 */
interface Tree {
	// 查找类
	addNode: () => void
	delete: () => void
	getNode: () => any
	getDepth: () => any
	// 插入类
	// 删除类
	// 先许遍历
	preorder: () => any
	preorder_recur: () => any
	// 中序遍历
	inorder: () => any
	inorder_recur: () => any
	// 后序遍历
	postorder: () => any
	postorder_recur: () => any
}
