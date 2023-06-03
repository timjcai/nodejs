/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.target = k;
  this.queue = nums;
};

/**
 * @param {number} val
 * @return {number}
 */

KthLargest.prototype.add = function(val) {
  this.queue.push(val);
  this.queue.sort((a, b) => (a - b))
  return this.queue[this.queue.length - this.target]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
