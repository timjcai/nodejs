var replaceElements = function (arr) {
  const result = []
  let max = -1
  for (let i = arr.length - 1; i > -1; i --) {
    result.push(max)
    if (arr[i] > max) {
      max = arr[i]
    } else {
      continue
    }
  }
  return result.reverse()
};

// edge cases: 1 element, 0 elements
const a = [400]
const b = []
const c = [17,18,5,4,6,1]

// can we complete this linear time? (based on the length of the elements)
//

console.log(replaceElements(a))
console.log(replaceElements(b))

console.log(replaceElements(c))
