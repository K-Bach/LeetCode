# Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

from typing import Optional
from classes import ListNode

def isPalindrome(head: Optional[ListNode]) -> bool:
    s = ''
    while head:
        s += str(head.val)
        head = head.next
    return s[::-1] == s