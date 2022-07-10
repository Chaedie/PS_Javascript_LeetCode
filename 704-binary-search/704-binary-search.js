/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let lt = 0;
    let rt = nums.length - 1;
    let mid = 0;
    for (let i = 0; i < nums.length; i++) {
        mid = Math.floor(((rt - lt) / 2) + lt);
        if (nums[mid] === target) {
            return mid;
        }
        if (mid < -1 || mid >= nums.length){
            break;
        }
        if (target < nums[mid]) {
            rt = mid - 1;
            continue;
        }
        if (nums[mid] < target) {
            lt = mid + 1;
            continue;
        }
    }
    
    return -1;
};