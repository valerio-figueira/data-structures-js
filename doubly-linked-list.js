class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const node = new Node(value);
        if (!this.length) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return undefined;

        let temp = this.tail;

        if (this.length > 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        } else {
            this.head = null;
            this.tail = null;
        }

        this.length--;
        return temp;
    }

    unshift(value) {
        const node = new Node(value);

        if (!this.length) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.length++;
        return this;
    }

    shift() {
        if (!this.length) return undefined;

        let temp = this.head;

        if (this.length > 1) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            this.head = null;
            this.tail = null;
        }

        temp.next = null;
        this.length--;
        return temp;
    }

    get(index) {
        if (index < 0  || index >= this.length) return undefined;
        if (!this.length) return undefined;

        let temp = this.head;

        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }

        return temp;
    }

    set(value, index) {
        if (!this.length) return undefined;
        if (index < 0  || index >= this.length) return undefined;
        if (index === 0) return this.unshift(value);
        if (index === this.length - 1) return this.push(value);

        let temp = this.get(index);
        let node = new Node(value);

        node.prev = temp.prev;
        temp.prev.next = node;

        node.next = temp;
        temp.prev = node;

        this.length++;
        return this;
    }

    remove(index) {
        if (!this.length) return undefined;
        if (index < 0  || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let temp = this.get(index);
        let before = temp.prev;
        let after = temp.next;

        before.next = after;
        after.prev = before;

        temp.next = null;
        temp.prev = null;

        this.length--;
        return temp;
    }
}