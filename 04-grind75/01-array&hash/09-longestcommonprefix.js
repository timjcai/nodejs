var longestCommonPrefix = function(strs) {
  let prefix = strs[0];
  console.log(prefix)
  for (let i = 0; i < strs.length; i++){
    while (strs[i].indexOf(prefix) !== 0) {
      console.log(strs[i])
      prefix = prefix.slice(0, prefix.length - 1)
      if (prefix === "") {
        break
      }
    }
  }
  return prefix
};

const a = ["flower","flow","flight"]
const b = ["dog","racecar","car"]

// aim for linear time complexity - O(n)

console.log(longestCommonPrefix(a))
