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
// newLinkedList.printLinkedList()
// console.log("Length",newLinkedList.getLength());
// console.log(newLinkedList.exists(6))
// console.log(newLinkedList.getIndex(5))
// console.log(newLinkedList);
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function removeElements(head, val) {
    // if head is empty return null
    if (!head)
        return null;
    let temp = head;
    let previousNode = null;
    // Track head with a temp variable and a previousNode variable as null to keep track of one element before temp
    // A while loop to loop through all the elements
    while (temp) {
        console.log(temp);
        console.log("Head", head);
        // Check if value === val
        if (temp.val === val) {
            // check if it is the first element in the list
            if (previousNode === null) {
                // if yes move the pointer ahead and disconnect the head
                temp = temp.next;
                head = temp;
            }
            else {
                // if not then use the previous pointer to connect to new one
                previousNode.next = temp === null || temp === void 0 ? void 0 : temp.next;
                temp.next = null;
                temp = previousNode.next;
            }
        }
        else {
            // Moving pointer
            previousNode = temp;
            temp = temp.next;
        }
    }
    return head;
}
;
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(6);
head.next.next.next.next = new ListNode(6);
head.next.next.next.next.next = new ListNode(2);
head.next.next.next.next.next.next = new ListNode(1);
function reverseList(head) {
    if (!head)
        return null;
    let temp = head;
    let prevPointer = null;
    while (temp) {
        const nextPointer = temp === null || temp === void 0 ? void 0 : temp.next;
        temp.next = prevPointer;
        prevPointer = temp;
        temp = nextPointer;
    }
    return prevPointer;
}
;
// let reversed = reverseList(head);
// while (reversed) {
//     console.log(reversed.val);
//     reversed = reversed.next
// }
function getDecimalValue(head) {
    let num = 0;
    let current = head;
    while (current != null) {
        num = num * 2 + current.val;
        current = current.next;
    }
    return num;
}
;
const head2 = new ListNode(1);
head2.next = new ListNode(1);
head2.next.next = new ListNode(0);
head2.next.next.next = new ListNode(1);
// head2.next.next.next.next = new ListNode(1)
// head2.next.next.next.next.next = new ListNode(0)
// head2.next.next.next.next.next.next = new ListNode(0)
// head2.next.next.next.next.next.next.next = new ListNode(1)
// head2.next.next.next.next.next.next.next.next = new ListNode(1)
// head2.next.next.next.next.next.next.next.next.next = new ListNode(0)
// head2.next.next.next.next.next.next.next.next.next.next = new ListNode(1)
// console.log(getDecimalValue(head2));
function frequenciesOfElements(head) {
    const map = {};
    let temp = head;
    const ansListNode = new ListNode(0);
    let ansPointer = ansListNode;
    while (temp) {
        map[temp.val] = ++map[temp.val] || 1;
        console.log(map);
        temp = temp.next;
    }
    temp = head;
    while (temp) {
        if (map[temp.val]) {
            const pointer = new ListNode(map[temp.val]);
            ansPointer.next = pointer;
            ansPointer = pointer;
            delete map[temp.val];
        }
        temp = temp.next;
    }
    return ansListNode.next;
}
;
// let reversed = frequenciesOfElements(head2);
// while (reversed) {
//     console.log(reversed.val);
//     reversed = reversed.next
// }
function minimumPairRemoval(nums) {
    var _a, _b, _c;
    if (nums.length === 1)
        return 0;
    let num = 0;
    let newList = new ListNode(0);
    let listTracker = newList;
    for (let i = 0; i < nums.length; i++) {
        const newNode = new ListNode(nums[i]);
        listTracker.next = newNode;
        listTracker = newNode;
    }
    let head = newList.next;
    let temp = head;
    let forwardPointer = temp.next;
    let prevPointer = null;
    while (temp.next) {
        if (temp.val > forwardPointer.val) {
            if ((_a = forwardPointer === null || forwardPointer === void 0 ? void 0 : forwardPointer.next) === null || _a === void 0 ? void 0 : _a.val) {
                console.log("Comparing Value", temp.val, ">", forwardPointer.val);
                console.log("Adding Values", forwardPointer.val, (_b = forwardPointer === null || forwardPointer === void 0 ? void 0 : forwardPointer.next) === null || _b === void 0 ? void 0 : _b.val);
                forwardPointer.val = forwardPointer.val + forwardPointer.next.val;
                forwardPointer.next = (_c = forwardPointer === null || forwardPointer === void 0 ? void 0 : forwardPointer.next) === null || _c === void 0 ? void 0 : _c.next;
                num++;
                console.log("num", num);
            }
            else {
                console.log("Changing pointers as next is null");
                prevPointer = temp;
                temp = temp.next;
                break;
            }
            continue;
        }
        prevPointer = temp;
        forwardPointer = forwardPointer.next;
        temp = temp.next;
    }
    console.log(prevPointer);
    console.log(temp);
    if ((prevPointer === null || prevPointer === void 0 ? void 0 : prevPointer.val) > (temp === null || temp === void 0 ? void 0 : temp.val)) {
        console.log("Adding Num");
        num++;
    }
    return [num, head];
}
;
// console.log(minimumPairRemoval([0]))
// console.log(minimumPairRemoval([1,0]))
// console.log(minimumPairRemoval([5,2,3,1]))
// console.log(minimumPairRemoval([1,2,5,4,3]))
// console.log(minimumPairRemoval([11, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(minimumPairRemoval([5, 4, 3, 2, 1]));
// [5, 4, 3, 2, 1]
// [5, 7 , 2, 1] Step 1
// [5, 7, 3] Step 2
// [5,10] Step 3
