// var twoSum = function (nums, target) {
//   const lowestNumber = nums[0]
//   const highestNumber = target - lowestNumber
//   const newNums = nums.filter(number => number <= highestNumber)
//   let l = 0;
//   let r = newNums.length-1;
//   while (l < r) {
//     if ((target - newNums[l]) ===newNums[r]) {
//       return [l+1, r+1]
//     } else {
//       if (l % 2 === 0) {
//         l +=1
//       } else {
//         r -=1
//       }
//     }
//   }
// };

// ran out of time. all the elements are sorted in ascending order, therefore we can exclude anything that is above the target
// because ascending order - we can start from the back and move towards the middle until the two added together equal the target.

// console.log(twoSum([2,7,11,15],9))

// var twoSum = function (nums, target) {
//   const lowestNumber = nums[0]
//   const highestNumber = target - lowestNumber
//   const newNums = nums.filter(number => number <= highestNumber)
//   for (let i = 0; i < newNums.length; i++) {
//     const targetNumber = target - newNums[i]
//     for (let j = newNums.length-1; j > i; j--){
//       if (newNums[j] === targetNumber) {
//         return [i+1,j+1]
//       }
//     }
//   }
// };

// got half way there - if we step through the solution one by one - if we start 2 pointers. If sum > target reduce right side, if sum < target reduce left side.

var twoSum = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    if (nums[l] + nums[r] > target) {
      r--;
    } else if (nums[l] + nums[r] === target) {
      return [l+1,r+1]
    } else {
      l++;
    }
  }
};
