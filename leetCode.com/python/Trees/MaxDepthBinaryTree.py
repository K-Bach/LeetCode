# Given the root of a binary tree, return its maximum depth.
# A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        depth = 0
        maxDepth = 0
        current = root
        parents: list[dict[str, object]] = []
        while current:
            depth += 1 # type: ignore
            print(parents)
            if current.left:
                parents.append(dict(node = current, index = depth))
                current = current.left
            elif current.right:
                current = current.right
            else:
                if depth > maxDepth:
                    maxDepth = depth
                if len(parents):
                    while len(parents) and (not parents[len(parents)-1]["node"].right): # type: ignore
                        parents.pop()
                    if not len(parents):
                        break
                    current = parents[len(parents)-1]["node"].right # type: ignore
                    depth = parents[len(parents)-1]["index"]
                    parents.pop()
                else:
                    break
                
        return maxDepth

    # Or better
    def maxDepth2(self, root: Optional[TreeNode]) -> int:

        if not root:
            return 0  
        
        leftDepth = self.maxDepth2(root.left)
        rightDepth = self.maxDepth2(root.right)

        return max(leftDepth, rightDepth) + 1