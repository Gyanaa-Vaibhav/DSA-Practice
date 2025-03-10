// @ts-ignore
class NodePointer {
    constructor(value) {
        this.prev = null;
        this.next = null;
        this.value = value;
    }
}
class doublyLinkedList {
    constructor(value) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        if (value === undefined) {
            return;
        }
        const newNode = new NodePointer(value);
        this.tail = newNode;
        this.head = newNode;
        this.length++;
    }
    insertAtHead(value) {
        const newNode = new NodePointer(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }
        this.head.prev = newNode;
        newNode.next = this.head;
        this.length++;
        this.head = newNode;
        return value;
    }
    insertAtTail(value) {
        if (this.length === 0) {
            return this.insertAtHead(value);
        }
        const newNode = new NodePointer(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return value;
    }
    deleteAtHead() {
        var _a;
        if (this.length <= 1) {
            this.resetList();
            return;
        }
        this.head = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
        this.head.prev = null;
        this.length--;
        return;
    }
    deleteAtTail() {
        var _a;
        if (this.length <= 1) {
            this.resetList();
            return;
        }
        this.tail = (_a = this.tail) === null || _a === void 0 ? void 0 : _a.prev;
        this.tail.next = null;
        this.length--;
        return;
    }
    search(value) {
        let temp = this.head;
        while (temp !== null) {
            if (temp.value === value)
                return true;
            temp = temp.next;
        }
        return false;
    }
    printForward() {
        let sting = '';
        let temp = this.head;
        while (temp !== null) {
            sting += `${temp.value} -> `;
            temp = temp.next;
        }
        sting += 'null';
        return sting;
    }
    printBackward() {
        let string = 'null';
        let temp = this.tail;
        while (temp !== null) {
            string += ` <- ${temp.value}`;
            temp = temp.prev;
        }
        return string;
    }
    resetList() {
        this.head = null;
        this.tail = null;
    }
}
const doublyLinked = new doublyLinkedList();
doublyLinked.insertAtHead(4);
doublyLinked.insertAtTail(5);
// doublyLinked.deleteAtTail()
console.log(doublyLinked.search(5));
console.log(doublyLinked.printBackward());
console.log(doublyLinked.printForward());
console.log(doublyLinked.head);
