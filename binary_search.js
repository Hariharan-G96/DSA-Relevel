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
