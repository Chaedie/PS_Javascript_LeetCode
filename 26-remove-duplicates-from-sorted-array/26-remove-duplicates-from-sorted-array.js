/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const result = [];
  let preValue;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (preValue !== nums[i]) {
      nums[k] = nums[i];
      k++;
      preValue = nums[i];
    }
  }
  
  return k;
};