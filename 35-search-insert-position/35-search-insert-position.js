/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    nums.push(Number.MAX_VALUE);
    let lt = 0;
    let rt = nums.length - 1;
    let mid = 0;
    for (let i = 0; i < nums.length; i++) {
        mid = Math.floor(((rt - lt) / 2) + lt);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            if (nums[mid + 1] > target) {
                return mid + 1;
            }
            lt = mid + 1;
            continue;
        }
        if (target < nums[mid]) {
            if (mid === 0) {
                return 0;
            }
            if (nums[mid - 1] < target) {
                return mid;
            }
            rt = mid - 1;
            continue;
        }
    }
};