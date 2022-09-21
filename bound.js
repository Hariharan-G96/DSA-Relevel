const lowerBound = (arr, target) => {
    let left = 0, right = arr.length - 1;

    while(left < right){
        let mid = left + Math.floor((right - left)/2);

        if(arr[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid;
        }
    }
    return left;
};

console.log(lowerBound([0,2,4,4,6,6,8,10,12], 4));

const upperBound = (arr, target) => {
    let left = 0, right = arr.length - 1;

    while(left < right){
        let mid = left + Math.floor((right - left)/2);

        if(arr[mid] > target){
            right = mid;
        }
        else{
            left = mid + 1;
        }
    }
    return right;
};

console.log(upperBound([0,2,4,4,6,6,8,10,12], 4));