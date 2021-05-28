function LinkedList() {
	var length = 0;
	var head = null;

	var Node = function(element){
		this.element = element;
		this.next = null;
	};

	this.head = function(){
		return head;
	};

	this.size = function(){
		return length;
	};

	this.add = function(element){
		let node = new Node(element);
		if(head === null) {
			head = node;
		} else {
			let curNode = head;
			while(curNode.next)
				curNode = curNode.next;
			curNode.next = node;
		}
		length++;
	};

	this.remove = function(element) {
		if(head.element === element) {
			head = head.next;
		} else {
			let preNode = head;
			let curNode = head.next;
			while(curNode.element !== element) {
				if(curNode.next === null)
					return;
					preNode = curNode;
				curNode = curNode.next;
			}
			preNode.next = curNode.next;
		}
		length--;
	}

	this.indexOf = function (element) {
		let index = 0;
		let curNode = head;
		while(curNode && curNode.element !== element) {
			curNode = curNode.next;
			index++;
		}
		return curNode ? index : -1;
	}

	this.elementAt = function(index) {
		if(index >= length) return undefined;
		let curNode = head;
		while(index > 0) {
			curNode = curNode.next;
			index--;
		}
		return curNode.element;
	}

	this.addAt = function(index,element) {
		if(index < 0 || index >= length) return false;
		length++;
		let newNode = new Node(element);
		let curNode = head;
		if(index === 0) {
			newNode.next = curNode;
			head = curNode;
			return true;
		}
		while(index > 1) {
			curNode = curNode.next;
			index--;
		}
		newNode.next = curNode.next;
		curNode.next = newNode;
		return true;
	}

	this.removeAt = function (index) {
		if(index < 0 || index >= length) return null;
		length--;
		let curNode = head;
		if(index === 0) {
			head = head.next;
			return curNode.element;
		}
		while(index > 1) {
			curNode = curNode.next;
			index--;
		}
		let returnNode = curNode.next;
		curNode.next = returnNode.next;
		return returnNode.element;
	}

	this.isEmpty = function() {
		return head === null;
	}
}

let myList = new LinkedList();
myList.add("Hossein");
myList.add("xlord");
console.log(myList.size());


// myList.remove(null);
console.log(myList.head());
// myList.remove(null);
console.log(myList.size());
console.log(myList.indexOf("xlord"))

console.log(myList.removeAt(1))
console.log(myList.elementAt(1))
// console.log(myList.elementAt(2))
