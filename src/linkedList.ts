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
        } else {
            console.log("Initializing Empty Constructor");
        }
    }

    public prepend(value:T) {
        // const temp = this.head
        const node: NodePointerNew<T> = new NodePointerNew(value)
        node.next = this.head
        this.head = node
        return value
    }

    public append(value: T) {
        let temp = this.head
        while (temp) {
            if (!temp.next) {
                const node = new NodePointerNew<T>(value)
                temp.next = node
                return value
            }
            temp = temp.next
        }
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

}

const newLinkedList = new LinkedListNew<number>(1);
// newLinkedList.prepend(2)
// newLinkedList.prepend(3)
// newLinkedList.append(4)
newLinkedList.append(5)
// newLinkedList.printLinkedList()
// console.log(newLinkedList.exists(6))
// console.log(newLinkedList.getIndex(5))
// console.log(newLinkedList);

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(2)
list1.next.next.next = new ListNode(5)

const list2 = new ListNode(1)
// list2.next = new ListNode(3)
// list2.next.next = new ListNode(4)

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let temp = head;
    while (temp.next) {
        if (temp.val === temp.next.val) {
            console.log(temp);
            temp.next = temp.next.next
        } else {
            temp = temp.next
        }
    }

    return head
};

console.log(deleteDuplicates(list1));
