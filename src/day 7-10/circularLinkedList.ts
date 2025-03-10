// @ts-ignore
class NodePointer<T>{
    value:T
    next = null

    constructor(value:T) {
        this.value = value;
    }
}

class CircularLinkedList<T>{
    head:NodePointer<T> | null = null
    tail: NodePointer<T | null> = null
    length:number = 0

    constructor(value?:T) {
        if(!value) return
        this.head = new NodePointer<T>(value)
        this.tail = this.head
        this.tail.next = this.head; // Ensures circularity
        this.length++
    }

    append(value:T) {
        this.tail = new NodePointer<T>(value)
        this.tail.next = this.head
        this.length++;
        return
    }

    prepend(value:T) {
        const newNode = new NodePointer<T>(value)
        const temp = this.head
        this.head = newNode
        newNode.next = temp
        this.tail.next = this.head
        this.length++;
        return
    }
}

const circularLinkedList = new CircularLinkedList<number>(1)
// circularLinkedList.prepend(0)
// circularLinkedList.append(2)
console.log(circularLinkedList)
// console.log(circularLinkedList.head === circularLinkedList.tail)