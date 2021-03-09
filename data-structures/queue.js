// Queues
// FIRST IN, FIRST OUT

class Queue {
    constructor() {
        this.collection = [];
    }

    print() {
        console.log(this.collection);
    }

    enqueue(element) {
        this.collection.push(element);
    }

    dequeue() {
        return this.collection.shift();
    }

    front() {
        return this.collection[0];
    }

    size() {
        return this.collection.length;
    }

    isEmpty() {
        return this.collecton.length === 0;
    }
}

const q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
q.print();
console.log(q.front());
q.print();

// Priority Queue
class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    printCollection() {
        console.log(this.collection);
    }

    /* Example: collection  = [["Beau Carnes", 2], ["Ryan Shin"], 1] 
                element = ["Joseph Woo", 3]
    */
    enqueue(element) {
        if (this.isEmpty()) {
            this.collection.push(element);
        } else {
            let added = false;
            for (let i = 0; i < this.collection.length; i++) {
                if (element[1] < this.collection[i][1]) { // Checking priorities
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(element);
            }
        }
    }

    dequeue() {
        return this.collection.shift()[0];
    }

    front() {
        return this.collection[0];
    }

    size() {
        return this.collection.length;
    }

    isEmpty() {
        return this.collection.length < 1;
    }
}

const pq = new PriorityQueue();
pq.enqueue(["Ryan Shin", 5]);
pq.enqueue(["Johnson Johnson", 1]);
pq.printCollection();
console.log(pq.dequeue());
pq.printCollection();
