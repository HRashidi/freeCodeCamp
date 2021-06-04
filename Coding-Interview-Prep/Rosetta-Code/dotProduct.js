'use strict'
function dotProduct(ary1, ary2) {

	let res = 0;
	let dim = ary1.length;
	for (let i = 0; i < dim; i++) {
		res += ary1[i] * ary2[i];
	}

	return res;
}



console.log(dotProduct([1, 3, -5], [4, -2, -1])); // 3
console.log(dotProduct([17, 27, 34, 43, 15], [62, 73, 48, 95, 110])) // 10392