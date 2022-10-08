/* Reverse Linked List */
/* https://leetcode.com/problems/reverse-linked-list/ */

/* Input: head = [1,2,3,4,5] */

var reverseList = function(head) {
    if(!head){
        return head;
    }
    
    let curr = head;
    let reverse = null;
    
    while(curr){
        let n = curr.next;
        curr.next = reverse;
        reverse = curr;
        curr = n;
    }
    return reverse;
};

/* Output: [5,4,3,2,1] */

/* Middle of the Linked List */
/* https://leetcode.com/problems/middle-of-the-linked-list/submissions/ */

/* Input: head = [1,2,3,4,5] */

var middleNode = function(head) {
    if(!head){
        return head;
    }
    
    let slow = head;
    let fast = head;
    
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

/* Output: [3,4,5] */

/* Reorder List */
/* https://leetcode.com/problems/reorder-list/ */

/* Input: head = [1,2,3,4,5] */

var reorderList = function(head) {
    if(!head){
        return head;
    }
      
      let fast = head;
      let slow = head;
      
      while(fast !== null && fast.next !== null){
          slow = slow.next;
          fast = fast.next.next;
      }
      
      let middle = slow;
      let reverse = null;
      
      while(middle){
          let n = middle.next;
          middle.next = reverse;
          reverse = middle;
          middle = n;
      }
      
      let first = head;
      let second = reverse;
      
      let temp = null;
      while(second.next !== null){
          temp = first.next;
          first.next = second;
          first = temp;
          
          temp = second.next;
          second.next = first;
          second = temp;
      }
      
      return this.head;
  };

/* Output: [1,5,2,4,3] */

/* Linked List Cycle II */
/* https://leetcode.com/problems/linked-list-cycle-ii/ */

/* Input: head = [1,2,3,4,5,6,7,8,9,10], pos = 3 */

var detectCycle = function(head) {
    if(!head){
        return head;
    }
    
    let slow = head, fast = head.next;
    
    while(slow !== fast){
        if(fast === null || fast.next === null){
            return null;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let first = head;
    let second = fast;
    
    while(second.next !== first){
        first = first.next;
        second = second.next;
    }
    
    return first;
};

/* Output: tail connects to node index 3 */

/* Intersection of Two Linked Lists */
/* https://leetcode.com/problems/intersection-of-two-linked-lists/ */

/* Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3 */

var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB){
        return null;
    }
    
    let lengthA = 0, lengthB = 0;
    let listA = headA, listB = headB;
    
    while(listA){
        lengthA++;
        listA = listA.next;
    }
    while(listB){
        lengthB++;
        listB = listB.next;
    }
    
    let currA = headA, currB = headB;
    
    if(lengthA > lengthB){
        let temp = lengthA - lengthB;
        while(temp-- > 0){
            currA = currA.next;
        }
    }
    else if(lengthB > lengthA){
        let temp = lengthB - lengthA;
        while(temp-- > 0){
            currB = currB.next;
        }
    }
    
    while(currA !== currB){ // to find the exact intersection point
        currA = currA.next;
        currB = currB.next;
    }
    return currA;
};

/* Output: Intersected at '8' */

/* Linked List Cycle */
/* https://leetcode.com/problems/linked-list-cycle/ */

/* Input: head = [3,2,0,-4], pos = 1 */

var hasCycle = function(head) {
    if(!head){
        return false;
    }
    
    let slow = head;
    let fast = head.next;
    
    while(slow !== fast){
        if(fast === null || fast.next === null){
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};

/* Output: true */

/* Palindrome Linked List */
/* https://leetcode.com/problems/palindrome-linked-list/ */

/* Input: head = [1,2,2,1] */

var isPalindrome = function(head) {
    if(!head){
        return false;;
    }
    
    let stack = [];
    let curr = head;
    while(curr){
        stack.push(curr.val);
        curr = curr.next;
    }
    
    let temp = head;
    
    while(stack.length > 0){
        let element = stack.pop();
        if(temp.val !== element){
            return false;
        }
        temp = temp.next;
    }
    return true;
};

/* Output: true */

/* Aliter: */

var isPalindrome = function(head) {
    if(!head){
        return false;
    }
    
    let slow = head;
    let fast = head;
    
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let middle = slow;
    let reverse = null;
    while(middle){
        let n = middle.next;
        middle.next = reverse;
        reverse = middle;
        middle = n;
    }
    
    let first = head;
    let second = reverse;
    
    while(first.next !== null){
        if(first.val !== second.val){
            return false;
        }
        first = first.next;
        second = second.next;
    }
    return true;
};

/* Output: true */

/* Odd Even Linked List */
/* https://leetcode.com/problems/odd-even-linked-list/ */

/* Input: head = [1,2,3,4,5] */

var oddEvenList = function(head) {
    if(!head){
        return null;
    }
    
    let odd = head;
    let even = head.next;
    let evenFirst = even;
    
    while(true){
        if(!even || even.next === null){
            odd.next = evenFirst;
            break;
        }       
        odd.next = even.next;
        odd = even.next;
        
        if(odd.next === null){
            even.next = null;
            odd.next = evenFirst;
            break;
        }
        even.next = odd.next;
        even = odd.next;
    }
    return head;
};

/* Output: [1,3,5,2,4] */