'use strict'

function allEqual(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if(arr[i] !== arr[i + 1]) return false;
	}
	return true;
}

function azSorted(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if(arr[i] >= arr[i + 1]) return false;
	}
	return true;
}



// sort
console.log("===Sort===");
console.log(azSorted(["AA", "ACB", "BB", "CC"]));	// true
console.log(azSorted(["AA", "AA", "AA", "AA"]));	// false
console.log(azSorted(["BB", "AA"]));				// false

// sort
console.log("===Equal===");
console.log(allEqual(["AA", "AA", "AA", "AA"]));	// true