const getPairs = (A, B, n) => {
    let D = new Array();

    for(let i = 0; i < n; i++){
        D[i] = A[i] - B[i];
    }

    D.sort((a,b) => a - b);

    let total = 0;

    for(let i = n-1; i >= 0; i--){
        if(D[i] > 0){
            total += n - i - 1;
        }
        else{
            let k = binarySearch(D, 0, D.length, -D[i]);
            total += n - k;
        }
    }
    return total;
};

function binarySearch(a, low, high, elem){
    while(low < high){
        let mid = low + Math.floor((high - low)/2);

        if(a[mid] > elem){
            high = mid;
        }
        else{
            low = mid + 1;
        }
    }
    return low;
}

console.log(getPairs([4,8,2,6,2], [4,5,4,1,3], 5));