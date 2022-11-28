const threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    let res = [];

    for(let i = 0; i < nums.length - 2; i++){
        let target = 0 - nums[i];
        let left = i + 1, right = nums.length - 1;

        if(i > 0 && nums[i] === nums[i - 1]) continue; // To avoid duplicate values

        while(left < right){
            let currSum = nums[left] + nums[right];

            if(currSum === target){
                res.push([nums[i], nums[left], nums[right]]);
                while(nums[left] === nums[left + 1]) left++; // To avoid duplicate values
                while(nums[right] === nums[right - 1]) right--; // To avoid duplicate values
                left++;
                right--;
            }
            else if(currSum < target){
                left++;
            }
            else{
                right--;
            }
        }
    }
    return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));