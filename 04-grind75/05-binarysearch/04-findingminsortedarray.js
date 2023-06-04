var findMin = function (nums) {
  let min = Infinity;
  let l = 0;
  let r = nums.length - 1

  while (l <= r) {
    if (nums[l] < nums[r]) {
      min = Math.min(min, nums[l])
      break
    }
    let m = Math.floor((l + r) / 2)
    min = Math.min(min,nums[m])
    if (nums[l] <= nums[m]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return min
};

console.log(findMin([3,4,5,1,2]))

// one version of the answer:

// var findMin = function(nums) {
//   return Math.min(...nums)
// };
