var findKthLargest = function(nums, k) {
  this.target = k;
  this.queue = nums;

  this.queue.sort((a, b) => (a - b))
  return this.queue[this.queue.length - this.target]
};
