const minimumDifference = require('./main')

test('finds the minimum possible distance', () => {
  expect(minimumDifference([9, 4, 1, 7], 2)).toBe(2)
})

test('finds the minimum possible distance', () => {
  expect(minimumDifference([900], 1)).toBe(0)
})
