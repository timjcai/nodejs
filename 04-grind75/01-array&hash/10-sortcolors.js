var sortColors = function (nums) {
  const result = [0,0,0]
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) {
      result[0] += 1
    } else if (nums[i]===1) {
      result[1] += 1
    } else {
      result[2] += 1
    }
  }

};

// we cannot return a new array, we need to modify nums in it's place.
var sortColors = function (nums) {
  const total = [];
  const twos = [];
  for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i]===0) {
        total.unshift(0)
      } else if (nums[i]===1) {
        total.push(1)
      } else {
        twos.push(2)
      }
  }
  return (total.concat(twos))
};


const a = [2,0,2,1,1,0]

console.log(sortColors(a))
