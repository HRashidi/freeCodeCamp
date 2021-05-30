var MaxHeap = function() {
	this.heap = [null];
	let swap = (arr, a, b) => {
		[arr[a], arr[b]] = [arr[b], arr[a]];
	}

	this.print = function() {
		return this.heap.slice(1);
	}

	this.insert = function(value) {
		
		let childIndex  = this.heap.length;
		let parentIndex = Math.floor(childIndex / 2);
		
		this.heap.push(value);

		let child  = this.heap[childIndex];
		let parent = this.heap[parentIndex];

		while(childIndex > 1 &&  parent < child ) {
			swap(this.heap, parentIndex, childIndex);
			[childIndex, parentIndex] = [parentIndex, Math.floor(parentIndex / 2)];
			parent = this.heap[parentIndex];
		}
	}

	this.remove = function() {
		if(this.heap.length === 1) return;

		swap(this.heap, 1, this.heap.length - 1)
		let value = this.heap.pop(this.heap);

		// Rearange the heap
		let maxIndex = this.heap.length - 1;
		let rootIndex = 1;
		while(rootIndex < maxIndex) {
			let childIndex = rootIndex * 2;
			// childless
			if(childIndex > maxIndex) break;

			// one child
			if(childIndex === maxIndex){
				this.heap[rootIndex] < this.heap[childIndex] && swap(this.heap, rootIndex, childIndex);
				break;
			}

			// two children
			childIndex = this.heap[childIndex] >= this.heap[childIndex + 1]? childIndex : childIndex + 1;
			if(this.heap[rootIndex] < this.heap[childIndex])
				swap(this.heap, rootIndex, childIndex);
			

			rootIndex = childIndex;
		}

		return value;
	}
};


let myHeap = new MaxHeap();
myHeap.insert(4);
myHeap.insert(17);
myHeap.insert(2);
myHeap.insert(8);
myHeap.insert(12);
myHeap.insert(15);
myHeap.insert(10);
myHeap.insert(3);
console.log(myHeap.heap);
console.log(myHeap.remove())
console.log(myHeap.heap);
console.log(myHeap.remove())
console.log(myHeap.heap);
console.log(myHeap.remove())
console.log(myHeap.heap);
console.log(myHeap.remove())
console.log(myHeap.heap);
console.log(myHeap.remove())
console.log(myHeap.heap);
console.log(myHeap.remove())
console.log(myHeap.heap);
console.log(myHeap.remove())
console.log(myHeap.heap);
console.log(myHeap.remove())
console.log(myHeap.heap);