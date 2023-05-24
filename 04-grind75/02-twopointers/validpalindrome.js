/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const testString = s.replace(/[^a-zA-Z0-9 ]/g, "").split(' ').join('').toLowerCase()
  let l = 0;
  let r = testString.length - 1;

  while (l < r) {
    if (testString[l] !== testString[r]) {
      return false
    }
    l += 1;
    r -= 1;
  }
  return true
};

const string = "OP"

console.log(isPalindrome(string))

// trick got stuck with the 0. we were previously removing all non alphabetic characters, need to include numeric characters 0P is counted as zero and P.

// problem with this solution there is a bug on a test case, we are getting the right logic, but it's not efficient nor is it bug free

// const testString = s.replace(/[^a-zA-Z ]/g, "").split(' ').join('').toLowerCase()
// let i = 0;
// let j = testString.length-1;
// const lhs = [];
// const rhs = [];
// while (i < testString.length) {
//   lhs.push(testString[i])
//   rhs.push(testString[j])
//   i += 1;
//   j -= 1;
// }
// return lhs.join('')
// if (lhs.join('') === rhs.join('')) {
//   return true
// } else {
//   return false
// }
