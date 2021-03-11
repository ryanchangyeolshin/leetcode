// Binary Search Tree

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    searchTree(data, node) {
        if (data < node.data) {
            if (node.left === null) {
                node.left = new Node(data);
                return;
            } else if (node.left !== null) {
                return this.searchTree(data, node.left)
            }
        } else if (data > node.data) {
            if (node.right === null) {
                node.right = new Node(data);
                return;
            } else if (node.right !== null) {
                return this.searchTree(data, node.right);
            }
        } else {
            return null;
        }
    }

    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            return this.searchTree(data, node);
        }
    }

    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current.data !== null) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }

    isPresent(data) {
        let current = this.root;

        while (current) {
            if (data === current.data) {
                return true;
            } else {
                if (data < current.data) {
                    current = current.left;
                } else if (data > current.data) {
                    current = current.right;
                }
            }
        }
        return false;
    }

    removeNode(node, data) {
        if (node === null) {
            return null;
        }
        if (data === node.data) {
            // node has no children
            if (node.left === null && node.right === null) {
                return null;
            }

            // node has no left child
            if (node.left === null) {
                return node.right;
            }

            // node has no right child
            if (node.right === null) {
                return node.left;
            }

            // if node has two children
            let tempNode = node.right;
            while (tempNode.left !== null) {
                tempNode = tempNode.left;
            }
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = removeNode(node.left , data);
            return node;
        } else {
            node.right = removeNode(node.right, data);
            return node;
        }
    }

    remove(data) {
        this.removeNode(this.root, data);
    }
}

const bst = new BinarySearchTree();