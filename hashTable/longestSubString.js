/**
Given an input string s, find out the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

TC:
SC:
Ex : abbacbcdbadbdbbdcb
 */

var longestSubString = function(s){
    let left = 0, right = 0;
    let n = s.length;
    let length = 0;
    let map = new Map();

    while(right < n){
        if(map.has(s[right])){
            let lastIndex = map.get(s[right]); // lastIndex will give the value like a and map length - which will give last index value
            left = Math.max(lastIndex + 1, left);
        }
        map.set(s[right], right);
        length = Math.max(right - left + 1, length);
        right++;
    }
    return length;
};

console.log(longestSubString("abcaabcdba"));