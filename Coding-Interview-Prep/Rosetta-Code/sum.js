'use strict'

// Sn=∑k=1n1k2
function sum(a, b) {
	let res = 0;
	while(a <= b) {
		res += 1 / (a * a);
		a++;
	}

	return res;
}


console.log(sum(1, 100));	// 1.6349839001848923
console.log(sum(33, 46));	// 0.009262256361481223