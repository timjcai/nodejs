var solution = function (a, b) {
  const total = a * b
  let count = 0;
  const array = total.toString(2).split('')
  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i]) === 1) {
      count++;
    }
  }
  return count
}

console.log(solution(3,7))
