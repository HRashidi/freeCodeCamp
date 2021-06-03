'use strict'
// Hash from two arrays
// Using two Arrays of equal length, create a Hash object where the elements from one array (the keys)
// are linked to the elements of the other (the values).

function arrToObj (keys, vals) {
	let result = {}
	for (let index = 0; index < keys.length; index++) {
		result[keys[index]] = vals[index]
	}
	return result;
}

console.log(arrToObj([1, 2, 3, 4, 5, 6], ["a", "b", "c", "d", "e"]));	// { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" }