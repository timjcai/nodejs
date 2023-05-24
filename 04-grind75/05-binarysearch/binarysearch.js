var search = function(nums, target) {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    let m = Math.floor((r + l) / 2)
    if (target < nums[m]) {
      r = m - 1
    } else if (target > nums[m]) {
      l = m + 1
    } else {
      return m
    }
  }
  return -1
};

// issue is that when javascript divides integers, it will return a float - we need to round down to whole numbers. Use math.floor to make this recursive function work.
