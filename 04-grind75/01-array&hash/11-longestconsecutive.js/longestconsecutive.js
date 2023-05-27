/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  set = new Set(nums.sort())
  let maxStreak = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue;
    let currentStreak = 1;

    while (set.has(num + 1)) {
      currentStreak++;
      num++;
    }
    maxStreak = Math.max(maxStreak, currentStreak)
  }
  return maxStreak
};

module.exports = longestConsecutive
// sort nums into ascending order
// have a counter
// start with nums[0]
// counter = 1
// if nums[counter] = nums[counter-1] + 1
// push stack.push(nums[counter])
// else return stack.length

// oldAnswer = function (nums) {
//   const sorted = nums.sort((a, b) => {
//     return a - b;
//   })
//   let stack;
//   sorted.length === 0 ? stack = [] : stack = [sorted[0]]
//   let counter = 1;
//   sorted.forEach((num) => {
//     if (sorted[counter] === sorted[counter - 1] + 1) {
//       stack.push(sorted[counter])
//       counter += 1;
//     } else {
//       counter += 1;
//     }
//   })
//   return stack
// }

// step 1: create looping function to see how long the largest consecutive streak is
// step 2: select the largest consecutive streak
