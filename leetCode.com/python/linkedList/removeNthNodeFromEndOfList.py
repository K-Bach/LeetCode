# Given the head of a linked list, remove the nth node from the end of the list and return its head.

from typing import Optional
from classes import ListNode

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