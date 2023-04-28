/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let profit=0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     const buyPrice = prices[i]
//     for (let j = i + 1; j < prices.length ; j++) {
//       const sellPrice = prices[j]
//       if (sellPrice - buyPrice > profit) {
//         profit = (sellPrice - buyPrice)
//       }
//     }
//   }
//   return profit
// };



// our current solution times out because it is o(n^2) -> we need to run thorugh 2 loops. Can we do this in O(n)

var maxProfit = function (prices) {
  let i = 0
  let j = 1
  let lowestPrice = 0;
  let highestPrice = 0;
  let maxProfit = 0;
  while (j < prices.length) {
    if ((prices[i] < prices[j]) && (lowestPrice === 0)) {
      lowestPrice = prices[i]
      highestPrice = prices[j]
      let profit = prices[j] - prices[i]
      if (profit > maxProfit) {
        maxProfit = profit
      }
    } else if (prices[i] < prices[j]) {
      if (prices[i] < lowestPrice) {
        lowestPrice = prices[i]
      }
      if (prices[j] > highestPrice) {
        highestPrice = prices[j]
      }
      let profit = highestPrice - lowestPrice
      if (profit > maxProfit) {
        maxProfit = profit
      }
    } else {
      i++, j++
    }
    j++
  };
  return maxProfit
}
const a = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(a))
