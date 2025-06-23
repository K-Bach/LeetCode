# Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

from collections import deque
from typing import Optional
from classes import TreeNode

class Solution:
    # Wrong, not a BST
    # def sortedArrayToBST(self, nums: list[int]) -> Optional[TreeNode]:
    #     if not len(nums):
    #         return None
    #     root = TreeNode(nums[0])
    #     queue = [root]
    #     for i in range(1, len(nums)):
    #         newNode = TreeNode(nums[i])
    #         if not queue[0].left:
    #             queue[0].left = newNode
    #             queue.append(newNode)
    #             if len(queue) > 2:
    #                 queue.append(queue.pop(0))
    #         elif not queue[0].right:
    #             queue[0].right = newNode
    #             queue.append(newNode)
    #             queue.pop(0)
    #     return root

    def sortedArrayToBST(self, nums: list[int]) -> Optional[TreeNode]:
        if not len(nums):
            return None
        mid = len(nums) // 2
        root = TreeNode(nums[mid])
        root.left = self.sortedArrayToBST(nums[:mid])
        root.right = self.sortedArrayToBST(nums[mid+1:])
        return root

    # More efficient for large arrays
    def sortedArrayToBST2(self, nums: list[int]) -> Optional[TreeNode]:
        def helper(left: int, right: int) -> Optional[TreeNode]:
            if left > right:
                return None
            mid = (left + right) // 2
            root = TreeNode(nums[mid])
            root.left = helper(left, mid - 1)
            root.right = helper(mid + 1, right)
            return root
        return helper(0, len(nums) - 1)
