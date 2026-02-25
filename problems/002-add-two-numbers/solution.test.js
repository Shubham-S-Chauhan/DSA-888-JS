const { addTwoNumbers, arrayToList, listToArray } = require('./solution');

describe('Problem 002: Add Two Numbers', () => {
  test('Example 1: [2,4,3] + [5,6,4] = [7,0,8]', () => {
    const l1 = arrayToList([2, 4, 3]);
    const l2 = arrayToList([5, 6, 4]);
    expect(listToArray(addTwoNumbers(l1, l2))).toEqual([7, 0, 8]);
  });

  test('Example 2: [0] + [0] = [0]', () => {
    const l1 = arrayToList([0]);
    const l2 = arrayToList([0]);
    expect(listToArray(addTwoNumbers(l1, l2))).toEqual([0]);
  });

  test('Example 3: [9,9,9,9,9,9,9] + [9,9,9,9] = [8,9,9,9,0,0,0,1]', () => {
    const l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = arrayToList([9, 9, 9, 9]);
    expect(listToArray(addTwoNumbers(l1, l2))).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });
});
