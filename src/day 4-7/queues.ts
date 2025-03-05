// 1️⃣ Reverse a Queue using a Stack | Similar to this below so didn't create new one
// 4️⃣ Implement a Stack using Queues (Reverse of what you did before) same as this one didn't bother to create a new
class Queue<T>{
    private readonly inputStack: T[];
    private readonly outputStack: T[];
    private readonly queue: T[];

    constructor(size:number) {
        this.outputStack = new Array<T>(size)
        this.queue = new Array<T>(size);
        this.inputStack = new Array<T>(size)
    }

    enqueue(value: T):T {
        this.queue.push(value)
        this.inputStack.push(value)
        return value
    }

    dequeue(): T | undefined{
        // The while stack is reversed to keep the operation O(1) with amortization
        // A bit confusing and a bit complicated when we print the queue but ok will we learn Linked List
        if (this.outputStack.length === 0) {
            while (this.inputStack.length > 0) {
                this.outputStack.push(this.inputStack.pop()!);
            }
        }
        return this.outputStack.pop();
    }

    front(): T | undefined {
        if (this.outputStack.length > 0) {
            return this.outputStack[this.outputStack.length - 1]; // O(1)
        }
        return this.inputStack[0]; // O(1)
    }

    isEmpty(): boolean {
        return this.inputStack.length === 0 && this.outputStack.length === 0;
    }

    print(): string {
        console.log(this.queue)
        return `Input Stack [${this.inputStack}]\nOutput Stack [${this.outputStack}]`
    }
}

// 2️⃣ Implement a Circular Queue
class CircularQueue<T> {
    private readonly queue: (T | undefined)[];
    private front: number;
    private rear: number;
    private size: number;
    private capacity: number;

    constructor(capacity: number) {
        this.queue = new Array<T | undefined>(capacity);
        this.capacity = capacity;
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }

    frontValue (): T | undefined {
        return this.queue[this.front]
    }

    rearValue(): T | undefined{
        return this.queue[this.rear]
    }

    enqueue(value: T): boolean {
        if (this.isFull()) {
            // throw new Error(`Queue is Full Cannot add more then ${this.capacity} Elements`)
            return false; // Queue is full
        }

        if (this.front === -1) this.front = 0; // Initialize front if empty

        this.rear = (this.rear + 1) % this.capacity; // Circular increment
        this.queue[this.rear] = value;
        this.size++;

        return true;
    }

    isFull(): boolean {
        return this.size === this.capacity;
    }

    isEmpty(): boolean {
        return this.queue[0] === undefined
    }

    print(): void {
        console.log(this.queue);
    }
}

// 3️⃣ First Unique Character in a Stream
class FirstUniqueCharacterStream {
    private queue: string[];
    private countMap: Map<string, number>;

    constructor() {
        this.queue = [];
        this.countMap = new Map();
    }

    insert(char: string): void {
        // Update frequency in map
        this.countMap.set(char, (this.countMap.get(char) || 0) + 1);

        // Add to queue if it's the first time appearing
        if (this.countMap.get(char) === 1) {
            this.queue.push(char);
        }

        // Remove repeated elements from the front of the queue
        while (this.queue.length > 0 && this.countMap.get(this.queue[0])! > 1) {
            this.queue.shift();
        }
    }

    firstUnique(): string | null {
        return this.queue.length > 0 ? this.queue[0] : null;
    }
}

// 5️⃣ LRU Cache (Least Recently Used Cache - Uses Queue Concept)
// same as Circular Queues