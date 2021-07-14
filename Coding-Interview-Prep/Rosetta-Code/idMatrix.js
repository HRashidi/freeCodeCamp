'use strict'

function idMatrix(n) {
	let mat = [];

	for (let index = 0; index < n; index++) {
		let row = new Array(n).fill(0);
		row[index] = 1;
		mat.push(row);	
	}

	return mat;
}

console.log(idMatrix(3));