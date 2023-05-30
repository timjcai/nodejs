var reverseList = function(head) {
  let prev = null;
  let curr = head

  while (curr !== null) {
    let nxt = curr.next
    curr.next = prev
    prev = curr
    curr = nxt;
  }
  return prev
};

// class ListNode {
//   constructor(data, next) {
//       this.data = data
//       this.next = next || null
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   // insert firs tnode
//   insertFirst(data) {
//     const currentHead = this.head
//     this.head = new ListNode(data, currentHead);
//     this.size++;
//   }

//   reverse() {
//     const list = [];
//     let current = this.head;
//     while (current !== null) {
//       list.push(current.data)
//       current = current.next
//     }
//     return list.reverse()
//   }
// }

// var reverseList = function(head) {
//     ll = new LinkedList()
//     for (let i = head.length-1; i >= 0; i--) {
//       const item = head[i]
//       ll.insertFirst(item)
//     }
//     return ll.reverse()
// };

console.log(reverseList([1,2,3,4,5]))

// Attempt #1
// class ListNode {
//   constructor(data, next) {
//       this.data = data
//       this.next = next || null
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   // insert firs tnode
//   insertFirst(data) {
//     const currentHead = this.head
//     this.head = new ListNode(data, currentHead);
//     this.size++;
//   }

//   // // insert last node
//   insertLast(data) {
//     let node = new ListNode(data);
//     let current;

//     // if empty - make head
//     if (this.head !== null) {
//       this.head = node;
//     } else {
//       current = this.head;

//       while (current.next !== null) {
//         current = current.next;
//       }

//       current.next = node;
//     }
//     this.size++;

//   }

//   // reverse
//   reverse() {
//     const list = [];
//     let current = this.head;
//     while (current !== null) {
//       list.push(current.data)
//       current = current.next
//     }
//     return list.reverse()
//   }

//   // insert at index

//   // get at index

//   // remove at index

//   // clera list

//   // print list data
//   printListData() {
//     let current = this.head;
//     while (current !== null) {
//       console.log(current);
//       current = current.next;
//     }
//   }
// }

// /**
// * @param {ListNode} head
// * @return {ListNode}
// */
// var reverseList = function (head) {
//   head.forEach((node) => {
//     const ln = new ListNode(cell)
//     if (true) {
//       ln.next = head[index+1]
//     }
//     listNodeAll.push(ln)
//   })
//   return listNodeAll
// };

// const a = [1,2,3,4,5]


// ll = new LinkedList();
// ll.insertFirst(5)
// ll.insertFirst(4)
// ll.insertFirst(3)
// ll.insertFirst(2)
// ll.insertFirst(1)
// console.log(ll.head)
// ll.printListData()
// console.log(ll.reverse())
// // console.log(ll.reverse())
