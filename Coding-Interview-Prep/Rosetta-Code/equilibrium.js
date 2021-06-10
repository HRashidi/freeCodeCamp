'use strict'

function equilibrium(arr) {
	function sum(arr) {
		return arr.reduce((acc, el) => acc + el, 0)
	}

	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if(sum(arr.slice(0, i + 1)) === sum(arr.slice(i)))
			res.push(i)	
	}

	return res;
}

console.log(equilibrium([-7, 1, 5, 2, -4, 3, 0])) // [3,6]