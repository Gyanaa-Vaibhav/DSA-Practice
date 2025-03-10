// @ts-ignore
class NodePointer {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class CircularLinkedList {
    constructor(value) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        if (!value)
            return;
        this.head = new NodePointer(value);
        this.tail = this.head;
        this.tail.next = this.head; // Ensures circularity
        this.length++;
    }
    append(value) {
        const newNode = new NodePointer(value);
        newNode.next = this.head;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return;
    }
    prepend(value) {
        const newNode = new NodePointer(value);
        const temp = this.head;
        this.head = newNode;
        newNode.next = temp;
        this.tail.next = this.head;
        this.length++;
        return;
    }
    printList() {
        let string = '';
        let temp = this.head;
        for (let i = 0; i < this.length; i++) {
            if (i + 1 === this.length) {
                string += `${temp.value}`;
            }
            else {
                string += `${temp.value} -> `;
            }
            temp = temp.next;
        }
        string += '\n↑ ';
        for (let i = 0; i < this.length; i++) {
            if (i + 1 === this.length) {
                string += '<-< ';
            }
            else {
                string += '<-';
            }
        }
        string += '↓';
        console.log(string);
        return string;
    }
}
const circularLinkedList = new CircularLinkedList(1);
circularLinkedList.prepend(0);
circularLinkedList.append(2);
circularLinkedList.append(3);
circularLinkedList.append(4);
circularLinkedList.printList();
// console.log(circularLinkedList.tail)
// console.log(circularLinkedList.head === circularLinkedList.tail)
