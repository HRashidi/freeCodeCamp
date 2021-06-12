'use strict'
function standardDeviation(arr) {
	let len = arr.length;

	let avg = arr.reduce((acc, el) => acc + el, 0) / len;
	let vars = arr.reduce((acc, el) => acc + Math.pow(el - avg, 2), 0) / (len + 1);
	let std = Math.round(Math.sqrt(vars) * 1000) / 1000;

	return std
}

console.log(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]));	// 2
console.log(standardDeviation([600, 470, 170, 430, 300]));	// 147.323