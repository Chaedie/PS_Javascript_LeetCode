/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {    
  let nonZeroIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIdx] = nums[i];
      nonZeroIdx++;
    }
  }
  
  for (let i = nonZeroIdx; i < nums.length; i++) {
    nums[i] = 0;
  }
  
};