var detectCycle = function(head) {
  const set = new Set();
  let count = 0;
  while(head) {
      if (set.has(head)) {
          return head
      }
      set.add(head)
      set.add(count)
      head = head.next
      count++;
  }
  return null;
};
