/**
 * Problem 001: Two Sum
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/two-sum/
 *
 * Description:
 * Given an array of integers `nums` and an integer `target`, return the indices
 * of the two numbers such that they add up to `target`.
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * Example 1:
 *   Input: nums = [2, 7, 11, 15], target = 9
 *   Output: [0, 1]
 *   Explanation: nums[0] + nums[1] == 9, so we return [0, 1].
 *
 * Example 2:
 *   Input: nums = [3, 2, 4], target = 6
 *   Output: [1, 2]
 *
 * Constraints:
 *   - 2 <= nums.length <= 10^4
 *   - -10^9 <= nums[i] <= 10^9
 *   - -10^9 <= target <= 10^9
 *   - Only one valid answer exists.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

module.exports = { twoSum };
