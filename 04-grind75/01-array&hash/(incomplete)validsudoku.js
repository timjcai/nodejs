/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const allCombos = {};
  for (let row = 0; row < 9, row++){
    for (let column = 0; column < 9, column++){
      const current_char = board[row][column]
      if (current_char != '.') {

      }
    }
  }
  return true
};

const board1 =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

const board2 =
[["8","3",".",".","7",".","8",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".", ".", ".", ".", "8", ".", ".", "7", "9"]]


// console.log(isValidSudoku(board1));
// console.log(isValidSudoku(board2));

// going through each row, column and 3x3 would take too long - bloat the time complexity of this solution - understanding different data structures will help with the solution
//  a hash set must have unique keys, it cannot have 2 of the same keys.

// const checkVertical = function (board) {
//   const dupechecker = [];
//   board.forEach((array) => {
//     const stack = {}
//     array.forEach((number) => {
//       if (stack[number]) {
//         stack[number] += 1
//       } else {
//         stack[number] = 1
//       }
//     })
//     stack["."]=0
//     dupechecker.push(Object.values(stack))
//   })
//   dupechecker.flat().forEach((number) => {
//     if (number > 1) {
//       return false
//     }
//   })
//   return true
// }
