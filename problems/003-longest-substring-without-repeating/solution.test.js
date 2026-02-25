const { lengthOfLongestSubstring } = require('./solution');

describe('Problem 003: Longest Substring Without Repeating Characters', () => {
  test('Example 1: "abcabcbb" => 3', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  test('Example 2: "bbbbb" => 1', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  test('Example 3: "pwwkew" => 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  test('Edge case: empty string => 0', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  test('Edge case: single character => 1', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
  });

  test('All unique characters: "abcdef" => 6', () => {
    expect(lengthOfLongestSubstring('abcdef')).toBe(6);
  });
});
