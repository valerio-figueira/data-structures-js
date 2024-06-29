const Node = require("./nodes/queue-node");

class Queue {
    constructor(value) {
        this.first = new Node(value);
        this.last = this.first;
        this.length = 1;
    }

    enqueue(value) {
        const node = new Node(value);

        if (!this.length) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        this.length++;
        return this;
    }

    dequeue() {
        if (!this.length) return undefined;

        let temp = this.first;

        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            temp.next = null;
        }

        this.length--;
        return temp;
    }
}

module.exports = Queue;