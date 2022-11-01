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

/* Compute Expression - PostFix */

function computeExp(exp){
    let calcStack = [];

    for(let ch of exp){
        if(!isNaN(parseInt(ch))){
            calcStack.push(ch.charCodeAt(0) - "0".charCodeAt(0));
        }
        else{
            let v1 = calcStack.pop();
            let v2 = calcStack.pop();

            switch(ch){
                case "+":
                    calcStack.push(v2 + v1);
                    break;

                case "-":
                    calcStack.push(v2 - v1);
                    break;

                case "*":
                    calcStack.push(v2 * v1);
                    break;

                case "/":
                    calcStack.push(v2 / v1);
                    break;
            }
        }
    }
    return calcStack.pop();
}

console.log(computeExp("331*+"));

/* Output: 6 */

/* Remove K Digits

https://leetcode.com/problems/remove-k-digits/ */

var removeKdigits = function(num, k) {
    let stack = [];
    
    for(let ch of num){
        while(stack.length > 0 && k > 0 && stack[stack.length - 1].charCodeAt(0) > ch.charCodeAt(0)){
            stack.pop();
            k--;
        }
        
        if(stack.length > 0 || ch !== "0"){
            stack.push(ch);
        }
    }
    
    while(stack.length > 0 && k--){
        stack.pop();
    }
    
    if(stack.length === 0){
        return "0";
    }
    
    return stack.join("");
};

let num = "1432219", k = 3;

console.log(removeKdigits(num, k));

/* Output: "1219" */

/* Valid Parantheses */

function validateParantheses(s){
    if(s.length % 2 !== 0){
        return false;
    }
    
    let openingBrackets = [];

    for(let idx = 0; idx < s.length; idx++){
        if(s[idx] === "(" || s[idx] === "[" || s[idx] === "{"){
            openingBrackets.push(s[idx]);
        }
        else if(s[idx] === ")" && openingBrackets.length > 0 && openingBrackets[openingBrackets.length - 1] === "("){
            openingBrackets.pop();
        }
        else if(s[idx] === "]" && openingBrackets.length > 0 && openingBrackets[openingBrackets.length - 1] === "["){
            openingBrackets.pop();
        }
        else if(s[idx] === "}" && openingBrackets.length > 0 && openingBrackets[openingBrackets.length - 1] === "{"){
            openingBrackets.pop();
        }
        else{
            return false;
        }
    }
    return openingBrackets.length === 0;
}

console.log(validateParantheses("(()){}"));

/* Output: true */

/* Minimum Deletions to Make String Balanced

https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/

Hint: Because of the condition, i<j we are traversing from backwards(We can also traverse from front) */

var minimumDeletions = function(s) {
    let res = [], count = 0;
    
    for(let idx = s.length - 1; idx >= 0; idx--){
        if(res.length === 0){
            res.push(s[idx]);
        }
        else if(res[res.length - 1] === "a" && s[idx] === "b"){
            count += 1;
            res.pop();
        }
        else{
            res.push(s[idx]);
        }
    }
    return count;
};

console.log(minimumDeletions("aababbab"));

/* Output: 2 */

/* Asteroid Collision

https://leetcode.com/problems/asteroid-collision/ */

var asteroidCollision = function(asteroids) {
    let asteroidStack = [];
    
    for(let ast of asteroids){
        if(ast > 0){
            asteroidStack.push(ast);
        }
        else{
            while(asteroidStack.length > 0 && asteroidStack[asteroidStack.length - 1] > 0 && asteroidStack[asteroidStack.length - 1] < Math.abs(ast)){
                asteroidStack.pop();
            }
            if(asteroidStack.length === 0 || asteroidStack[asteroidStack.length - 1] < 0){
                asteroidStack.push(ast);
            }
            else if(asteroidStack[asteroidStack.length - 1] === Math.abs(ast)){
                asteroidStack.pop();
            }
        }
    }
    return asteroidStack;
};

console.log(asteroidCollision([5,10,-5]));

/* Output: [5,10] */

/* A frog likes to jump from one wall to another. But the only condition is that the next wall should be higher than the
previous one if it is not, then the frog will stop. The stamina needed by the frog to cover the walls is equavilalent to the
xor of the wall height traversed by the frog. Now given the height of the buildings you need to find the maximum stamina
needed, provided the frog starts from any building.

Input-1: 1,2,4,9,5
Output: 15

Explaination:
2^4^9 = 15 */

function getMaxStamina(n, heights){
    let stack = [];
    let computations = [...heights];

    for(let i = n - 1; i > -1; i--){
        while(stack.length > 0 && heights[stack[stack.length - 1]] < heights[i]){
            stack.pop();
        }

        if(stack.length > 0){
            computations[i] ^= computations[stack[stack.length - 1]];
        }
        stack.push(i);
    }
    return Math.max(...computations);
}

console.log(getMaxStamina(5, [1,2,3,8,6]));

/* Output: 11 */

/* Assignment Problems

1. Reversing a Stack

Given a stack S, you need to reverse the eCement in the stack using another empty stack S’
Input: 2,4,5,7,8
Output: 8,7,5,4,2 */

function shiftElement(S, S_, n){
    for(let i = 0; i < n; i++){
        let temp = S[S.length - 1];
        S.pop();
        S_.push(temp);
    }
}

