// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

function isValidBST(root: TreeNode | null): boolean {
    function isBST(node: TreeNode | null, lower = -Infinity, higher = Infinity): boolean {
        if (!node)
            return true

        let val = node.val
        if (val <= lower || val >= higher)
            return false
        if (!isBST(node.left, lower, val))
            return false
        if (!isBST(node.right, val, higher))
            return false

        return true
    }

    return isBST(root)
};