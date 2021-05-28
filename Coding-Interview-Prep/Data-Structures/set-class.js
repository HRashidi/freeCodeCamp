class Set {
	constructor() {
		// This will hold the set
		this.dictionary = {};
		this.length = 0;
	}

	// This method will check for the presence of an element and return true or false
	has(element) {
		return this.dictionary[element] !== undefined;
	}

	// This method will return all the values in the set
	values() {
		return Object.values(this.dictionary);
	}

	// This method will add an element to the set
	add(element) {
		if (!this.has(element)) {
			this.dictionary[element] = element;
			this.length++;
			return true;
		}

		return false;
	}

	// This method will remove an element from a set
	remove(element) {
		if (this.has(element)) {
			delete this.dictionary[element];
			this.length--;
			return true;
		}

		return false;
	}

	// This method will return the size of the set
	size() {
		return this.length;
	}
	
	union(inSet) {
		let newSet = new Set();
		this.values().forEach(el => {
			newSet.add(el);
		});

		inSet.values().forEach(el => {
			newSet.add(el);
		});
		return newSet;
	}

	intersection(inSet) {
		let newSet = new Set();
		this.values().forEach(el => {
			if(inSet.has(el))
				newSet.add(el);
		});
		return newSet;
	}

	difference(inSet) {
		let newSet = new Set();
		this.values().forEach(el => {
			if(!inSet.has(el))
				newSet.add(el);
		});
		return newSet;
	}

	isSubsetOf(inSet) {
		return this.values().every(el => inSet.has(el));
	}
}

let mySet = new Set();
// console.log("has" ,mySet.has("h"));
// console.log("add" ,mySet.add("h"));
// console.log("add" ,mySet.add("h"));
// console.log("print" ,mySet.dictionary);
// console.log("has" ,mySet.has("h"));
// console.log("size" ,mySet.size());
// console.log("remove" ,mySet.remove("h"));
// console.log("remove" ,mySet.remove("h"));

let setA = new Set();
setA.add("b");
setA.add("c");
setA.add("d");

let setB = new Set();
setB.add("c");
setB.add("d");
setB.add("e");
setB.add("f");

console.log(setA.union(setB));
console.log(setA.intersection(setB));
console.log(setA.difference(setB));
console.log(setA.isSubsetOf(setB));



