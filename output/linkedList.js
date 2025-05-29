class NodePointerNew {
    constructor(v) {
        this.next = null;
        this.value = v;
    }
}
class LinkedListNew {
    constructor(value) {
        this.head = null;
        this.tail = null;
        if (value) {
            const node = new NodePointerNew(value);
            this.head = node;
            this.tail = node;
        }
        else {
            console.log("Initializing Empty Constructor");
        }
    }
    prepend(value) {
        const node = new NodePointerNew(value);
        node.next = this.head;
        this.head = node;
        return value;
    }
    append(value) {
        const node = new NodePointerNew(value);
        this.tail.next = node;
        this.tail = node;
        return value;
    }
    printLinkedList() {
        let temp = this.head;
        while (temp) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
    exists(value) {
        let temp = this.head;
        while (temp) {
            if (temp.value === value) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
    getIndex(value) {
        let temp = this.head;
        let index = 0;
        while (temp) {
            if (temp.value === value) {
                return index;
            }
            index++;
            temp = temp.next;
        }
        return false;
    }
    insert(index, value) {
        if (index === 0)
            return this.prepend(value);
        let prev = null;
        let temp = this.head;
        let length = 0;
        while (temp) {
            if (length === index) {
                const newNode = new NodePointerNew(value);
                prev.next = newNode;
                newNode.next = temp;
                return;
            }
            prev = temp;
            temp = temp.next;
            length++;
        }
        throw new Error(`Index Mismatch please make sure the length in under ${this.getLength()}`);
    }
    getLength() {
        let length = 0;
        let temp = this.head;
        while (temp) {
            length++;
            temp = temp.next;
        }
        return length;
    }
}
const newLinkedList = new LinkedListNew(3);
newLinkedList.prepend(2);
newLinkedList.prepend(1);
newLinkedList.append(4);
newLinkedList.append(5);
newLinkedList.insert(4, 4);
newLinkedList.printLinkedList();
console.log("Length", newLinkedList.getLength());
// console.log(newLinkedList.exists(6))
// console.log(newLinkedList.getIndex(5))
// console.log(newLinkedList);
