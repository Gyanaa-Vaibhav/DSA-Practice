class NodePointerNew<T>{
    public value:T;
    public next = null

    constructor(v:T) {
        this.value = v
    }
}

class LinkedListNew<T>{
    private head: NodePointer<T | null> = null
    private tail: NodePointer<T | null> = null

    constructor(value?: T) {
        if (value) {
            const node = new NodePointerNew<T>(value)
            this.head = node
            this.tail = node
        } else {
            console.log("Initializing Empty Constructor");
        }
    }

    public prepend(value:T) {
        const node: NodePointerNew<T> = new NodePointerNew(value)
        node.next = this.head
        this.head = node
        return value
    }

    public append(value: T) {
        const node = new NodePointerNew<T>(value);
        this.tail.next = node;
        this.tail = node;
        return value
    }

    public printLinkedList() {
        let temp = this.head
        while (temp) {
            console.log(temp.value);
            temp = temp.next
        }
    }

    public exists(value: T) {
        let temp = this.head;

        while (temp) {
            if (temp.value === value) {
                return true
            }
            temp = temp.next
        }

        return false
    }

    public getIndex(value: T) {
        let temp = this.head;
        let index = 0;
        while (temp) {
            if (temp.value === value) {
                return index
            }
            index++;
            temp = temp.next
        }

        return false
    }

    public insert(index: number, value: T) {
        if (index === 0) return this.prepend(value);
        
        let prev: NodePointerNew<T> | null = null;
        let temp: NodePointerNew<T> = this.head;
        let length:number = 0;

        while (temp) {
            if (length === index) {
                const newNode = new NodePointerNew<T>(value)
                prev.next = newNode;
                newNode.next = temp
                return
            }
            prev = temp
            temp = temp.next
            length++;
        }
        
        throw new Error(`Index Mismatch please make sure the length in under ${this.getLength()}`);
    }

    public getLength() {
        let length: number = 0;
        let temp: NodePointerNew<T> = this.head;
        while (temp) {
            length++;
            temp = temp.next
        }

        return length
    }

}

const newLinkedList = new LinkedListNew<number>(3);
newLinkedList.prepend(2)
newLinkedList.prepend(1)
newLinkedList.append(4)
newLinkedList.append(5)
newLinkedList.insert(4,4)
newLinkedList.printLinkedList()
console.log("Length",newLinkedList.getLength());

// console.log(newLinkedList.exists(6))
// console.log(newLinkedList.getIndex(5))
// console.log(newLinkedList);
