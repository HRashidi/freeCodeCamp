'use strict'
//sum of squares of an array

function sumsq(array) {
	return array.reduce((acc, el) => acc + el * el, 0);
}

console.log(sumsq([1, 2, 3, 4, 5]));	// 55