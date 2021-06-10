'use strict'

function eth_mult(a, b) {
	let lCol = [a];
	let rCol = [b];
	while(a > 1) {
		a = Math.floor(a / 2); 
		lCol.push(a);
		b *= 2;
		rCol.push(b)
	}

	let sum = rCol.reduce((acc, el, index) => acc + (lCol[index] % 2 === 0 ? 0 : el), 0)

	return sum;
}

console.log(eth_mult(17,34)); // 578