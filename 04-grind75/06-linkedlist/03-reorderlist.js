/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  // step 1: find the middle - split the linked list into 2
  let slow = head
  let fast = head

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let prev = null
  let second = slow.next

    // step 2: reverse the second list
  while (second != null) {
    const temp = second.next
    second.next = prev
    prev = second
    second = temp
  }

  slow.next = null
    // step 3: 2 pointer - create a new list
  let h1 = head
  let h2 = prev

  while (h2) {
    let temp = h1.next
    h1.next = h2
    h1 = h2
    h2 = temp
  }
};



// this is the solution if the datastructure was an array
// var reOrderListArray = function (array) {
//   const result = []
//   let r = array.length - 1
//   for (let l = 0; l < r; l++) {
//     result.push(array[l])
//     result.push(array[r])
//     r--;
//   }
//   return result
// }

// const a = [1, 2, 3, 4]

// console.log(reOrderListArray(a))
