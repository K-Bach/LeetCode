class ListNode:
    def __init__(self, val=0, next=None):
        self.val: int = val
        self.next: ListNode | None = next
        
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right