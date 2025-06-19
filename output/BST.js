class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return true;
        }
        let temp = this.root;
        while (true) {
            if (temp.value === value)
                return false;
            if (newNode.value > temp.value) {
                if (temp.right === null) {
                    temp.right = newNode;
                    return true;
                }
                temp = temp.right;
            }
            else {
                if (temp.left === null) {
                    temp.left = newNode;
                    return true;
                }
                temp = temp.left;
            }
        }
    }
    contain(value) {
        let temp = this.root;
        while (temp !== null) {
            if (value === temp.value)
                return true;
            if (value > temp.value) {
                temp = temp.right;
            }
            else {
                temp = temp.left;
            }
        }
        return false;
    }
    containRecursive(value, node = this.root) {
        if (node === null)
            return false;
        if (node.value === value)
            return true;
        if (value > node.value)
            return this.containRecursive(value, node.right);
        else
            return this.containRecursive(value, node.left);
    }
    insertRecursive2(value, node = this.root) {
        if (this.root === null)
            return this.root = new TreeNode(value);
        if (node === null)
            return new TreeNode(value);
        if (value > node.value)
            node.right = this.insertRecursive2(value, node.right);
        else
            node.left = this.insertRecursive2(value, node.left);
        return node;
    }
    insertRecursive(value, node = this.root) {
        if (this.root === null) {
            this.root = new TreeNode(value);
            return true;
        }
        if (node.right === null) {
            node.right = new TreeNode(value);
            return true;
        }
        else if (node.left === null) {
            node.left = new TreeNode(value);
            return true;
        }
        if (value === node.value)
            return false;
        if (value > node.value)
            return this.insertRecursive(value, node.right);
        else
            return this.insertRecursive(value, node.left);
    }
    miniumValueRecursive(node = this.root) {
        if (node.left === null)
            return node.value;
        return this.miniumValueRecursive(node.left);
    }
}
const BST = new BinarySearchTree();
BST.insertRecursive(10);
BST.insertRecursive(9);
BST.insertRecursive(11);
BST.insertRecursive(13);
BST.insertRecursive(12);
BST.insertRecursive(8);
BST.insertRecursive(7);
BST.insertRecursive(6);
BST.insertRecursive(1);
console.log(BST);
// console.log("Normal",BST.contain(10));
// console.log("minValue",BST.miniumValueRecursive());
