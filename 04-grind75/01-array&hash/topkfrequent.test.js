const topKFrequent = require('./topkfrequent')

test('finds top K frequent', () => {
  expect(topKFrequent([1,1,1,2,2,3], 2)).toBe([1,2])
})

test('finds top K frequent', () => {
  expect(topKFrequent([1], 1)).toBe([1])
})
