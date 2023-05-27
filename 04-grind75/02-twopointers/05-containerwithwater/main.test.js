const maxArea = require('./main')

test('finds maximum amount of water', () => {
  expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49)
})

test('finds maximum amount of water', () => {
  expect(maxArea([1,1])).toBe(1)
})

test('finds maximum amount of water', () => {
  expect(maxArea([3,1,2])).toBe(4)
})
