/**
You are given an array of integers nums and a value k, find the total number of continuous subarrays whose sum equals k.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2

// Example:
3,9,-2,4,1,-7,2,6,-5,8,-3,-7,6,2,1
k = 5

TC: O(n)
SC: O(n)
 */

var subarraySum = function (nums, k) {
    let sum = 0;
    let count = 0;
    let map = {};
    map[0] = 1; // To count the default subarray we need to initialize 1

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];

        if(sum - k in map){
            count += map[sum - k];
        }

        if(sum in map){
            let existVal = map[sum];
            map[sum] = existVal + 1;
        }
        else{
            map[sum] = 1;
        }
        console.log(map);
    }
    return count;
};

let res = subarraySum([1,2,3],3);
console.log(res);