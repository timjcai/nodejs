class ListNode {
  constructor(data, next = null) {
      this.data = data
      this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert firs tnode
  insertFirst(data) {
    const currentHead = this.head
    this.head = new ListNode(data, currentHead);
    this.size++;
  }

  // // insert last node
  insertLast(data) {
    let node = new ListNode(data);
    let current;

    // if empty - make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;

  }

  // reverse
  reverse() {
    prev = null;
    curr = this.head;
    while (curr !== null) {
      nxt = curr.next
      curr.next = prev;
      prev = curr
      curr = nxt
    }
    return prev
  }

  // insert at index

  // get at index

  // remove at index

  // clera list

  // print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

/**
* @param {ListNode} head
* @return {ListNode}
*/
var reverseList = function (head) {
  head.forEach((node) => {
    const ln = new ListNode(cell)
    if (true) {
      ln.next = head[index+1]
    }
    listNodeAll.push(ln)
  })
  return listNodeAll
};

const a = [1,2,3,4,5]


ll = new LinkedList();
ll.insertFirst(new ListNode(5))
ll.insertFirst(new ListNode(4))
ll.insertFirst(new ListNode(3))
ll.insertFirst(new ListNode(2))
ll.insertFirst(new ListNode(1))

ll.printListData()
console.log(ll.reverse())
