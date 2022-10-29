class Stack{
    constructor(){
        this.data = [];
        this.top = -1;
    }

    push(value){
        this.top++;
        this.data[this.top] = value;
    }

    pop(){
        if(this.isEmpty()) throw new Error('Stack Underflow');
        this.data.pop();
        this.top--;
    }

    peak(){
        if(this.isEmpty()){
            return null;
        }
        return this.data[this.top];
    }

    print(){
        if(this.isEmpty()){
            return null;
        }
        let top = this.top;

        while(top > -1){
            console.log('Stack elements', this.data[top]);
            top--;
        }
    }

    isEmpty(){
        return this.top === -1;
    }

    insertAtBottom(value){
        if(this.isEmpty()){
            this.push(value);
            return;
        }
        else{
            let temp = this.peak();
            this.pop();
            this.insertAtBottom(value);
            this.push(temp);
            return;
        }
    }

    reverse(){
        if(!this.isEmpty()){
            let temp = this.peak();
            this.pop();
            this.reverse();
            this.insertAtBottom(temp);
        }
    }
}

const stack = new Stack();
stack.push(4)
stack.push(5);
stack.push(2);
stack.push(3);
stack.push(1);
stack.pop();
console.log(stack.isEmpty());
console.log(stack.peak());
stack.insertAtBottom(0);
stack.print();
stack.reverse();
console.log("===> After Reversing");
console.log(stack);

/* Sorting the Stack */

const sortStack = (s) => {
    if(!s.isEmpty()){
        let temp = s.peak();
        s.pop();
        sortStack(s);
        sortInInsertedManner(s,temp);
    }
    return;
}

const sortInInsertedManner = (s,x) => {
    if(s.isEmpty() || s.peak() < x){
        s.push(x);
        return;
    }
    else{
        let temp = s.peak();
        s.pop();
        sortInInsertedManner(s,x);
        s.push(temp);
        return;
    }
}

// sortStack(stack);
// console.log("===> After Sorting");
// console.log(stack);

/* Finding Minimum and Maximum Element in Stack */

let min = stack.peak();
let max = stack.peak();
const minMax = (stack) => {
    if(!stack.isEmpty()){
        let temp = stack.peak();
        stack.pop();
        minMax(stack);
        if(temp < min){
            min = temp;
        }
        else if(temp > max){
            max = temp;
        }
        stack.push(temp);
    }
    return;
}

minMax(stack);

console.log(min, max);
stack.print();