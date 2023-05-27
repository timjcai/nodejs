const longestConsecutive = require('./longestconsecutive')

test('finds longest consecutive array', () => {
  expect(longestConsecutive([100,4,200,1,3,2])).toBe(4)
})

test('finds longest consecutive array', () => {
  expect(longestConsecutive([0,3,7,2,5,8,4,6,0,1])).toBe(9)
})

test('finds longest consecutive array', () => {
  expect(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6])).toBe(7)
})
