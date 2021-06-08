'use strict'

function sortDisjoint(values, indices) {
	let subArr = values.filter((el, index) => indices.includes(index)).sort();
	indices.sort().forEach((el, index) => {
		values[el] = subArr[index];
	});
	return values;
}

console.log(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7]))  //should return [7, 0, 5, 4, 3, 2, 1, 6]