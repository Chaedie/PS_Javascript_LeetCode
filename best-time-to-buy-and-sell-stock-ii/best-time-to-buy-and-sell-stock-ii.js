/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const diffs = [];
  for (let i = 0; i < prices.length - 1; i++) {
    let diff = prices[i + 1] - prices[i];
    diff > 0 ? diffs.push(diff) : null;
  }
    
  return diffs.reduce((acc, cur) => acc += cur, 0);
};