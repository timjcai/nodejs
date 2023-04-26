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
  return Object.valuesnumHash
};

module.exports = topKFrequent

// counter = 0
// use nested array.
// group nums into own array
// find top 2 based on length

// OR
//  counter = 0
//  use hashmap key = number, value = count
// each time we iterate, we increase count by 1
// at the end find largest K number of values
// find keys of K values.
