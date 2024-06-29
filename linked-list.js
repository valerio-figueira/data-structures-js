class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class LinkedList {

    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }




    push(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this;
    }



    pop() {
        if (!this.head) return undefined;

        let pre = this.head;
        let temp = this.head;

        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }



    unshift(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }



    shift() {
        if (!this.head) return undefined;

        const temp = this.head;

        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return temp;
    }



    get(index) {
        if (!this.length) return undefined;
        if (index < 0 || index >= this.length) return undefined;

        let temp = this.head;

        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp;
    }



    set(value, index) {
        if (index < 0 || index >= this.length) return undefined;
        if (!this.length) return undefined;
        if (index === 0) return this.unshift(value);
        if (index === this.length - 1) return this.push(value);

        let node = new Node(value);
        let before = this.get(index - 1);
        let after = before.next;

        before.next = node;
        node.next = after;

        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (!this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let before = this.get(index - 1);
        let after = before.next;

        before.next = after.next;
        after.next = null;

        this.length--;
        return after;
    }
}