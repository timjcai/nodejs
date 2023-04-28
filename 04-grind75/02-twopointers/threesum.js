// const nums = [-1,0,1,2,-1,-4]

// var threeSum = function(nums) {
//   const stack = [];
//   for (let i = 0; i < nums.length - 2; i++) {
//     let j = i + 1
//     for (let k = i+2; k < nums.length; k++) {
//       if (nums[i]+nums[j]+nums[k]===0) {
//         stack.push([nums[i],nums[j],nums[k]])
//       }
//     }
//   }
//   return stack
// };

// we know that the we are only looking for the final values - we can modify this array to be a sorted array. Otherwise we would need to concern ourselves with the original indexs.
// similarly to 2 sum II -> if total > 0 then remove from the right
// if total < 0 remove from the left
// if nums[i] = nums[j] || nums[k] we can skip until num


// var threeSum = function (nums) {
//   const sortedNums = nums.sort();
//   const stack = [];
//   let target;
//   for (let i = 0; i < sortedNums.length - 2; i++) {
//     target = -sortedNums[i]
//     if (sortedNums[i] === sortedNums[i - 1]) {
//       continue
//     }
//     let j = i + 1;
//     let k = sortedNums.length - 1;
//     while (j < k) {
//       if (sortedNums[j]+sortedNums[k] > target) {
//         k--;
//       } else if (sortedNums[j] + sortedNums[k] < target) {
//         j++
//       } else {
//         stack.push[sortedNums[i], sortedNums[j], sortedNums[k]]
//         j++
//         while (sortedNums[j] === sortedNums[j - 1] && j < k)
//           j++
//       }
//     }
//   }
//   return stack
// };

// worked out in steps

var threeSum = function (nums) {
  const stack = [];
  const snums = nums.sort((a,b)=>a-b);
  console.log(snums)
  for (let i = 0; i < nums.length - 2; i++) {
    while (snums[i] === snums[i-1]) {
      i ++
    }
    let j = i + 1;
    let k = snums.length - 1;
    console.log(`i=${i},j=${j},k=${k}`)
    while (j < k) {
      if (0 > snums[i] + snums[j] + snums[k]) {
        j++
        while ((snums[j] === snums[j-1])&& j<k) {
          j++;
        }
        console.log(`i=${i},j=${j},k=${k}`)
      } else if (0 < snums[i] + snums[j] + snums[k]) {
        k--;
        while ((snums[k] === snums[k + 1]) && j < k) {
          k--;
        }
        console.log(`i=${i},j=${j},k=${k}`)
      } else {
        stack.push([snums[i], snums[j], snums[k]])
        j++;
        while ((snums[j] === snums[j-1])&& j<k) {
          j++;
        }
      }
    }
  }
  return stack
};

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))

// learings:
  // - any variation of 2 sum - think of it like 2sum - similar to a Rubix Cube
  // - if we have a situation where we cannot use duplicates - use a while loop instead. so while (condition is true) perform action
  // - if we do not need to consider index or original position - but only concerned with final result - we look at sorting or manipulating the original dataset/datastructure
