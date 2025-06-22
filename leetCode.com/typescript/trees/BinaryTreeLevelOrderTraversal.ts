// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

function levelOrder(root: TreeNode | null): number[][] {
    if (!root)
        return []

    const result: number[][] = []
    let queue = [root]
    while (queue.length) {
        const level: number[] = []
        const nextQueue: TreeNode[] = []
        queue.forEach(n => {
            level.push(n.val)
            if (n.left)
                nextQueue.push(n.left)
            if (n.right)
                nextQueue.push(n.right)
        })
        queue = nextQueue
        result.push(level)
    }

    return result
};