// Given the head of a singly linked list, reverse the list, and return the reversed list.

function reverseList(head: ListNode | null): ListNode | null {
    if (!head)
        return head
    let fast = head.next
    let previous = head
    previous.next = null
    while (fast) {
        const next = fast.next
        fast.next = previous
        previous = fast
        fast = next
    }
    return previous
};