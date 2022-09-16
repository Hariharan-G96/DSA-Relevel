/* Linear Search - Finding the Index of a single element */

const findIndexOfTargetInArr = (arr, target) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target) return i;
    }
    return -1;
};

console.log(findIndexOfTargetInArr([4,5,3,2,6,9], 3));

/* Global Linear Search - Pushing all the indices of the given element */

const findIndicesOfAllTargetInArr = (arr, target) => {
    let results = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target) results.push(i);
    }

    if(!results){
        return -1;
    }
    return results;
};

console.log(findIndicesOfAllTargetInArr([4,5,3,2,3,9], 3));

/* Recursive Way */

function linearSearch(arr, target, count){
    // Base Case
    if(arr[count] === target){
        return count;
    }
    if((count === arr.length - 1 && arr[count] !== target) || (arr.length === 0)){
        return -1;
    }

    return linearSearch(arr, target, count + 1);
}

console.log(linearSearch([4,5,3,2,6,9], 3, 0));