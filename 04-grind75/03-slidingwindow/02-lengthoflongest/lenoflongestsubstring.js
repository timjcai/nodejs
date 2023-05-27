/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let l = 0;
  let r = 1;
  let max = [];
  let pair = [];
  if (s[l]) {
    pair.push(s[l])
  }
  if (max.length === 0) {
    max = pair
  }
  while (r < s.length) {
    if (pair.includes(s[r])) {
      if (max.length < pair.length) {
        max = pair
      }
      pair = []
      l++
      r = l + 1
      pair.push(s[l])
    } else {
      pair.push(s[r])
      if (max.length < pair.length) {
        max = pair
      }
      r++
    }
  }
  return max.length
};

// longest substring, without duplicates
// use Set.has(method)
// 2 pointers.
// record max = Set.length

// l = 0
// r = 1

// start substring with l + r = 0
// if set.has(r) then move both l++, r++, l = 1, r = 2
// if !set.has(r), then move r++

// we continue while r < s.length

const a = "dvdf"

console.log(lengthOfLongestSubstring(a))
