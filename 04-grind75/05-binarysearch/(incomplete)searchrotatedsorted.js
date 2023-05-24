var search = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  let k;

  while (l <= r) {
    let m = Math.floor((r + l) / 2)
    if (nums[l] > nums[m]) {
      r = m - 1
    } else if (nums[r] < nums[m]) {
      l = m + 1
    } else {
      return m = k
    }
  }
  return k
};

const a = [4, 5, 6, 7, 0, 1, 2]

console.log(search(a,5))
