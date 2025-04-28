// Given the head of a linked list, remove the nth node from the end of the list and return its head.

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const preHead = new ListNode(0, head)
    let fast = preHead
    let slow = preHead
    let listLength = 0

    while (fast.next) {
        fast = fast.next
        listLength++
    }
    for (let i = 0; i < listLength - n; i++){
        if (slow.next)
            slow = slow.next
    }
    slow.next = slow.next ? slow.next.next : null
    return preHead.next
};