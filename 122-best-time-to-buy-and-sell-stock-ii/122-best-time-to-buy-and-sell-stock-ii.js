/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // diff함수에 다 담아서
  // +값 다 더하기?
  
  const diffs = [];
  for (let i = 0; i < prices.length - 1; i++) {
    let diff = prices[i + 1] - prices[i];
    diff > 0 ? diffs.push(diff) : null;
  }
    

  return diffs.reduce((acc, cur) => acc += cur, 0);
};