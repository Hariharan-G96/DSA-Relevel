/** Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 */

 var maxArea = function(height) {
    let maxArea = 0;
    let left = 0, right = height.length - 1;
    
    while(left < right){
        let currentArea = Math.min(height[left], height[right]) * (right - left); // To find the current area with the help of minimum height container so that water can stay at thet level
        maxArea = Math.max(currentArea, maxArea); // To find the maximum area
        
        if(height[left] < height[right]){ // right is already greater so increment left for further possibilities
            left++;
        }
        else{ // left is already greater so decrement right for further possibilities
            right--;
        }
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

/* Output : 49 */