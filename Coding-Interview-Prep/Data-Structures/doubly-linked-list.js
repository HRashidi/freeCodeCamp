var Node = function(data, prev) {
	this.data = data;
	this.prev = prev;
	this.next = null;
};

var DoublyLinkedList = function() {
	this.head = null;
	this.tail = null;

	this.add = function(data) {
		let newNode = new Node(data, null);
		if(this.head === null) {
			this.head = newNode;
			this.tail = newNode;
			return;
		}
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
	}

	this.print = function() {
		let curNode = this.head;
		while(curNode) {
			console.log(curNode.data);
			curNode = curNode.next;
		}
	}

	this.remove = function(data) {
		let output = null;
		while(this.head && this.head.data === data) {
			this.head = this.head.next;
			if(this.head) this.head.prev = null;
			output = true;
		}
		if(!this.head) this.tail = null;

		while(this.tail && this.tail.data === data) {
			this.tail = this.tail.prev;
			this.tail.next = null;
			output = true;
		}
		if(!this.head) this.tail = null;
		
		let curNode = this.head;
		while(curNode !== null) {
			if(curNode.data === data) {
				curNode.prev.next = curNode.next;
				curNode.next.prev = curNode.prev;
				output = true;
			}
			curNode = curNode.next;
		}

		return output;
	}

	this.reverse = function() {
		let output = null;

		let curNode = this.head;
		while(curNode !== null) {
			[curNode.prev, curNode.next] = [curNode.next, curNode.prev];
			curNode = curNode.prev;
			output = true;
		}
		[this.head, this.tail] = [this.tail, this.head];
	}
};

let myList = new DoublyLinkedList();
myList.add("a");
myList.add("b");
myList.add("c");
myList.add("d");
myList.add("e");
myList.add("f");
myList.add("g");
myList.add("h");
myList.print();
console.log("----------");
myList.reverse();
myList.print();

console.log(myList.head);
console.log(myList.tail);