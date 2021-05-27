function Stack() {
	var collection = [];
	this.print = function() {
		console.log(collection);
	};
	this.push = function(el) {
		collection.push(el);
	}
	this.pop = function() {
		return collection.pop();
	}
	this.peek = function() {
		return collection[collection.length - 1]
	}
	this.isEmpty = function() {
		return collection.length === 0
	}
	this.clear = function() {
		collection = [];
	}
}
  
let myStack = new Stack();
myStack.push("HHH")
myStack.push("BBB")
myStack.push("CCC")
console.log(myStack.peek())
let el = myStack.pop();
el = myStack.pop();
el = myStack.pop();
console.log(el)
console.log(myStack.isEmpty())
myStack.print()