/* Sum of Subarray Minimums 
https://leetcode.com/problems/sum-of-subarray-minimums/ */

var sumSubarrayMins = function(arr) {
    let n = arr.length;
    let M = Math.pow(10, 9) + 7;
    
    let ple = PLE(arr);
    let nle = NLE(arr);
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum = (sum + arr[i] * ((i - ple[i]) * (nle[i] - i))) % M; // Formula used
    }
    return sum;
};

function PLE(arr){
  let stack = [0];
  let ans = [-1];
  
    for(let i = 1; i < arr.length; i++){
        if(arr[stack[stack.length-1]] < arr[i]){
            ans.push(stack[stack.length-1]);
        }
        else if(arr[stack[stack.length-1]] >= arr[i]){
            while(stack.length > 0 && arr[stack[stack.length-1]] >= arr[i]){
                stack.pop();
            }
            if(stack.length === 0){
                ans.push(-1);
            }
            else if(arr[stack[stack.length-1]] < arr[i]){
                ans.push(stack[stack.length-1]);
            }
        }
        stack.push(i);
    }
    return ans;
};

function NLE(arr){
  let n = arr.length; 
  let stack = [n-1];
  let ans = [n];
  
    for(let i = n-2; i >=0 ; i--){
        if(arr[stack[stack.length-1]] < arr[i]){
            ans.push(stack[stack.length-1]);
        }
        else if(arr[stack[stack.length-1]] >= arr[i]){
            while(stack.length > 0 && arr[stack[stack.length-1]] > arr[i]){
                stack.pop();
            }
            if(stack.length === 0){
                ans.push(n);
            }
            else if(arr[stack[stack.length-1]] <= arr[i]){
                ans.push(stack[stack.length-1]);
            }
        }
        stack.push(i);
    }
    return ans.reverse();
};

let arr = [3,1,2,4];
console.log(sumSubarrayMins(arr));

/* Output: 17 */

/* Largest Rectangle in Histogram
https://leetcode.com/problems/largest-rectangle-in-histogram/ */

/* Formula: width = RLE - LLE - 1; */

var largestRectangleArea = function(heights) {
    let left = leftSmallest(heights);
    let right = rightSmallest(heights);
    let width = [];
    
    for(let i = 0; i < heights.length; i++){
        width.push(right[i] - left[i] - 1);
    }
    
    let res = Number.MIN_VALUE;
    for(let i = 0; i < heights.length; i++){
        let temp = heights[i] * width[i];
        res = Math.max(res, temp);
    }
    return res;
};

function leftSmallest(heights){
    let stack = [0];
    let ans = [-1];
    
    for(let i = 1; i < heights.length; i++){
        if(heights[stack[stack.length - 1]] < heights[i]){
            ans.push(stack[stack.length - 1]);
        }
        else if(heights[stack[stack.length - 1]] >= heights[i]){
            while(stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]){
                stack.pop();
            }
            if(stack.length === 0){
                ans.push(-1);
            }
            else if(heights[stack[stack.length - 1]] < heights[i]){
                ans.push(stack[stack.length - 1]);
            }
        }
        stack.push(i);
    }
    return ans;
};

function rightSmallest(heights){
    let n = heights.length;
    let stack = [n-1];
    let ans = [n];
    
    for(let i = n-2; i >= 0; i--){
        if(heights[stack[stack.length - 1]] < heights[i]){
            ans.push(stack[stack.length - 1]);
        }
        else if(heights[stack[stack.length - 1]] >= heights[i]){
            while(stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]){
                stack.pop();
            }
            if(stack.length === 0){
                ans.push(n);
            }
            else if(heights[stack[stack.length - 1]] < heights[i]){
                ans.push(stack[stack.length - 1]);
            }
        }
        stack.push(i);
    }
    return ans.reverse();
};

let heights = [2,1,5,6,2,3];
console.log(largestRectangleArea(heights));

/* Output: 10 */