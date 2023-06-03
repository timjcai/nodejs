/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let counter = 1;
  let curr = head
  while (curr && curr.next) {
    curr = curr.next
    counter ++
  }
  const target = counter - n
  if (target === 0) {
    head = head.next;
    return head;
  }
  let k = 1
  let newcurr = head
  while (newcurr !== null) {
    if (k === target) {
      newcurr.next = newcurr.next.next
    }
    k ++
    newcurr = newcurr.next
  }
  return head
};

// var removeNthFromEnd = function(head, n) {
//   let counter = 1;
//   let curr = head
//   while (curr && curr.next) {
//     curr = curr.next
//     counter ++
//   }
//   const target = counter - n
//   let k = 1
//   let newcurr = head
//   while (k <= target) {
//     newcurr = newcurr.next
//     k ++
//   }
//   const temp = newcurr.next
//   newcurr = temp
//   while (newcurr) {
//     newcurr = newcurr.next
//   }
//   return head
// };