function reverseElement(S, n){
    var S_ = [];

    for(let i = 0; i < n; i++){
        let elem = S[S.length - 1];
        S.pop();
        shiftElement(S, S_, n - i - 1);
        S.push(elem);
        shiftElement(S_, S, n - i - 1);
    }
}

let S = [1, 2, 3, 4, 5];
reverseElement(S, S.length);
console.log(S);

/* Output: [ 5, 4, 3, 2, 1 ] */

/* Given a stack, find the max and minimum value stored inside it */

function maxMin(s){
    let k = [...s];
    let max = k[k.length - 1];
    let min = k[k.length - 1];

    while(k.length > 0){
        max = Math.max(k[k.length - 1], max);
        min = Math.min(k[k.length - 1], min);
        k.pop();
    }
    return {max: max, min: min};
}

let s = [1,2,4,8,5];
console.log(maxMin(s));

/* Output: { max: 8, min: 1 } */

/* Practice Problems

Daily Temperatures

https://leetcode.com/problems/daily-temperatures/submissions/ */

var dailyTemperatures = function(temperatures) {
    if(temperatures.length === 0) return;
    if(temperatures.length === 1) return [0];
    
    let n = temperatures.length;
    let ans = [0];
    let stack = [n-1];
    
    for(let i = n-2; i >= 0; i--){
        while(stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]){
            stack.pop();
        }
        
        if(stack.length === 0){
            ans.push(0);
        }
        else{
            ans.push(stack[stack.length - 1] - i);
        }
        stack.push(i);
    }
    return ans.reverse();
};

let temperatures = [73,74,75,71,69,72,76,73];
console.log(dailyTemperatures(temperatures));

/* Output: [1,1,4,2,1,1,0,0] */

/* Sum of Subarray Ranges

https://leetcode.com/problems/sum-of-subarray-ranges/ */

var subArrayRanges = function(nums) {
    let n = nums.length;
    
    let ple = PLE(nums);
    let nle = NLE(nums);
    let pge = PGE(nums);
    let nge = NGE(nums);
    
    let smallest = 0;
    let largest = 0;
    
    for(let i = 0; i < n; i++){
        smallest = (smallest + nums[i] * ((i - ple[i]) * (nle[i] - i))); // Formula used
    }
    
    for(let i = 0; i < n; i++){
        largest = (largest + nums[i] * ((i - pge[i]) * (nge[i] - i))); // Formula used
    }
    
    return largest - smallest;
};

function PLE(nums){
    let stack = [0];
    let ans = [-1];
    
      for(let i = 1; i < nums.length; i++){
          if(nums[stack[stack.length-1]] < nums[i]){
              ans.push(stack[stack.length-1]);
          }
          else if(nums[stack[stack.length-1]] >= nums[i]){
              while(stack.length > 0 && nums[stack[stack.length-1]] >= nums[i]){
                  stack.pop();
              }
              if(stack.length === 0){
                  ans.push(-1);
              }
              else if(nums[stack[stack.length-1]] < nums[i]){
                  ans.push(stack[stack.length-1]);
              }
          }
          stack.push(i);
      }
      return ans;
  };
  
  function NLE(nums){
    let n = nums.length; 
    let stack = [n-1];
    let ans = [n];
    
      for(let i = n-2; i >=0 ; i--){
          if(nums[stack[stack.length-1]] < nums[i]){
              ans.push(stack[stack.length-1]);
          }
          else if(nums[stack[stack.length-1]] >= nums[i]){
              while(stack.length > 0 && nums[stack[stack.length-1]] > nums[i]){
                  stack.pop();
              }
              if(stack.length === 0){
                  ans.push(n);
              }
              else if(nums[stack[stack.length-1]] <= nums[i]){
                  ans.push(stack[stack.length-1]);
              }
          }
          stack.push(i);
      }
      return ans.reverse();
  };
  
  function PGE(nums){
    let stack = [0];
    let ans = [-1];
    
      for(let i = 1; i < nums.length; i++){
          if(nums[stack[stack.length-1]] > nums[i]){
              ans.push(stack[stack.length-1]);
          }
          else if(nums[stack[stack.length-1]] <= nums[i]){
              while(stack.length > 0 && nums[stack[stack.length-1]] <= nums[i]){
                  stack.pop();
              }
              if(stack.length === 0){
                  ans.push(-1);
              }
              else if(nums[stack[stack.length-1]] > nums[i]){
                  ans.push(stack[stack.length-1]);
              }
          }
          stack.push(i);
      }
      return ans;
  };
  
  function NGE(nums){
    let n = nums.length; 
    let stack = [n-1];
    let ans = [n];
    
      for(let i = n-2; i >=0 ; i--){
          if(nums[stack[stack.length-1]] > nums[i]){
              ans.push(stack[stack.length-1]);
          }
          else if(nums[stack[stack.length-1]] <= nums[i]){
              while(stack.length > 0 && nums[stack[stack.length-1]] < nums[i]){
                  stack.pop();
              }
              if(stack.length === 0){
                  ans.push(n);
              }
              else if(nums[stack[stack.length-1]] >= nums[i]){
                  ans.push(stack[stack.length-1]);
              }
          }
          stack.push(i);
      }
      return ans.reverse();
  };

let nums = [1,2,3];

console.log(subArrayRanges(nums));

/* Output: 4 */