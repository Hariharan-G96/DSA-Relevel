// arr = [12, -1,-7, 8, -15,30,16,28]
// k = 3

// output = print first negative integer in a window size of K if there is no negative integer
// print 0.

// Time Complexity –
// If the number of elements in the input array is n then, the time complexity will be O(n)

// Space Complexity –
// If the size of the window given is k then, the space complexity will be O(k)

function firstNegativeInWindow(arr, k){
    let i = 0, j = 0;
    let negatives = [];

    while(j < arr.length){
        if(arr[j] < 0){
            negatives.push(arr[j]);
        }
        if(j - i + 1 === k){
            if(negatives.length === 0){
                console.log("No negative values found in this window", 0);
            }
            if(negatives.length > 0){
                console.log("First negative value", negatives[0]);
            }
            if(arr[i] === negatives[0]){
                negatives.shift();
            }
            i++;
        }
        j++;
    }
};

const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const k = 3;
firstNegativeInWindow(arr, k);