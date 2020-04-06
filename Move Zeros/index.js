/*

Given an array nums, 
write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Example:

Input: [0,0,1]
Output: [1,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const swap = (nums, n, m) => {
  const temp = nums[n];
  nums[n] = nums[m];
  nums[m] = temp;
};
const moveZeroes = (nums) => {
  for (i = 0, lastNonZeroFoundAt = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      swap(nums, lastNonZeroFoundAt++, i);
    }
  }
};
