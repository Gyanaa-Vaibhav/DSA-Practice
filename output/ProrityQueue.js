class PriorityQueue {
    constructor() {
        this.queue = new Array();
    }
    leftChild(index) {
        return index * 2 + 1;
    }
    rightChild(index) {
        return index * 2 + 2;
    }
    parentNode(index) {
        return Math.floor((index - 1) / 2);
    }
    swap(index, index2) {
        [this.queue[index], this.queue[index2]] = [this.queue[index2], this.queue[index]];
    }
    Node(value, priority) {
        return {
            value,
            priority
        };
    }
    enqueue(value, priority) {
        var _a, _b, _c, _d;
        this.queue.push(this.Node(value, priority));
        let currentIndex = this.queue.length - 1;
        let isGreater = ((_a = this.queue[currentIndex]) === null || _a === void 0 ? void 0 : _a.priority) < ((_b = this.queue[this.parentNode(currentIndex)]) === null || _b === void 0 ? void 0 : _b.priority);
        while (currentIndex > 0 && isGreater) {
            this.swap(currentIndex, this.parentNode(currentIndex));
            currentIndex = this.parentNode(currentIndex);
            isGreater = ((_c = this.queue[currentIndex]) === null || _c === void 0 ? void 0 : _c.priority) < ((_d = this.queue[this.parentNode(currentIndex)]) === null || _d === void 0 ? void 0 : _d.priority);
        }
        return this.queue;
    }
    dequeue() {
        if (!this.queue)
            return;
        this.swap(0, this.queue.length - 1);
        const removedValue = this.queue.pop();
        this.sinkDown(0);
        return removedValue;
    }
    sinkDown(nodeIndex) {
        let tempIndex = nodeIndex;
        while (true) {
            const leftChildIndex = this.leftChild(nodeIndex);
            const rightChildIndex = this.rightChild(nodeIndex);
            const leftChildNode = this.queue[leftChildIndex];
            const rightChildNode = this.queue[rightChildIndex];
            const newNode = this.queue[tempIndex];
            if (leftChildIndex < this.queue.length && leftChildNode.priority < newNode.priority) {
                tempIndex = leftChildIndex;
            }
            if (rightChildIndex < this.queue.length && rightChildNode.priority < newNode.priority) {
                if (rightChildNode.priority < leftChildNode.priority)
                    tempIndex = rightChildIndex;
            }
            if (tempIndex !== nodeIndex) {
                this.swap(tempIndex, nodeIndex);
                nodeIndex = tempIndex;
            }
            else {
                break;
            }
        }
    }
}
const priorityQue = new PriorityQueue();
priorityQue.enqueue("Hi!", 10);
priorityQue.enqueue("Hello", 34);
priorityQue.enqueue("Test Hello", 2);
priorityQue.enqueue("Hello World", 5);
priorityQue.enqueue("Least Priority LOL", 500);
priorityQue.enqueue("Brail", 1);
priorityQue.enqueue("same", 11);
priorityQue.enqueue("same", 12);
priorityQue.enqueue("same WTF", 13);
console.log(priorityQue);
// console.log(priorityQue.dequeue())
// console.log(priorityQue);
// console.log(priorityQue.dequeue())
// console.log(priorityQue);
