var minEatingSpeed = function (piles, h) {
  let k = max;
  let l = 1
  let r = Math.max(...piles);

  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / m)
    }
    if (hours <= h) {
      k = Math.min(k, m)
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return k
}

const a = [3, 6, 7, 11]
const b = [30, 11, 23, 4, 20]
const c = [30,11,23,4,20]

console.log(minEatingSpeed(a, 8))
// console.log(minEatingSpeed(b, 5))
// console.log(minEatingSpeed(c, 6))

// notes:
// a microfunction to determine the matching target condition
//  we are iterating or mutating a binary search to fit the fujnction. We are trying to find the min value.
// need to learn Math..... methods with Javascript
