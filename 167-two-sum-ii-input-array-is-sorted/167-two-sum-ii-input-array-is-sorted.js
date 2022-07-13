/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let lt = 0;
  let rt = numbers.length -1;
  let twoSum = 0;
  while (lt < rt) {
    twoSum = numbers[lt] + numbers[rt];
    if (twoSum === target) {
      return [lt + 1, rt + 1];
    } else {
			twoSum < target ? lt++ : rt--;
		}
  }
  
};