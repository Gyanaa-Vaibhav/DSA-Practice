// @ts-ignore
class NodePointer<T>{
    value:T
    next = null

    constructor(value:T) {
        this.value = value;
    }
}

class CircularLinkedList<T>{
    head:NodePointer<T> | null = null
    tail: NodePointer<T | null> = null
    length:number = 0

    constructor(value?:T) {
        if(!value) return
        this.head = new NodePointer<T>(value)
        this.tail = this.head
        this.tail.next = this.head; // Ensures circularity
        this.length++
    }

    append(value:T) {
        const newNode = new NodePointer<T>(value)
        newNode.next = this.head
        this.tail.next = newNode
        this.tail = newNode
        this.length++;
        return
    }

    prepend(value:T) {
        const newNode = new NodePointer<T>(value)
        const temp = this.head
        this.head = newNode
        newNode.next = temp
        this.tail.next = this.head
        this.length++;
        return
    }

    printList() {
        let string = ''
        let temp = this.head
        for (let i = 0; i < this.length; i++) {
            if(i+1 === this.length){
                string += `${temp.value}`
            }else{
                string += `${temp.value} -> `
            }
            temp = temp.next
        }
        string+='\n↑ '
        for (let i = 0; i < this.length; i++) {
            if(i === 0){
                string += '<- '
            } else if(i+1 !== this.length){
                string += '  <- '
            }
        }
        string += '↓'
        console.log(string)
        return string
    }
}

const circularLinkedList = new CircularLinkedList<number>(1)
circularLinkedList.prepend(0)
circularLinkedList.append(2)
circularLinkedList.append(3)
circularLinkedList.append(4)
circularLinkedList.append(5)
circularLinkedList.append(6)
circularLinkedList.append(7)
circularLinkedList.printList()
// console.log(circularLinkedList.tail)
// console.log(circularLinkedList.head === circularLinkedList.tail)