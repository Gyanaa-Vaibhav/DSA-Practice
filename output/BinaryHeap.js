class MaxBinaryHeap {
    constructor() {
        this.values = new Array();
    }
    getHeap() {
        return this.values;
    }
    leftChild(index) {
        return 2 * index + 1;
    }
    rightChild(index) {
        return 2 * index + 2;
    }
    parentNode(index) {
        return Math.floor((index - 1) / 2);
    }
    swap(index1, index2) {
        const temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
    }
    insert(value) {
        this.values.push(value);
        let currentValue = this.values.length - 1;
        const isGreater = this.values[currentValue] > this.values[this.parentNode(currentValue)];
        while (currentValue > 0 && isGreater) {
            this.swap(currentValue, this.parentNode(currentValue));
            currentValue = this.parentNode(currentValue);
        }
        return this.getHeap();
    }
    removeMax() {
        this.swap(0, this.values.length - 1);
        const removedValue = this.values.pop();
        this.bubbleUP(0);
        return removedValue;
    }
    bubbleUP(index) {
        let maxIndex = index;
        while (true) {
            let leftIndex = this.leftChild(index);
            let rightIndex = this.rightChild(index);
            if (leftIndex < this.values.length && this.values[leftIndex] > this.values[maxIndex]) {
                maxIndex = leftIndex;
            }
            if (rightIndex < this.values.length && this.values[rightIndex] > this.values[maxIndex]) {
                maxIndex = rightIndex;
            }
            if (maxIndex !== index) {
                this.swap(index, maxIndex);
                index = maxIndex;
            }
            else {
                return;
            }
        }
    }
}
const heap = new MaxBinaryHeap();
// console.log(heap.insert(1));
// console.log(heap.insert(2));
heap.insert(95);
heap.insert(75);
heap.insert(80);
heap.insert(55);
heap.insert(60);
heap.insert(50);
heap.insert(65);
// heap.insert(2)
// heap.insert(100)
// console.log(heap.insert(1));
console.log(heap.getHeap());
console.log(heap.removeMax());
console.log(heap.removeMax());
console.log(heap.getHeap());
// heap.insert(5)
