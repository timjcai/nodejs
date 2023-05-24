/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const sorted = nums.sort((a, b) => {
    const ab = a.toString() + b.toString();
    const ba = b.toString() + a.toString();
    return ba - ab;
  })
  const joined = sorted.join('')
  if (parseInt(joined) === 0) {
    return '0'
  } else {
    return joined
  }
};

module.exports = largestNumber

// maximum array length is 100
// the array can be up to 1,000,000,000

// 1. we need to sort them from largest to smallest (when comparing to the next one and their combination)
