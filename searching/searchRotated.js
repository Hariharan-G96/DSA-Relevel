function findMinIdx(rotatedSortedArr){
    if(rotatedSortedArr.length === 1){
        return 0;
    }

    let left = 0, right = rotatedSortedArr.length - 1;

    if(rotatedSortedArr[left] < rotatedSortedArr[right]) return left;

    while(left < right){
        let mid = left + Math.floor((right - left) / 2);

        if(rotatedSortedArr[mid] > rotatedSortedArr[right]){
            left = mid + 1;
        }
        else{
            right = mid;
        }
    }
    return left;
}

function binarySearch(nums, target, left, right){
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);

        if(nums[mid] === target){
            return mid;
        }
        else if(nums[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return -1;
}

const search = (nums, target) => {
    const minIdx = findMinIdx(nums);

    const left = binarySearch(nums, target, 0, minIdx - 1);
    const right = binarySearch(nums, target, minIdx, nums.length - 1);

    return Math.max(left, right);
};

console.log("search([4,5,6,7,0,1,2], 0) returns 4", search([4, 5, 6, 7, 0, 1, 2], 0));