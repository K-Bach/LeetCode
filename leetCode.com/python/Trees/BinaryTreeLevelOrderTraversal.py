# Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

from typing import Optional
from classes import TreeNode


class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> list[list[int]]:
        if not root:
            return []
        result = []
        queue = [root]
        while queue:
            level = []
            nextQueue = []
            for n in queue:
                level.append(n.val)
                if n.left:
                    nextQueue.append(n.left)
                if n.right:
                    nextQueue.append(n.right)
            result.append(level)
            queue = nextQueue
        return result