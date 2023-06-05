var solution = function (a, k) {
  const toCheck = Array.from({ length: k }, (_, index) => index + 1);
  for (let i = 0; i < toCheck.length; i++){
    if (a.includes(toCheck[i])) {
      continue
    } else {
      return false
    }
  }
  return true
}

const a = [1,1,2,3,3]

console.log(solution(a,3))
