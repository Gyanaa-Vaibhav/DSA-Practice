// 1️⃣ Reverse a Queue using a Stack | Similar to this below so didn't create new one
// 4️⃣ Implement a Stack using Queues (Reverse of what you did before) same as this one didn't bother to create a new
class Queue {
    constructor(size) {
        this.outputStack = new Array(size);
        this.queue = new Array(size);
        this.inputStack = new Array(size);
    }
    enqueue(value) {
        this.queue.push(value);
        this.inputStack.push(value);
        return value;
    }
    dequeue() {
        // The while stack is reversed to keep the operation O(1) with amortization
        // A bit confusing and a bit complicated when we print the queue but ok will we learn Linked List
        if (this.outputStack.length === 0) {
            while (this.inputStack.length > 0) {
                this.outputStack.push(this.inputStack.pop());
            }
        }
        return this.outputStack.pop();
    }
    front() {
        if (this.outputStack.length > 0) {
            return this.outputStack[this.outputStack.length - 1]; // O(1)
        }
        return this.inputStack[0]; // O(1)
    }
    isEmpty() {
        return this.inputStack.length === 0 && this.outputStack.length === 0;
    }
    print() {
        console.log(this.queue);
        return `Input Stack [${this.inputStack}]\nOutput Stack [${this.outputStack}]`;
    }
}
// 2️⃣ Implement a Circular Queue
class CircularQueue {
    constructor(capacity) {
        this.queue = new Array(capacity);
        this.capacity = capacity;
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }
    frontValue() {
        return this.queue[this.front];
    }
    rearValue() {
        return this.queue[this.rear];
    }
    enqueue(value) {
        if (this.isFull()) {
            // throw new Error(`Queue is Full Cannot add more then ${this.capacity} Elements`)
            return false; // Queue is full
        }
        if (this.front === -1)
            this.front = 0; // Initialize front if empty
        this.rear = (this.rear + 1) % this.capacity; // Circular increment
        this.queue[this.rear] = value;
        this.size++;
        return true;
    }
    isFull() {
        return this.size === this.capacity;
    }
    isEmpty() {
        return this.queue[0] === undefined;
    }
    print() {
        console.log(this.queue);
    }
}
// 3️⃣ First Unique Character in a Stream
class FirstUniqueCharacterStream {
    constructor() {
        this.queue = [];
        this.countMap = new Map();
    }
    insert(char) {
        // Update frequency in map
        this.countMap.set(char, (this.countMap.get(char) || 0) + 1);
        // Add to queue if it's the first time appearing
        if (this.countMap.get(char) === 1) {
            this.queue.push(char);
        }
        // Remove repeated elements from the front of the queue
        while (this.queue.length > 0 && this.countMap.get(this.queue[0]) > 1) {
            this.queue.shift();
        }
    }
    firstUnique() {
        return this.queue.length > 0 ? this.queue[0] : null;
    }
}
// 5️⃣ LRU Cache (Least Recently Used Cache - Uses Queue Concept)
// same as Circular Queues
