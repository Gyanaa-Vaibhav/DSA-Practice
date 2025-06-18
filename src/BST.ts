

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
}

const BST = new BinarySearchTree<number>();
BST.insert(10)
BST.insert(9)
BST.insert(11)
BST.insert(13)
BST.insert(12)
console.log(BST);

