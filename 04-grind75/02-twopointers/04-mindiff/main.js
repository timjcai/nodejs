var minimumDifference = function (nums, k) {
  let lowest = Infinity;
  if (nums.length === 1) {
    lowest = 0
  }
  const sorted = nums.sort((a, b) => (a - b))
  let l = 0;
  let r = k-1;
  while (r < sorted.length) {

    let result = nums[r] - nums[l];
    if (result < lowest) {
      lowest = result
    } else {
      lowest = lowest
    }
    l++;
    r++;
  }
  return lowest
};

module.exports = minimumDifference;

console.log(minimumDifference([87063,61094,44530,21297,95857,93551,9918]))
