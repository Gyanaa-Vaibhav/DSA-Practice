// @ts-ignore
class NodePointer {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class LinkedList {
    constructor(value) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        if (value === undefined) {
            return;
        }
        const newNode = new NodePointer(value);
        this.head = newNode;
        this.tail = newNode;
        this.length++;
    }
    /**
     * Adds a new node to the beginning of the linked list.
     * If the list is empty, it sets the new node as both head and tail.
     *
     * @param {T} value - The value to insert at the beginning.
     * @returns {T} The inserted value.
     */
    prepend(value) {
        const newNode = new NodePointer(value);
        if (this.length === 0) {
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return value;
    }
    /**
     * Adds a new node to the end of the linked list.
     * If the list is empty, it delegates to `prepend()`.
     *
     * @param {T} value - The value to insert at the end.
     * @returns {T} The inserted value.
     */
    append(value) {
        const newNode = new NodePointer(value);
        if (!this.tail) {
            this.prepend(value);
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return value;
    }
    /**
     * Removes the head (first node) of the linked list.
     * Updates the head reference and reduces the list length.
     * If the list becomes empty, it sets tail to null.
     *
     * @returns {T | undefined} The removed value, or undefined if the list is empty.
     */
    removeHead() {
        if (this.length === 0)
            return;
        if (this.length === 1) {
            return this.resetList();
        }
        let removedValue;
        removedValue = this.head.value;
        this.head = this.head.next;
        this.length--;
        return removedValue;
    }
    /**
     * Removes the tail (last node) of the linked list.
     * Traverses to the second-last node and updates the tail reference.
     * If the list has only one element, it resets both head and tail to null.
     *
     * @returns {T | undefined} The removed value, or undefined if the list is empty.
     */
    removeTail() {
        var _a, _b;
        if (this.length === 0)
            return;
        if (this.length === 1) {
            return this.resetList();
        }
        let removedValue;
        let temp = this.head;
        while (((_a = temp === null || temp === void 0 ? void 0 : temp.next) === null || _a === void 0 ? void 0 : _a.next) !== null) {
            temp = temp.next;
            removedValue = (_b = temp === null || temp === void 0 ? void 0 : temp.next) === null || _b === void 0 ? void 0 : _b.value;
        }
        temp.next = null;
        this.tail = temp;
        this.length--;
        return removedValue;
    }
    /**
     * Inserts a new node at a specified index in the linked list.
     * If the index is 0 or less, it prepends.
     * If the index is greater than or equal to the length, it appends.
     * Otherwise, it inserts at the correct position by updating pointers.
     *
     * @param {number} index - The position to insert the new value.
     * @param {T} value - The value to insert.
     */
    // 1️⃣ Insert a Node at a Specific Position → Insert a node at the given index.
    addAtIndex(index, value) {
        if (index <= 0) {
            console.warn("Please use prepend while adding at index 0");
            this.prepend(value);
            return;
        }
        else if (index >= this.length) {
            console.warn("Please use append while adding at the end of list");
            this.append(value);
            return;
        }
        let temp = this.head;
        let i = 0;
        while (i !== this.length) {
            if (i === index - 1) {
                const holder = temp.next;
                const newNode = new NodePointer(value);
                newNode.next = holder;
                temp.next = newNode;
                return;
            }
            temp = temp.next;
            i++;
        }
    }
    resetList() {
        let removedValue = this.head.value;
        this.head = null;
        this.tail = null;
        this.length--;
        return removedValue;
    }
    /**
     * Finds the index of the first occurrence of a given value in the linked list.
     *
     * @param {T} value - The value to search for in the list.
     * @returns {number | false} The index of the value if found, otherwise `false`.
     */
    // 4️⃣ Search for a Value in a Linked List → Return true if found, else false.
    getIndex(value) {
        let index = 0;
        let temp = this.head;
        while (temp.next !== null) {
            if (temp.value === value) {
                return index;
            }
            temp = temp.next;
            index++;
        }
        return false;
    }
    getValue(index) {
        if (index >= this.length || index < 0)
            return { value: null };
        if (this.length === 1)
            return this.head;
        let temp = this.head;
        for (let j = 0; j < index + 1; j++) {
            if (j === index)
                return temp;
            temp = temp === null || temp === void 0 ? void 0 : temp.next;
        }
        return { value: null };
    }
    setValue(index, value) {
        const temp = this.getValue(index);
        if (temp != null) {
            temp.value = value;
            return true;
        }
        return false;
    }
    /**
     * function getHead()
     * returns the value of the head
     * */
    getHead() {
        console.log(`{ value: ${this.head.value}, next:${this.head.next} }`);
        return this.head.value;
    }
    getFullList() {
        // console.log(this.head)
        return this.head;
    }
    /**
     * function getTail()
     * returns the value of the head
     * */
    getTail() {
        console.log(this.tail);
        return this.tail;
    }
    /**
     * function getLength()
     * returns the length of the LinkedList
     * */
    getLength() {
        // console.log(`Length: ${this.length}`)
        return this.length;
    }
    printList() {
        let string = '';
        let temp = this.head;
        while (temp != null) {
            string += `${temp.value} -> `;
            temp = temp.next;
        }
        string += 'null';
        console.log(string);
        return string;
    }
    // 3️⃣ Find Length of a Linked List → Count the number of nodes.
    findLength() {
        let length = 0;
        let temp = this.head;
        while (temp !== null) {
            length++;
            temp = temp.next;
        }
        return length;
    }
    // 6️⃣ Remove Duplicates from a Sorted Linked List → Given a sorted linked list, remove duplicates.
    removeDuplicates() {
        let temp = this.head;
        while (temp.next !== null) {
            if (temp.value === temp.next.value) {
                temp.next = temp.next.next;
                this.length--;
            }
            else {
                temp = temp.next;
            }
        }
    }
    // 5️⃣ Reverse a Singly Linked List (Without Pointers, Just Change next)
    reverse() {
        if (this.length <= 1)
            return this.head;
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let before = null;
        let after = temp.next;
        while (temp !== null) {
            after = temp.next; // Pushing pointer one step
            temp.next = before; // Flipping the Pointer to null
            before = temp; // Moving before to current position
            temp = after; // Moving pointer to after +1 step
        }
    }
}
const linkedList = new LinkedList(1);
linkedList.prepend(0);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
// linkedList.setValue(1,3)
// linkedList.reverse()
// linkedList.printList()
// console.log(linkedList.findLength())
// console.log(linkedList.getValue(0))
// linkedList.addAtIndex(4,5)
// linkedList.printList()
// console.log(linkedList.removeTail())
// console.log(linkedList.removeHead())
// linkedList.printList()
// List with No constructor or null value at default
// const linkedListEmpty = new LinkedList<number>()
// linkedListEmpty.prepend(1)
// linkedListEmpty.append(2)
// linkedListEmpty.getLength()
