
const a = ["eat", "tea", "tan", "ate", "nat", "bat"];
const b = [""]
const c = ["a"]

// assumptions:
// - all lowercase
//   - all strings no numbers or boolean(other data types)
//   - we want n(0) time complexity - so 1 loop only


//   - core problem
//   - how do we match anagrams ?

//   - loop through original Array
//   - check if match if match, append the end of that Array
//   - if no match create a new array with that character
//   - the best way to match is to split the string, order in alphabetical order.If match exactly.We would match against the first instance of the internal array

// var groupAnagrams = function(strs) {
//   const stack = [['test']];

//   strs.forEach((word) => {
//     stack.forEach((subarray) => {
//       if (word.split('').sort() === subarray[0].split('').sort()) {
//         subarray.push(word);
//       } else {
//         stack.push([word]);
//       }
//     })
//   })
//   stack.shift()
//   return stack;
// };



// so rather than splitting and sorting. We want to make sure that we can count the amount of characters and if there is a match - we have the key as the count and the values as the list of strings in an array
var groupAnagrams = function (strs) {
  const result = {};
  strs.forEach((word) => {
    const key = word.split('').sort().join('');
    if (result[key]) {
      result[key].push(word);
    } else {
      result[key] = [word];
    }
  })
  return Object.values(result);
}

// console.log(groupAnagrams(a));
// console.log(groupAnagrams(b));
// console.log(groupAnagrams(c));
