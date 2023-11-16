class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


// append new node with val to tail. return undefined


    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }


//add new node with value "val" to head and return undfined
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

//remove & return tail val but throw an err if list is empty

    
pop() {
   if (!this.head) throw new Error("List is empty");
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        
this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current.val;
    }
//shift remove and returns head val -- same as pop returns empty if list is empty
    
shift() {
        if (!this.head) throw new Error("List is empty");
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead.val;
    }

//gets the val at index positio (IDX) - err if invalid    
getAt(idx) {
        if (idx < 0 || idx >= this.length) throw new Error("Invalid index");
        let counter = 0;
        let current = this.head;
        while (counter !== idx) {
            current = current.next;
            counter++;
        }
        return current.val;
    }


//set val of node at IDX to VAL, throw err if idx is not valid

    setAt(idx, val) {
        if (idx < 0 || idx >= this.length) throw new Error("Invalid index");
        let current = this.head;
        let counter = 0;
        while (counter !== idx) {
            current = current.next;
            counter++;
        }
        current.val = val;
    }

//insert a new node at position idk as val, throw err if index is invalid

insertAt(idx, val) {
        if (idx < 0 || idx > this.length) throw new Error("Invalid index");
        if (idx === 0) return this.unshift(val);
        if (idx === this.length) return this.push(val);

let newNode = new Node(val);
    let current = this.head;
   lett prev;
    let counter = 0;
        while (counter !== idx) {
            prev = current;
            current = current.next;
            counter++;
        }
        prev.next = newNode;
        newNode.next = current;
        this.length++;
    }
//removeAT (not 100% sure on this one i may need to come back to it. 
  

removeAt(idx) {
        if (idx < 0 || idx >= this.length) throw new Error("Invalid index");
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();

        let current = this.head;
        let prev;
        let counter = 0;
        while (counter !== idx) {
            prev = current;
            current = current.next;
            counter++;
        }
        prev.next = current.next;
        this.length--;
        return current.val;
    }
}
