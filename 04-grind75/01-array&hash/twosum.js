/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   // 1. keep original array as a variable
//   const original = nums;
//   const newArray = [];
//   const finalNumbers = [];
//   const finalPosition = [];
//   // 2. if number is greater than target - exclude in new array
//   nums.forEach((number) => {
//     if (number < target) {
//       newArray.push(number);
//     }
//   })
//   // 3. sort array by size
//   newArray.forEach((number) => {
//     const firstElement = newArray.shift()
//     newArray.forEach((number)=>{
//       if (firstElement + number === target) {
//         finalNumbers.push(firstElement);
//         finalNumbers.push(number);
//       }
//     })
//   })
//   finalPosition.push(original.indexOf(finalNumbers[0]));
//   finalPosition.push(original.lastIndexOf(finalNumbers[1]));

//   return finalPosition
// };




// 4. start from largest number and find smallest available interger
// 5. output numbers
// 6. find index of original numbers



// assumptions:
// only 1 correct answer
// you cannot use two indexes twice
// example:

//  signature that has desired input and output

// time complexity when we loop through the array only once, rather than looping through twice.



var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const targetNumber = target - nums[i]
    for (let j = i + 1; j < nums.length; j++){
      if (nums[j] === targetNumber) {
        return [i,j]
      }
    }
  }
};


console.log(twoSum([3, 3], 6))
console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
