function PriorityQueue() {
	let collection = [];
 	this.printCollection = () => {
		console.log(collection);
	};
	this.enqueue = newEntry => {
		let index = collection.findIndex(el => newEntry[1] < el[1]);
		if(index < 0) {
			collection.push(newEntry)
			return;
		}
		collection.splice(index, 0, newEntry);
	}

	this.dequeue = () => {
		return collection.shift()[0];
	}

	this.front = () => {
		return collection[0][0];
	}

	this.size = () => {
		return collection.length;
	}

	this.isEmpty = () => {
		return collection.length === 0;
	}
}

let myQueue = new PriorityQueue();
myQueue.enqueue(['kitten', 2])
myQueue.enqueue(['giraffe', 4]);
myQueue.enqueue(['rabbit', 3]);
myQueue.enqueue(['dog', 1]);
myQueue.enqueue(['mouse', 1]);
myQueue.enqueue(['bird', 2]);
myQueue.printCollection()

// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// myQueue.printCollection()
// console.log(myQueue.front())
