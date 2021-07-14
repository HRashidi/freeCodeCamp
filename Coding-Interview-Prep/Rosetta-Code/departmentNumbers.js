'use strict'
function combinations(possibleNumbers, total) {

	function allComb(arr, m, sum) {
		if(sum < 0) return [];
		if(arr.length < m) return [];
		if(m === 0 && sum === 0) return [[]];

		let res = [];
		for(let index=0; index < arr.length; index++) {
			let el = arr[index];
			// check for first element being even
			if(total === sum && el % 2 !== 0) continue;
			let remainArr = [...arr.slice(0, index), ...arr.slice(index + 1)];
			for(let comb of allComb(remainArr, m - 1, sum - el)){
				res.push([el, ...comb])
			}
		}
		return res;
	}

	
	return allComb(possibleNumbers, 3, total);
}



console.log(combinations([1, 2, 3, 4, 5, 6, 7], 12));
// [[0, 1, 2], [0, 1, 3], [0, 1, 4], [0, 2, 3], [0, 2, 4], [0, 3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]