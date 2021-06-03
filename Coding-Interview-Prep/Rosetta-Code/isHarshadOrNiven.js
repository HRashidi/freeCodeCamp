'use strict'
// The Harshad or Niven numbers are positive integers ≥ 1 that are divisible by the sum of their digits.
// Implement a function to generate successive members of the Harshad sequence.
// Use it to return an array with ten members of the sequence, starting with first Harshad number greater than n.
function sumOfNum(number) {
	return `${number}`.split("").reduce((acc, el) => acc + parseInt(el), 0);
}

function isHarshadOrNiven(n) {
	const res = [];

	let curNum = n + 1;
	while(res.length < 10) {
		if(curNum % sumOfNum(curNum) === 0) {
			res.push(curNum);
		}
		curNum ++;
	}


	return res;
}


console.log(isHarshadOrNiven(10));		// [12, 18, 20, 21, 24, 27, 30, 36, 40, 42]
console.log(isHarshadOrNiven(400));		// [402, 405, 407, 408, 410, 414, 420, 423, 432, 440]
console.log(isHarshadOrNiven(1000));	// [1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]