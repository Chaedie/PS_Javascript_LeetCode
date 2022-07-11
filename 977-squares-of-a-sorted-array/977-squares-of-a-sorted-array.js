/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    const answer = [];
    let lt = 0;
    let rt = nums.length - 1;
    let idx = nums.length - 1;
    while (lt <= rt) {
        let ltSqr = nums[lt] ** 2;
        let rtSqr = nums[rt] ** 2;
        if (ltSqr > rtSqr) {
            answer[idx] = ltSqr;
            lt++;
        } else {
            answer[idx] = rtSqr;
            rt--;
        }
        idx--;
    }
    
    return answer;
};