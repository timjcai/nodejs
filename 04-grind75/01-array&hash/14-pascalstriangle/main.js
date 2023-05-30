var generate = function (numRows) {
  let result = [[1]];
  for (let i = 0; i < numRows.length - 1; i++) {
    const temp = result[0].unshift(0).push(0)
    console.log(temp)
  }
};

console.log(generate(2))
