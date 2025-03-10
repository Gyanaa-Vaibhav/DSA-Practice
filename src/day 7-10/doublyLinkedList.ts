// @ts-ignore
class NodePointer<T>{
    prev: NodePointer<T> | null = null;
    value: T;
    next: NodePointer<T> | null = null;

    constructor(value:T) {
        this.value = value;
    }
}

class doublyLinkedList<T>{
    head:NodePointer<T> | null = null
    tail: NodePointer<T | null> = null
    length:number = 0

    constructor(value?:T) {
        if(value === undefined){
            return
        }
        const newNode = new NodePointer<T>(value)
        this.tail = newNode
        this.head = newNode
        this.length++
    }

    insertAtHead(value:T) {
        const newNode = new NodePointer<T>(value)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
            this.length++;
            return
        }
        this.head.prev = newNode
        newNode.next = this.head
        this.length++;
        this.head = newNode
        return value
    }

    insertAtTail(value:T) {
        if(this.length === 0){
            return this.insertAtHead(value)
        }
        const newNode = new NodePointer<T>(value)
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++
        return value
    }

    deleteAtHead() {
        if(this.length <= 1){
            this.resetList()
            return;
        }
        this.head = this.head?.next
        this.head.prev = null
        this.length--;
        return;
    }

    deleteAtTail() {
        if(this.length <= 1){
            this.resetList()
            return;
        }
        this.tail = this.tail?.prev
        this.tail.next = null
        this.length--;
        return;
    }

    search(value:T):boolean {
        let temp = this.head
        while(temp !== null){
            if(temp.value === value) return true
            temp = temp.next
        }
        return false
    }

    printForward():string {
        let sting = ''
        let temp = this.head
        while (temp !== null) {
            sting += `${temp.value} -> `
            temp = temp.next
        }
        sting += 'null'
        return sting
    }

    printBackward():string {
        let string = 'null'
        let temp = this.tail
        while (temp !== null) {
            string += ` <- ${temp.value}`
            temp = temp.prev
        }
        return string
    }

    resetList() {
        this.head = null
        this.tail = null
    }

    get(index:number) {
        if (index < 0 || index >= this.length) return null;
        let temp = this.head;
        if (index < this.length/2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }
    // 1️⃣ Insert a Node at a Specific Position
    insertAtIndex(index:number, value:T) {
        if(index < 0 || index > this.length) return;
        if(index === 0) return this.insertAtHead(value)
        if(index === this.length) return this.insertAtTail(value)

        const newNode = new NodePointer<T>(value)
        const before = this.get(index-1)
        const after = before.next
        before.next = newNode;
        newNode.prev = before

        after.prev = newNode
        newNode.next = after
        this.length++;
        return value;
    }

    // 2️⃣ Delete a Node at a Specific Position
    deleteAtIndex(index:number) {
        if(index < 0 || index > this.length) return;
        if(index === 0) return this.deleteAtHead();
        if(index === this.length) return this.deleteAtTail();
        const temp = this.get(index)
        temp.next.prev  = temp.prev
        temp.prev.next = temp.next
        temp.next = null
        temp.prev = null
        this.length--;
        return;
    }

    // 3️⃣ Find Length of a Doubly Linked List
    getLength() {
        // Alternatively we can use loop from head and tail with count and we stop when temp1.value === temp2.value && temp1.next === temp2.next and same with prev as well
        return this.length
    }

    // 4️⃣ Reverse a Doubly Linked List
    reverseList() {
        let headPointer = this.head
        let tailPointer = this.tail
        for (let i = 0; i <this.length/2; i++) {
            const tempValue = headPointer.value
            headPointer.value = tailPointer.value
            tailPointer.value = tempValue
            headPointer = headPointer.next
            tailPointer = tailPointer.prev
        }
        return
    }

    // 5️⃣ Remove Duplicates from a Sorted Doubly Linked List
    removeDuplicates() {
        let temp = this.head
        while (temp.next !== null){
            if (temp.value === temp.next.value) {
                temp.next = temp.next.next
                this.length--
            }else{
                temp = temp.next
            }
        }
        return
    }

    // 6️⃣ Find the Middle Node of a DLL
    getMiddleNode() {
       let temp = this.head
        for (let i = 0; i < Math.ceil((this.length-1)/2); i++) {
            temp = temp.next
        }
        return temp
    }
}

const doublyLinked = new doublyLinkedList<number>(10)
// doublyLinked.insertAtHead(9)
doublyLinked.insertAtTail(11)
doublyLinked.insertAtTail(12)
doublyLinked.insertAtTail(13)
doublyLinked.insertAtTail(14)
doublyLinked.insertAtTail(15)
doublyLinked.insertAtTail(16)
doublyLinked.insertAtTail(17)
// doublyLinked.deleteAtTail()
// console.log(doublyLinked.search(5))
// console.log(doublyLinked.printBackward())
console.log(doublyLinked.printForward())
// doublyLinked.insertAtIndex(4,3)
// doublyLinked.deleteAtIndex(4)
// doublyLinked.reverseList()
// doublyLinked.removeDuplicates()
// console.log(doublyLinked.printForward())
// console.log(doublyLinked.length)
