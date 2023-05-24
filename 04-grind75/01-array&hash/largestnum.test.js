const largestNumber = require('./largestnum')

test('finds largest number in array', () => {
  expect(largestNumber([10,2])).toBe("210")
})

test('finds largest number in array', () => {
  expect(largestNumber([3,30,34,5,9])).toBe("9534330")
})
