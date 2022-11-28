/** Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

var maxProfit = function(prices) {
    let totalProfit = 0;
    let buyPrice = prices[0];
    for(let i = 0; i < prices.length; i++){
        if(prices[i+1] < prices[i] && prices[i+1] < buyPrice){ // Checking for the cheapest price and updating the buy price
            buyPrice = prices[i+1];
        }

        if(totalProfit < prices[i+1] - buyPrice){ // Checking for the best profit and updating the total profit
            totalProfit = prices[i+1] - buyPrice;
        }
    }
    return totalProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));

/* Output : 5 */