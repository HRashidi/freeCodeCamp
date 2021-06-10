'use strict'

function numberOfNames(num) {
	if(num < 2) return 1;
	let lookup = { 0 : 1, 1: 1}

	let pyramid = [[1]];

	let rowIndex = 1;
	while(rowIndex < num) {
		let newRow = [];
		for (let colIndex = 0; colIndex < rowIndex + 1; colIndex++) {
			let remain = rowIndex - colIndex;
			if(remain < colIndex){
				newRow.push(lookup[remain]);
			} else {
				let sum = pyramid[remain - 1].slice(0, colIndex + 1).reduce((acc, el) => acc + el, 0);
				newRow.push(sum);
			}
		}
		pyramid.push(newRow);
		lookup[rowIndex + 1] = newRow.reduce((acc, el) => acc + el, 0);
		rowIndex++;
	}
	return pyramid[num - 1].reduce((acc, el) => acc + el, 0);
}

// console.log(numberOfNames(5)); // 385
// console.log(numberOfNames(18)); // 385
console.log(numberOfNames(123)); // 1255

