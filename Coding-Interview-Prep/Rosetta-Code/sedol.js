'use strict'
// https://en.wikipedia.org/wiki/SEDOL
function sedol(input) {
	if(input.search(/^[0-9BCDFGHJKLMNPQRSTVWXYZ]{6}$/) == -1) return null;

	let weight = [1, 3, 1, 7, 3, 9, 1];

	let sum = input.split("").reduce((acc, el, index) => acc + parseInt(el, 36) * weight[index], 0);
	let checksum = (10 - sum % 10) % 10;
	return input + checksum;
}

console.log(sedol('B0YBKT'));
console.log(sedol('BOATER'));
console.log(sedol('710889'));	// '7108899'