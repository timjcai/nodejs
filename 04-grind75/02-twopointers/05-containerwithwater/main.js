var maxArea = function(height) {
  let maxArea = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    if (height[l] > height[r]) {
      const tall = height[r]
      const width = r - l
      area = tall * width
      area > maxArea ? maxArea = area : maxArea = maxArea
      r--;
    } else {
      const tall = height[l]
      const width = r - l
      area = tall * width
      area > maxArea ? maxArea = area : maxArea = maxArea
      l++;
    }
  }
  return maxArea
};

module.exports = maxArea
