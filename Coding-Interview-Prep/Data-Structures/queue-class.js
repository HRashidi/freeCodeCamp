function Queue() {
	let collection = [];
	this.print = () => {
		console.log(collection);
	};
	this.enqueue = el => {
		collection.push(el)
	}

	this.dequeue = () => {
		return collection.shift();
	}

	this.front = () => {
		return collection[0];
	}

	this.size = () => {
		return collection.length;
	}

	this.isEmpty = () => {
		return collection.length === 0;
	}
}

let myQueue = new Queue();
myQueue.enqueue("1")
myQueue.enqueue("2");
// myQueue.enqueue("3");
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
myQueue.print()
console.log(myQueue.front())
