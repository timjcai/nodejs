var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    const last = stones.length - 1
    const secondLast = stones.length - 2
    stones.sort((a, b) => (a - b))
    let diff = stones[last] - stones[secondLast]
    diff > 0 ? diff = diff : diff = -diff
    stones.pop()
    stones.pop()
    stones.push(diff)
  }
  return stones
};

console.log(lastStoneWeight([2,7,4,1,8,1]))
