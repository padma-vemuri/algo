/*
    Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

    Example:

    Input: [-2,1,-3,4,-1,2,1,-5,4],
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6. 

    Input: [-1,-2],
    Output: -1
    Explanation: [-1] has the largest sum = -1.
    
    Input: [1,2],
    Output: 3
    Explanation: [1,2] has the largest sum = 3.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  const allNeg = nums.every(num => num < 0);
  if (allNeg) return Math.max(...nums);
  let maxSum = 0;
  let currentSum = 0;
  const low = Math.min(...nums);
  nums.forEach(num => {
    currentSum = Math.max(0, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  });
  return maxSum;
};
