// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

function isPalindrome(head: ListNode | null): boolean {
    let s = ''
    while (head) {
        s += String(head.val)
        head = head.next
    }
    const reversed = s.split('').reverse().join('')
    return reversed === s
};