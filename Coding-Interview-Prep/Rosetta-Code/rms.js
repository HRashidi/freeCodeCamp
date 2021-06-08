'use strict'

function rms(arr) {

	let res = arr.reduce((acc, el) => {
		return acc + el * el;
	}, 0);
	
	return Math.sqrt(res / arr.length)
}


console.log(rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))