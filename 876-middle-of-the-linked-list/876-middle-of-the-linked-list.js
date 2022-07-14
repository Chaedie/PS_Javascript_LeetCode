/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    
    let node1 = head;
    let node2 = head;
    
    while (node2 && node2.next) {
        node1 = node1.next;
        node2 = node2.next.next; 
    }
    return node1;
};