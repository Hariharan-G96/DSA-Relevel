class DoubleLLNode{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLL{
    constructor(){
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    size(){
        return `Hello I am Linked List, My Size is ${this.length}`;
    }

    prepend(data){
        let newNode = new DoubleLLNode(data);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this.printList();
        }
        else{
            let firstNode = this.head;
            newNode.next = firstNode;
            firstNode.prev = newNode;
            this.head = newNode;
            this.length++;
            return this.printList();
        }
    }

    append(data){
        let newNode = new DoubleLLNode(data);
        let temp = this.tail;
        newNode.prev = temp;
        temp.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }

    insertAt(pos, data){
        if(pos === 0){
            return this.prepend(data);
        }
        if(pos === this.length){
            return this.append(data);
        }
        if(pos < 0 || pos > this.length - 1){
            return "Element can't be inserted at this position/index";
        }

        let node = new DoubleLLNode(data);
        let i = 0;
        let current = this.head;

        while(i < pos){
            current = current.next;
            i++;
        }

        let prev = current.prev;
        node.next = current;
        node.prev = prev;
        prev.next = node;
        current.prev = node;
        this.length++;
        return this.printList();
    }

    printList(){
        let current = this.head;
        while(current){
            console.log(current.value);
            console.log("--->");
            current = current.next;
        }
        return "No LL exists";
    }

    getElementAtIndex(pos){
        if(pos < 0 || pos > this.length - 1){
            return "Value unavailable for the given index!";
        }

        let i = 0;
        let current = this.head;
        while(current){
            if(i === pos){
                console.log("I am the value in this position", current.value);
                return current.value;
            }
            current = current.next;
            i++;
        }
    }

    removeAtStart(){
        if(!this.head){
            return false;
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length--;
            return "LL is empty";
        }
        else{
            let firstNode = this.head;
            let nextNode = firstNode.next;
            nextNode.prev = null;
            firstNode = null;
            this.head = nextNode;
            this.length--;
            return this.printList();
        }
    }

    removeAtEnd(){
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length--;
            return "LL is empty";
        }
        else{
            let removeNode = this.tail;
            let prev = removeNode.prev;
            prev.next = null;
            removeNode = null;
            this.tail = prev;
            this.length--;
            return this.printList();
        }
    }

    removeAt(pos){
        if(pos === 0){
            return this.removeAtStart();
        }
        if(pos === this.length - 1){
            return this.removeAtEnd();
        }
        if(pos < 0 || pos > this.length - 1){
            return "Value unavailable for the given index!";
        }
        let current = this.head;
        let i = 0;

        while(i < pos){
            current = current.next;
            i++;
        }
        let prev = current.prev;
        let next = current.next;
        prev.next = next;
        next.prev = prev;
        current = null;
        this.length--;
        return this.printList();
    }
}

const dll = new DoubleLL();
dll.prepend(3);
dll.prepend(5);
dll.append(4);
dll.insertAt(1,8);
dll.removeAtEnd();
console.log(dll);