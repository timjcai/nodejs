/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sArray = s.split('').sort()
  const tArray = t.split('').sort()
  if (sArray.join('') === tArray.join('')) {
    return true
  } else {
    return false
  }
};
