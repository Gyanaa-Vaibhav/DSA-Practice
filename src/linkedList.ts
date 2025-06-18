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
// newLinkedList.printLinkedList()
// console.log("Length",newLinkedList.getLength());

// console.log(newLinkedList.exists(6))
// console.log(newLinkedList.getIndex(5))
// console.log(newLinkedList);


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
    // if head is empty return null
    if (!head) return null;
    let temp = head;
    let previousNode = null;
    // Track head with a temp variable and a previousNode variable as null to keep track of one element before temp
    // A while loop to loop through all the elements
    while (temp) {
        console.log(temp);
        console.log("Head",head);
        
        // Check if value === val
        if (temp.val === val) {
            // check if it is the first element in the list
            if (previousNode === null) {
                // if yes move the pointer ahead and disconnect the head
                temp = temp.next
                head = temp;
            } else {
                // if not then use the previous pointer to connect to new one
                previousNode.next = temp?.next
                temp.next = null
                temp = previousNode.next
            }
        } else {
            // Moving pointer
            previousNode = temp;
            temp = temp.next;
        }
    }

    return head
};

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(6)
head.next.next.next = new ListNode(6)
head.next.next.next.next = new ListNode(6)
head.next.next.next.next.next = new ListNode(2)
head.next.next.next.next.next.next = new ListNode(1)

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null
    
    let temp = head;
    let prevPointer = null;

    while (temp) {
        const nextPointer = temp?.next
        temp.next = prevPointer;
        prevPointer = temp
        temp = nextPointer;
    }
        
    return prevPointer;
};

// let reversed = reverseList(head);

// while (reversed) {
//     console.log(reversed.val);
//     reversed = reversed.next
// }

function getDecimalValue(head: ListNode | null): number {
    let num = 0;
    let current = head;
    while (current != null) {
        num = num * 2 + current.val;
        current = current.next;
    }
    return num;
};

const head2 = new ListNode(1)
head2.next = new ListNode(1)
head2.next.next = new ListNode(0)
head2.next.next.next = new ListNode(1)
// head2.next.next.next.next = new ListNode(1)
// head2.next.next.next.next.next = new ListNode(0)
// head2.next.next.next.next.next.next = new ListNode(0)
// head2.next.next.next.next.next.next.next = new ListNode(1)
// head2.next.next.next.next.next.next.next.next = new ListNode(1)
// head2.next.next.next.next.next.next.next.next.next = new ListNode(0)
// head2.next.next.next.next.next.next.next.next.next.next = new ListNode(1)

// console.log(getDecimalValue(head2));

function frequenciesOfElements(head: ListNode | null): ListNode | null {
    const map = {};
    let temp = head;
    const ansListNode = new ListNode(0);
    let ansPointer = ansListNode

    while (temp) {
        map[temp.val] = ++map[temp.val] || 1;
        console.log(map);
        temp = temp.next
    }
    
    temp = head

    while (temp) {
        if (map[temp.val]) {
            const pointer = new ListNode(map[temp.val])
            ansPointer.next = pointer;
            ansPointer = pointer;
            delete map[temp.val];
        }
        temp = temp.next
    }

    return ansListNode.next
};

// let reversed = frequenciesOfElements(head2);
// while (reversed) {
//     console.log(reversed.val);
//     reversed = reversed.next
// }


function minimumPairRemoval(nums: number[]): number {
    if(nums.length === 1) return 0
    let num = 0;
    let newList = new ListNode(0);
    let listTracker = newList;

    for (let i = 0; i < nums.length; i++) {
        const newNode = new ListNode(nums[i])
        listTracker.next = newNode;
        listTracker = newNode;
    }
    let head = newList.next;

    let temp = head;
    let forwardPointer = temp.next;
    let prevPointer = null;

    while (temp.next) {
        if (temp.val > forwardPointer.val) {
            if (forwardPointer?.next?.val) {
                console.log("Comparing Value",temp.val, ">", forwardPointer.val)
                console.log("Adding Values", forwardPointer.val, forwardPointer?.next?.val);
                forwardPointer.val = forwardPointer.val + forwardPointer.next.val;
                forwardPointer.next = forwardPointer?.next?.next
                num++;
                console.log("num",num);
                
            } else {
                console.log("Changing pointers as next is null");
                
                prevPointer = temp
                temp = temp.next
                break
            }
            continue;
        }
        prevPointer = temp
        forwardPointer = forwardPointer.next
        temp = temp.next
    }
    
    console.log(prevPointer);
    console.log(temp);
    
    
    if (prevPointer?.val > temp?.val) {
        console.log("Adding Num");
        
        num++;
    }
    

    return num;
};

// console.log(minimumPairRemoval([0]))
// console.log(minimumPairRemoval([1,0]))
// console.log(minimumPairRemoval([5,2,3,1]))
// console.log(minimumPairRemoval([1,2,5,4,3]))
// console.log(minimumPairRemoval([11, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(minimumPairRemoval([5, 4, 3, 2, 1]))
