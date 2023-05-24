var productExceptSelf = function (nums) {
  const answer = [];
  let counter = 0;
  if (nums.filter(element => element === 0).length > 1) {
    nums.forEach((element) => {
      answer.push(0)
    })
    return answer
  } else if (nums.includes(0)) {
      const noZeroNums = nums.filter(element => element !== 0)
      noZeroNums.forEach((element) => {
        if (counter === 0) {
          counter = element
        } else {
          counter = element * counter
        }
      })
      nums.forEach((element) => {
        if (element !== 0) {
          answer.push(0)
        } else {
          answer.push(counter)
        }
      })
      return answer
  } else {
    nums.forEach((element) => {
      if (counter === 0) {
        counter = element
      } else {
        counter = element * counter
      }
    })
    nums.forEach((element) => {
      answer.push(counter/element)
    })
    return answer
  }
};

const a = [1, 2, 3, 4,0,0]
const b = [-1,1,0,-3,3]

console.log(a.filter(element => element === 0).length)
// console.log((b.includes(0)))



// console.log(productExceptSelf(a))
// console.log(productExceptSelf(b))
