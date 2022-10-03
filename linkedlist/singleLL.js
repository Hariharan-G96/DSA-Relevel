class LLNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SingleLL{
    constructor(){
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    size(){
        return `Hello I am Linked List, My Size is ${this.length}`;
    }

    prepend(value){
        let newNode = new LLNode(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this.printList();
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return this.printList();
        }
    }

    append(value){
        let newNode = new LLNode(value);
        let lastNode = this.tail;
        lastNode.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }

    printList(){
        let current = this.head;
        console.log("LL", current);

        while(current){
            console.log(current.value);
            console.log("--->");
            current = current.next;
        }
        return 'No LL exists';
    }

    insertAt(position, data){
        if(position === 0){
            return this.prepend(data);
        }
        else if(position === this.length){
            return this.append(data);
        }
        else{
            let i = 0;
            let prev, curr = this.head;
            while(i < position){
                prev = curr;
                curr = curr.next;
                i++;
            }
            let node = new LLNode(data);
            node.next = prev.next;
            prev.next = node;
            this.length++;
            return this.printList();
        }
    }

    getElementAtIndex(pos){
        if(pos < 0 || pos > this.length){
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
        else{
        let removeNode = this.head;
        this.head = removeNode.next;
        removeNode = null;
        this.length--;
        return this.printList();
        }
    }

    removeAtEnd(){
        let prev, current = this.head;

        while(current.next){
            prev = current;
            current = current.next;
        }
        let removeNode = current;
        removeNode = null;
        prev.next = null;
        this.tail = prev;
        this.length--;
        return this.printList();
    }

    removeAt(pos){
        if(pos === 0){
            return this.removeAtStart();
        }
        else if(pos === this.length - 1){
            return this.removeAtEnd();
        }
        else{
            let prev, current = this.head;
            let count = 0;

            while(count < pos){
                prev = current;
                current = current.next;
                count++;
            }
            prev.next = current.next;
            current = null;
            this.length--;
            return this.printList();
        }
    }
}

const ll = new SingleLL();

ll.prepend(4);
ll.prepend(5);
ll.prepend(6);
ll.append(8);
ll.insertAt(3,9);
ll.getElementAtIndex(3);
ll.removeAtEnd();
ll.removeAt(2);
console.log(ll);