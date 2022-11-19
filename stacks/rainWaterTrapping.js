/** 42. Trapping Rain Water

https://leetcode.com/problems/trapping-rain-water/

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]

Solution: **/

var trap = function(height) {
    let leftMax = 0;
    let absLeftGreater = [height.length];
    
    for(let i = 0; i < height.length; i++){
        if(leftMax < height[i]){
            leftMax = height[i];
        }
        absLeftGreater[i] = leftMax;
    }
    
    let rightMax = 0;
    let absRightGreater = [height.length];
    
    for(let i = height.length - 1; i >= 0; i--){
        if(rightMax < height[i]){
            rightMax = height[i];
        }
        absRightGreater[i] = rightMax;
    }
    
    let trappedUnits = 0;
    
    for(let i = 0; i < height.length; i++){
        trappedUnits += Math.min(absLeftGreater[i], absRightGreater[i]) - height[i];
    }
    
    return trappedUnits;
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height));

/* Output: 6 */