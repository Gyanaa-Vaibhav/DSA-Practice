import { LinkedList } from "./day 7-10/linkedList";

class TreeNode<T> {
    public value: T;
    public left: TreeNode<T> | null = null;
    public right: TreeNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class BinarySearchTree<T> {

    private root: TreeNode<T> | null = null;

    public insert(value: T): boolean {
        const newNode = new TreeNode<T>(value);
        if (!this.root) {
            this.root = newNode;
            return true
        }
        let temp = this.root

        while (true) {
            if (temp.value === value) return false
            if (newNode.value > temp.value) {
                if (temp.right === null) {
                    temp.right = newNode;
                    return true
                }
                temp = temp.right
            } else {
                if (temp.left === null) {
                    temp.left = newNode;
                    return true
                }
                temp = temp.left
            }
        }
    }

    public contain(value: T): boolean {
        let temp = this.root;
        while (temp !== null) {
            if (value === temp.value) return true
            if (value > temp.value) {
                temp = temp.right
            } else {
                temp = temp.left
            }
        }

        return false;
    }

    public containRecursive(value: T,node: TreeNode<T> | null = this.root): boolean {
        if (node === null) return false
        if(node.value === value) return true
        if (value > node.value) return this.containRecursive(value, node.right)
        else return this.containRecursive(value, node.left)
    }

    public insertRecursive(value: T, node: TreeNode<T> | null = this.root): TreeNode<T> {
        if (this.root === null) return this.root = new TreeNode<T>(value);
        if (node === null) return new TreeNode<T>(value);
        if(node.value === value) return node
        if (value > node.value) node.right = this.insertRecursive(value, node.right);
        else node.left = this.insertRecursive(value, node.left)
        return node
    }

    public insertRecursive2(value: T, node: TreeNode<T> | null = this.root): boolean {
        if (this.root === null) {
            this.root = new TreeNode<T>(value);
            return true;
        }
        if (node.right === null && value > node.value) {
            node.right = new TreeNode<T>(value);
            return true
        } else if (node.left === null) {
            node.left = new TreeNode<T>(value);
            return true
        }
        if (value === node.value) return false;
        if (value > node.value) return this.insertRecursive2(value, node.right);
        else return this.insertRecursive2(value, node.left);
    }

    public miniumValueRecursive(node: TreeNode<T> | null = this.root) {
        if (node.left === null) return node.value
        return this.miniumValueRecursive(node.left)
    }

    public BFS() {
        const array = new Array<T>()
        const queue = new LinkedList<TreeNode<T>>(this.root)
        
        while (queue.getLength()) {
            const previousNode = queue.removeHead()
            array.push(previousNode.value.value)
            if (previousNode.value.left) {
                queue.append(previousNode.value.left)
            }
            if (previousNode.value.right) {
                queue.append(previousNode.value.right)
            }
        }

        return array
    }

    public DFS_Pre_Order_Recursive(node: TreeNode<T>, array: T[]) {
        if (node === null) return
        array.push(node.value)
        if (node.left) this.DFS_Pre_Order_Recursive(node.left, array)
        if (node.right) this.DFS_Pre_Order_Recursive(node.right, array)
    }

    public DFS_Pre_Order() {
        const array = new Array<T>();
        this.DFS_Pre_Order_Recursive(this.root,array)
        return array
    }

    public DFS_Post_Order_Recursive(node: TreeNode<T>, array: T[]) {
        if (node === null) return
        if (node.left) this.DFS_Post_Order_Recursive(node.left, array)
        if (node.right) this.DFS_Post_Order_Recursive(node.right, array)
        return array.push(node.value)
    }

    public DFS_POST_ORDER() {
        const array = new Array<T>();
        this.DFS_Post_Order_Recursive(this.root, array)
        return array
    }

    public DFS_In_Order_Recursive(node: TreeNode<T>, array: T[]) {
        if (node === null) return
        if (node.left) this.DFS_In_Order_Recursive(node.left, array)
        array.push(node.value)
        if (node.right) this.DFS_In_Order_Recursive(node.right, array)
        return
    }

    public DFS_In_Order() {
        const array = new Array<T>();
        this.DFS_In_Order_Recursive(this.root, array)
        return array
    }
}

const BST = new BinarySearchTree<number>();
// BST.insertRecursive(9)
// BST.insertRecursive(4)
// BST.insertRecursive(12)
// BST.insertRecursive(34)
// BST.insertRecursive(45)
// BST.insertRecursive(1)
// BST.insertRecursive(6)
// BST.insertRecursive(1)
// BST.insertRecursive(6)

BST.insertRecursive(10)
BST.insertRecursive(6)
BST.insertRecursive(15)
BST.insertRecursive(3)
BST.insertRecursive(8)
BST.insertRecursive(20)

// console.log("BFS");
// console.log(BST.BFS());
console.log(BST.DFS_Pre_Order());
console.log(BST.DFS_POST_ORDER());
console.log(BST.DFS_In_Order());
// console.log("BST",BST);
// console.log("Normal",BST.contain(10));
// console.log("minValue",BST.miniumValueRecursive());

