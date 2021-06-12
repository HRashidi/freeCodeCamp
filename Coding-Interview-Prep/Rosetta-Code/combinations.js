'use strict'
function combinations(m, n) {

	function allComb(arr, m) {
		if(arr.length < m) return [];
		if(m === 0) return [[]];

		let res = [];
		for(let index=0; index < arr.length; index++) {
			let el = arr[index];
			for(let comb of allComb(arr.slice(index + 1), m - 1)){
				res.push([el, ...comb])
			}
		}
		return res;
	}

	let arr = [...Array(n).keys()];
	return allComb(arr, m);
}



console.log(combinations(3, 5));
// [[0, 1, 2], [0, 1, 3], [0, 1, 4], [0, 2, 3], [0, 2, 4], [0, 3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]