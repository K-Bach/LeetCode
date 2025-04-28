# You are given the heads of two sorted linked lists list1 and list2.

# Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

# Return the head of the merged linked list.

from typing import Optional
from classes import ListNode

def mergeTwoLists1(list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
    if not list1:
        return list2
    if not list2:
        return list1
    head = list1 if list1.val <= list2.val else list2
    cursor = list1 if list1.val <= list2.val else list2
    if list1.val <= list2.val:
        list1 = list1.next
    else:
        list2 = list2.next
    while list1 or list2:
        while list1 and (not list2 or list1.val <= list2.val):
            cursor.next = list1
            cursor = cursor.next
            list1 = list1.next
        while list2 and (not list1 or list2.val <= list1.val):
            cursor.next = list2
            cursor = cursor.next
            list2 = list2.next
    return head

# Better
def mergeTwoLists2(list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
    preHead = ListNode(-1)
    cursor = preHead
    
    while list1 and list2:
        if list1.val <= list2.val:
            cursor.next = list1
            list1 = list1.next
        else:
            cursor.next = list2
            list2 = list2.next
        cursor = cursor.next
    
    cursor.next = list1 if list1 else list2
    
    return preHead.next
        