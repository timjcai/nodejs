var search = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  let k = -1

  while (l <= r) {
    let m = Math.floor((r + l) / 2)
    if (target === nums[m]) {
      return k = m
    }
    if (nums[l] <= nums[m]) {
      if (nums[l] <= target && nums[m] >= target) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (nums[r] >= target && nums[m] <= target) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return k
};

const a = [4, 5, 6, 7, 0, 1, 2]

console.log(search(a,1))
console.log(search(a,3))

// while (l <= r) {
//   let m = Math.floor((r + l) / 2)
//   if (target === nums[m]) {
//     return k = m
//   }
//   if (nums[r] < nums[m] && target < nums[m]) {
//     r = m - 1
//   }
//   if (nums[l] > nums[m] && target > nums[m]) {
//     l = m + 1
//   }
//   if (nums[r] < nums[m] && target > nums[m]) {
//     l = m + 1
//   }
//   if (nums[l] > nums[m] && target < nums[m]) {
//     r = m - 1
//   }
// }
// return k
