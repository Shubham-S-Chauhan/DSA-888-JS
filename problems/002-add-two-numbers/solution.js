/**
 * Problem 002: Add Two Numbers
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/add-two-numbers/
 *
 * Description:
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a
 * single digit. Add the two numbers and return the sum as a linked list.
 *
 * Example 1:
 *   Input: l1 = [2,4,3], l2 = [5,6,4]
 *   Output: [7,0,8]
 *   Explanation: 342 + 465 = 807.
 *
 * Example 2:
 *   Input: l1 = [0], l2 = [0]
 *   Output: [0]
 *
 * Example 3:
 *   Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 *   Output: [8,9,9,9,0,0,0,1]
 *
 * Constraints:
 *   - The number of nodes in each linked list is in the range [1, 100].
 *   - 0 <= Node.val <= 9
 *   - It is guaranteed that the list represents a number that does not have leading zeros.
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
}

/** Helper: build a linked list from an array */
function arrayToList(arr) {
  const dummy = new ListNode(0);
  let curr = dummy;
  for (const val of arr) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return dummy.next;
}

/** Helper: convert a linked list to an array */
function listToArray(node) {
  const result = [];
  while (node !== null) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

module.exports = { addTwoNumbers, arrayToList, listToArray, ListNode };
