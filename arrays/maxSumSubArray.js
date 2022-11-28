const maxSubArray = (nums) => {
    let cSum, oSum = nums[0];

    for(let i = 1; i < nums.length; i++){
        if(cSum > 0){
            cSum += nums[i];
        }
        else{
            cSum = nums[i];
        }

        if(oSum < cSum){
            oSum = cSum;
        }
    }
    return oSum;
};

console.log("[-2,1,-3,4,-1,2,1,-5,4] expects 6", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);