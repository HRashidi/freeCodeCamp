var Map = function() {
	this.collection = {};

	// add accepts a key, value pair to add to the map.
	this.add = (key, value) => {
		this.collection[key] = value;
	}

	// remove accepts a key and removes the associated key, value pair
	this.remove = (key) => {
		delete this.collection[key];
	}

	// get accepts a key and returns the stored value
	this.get = (key) => {
		return this.collection[key];
	}

	// has accepts a key and returns true if the key exists or false if it doesn't.
	this.has = (key) => {
		return this.collection[key] !== undefined;
	}

	// values returns an array of all the values in the map
	this.values = () => {
		return Object.values(this.collection);
	}

	// size returns the number of items in the map
	this.size = () => {
		return Object.values(this.collection).length;
	}

	// clear empties the map
	this.clear = () => {
		this.collection = {};
	}
	
};

let myMap = new Map();
console.log(myMap.add());