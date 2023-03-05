// https://leetcode.cn/problems/reverse-linked-list/discussion/
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function reverseList(head: ListNode | null): ListNode | null {
    // 双指针
    let cur: ListNode | null = head;
    let pre: ListNode | null = null;
    while (cur !== null) {
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
}
