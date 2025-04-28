# Given the head of a linked list, remove the nth node from the end of the list and return its head.

from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val: int = val
        self.next: ListNode | None = next

def removeNthFromEnd(head: Optional[ListNode], n: int) -> Optional[ListNode]:
    preHead = ListNode(0, head)
    fast = preHead
    slow = preHead
    listLength = 0
    while(fast.next):
        fast = fast.next
        listLength += 1
    for i in range(0, listLength-n):
        slow = slow.next
    slow.next = slow.next.next
    return preHead.next