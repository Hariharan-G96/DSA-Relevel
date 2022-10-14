function onlineStockSpan(arr){
    let stack = [0];
    let ans = [1];

    for(let i = 1; i < arr.length; i++){
        if(arr[stack[stack.length-1]] > arr[i]){
            ans.push(i - stack[stack.length-1]);
        }
        else if(arr[stack[stack.length-1]] <= arr[i]){
            while(stack.length > 0 && arr[stack[stack.length-1]] <= arr[i]){
                stack.pop();
            }
            if(stack.length === 0){
                ans.push(i+1);
            }
            else if(arr[stack[stack.length-1]] > arr[i]){
                ans.push(i - stack[stack.length-1]);
            }
        }
        stack.push(i);
    }
    return ans;
}

let arr = [100,80,60,70,60,75,85];
console.log(onlineStockSpan(arr));