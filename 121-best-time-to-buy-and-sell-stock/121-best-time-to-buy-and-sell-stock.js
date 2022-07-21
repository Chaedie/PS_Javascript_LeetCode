/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 비교해서 전날 보다 싼 날이 있는지 확인 
  // for돌리면서 -되면 팔기, 
  // 그냥 배열에 오늘과 다음날의 비교값을 다 담아서 +인지 아닌지 여부 확인해서 + 이면 팔고 -이면 안팔고 이런식으로 해야될것 같은데 ? 
  
  const maxNums = [];
  let maxNum = Number.MIN_VALUE;
  let j = 1;
  let i = 0;
  while (j < prices.length) {  
    if (prices[j] < prices[i]) {
      i = j;
      j++;
      continue;
    }
    
    let diff = prices[j] - prices[i];
    diff = prices[j] - prices[i];
    maxNum = Math.max(diff, maxNum);
    j++;  
  }
    
  
  return maxNum;
};