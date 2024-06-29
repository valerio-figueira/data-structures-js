const Node = require("./nodes/binary-search-tree-node");

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if(!this.root) {
            this.root = node;
            return this;
        }

        let temp = this.root;

        while (true) {
            if (node.value < temp.value) {
                if (!temp.left) {
                    temp.left = node;
                    return this;
                }

                temp = temp.left;
            } else {
                if (!temp.right) {
                    temp.right = node;
                    return this;
                }

                temp = temp.right;
            }
        }
    }

    contains(value) {
        if (!this.root) return false;

        let temp = this.root;

        while (temp) {
            if (temp.value === value) return true;
            if (value < temp.value) {
                if (!temp.left) return false;
                temp = temp.left;
            } else {
                if (!temp.right) return false;
                temp = temp.right;
            }
        }

        return false;
    }
}

module.exports = BinarySearchTree;