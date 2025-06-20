# Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

from typing import Optional
from classes import TreeNode
import math


class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return False
        if not root.left and not root.right:
            return True
        if not root.left or not root.right:
            return False
        
        def isSym(nodes: list[TreeNode]) -> bool:
            lenNodes = len(nodes)
            if nodes.count(None) == lenNodes: # type: ignore
                return True
            if lenNodes%2 != 0:
                return False
            
            nextNodes = [None] * lenNodes*2
            for i in range(int(lenNodes/2)):
                if nodes[i] and nodes[lenNodes - 1 - i]:
                    if nodes[i].val != nodes[lenNodes - 1 - i].val:
                        return False
                    nextNodes[i*2] = nodes[i].left
                    nextNodes[i*2+1] = nodes[i].right
                    if nodes[lenNodes - 1 - i].left:
                        nextNodes[len(nextNodes)-2-(i*2)] =nodes[lenNodes - 1 - i].left
                    if nodes[lenNodes - 1 - i].right:
                        nextNodes[len(nextNodes)-1-(i*2)] = nodes[lenNodes - 1 - i].right
                if (not nodes[i] and nodes[lenNodes - 1 - i]) or (nodes[i] and not nodes[lenNodes - 1 - i]):
                    return False
                                    
            return isSym(nextNodes) # type: ignore
        
        return isSym([root.left, root.right])
    
    # Better
    def isSymmetric2(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return False
        def isMirror(left: Optional[TreeNode], right: Optional[TreeNode]) -> bool:
            if not left and not right:
                return True
            if not left or not right:
                return False
            
            return left.val == right.val and isMirror(left.left, right.right) and isMirror(left.right, right.left)

        return isMirror(root.left, root.right)