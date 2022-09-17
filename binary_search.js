/* Basic Binary Search - Using Iteration */

const binarySearch = (arr, target) => {
    let left = 0, right = arr.length - 1;

    while(left <= right){
        let mid = left + Math.floor((right - left)/2);

        if(arr[mid] === target) return mid;
        
        else if(arr[mid] < target) left = mid + 1;

        else right = mid - 1;
    }
    return -1;
};

console.log(binarySearch([10, 20, 30, 50, 60, 80, 110, 130, 140, 170], 110));



/* Basic Binary Search - Using Recursion */

function binarySearchUsingRecursion(arr, left, right, target){
    let mid = left + Math.floor((right - left)/2);

    if(left > right) return -1;
    if(arr.length === 0) return -1;

    if(arr[mid] === target) return mid;

    if(arr[mid] < target){
        return binarySearchUsingRecursion(arr, mid + 1, right, target);
    }
    else{
        return binarySearchUsingRecursion(arr, left, mid - 1, target);
    }
}

let arr = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170];
console.log(binarySearchUsingRecursion(arr, 0, arr.length - 1, 110));



/* First and Last position of an element in a sorted array - Class Approach */

var searchRange = (arr, target) => {
    const firstIndex = searchFirst(arr, target);
    const lastIndex = searchLast(arr, target);

    return [firstIndex, lastIndex];

    function searchFirst(arr, target){
        let left = -1, right = arr.length;

        while(left + 1 < right){
            let mid = Math.floor((right+left)/2);

            if(arr[mid] >= target){
                right = mid;
            }
            else{
                left = mid;
            }
        }

        if(arr[right] === target){
            return right;
        }
        else{
            return -1;
        }
    }

    function searchLast(arr, target){
        let left = -1, right = arr.length;

        while(left + 1 < right){
            let mid = Math.floor((right+left)/2);

            if(arr[mid] > target){
                right = mid;
            }
            else{
                left = mid;
            }
        }

        if(arr[right - 1] === target){
            return right - 1;
        }
        else{
            return -1;
        }
    }

};

console.log(searchRange([5,7,7,8,8,10], 8));



/* First and Last position of an element in a sorted array */

var searchRange = function(nums, target) {
    let low = 0, high = nums.length - 1, res = -1;

    return [firstElem(nums, low, high, target, res), lastElem(nums, low, high, target, res)];

    function firstElem(nums, low, high, target, res){
        while(low <= high){
            let mid = low + Math.floor((high - low)/2);

            if(nums[mid] < target) low = mid + 1;
            else if(nums[mid] > target) high = mid - 1;

            else if(nums[mid] == target){
                res = mid;
                high = mid - 1;
            }
        }
        return res;
    }

    function lastElem(nums, low, high, target, res){
        while(low <= high){
            let mid = low + Math.floor((high - low)/2);

            if(nums[mid] < target) low = mid + 1;
            else if(nums[mid] > target) high = mid - 1;

            else if(nums[mid] == target){
                res = mid;
                low = mid + 1;
            }
        }
        return res;
    }

};

let nums = [0,0,1,2,2], target = 2;

console.log(searchRange(nums, target));