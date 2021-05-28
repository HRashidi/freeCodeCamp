class CircularQueue {
	constructor(size) {
		this.queue = [];
		this.read = 0;
		this.write = 0;
		this.max = size - 1;
	
		while (size > 0) {
			this.queue.push(null);
			size--;
		}
	}
	
	print() {
		return this.queue;
	}

	enqueue(item) {
		if(this.queue[this.write] !== null)
			return null;
		this.queue[this.write++] = item;
		this.write %= this.max + 1;
		return item;
	}

	dequeue() {
		if(this.queue[this.read] === null)
			return null;
		let item = this.queue[this.read];
		this.queue[this.read++] = null;
		this.read %= this.max + 1;
		return item;
	}
}

let myQueue = new CircularQueue(5);
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)
myQueue.enqueue(5)
myQueue.enqueue(6)
myQueue.enqueue(7)
myQueue.enqueue(8)
myQueue.enqueue(9)

console.log(myQueue.print());