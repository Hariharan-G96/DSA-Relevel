const isDuplicate = (arr, findNum) => {
    let len = arr.length;
    let start = 0, end = len - 1;

    while(start <= end){
        let mid = start + Math.floor((end - start)/2);

        if(arr[mid] === findNum && (arr[mid-1] === findNum || arr[mid+1] === findNum)){
                return true;
        }
        else if(arr[mid] < findNum){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
    }
        return false;
};

console.log(isDuplicate([1,3,5,5,7,9], 5));