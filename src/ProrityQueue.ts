type PriorityNode = {
    value: any,
    priority:number
}

class PriorityQueue {
    private queue = new Array<PriorityNode>()
    private leftChild(index) {
        return index * 2 + 1;
    }
    private rightChild(index) {
        return index * 2 + 2;
    }
    private parentNode(index) {
        return Math.floor((index - 1) / 2);
    }
    private swap(index, index2) {
        [this.queue[index], this.queue[index2]] = [this.queue[index2], this.queue[index]];
    }
    
    public Node(value, priority):PriorityNode {
        return {
            value,
            priority
        }
    }

    public enqueue(value, priority) {
        this.queue.push(this.Node(value, priority));
        let currentIndex = this.queue.length - 1;
        let isGreater = this.queue[currentIndex]?.priority < this.queue[this.parentNode(currentIndex)]?.priority

        while (currentIndex > 0 && isGreater) {
            this.swap(currentIndex, this.parentNode(currentIndex))
            currentIndex = this.parentNode(currentIndex)
            isGreater = this.queue[currentIndex]?.priority < this.queue[this.parentNode(currentIndex)]?.priority
        }
        
        return this.queue
    }

    public dequeue() {
        if (!this.queue) return
        this.swap(0, this.queue.length - 1);
        const removedValue = this.queue.pop();
        
        this.sinkDown(0);

        return removedValue
    }

    private sinkDown(nodeIndex) {
        let tempIndex = nodeIndex;
        while (true) {
            const leftChildIndex = this.leftChild(nodeIndex)
            const rightChildIndex = this.rightChild(nodeIndex)
            const leftChildNode = this.queue[leftChildIndex]
            const rightChildNode = this.queue[rightChildIndex]
            const newNode = this.queue[tempIndex]
    
            if (leftChildIndex < this.queue.length && leftChildNode.priority < newNode.priority) {
                tempIndex = leftChildIndex
            }

            if (rightChildIndex < this.queue.length && rightChildNode.priority < newNode.priority) {
                if(rightChildNode.priority < leftChildNode.priority) tempIndex = rightChildIndex
            }
    
            if (tempIndex !== nodeIndex) {
                this.swap(tempIndex, nodeIndex)
                nodeIndex = tempIndex;
            } else {
                break
            }
        }
    }

}

const priorityQue = new PriorityQueue()
priorityQue.enqueue("Hi!",10)
priorityQue.enqueue("Hello",34)
priorityQue.enqueue("Test Hello",2)
priorityQue.enqueue("Hello World", 5)
priorityQue.enqueue("Least Priority LOL", 500)
priorityQue.enqueue("Brail", 1)
priorityQue.enqueue("same", 11)
priorityQue.enqueue("same", 12)
priorityQue.enqueue("same WTF", 13)

console.log(priorityQue);

// console.log(priorityQue.dequeue())
// console.log(priorityQue);
// console.log(priorityQue.dequeue())

// console.log(priorityQue);