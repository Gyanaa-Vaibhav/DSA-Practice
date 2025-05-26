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
        }
        else {
            console.log("Initializing Empty Constructor");
        }
    }
    prepend(value) {
        // const temp = this.head
        const node = new NodePointerNew(value);
        node.next = this.head;
        this.head = node;
        return value;
    }
    append(value) {
        let temp = this.head;
        while (temp) {
            if (!temp.next) {
                const node = new NodePointerNew(value);
                temp.next = node;
                return value;
            }
            temp = temp.next;
        }
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
}
const newLinkedList = new LinkedListNew(1);
// newLinkedList.prepend(2)
// newLinkedList.prepend(3)
newLinkedList.append(4);
newLinkedList.append(5);
newLinkedList.printLinkedList();
// console.log(newLinkedList.exists(6))
console.log(newLinkedList.getIndex(5));
// console.log(newLinkedList);
