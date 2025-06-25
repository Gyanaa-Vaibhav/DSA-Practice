"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linkedList_1 = require("./day 7-10/linkedList");
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
                return temp;
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
    insertRecursive(value, node = this.root) {
        if (this.root === null)
            return this.root = new TreeNode(value);
        if (node === null)
            return new TreeNode(value);
        if (node.value === value)
            return node;
        if (value > node.value)
            node.right = this.insertRecursive(value, node.right);
        else
            node.left = this.insertRecursive(value, node.left);
        return node;
    }
    insertRecursive2(value, node = this.root) {
        if (this.root === null) {
            this.root = new TreeNode(value);
            return true;
        }
        if (node.right === null && value > node.value) {
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
            return this.insertRecursive2(value, node.right);
        else
            return this.insertRecursive2(value, node.left);
    }
    miniumValueRecursive(node = this.root) {
        if (node.left === null)
            return node;
        return this.miniumValueRecursive(node.left);
    }
    BFS() {
        const array = new Array();
        const queue = new linkedList_1.LinkedList(this.root);
        while (queue.getLength()) {
            const previousNode = queue.removeHead();
            array.push(previousNode.value.value);
            if (previousNode.value.left) {
                queue.append(previousNode.value.left);
            }
            if (previousNode.value.right) {
                queue.append(previousNode.value.right);
            }
        }
        return array;
    }
    DFS_Pre_Order_Recursive(node, array) {
        if (node === null)
            return;
        array.push(node.value);
        if (node.left)
            this.DFS_Pre_Order_Recursive(node.left, array);
        if (node.right)
            this.DFS_Pre_Order_Recursive(node.right, array);
    }
    DFS_Pre_Order() {
        const array = new Array();
        this.DFS_Pre_Order_Recursive(this.root, array);
        return array;
    }
    DFS_Post_Order_Recursive(node, array) {
        if (node === null)
            return;
        if (node.left)
            this.DFS_Post_Order_Recursive(node.left, array);
        if (node.right)
            this.DFS_Post_Order_Recursive(node.right, array);
        return array.push(node.value);
    }
    DFS_POST_ORDER() {
        const array = new Array();
        this.DFS_Post_Order_Recursive(this.root, array);
        return array;
    }
    DFS_In_Order_Recursive(node, array) {
        if (node === null)
            return;
        if (node.left)
            this.DFS_In_Order_Recursive(node.left, array);
        array.push(node.value);
        if (node.right)
            this.DFS_In_Order_Recursive(node.right, array);
        return;
    }
    DFS_In_Order() {
        const array = new Array();
        this.DFS_In_Order_Recursive(this.root, array);
        return array;
    }
    BFSAgain() {
        const queue = [];
        const ansArray = [];
        let root = this.root;
        queue.push(root);
        while (queue.length > 0) {
            const temp = queue.shift();
            ansArray.push(temp.value);
            if (temp.left) {
                queue.push(temp.left);
            }
            if (temp.right) {
                queue.push(temp.right);
            }
        }
        return ansArray;
    }
    deleteNode(value, node = this.root) {
        if (node === null)
            return null;
        if (value < node.value) {
            node.left = this.deleteNode(value, node.left);
        }
        else if (value > node.value) {
            node.right = this.deleteNode(value, node.right);
        }
        else {
            if (node.left === null && node.right === null) {
                return null;
            }
            else if (node.left === null && node.right !== null) {
                return node.right;
            }
            else if (node.left !== null && node.right === null) {
                return node.left;
            }
            else {
                node.value = this.miniumValueRecursive(node.right).value;
                node.right = this.deleteNode(node.value, node.right);
            }
        }
        return node;
    }
}
const BST = new BinarySearchTree();
// BST.insertRecursive(9)
// BST.insertRecursive(4)
// BST.insertRecursive(12)
// BST.insertRecursive(34)
// BST.insertRecursive(45)
// BST.insertRecursive(1)
// BST.insertRecursive(6)
// BST.insertRecursive(1)
// BST.insertRecursive(6)
BST.insertRecursive(10);
BST.insertRecursive(6);
BST.insertRecursive(15);
BST.insertRecursive(3);
BST.insertRecursive(8);
BST.insertRecursive(20);
// console.log("BFS");
// console.log(BST.BFS());
// console.log(BST.DFS_Pre_Order());
// console.log(BST.DFS_POST_ORDER());
// console.log(BST.DFS_In_Order());
// console.log("BST",BST);
// console.log("Normal",BST.contain(10));
// console.log("minValue",BST.miniumValueRecursive());
console.log(BST.BFSAgain());
console.log(BST.deleteNode(10));
console.log(BST.BFSAgain());
// console.log(BST.contain(8));
// [10, 6, 15, 3, 8, 20]
