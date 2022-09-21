function lowerBound(array, length, value){
    let low = 0, high = length;

    while(low < high){
        let mid = low + Math.floor((high - low)/2);

        if(array[mid] < value){
            low = mid + 1;
        }
        else{
            high = mid;
        }
    }
    return low;
}

function upperBound(array, length, value){
    let low = 0, high = length;

    while(low < high){
        let mid = low + Math.floor((high - low)/2);

        if(array[mid] > value){
            high = mid;
        }
        else{
            low = mid + 1;
        }
    }
    return high;
}

const findSexTuplets = (arr, n) => {
    let index = 0;
    let RHS = new Array(n * n * n);

    for(let i = 0; i < n; i++){
        if(arr[i] != 0){
            for(let j = 0; j < n; j++){
                for(let k = 0; k < n; k++){
                    RHS[index++] = arr[i] * (arr[j] + arr[k]);
                }
            }
        }
    }

    RHS.sort((a,b) => a-b);

    let result = 0;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            for(let k = 0; k < n; k++){
               var val = arr[i] * arr[j] + arr[k];
               result += upperBound(RHS, index, val) - lowerBound(RHS, index, val);
            }
        }
    }
    return result;
};

let arr = [2,3], n = arr.length;
console.log(findSexTuplets(arr, n));