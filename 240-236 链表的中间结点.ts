// class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = val === undefined ? 0 : val;
//         this.next = next === undefined ? null : next;
//     }
// }
// https://leetcode.cn/problems/middle-of-the-linked-list/submissions/403308945/?languageTags=javascript
function middleNode(head: ListNode | null): ListNode | null {
    // 快慢指针
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }
    return slow;
}
