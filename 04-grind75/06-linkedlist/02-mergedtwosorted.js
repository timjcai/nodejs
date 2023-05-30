// * Definition for singly-linked list.
// * function ListNode(val, next) {
// *     this.val = (val===undefined ? 0 : val)
// *     this.next = (next===undefined ? null : next)
// * }

var mergeTwoLists = function (list1, list2) {
  // let curr1 = list1;
  // let curr2 = list2;
  const dummy = new ListNode(-Infinity);
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      tail = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      tail = list2;
      list2 = list2.next;
    }
  }

  if (!list1) {
    tail.next = list2
  }
  if (!list2) {
    tail.next = list1
  }

  return dummy.next
};
