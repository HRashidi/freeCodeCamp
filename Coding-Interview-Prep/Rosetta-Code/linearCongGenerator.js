'use strict'

function linearCongGenerator(r0, a, c, m, n) {
	// r_(n+1) = ( a × r_n + c) mod m
	let sum = r0;
	for (let i = 0; i < n; i++) {
		sum = (a * sum + c ) % m;
	}

	return sum;
}

console.log(linearCongGenerator(324, 1145, 177, 2148, 3));		// 855
console.log(linearCongGenerator(234, 11245, 145, 83648, 4));	// 110