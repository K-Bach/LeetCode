// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const preHead = new ListNode(-1)
    let cursor = preHead

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            cursor.next = list1
            list1 = list1.next
        }
        else {
            cursor.next = list2
            list2 = list2.next
        }
        cursor = cursor.next
    }

    cursor.next = list1 ? list1 : list2 

    return preHead.next
};