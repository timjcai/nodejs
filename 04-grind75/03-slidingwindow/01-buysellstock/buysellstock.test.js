const maxProfit = require('./buysellstock')

test('maximum profit', () => {
  expect(maxProfit([7,1,5,3,6,4])).toBe(5)
})

test('maximum profit', () => {
  expect(maxProfit([7,6,4,3,1])).toBe(0)
})

test('maximum profit', () => {
  expect(maxProfit([1,3,1,6,7,5])).toBe(6)
})

test('maximum profit', () => {
  expect(maxProfit([7,2,5,3,9,10,1,6,7,6,4])).toBe(8)
})
