'use strict'

function mode(arr) {
	if(arr.length === 0) return [];
	let counts = {};
	let max = 0;
	arr.forEach(el => {
		counts[el] = counts.hasOwnProperty(el) ? counts[el] + 1 : 1;
		max = counts[el] > max ? counts[el] : max;
	});

	let res = [];
	for (const [key, value] of Object.entries(counts)) {
		if(value === max) res.push(parseInt(key));
	}

	return res;
}

console.log(mode([1, 2, 4, 4, 1]));