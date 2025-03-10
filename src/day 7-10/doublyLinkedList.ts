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
}

const doublyLinked = new doublyLinkedList<number>()
doublyLinked.insertAtHead(4)
doublyLinked.insertAtTail(5)
// doublyLinked.deleteAtTail()
console.log(doublyLinked.search(5))
console.log(doublyLinked.printBackward())
console.log(doublyLinked.printForward())
console.log(doublyLinked.head)