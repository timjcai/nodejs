/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const sArray = s.split('')
  const tArray = t.split('')
  let i = 0;
  let j = 0;
  while (i < sArray.length && j < tArray.length) {
    if (sArray[i] === tArray[j]) {
      i += 1;
    }
    j += 1;
  }
  if (i === sArray.length) {
    return true
  } else {
    return false
  }
};


s = 'ab'
t = 'baab'

console.log(isSubsequence(s,t))

// the problem with this solution  is that it doesn't account for the edge case of "baab"

// var isSubsequence = function (s, t) {
//   const sArray = s.split('')
//   const tArray = t.split('')
//   const stack = [];
//   tArray.forEach((element) => {
//     if (sArray.includes(element)) {
//       stack.push(element)
//     }
//   })
//   if (stack.join('') === sArray.join('')) {
//     return true
//   } else {
//     return false
//   }
// };

// solution - 2 pointers. we increase the counter of 2 things when we are looking at 2 seperate arrays.
