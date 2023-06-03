let memory = [];
var climbStairs = function (n) {
  if (n <= 2) { return n }
  if (memory[n] != undefined) { return memory[n] }
  memory[n] = climbStairs(n-1) + climbStairs(n-2)
  return memory[n]
};

// this solution took too long

// var climbStairs = function(n) {
//   if (n === 1) {
//     return 1
//   } else if (n === 2) {
//     return 2
//   } else {
//     return climbStairs(n-1) + climbStairs(n-2)
//   }
// };


// var climbStairs = function(n) {
//   let one = 1
//   let two = 1

//   for (let i = 0; i < n - 1; n++){
//     const temp = one;
//     one = two + one;
//     two = temp
//   }
//   return one
// };
