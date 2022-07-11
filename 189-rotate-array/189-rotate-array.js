/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    k = k % nums.length
    let rotate = nums.length - k
    for (let i = 0; i < rotate; i++) {
        nums.push(nums[i]);
    }
    return nums.splice(0, rotate);
    
};