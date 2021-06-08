'use strict'


function beadSort(arr) {
	let returnArr = [];

	let transArr = new Array(Math.max(...arr)).fill(0);
	arr.forEach(el => {
		for (let index = 0; index < el; index++) {
			transArr[index]++;
		}
	});

	arr.forEach(num => {
		let newEl = transArr.filter(el => el > 0).length;
		returnArr.unshift(newEl);
		transArr = transArr.map(el => el - 1);
	});
	return returnArr;
}



console.log(beadSort([25, 32, 12, 7, 20])) // [7, 12, 20, 25, 32]
// console.log(beadSort([38, 45, 35, 8, 13])) // [8, 13, 35, 38, 45]