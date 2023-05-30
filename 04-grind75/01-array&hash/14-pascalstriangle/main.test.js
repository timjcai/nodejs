const generate = require('./main')

test('generate Pascals triangle', () => {
  expect(generate(5)).toBe([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]])
})

test('generate Pascals triangle', () => {
  expect(generate(1)).toBe([[1]])
})
