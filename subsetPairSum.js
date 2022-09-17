const subsetPairSum = (arr, sum) => {
    let len = arr.length;
    let start = 0, end = len - 1;

    while(start <= end){
        let mid = start + Math.floor((end - start)/2);

        if(arr[mid] + arr[mid - 1] === sum || arr[mid] + arr[mid + 1] === sum){
            if(arr[mid] + arr[mid - 1] === sum){
                return [arr[mid - 1], arr[mid]];
            }
            else{
                return [arr[mid], arr[mid + 1]];
            }
        }
        else if(arr[mid] + arr[mid - 1] < sum || arr[mid] + arr[mid + 1] < sum){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
    }
        return -1;
};

console.log(subsetPairSum([1,3,4,5,7,10,11,12], 9));