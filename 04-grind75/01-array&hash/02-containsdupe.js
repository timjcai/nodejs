// // Given an integer array nums,
// return true if any value appears at least twice in the array,
//   and return false if every element is distinct.

var containsDuplicate = function (nums) {
  const stack = [];
  let answer = false;

  nums.forEach((num) => {
    if (!stack.includes(num)) {
      stack.push(num);
    } else {
      answer = true;
    }
    return answer;
  })
  return (answer ? true : false);
};

// we want to capture everything in an object and have a tally counter to determine
// low n complexity - time complexity. can we do this in 1 loop
// assumptions - array only cotains integers (no floats or strings)
// there will always be atleast 2 numbers.

// loop through the array
// if stack does not include num, pop()
// if stack does contain num, return false
// else true

// examples:
const a = [1, 2, 3, 1];
const b = [1, 2, 3, 4];
const c = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(a));
console.log(containsDuplicate(b));
console.log(containsDuplicate(c));
