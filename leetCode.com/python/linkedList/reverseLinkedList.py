# Given the head of a singly linked list, reverse the list, and return the reversed list.

from typing import Optional
from classes import ListNode

def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:
    if not head:
        return head
    fast = head.next
    previous = head
    previous.next = None
    while fast:
        next = fast.next
        fast.next = previous
        previous = fast
        fast = next
    return previous
            