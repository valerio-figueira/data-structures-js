const Node = require("./nodes/stack-node");

class Stack {
    constructor(value) {
        this.top = new Node(value);
        this.length = 1;
    }

    push(value) {
        const node = new Node(value);

        if (!this.length) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return undefined;

        let temp = this.top;

        if (this.length === 1) {
            this.top = null;
        } else {
            this.top = this.top.next;
        }

        temp.next = null;
        this.length--;
        return temp;
    }
}

module.exports = Stack;