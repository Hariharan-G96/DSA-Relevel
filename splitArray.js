function verify(mid, array, n, k){
    let sum = 0;
    let sub_array_count = 0;

    for(let i = 0; i < n; i++){
        if(array[i] > mid){
            return false;
        }

        sum += array[i];

        if(sum > mid){
            sub_array_count++;
            sum = array[i];
        }
    }
    sub_array_count++;

    if(sub_array_count <= k) return true;

    return false;
}

const splitArray = (array, n, k) => {
    let max = array.reduce((a,b) => Math.max(a,b));
    let start = max;
    let end = 0;

    for(let i = 0; i < n; i++){
        end += array[i];
    }

    let answer = 0;
    while(start <= end){
        let mid = start + Math.floor((end - start)/2);

        if(verify(mid, array, n, k)){
            answer = mid;
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
    return answer;
};

var array = [1, 3, 2, 4, 10, 8, 4, 2, 5, 3];
var n = array.length;
var k = 4;
console.log( splitArray(array, n, k));