// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return false;
    if (!root.left && !root.right) return true;
    if (!root.left || !root.right) return false;

    function isSym(nodes: (TreeNode | null)[]): boolean {
        const lenNodes = nodes.length;

        if (nodes.every(node => node === null)) return true;
        if (lenNodes % 2 !== 0) return false;

        const nextNodes: (TreeNode | null)[] = new Array(lenNodes * 2).fill(null);

        for (let i = 0; i < lenNodes / 2; i++) {
            const leftNode = nodes[i];
            const rightNode = nodes[lenNodes - 1 - i];

            if (leftNode && rightNode) {
                if (leftNode.val !== rightNode.val) return false;

                nextNodes[i * 2] = leftNode.left;
                nextNodes[i * 2 + 1] = leftNode.right;

                nextNodes[nextNodes.length - 2 - (i * 2)] = rightNode.left;
                nextNodes[nextNodes.length - 1 - (i * 2)] = rightNode.right;
            } else if (leftNode !== rightNode) {
                return false;
            }
        }

        return isSym(nextNodes);
    }

    return isSym([root.left, root.right]);
}

// Better
function isSymmetric2(root: TreeNode | null): boolean {
    if (!root) return false;

    function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
        if (!left && !right) return true;
        if (!left || !right) return false;

        return (
            left.val === right.val &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
        );
    }

    return isMirror(root.left, root.right);
}
