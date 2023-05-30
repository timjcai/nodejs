const longestCommonPrefix = require('./main')

test('finds longest common prefix', () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl")
})

test('finds longest common prefix', () => {
  expect((longestCommonPrefix(["dog","racecar","car"]))).toBe("")
})

test('finds longest common prefix', () => {
  expect((longestCommonPrefix(["ear","eat","each"]))).toBe("ea")
})
