var kClosest = function (points, k) {
  const result = []
  points.map((array) => {
    const distance = Math.pow(array[0],2) + Math.pow(array[1],2)
    array.unshift(distance)
  })
  points.sort((a, b) => (a[0]-b[0]))
  for (let i = 0; i < k; i++) {
    const location = points.shift()
    result.push(location.splice(1,2))
  }
  return result
};

console.log(kClosest([[3,3],[5,-1],[-2,4]],2))
