// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (!nums.length)
        return null;
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
    return root;
};

// Better, memory efficient, better for long arrays
function sortedArrayToBST2(nums: number[]): TreeNode | null {
    function helper(left: number, right: number): TreeNode | null{
        if (left > right)
            return null
        const mid = Math.floor((left + right) / 2)
        const root = new TreeNode(nums[mid])
        root.left = helper(left, mid - 1)
        root.right = helper(mid + 1, right)
        return root
    }
    return helper(0, nums.length - 1)
};