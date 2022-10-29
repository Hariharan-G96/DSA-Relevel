const reverseQueueFirstElement = (k, q) => {
    if(q.length === 0 || q.length < k) return;
    if(k <= 0) return;

    let stack = [];

    for(let i = 0; i < k; i++){
        stack.push(q[0]);
        q.shift();
    }

    while(stack.length > 0){
        q.push(stack[stack.length - 1]);
        stack.pop();
    }

    for(let i = 0; i < q.length - k; i++){
        q.push(q[0]);
        q.shift();
    }
};

let queue = [1,2,3,4,5,6,7,8,9], k = 5;

console.log("Before Reversing ===> ", queue);
reverseQueueFirstElement(k, queue);
console.log("After Reversing ===> ", queue);