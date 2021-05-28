var called = 0;
var hash = string => {
	called++;
	var hashed = 0;
	for (var i = 0; i < string.length; i++) {
		hashed += string.charCodeAt(i);
	}
	return hashed;
};
var HashTable = function() {
	this.collection = {};

	this.add = (key, value) => {
		this.collection[hash(key)] = {...this.collection[hash(key)], [key]: value};
	}

	this.remove = (key) => {
		this.lookup(key) && delete this.collection[hash(key)][key];
		!Object.values(this.collection[hash(key)]).length && delete this.collection[hash(key)];
	}
	

	this.lookup = (key) => {
		return this.collection[hash(key)]?this.collection[hash(key)][key] || null: null;
	}
};


let myHashTable = new HashTable();
myHashTable.add("ab", "c1")
myHashTable.add("ba", "c2")
myHashTable.remove("ab")
console.log(myHashTable.lookup("ab"))
// myHashTable.add("a", "b")

console.log(myHashTable);
