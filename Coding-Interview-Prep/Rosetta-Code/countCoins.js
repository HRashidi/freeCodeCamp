'use strict'


function countCoins(cents) {
	let values = [1, 5, 10, 25];
	let lookup = {1: {}, 2: {}, 3: {}};

	function exchange(cents, max) {
		if(cents < 0) return 0;
		if(cents === 0) return 1;
		if(max === 0) return 1;

		if(lookup[max][cents]) return lookup[max][cents];

		let count = 0;
		for (let i = 0; i < max + 1; i++) {
			count += exchange(cents - values[i], i)
		}
		return count;
	}

	return exchange(cents, 3);
}


console.log(countCoins(15));	// 6
console.log(countCoins(85));	// 163
console.log(countCoins(100));	// 242