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

    public insertRecursive2(value: T, node: TreeNode<T> | null = this.root): TreeNode<T> {
        if (this.root === null) return this.root = new TreeNode<T>(value);
        if (node === null) return new TreeNode<T>(value);
        if (value > node.value) node.right = this.insertRecursive2(value, node.right);
        else node.left = this.insertRecursive2(value, node.left)
        return node
    }

    public insertRecursive(value: T, node: TreeNode<T> | null = this.root): boolean {
        if (this.root === null) {
            this.root = new TreeNode<T>(value);
            return true;
        }
        if (node.right === null) {
            node.right = new TreeNode<T>(value);
            return true
        } else if (node.left === null) {
            node.left = new TreeNode<T>(value);
            return true
        }
        if (value === node.value) return false;
        if (value > node.value) return this.insertRecursive(value, node.right);
        else return this.insertRecursive(value, node.left);
    }

    public miniumValueRecursive(node: TreeNode<T> | null = this.root) {
        if (node.left === null) return node.value
        return this.miniumValueRecursive(node.left)
    }
}

const BST = new BinarySearchTree<number>();
BST.insertRecursive(10)
BST.insertRecursive(9)
BST.insertRecursive(11)
BST.insertRecursive(13)
BST.insertRecursive(12)
BST.insertRecursive(8)
BST.insertRecursive(7)
BST.insertRecursive(6)
BST.insertRecursive(1)
console.log(BST);
// console.log("Normal",BST.contain(10));
// console.log("minValue",BST.miniumValueRecursive());

