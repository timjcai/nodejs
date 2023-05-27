/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const numHash = {};
  nums.forEach((number) => {
    if (Object.keys(numHash).includes(number.toString())) {
      numHash[number.toString()] += 1
    } else {
      numHash[number.toString()] = 1
    }
  })
  return [...Object.keys(numHash)].sort((a,b)=> numHash[b] - numHash[a]).slice(0,k)
};

const a = [4,1,-1,2,-1,2,3]
// console.log(new Array(a.length))

console.log(topKFrequent(a,2))
// console.log([].length)

// counter = 0
// use nested array.
// group nums into own array
// find top 2 based on length

// OR
//  counter = 0
//  use hashmap key = number, value = count
// each time we iterate, we increase count by 1
// at the end find largest K number of values
// find keys of K values


// var topKFrequent = function(nums, k) {
//   const numHash = {};
//   const FREQ = new Array(nums.length).fill([])
//   nums.forEach((number) => {
//     if (Object.keys(numHash).includes(number.toString())) {
//       numHash[number.toString()] += 1
//     } else {
//       numHash[number.toString()] = 1
//     }
//   })
//   Object.keys(numHash).forEach((key) => {
//     const value = numHash[key]
//     if (FREQ[value].length >= 1 || undefined) {
//       FREQ[value].push(key)
//     } else {
//       FREQ[value] = [key]
//     }
//   })
//   console.log(FREQ)
//   let res = [];
//   console.log(FREQ[3])
//   for (let i = FREQ.length - 1; i > 0; i--){
//     if (FREQ[i].length > 0) {
//       console.log('hello')
//       res.push(FREQ[i])
//       res = res.flat()
//       if (res.length === k) {
//         return res
//       }
//     }
//   }
// };
