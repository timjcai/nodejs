var searchMatrix = function (matrix, target) {
  let bottom = 0
  let top = matrix.length - 1

  while (bottom <= top) {
    let rowMiddle = (top + bottom / 2)
    if (matrix[rowMiddle].at(0) > target) {
      top = rowMiddle - 1
    } else if (matrix[rowMiddle].at(-1) < target) {
      bottom = rowMiddle + 1
    } else {
      break
    }
  }
  let rowMiddle = (top + bottom / 2)
  if (!(top <= bottom)) {
    return false
  }
  let l = 0
  let r = matrix[0].length - 1

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (target === matrix[rowMiddle][m]) {
      return true
    } else if (target < matrix[rowMiddle][m]) {
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return false
};

const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
const matrix2 = [[1,3]]

console.log(searchMatrix(matrix, 3))
console.log(searchMatrix(matrix2, 2))


// we carry out 2 binary searhces - the first one is the rows, the second one is hte columns of the row - had hte right logic, didn't have good execution.

// let array = matrix.flat();
// let end = array.length - 1
// let start = 0

// let middle = Math.floor(end+start/2)

// if (array[middle] === target) {
//   return true
// } else if (array[middle] > target) {
//   end = middle - 1
//   middle = (end + start) / 2
//   array = array.slice(start, middle)
//   searchMatrix(array,target)
// } else {
//   start = middle + 1
//   middle = (end + start) / 2
//   array = array.slice(middle, end)
//   searchMatrix(array,target)
// }

// return false
