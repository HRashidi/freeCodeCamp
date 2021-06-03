'use strict'
// If n is 1 then the sequence ends
// If n is even then the next n of the sequence = n/2
// If n is odd then the next n of the sequence = (3 * n) + 1

function isPrime(num) {
	let index = 2;
	while(index <= Math.sqrt(num)) {
		if(num % index === 0) return false;
		index++;
	}
	return num > 1;
}

function hailstoneSequence(limit) {

	let primeNums = {1: 1};
	let result = [1, 0];

	let num = 2;
	while(num <= limit) {
		let start = num;
		let length = 1;
		while(start > 1) {
			start = start % 2 === 0 ? start / 2 : start * 3 + 1;

			if(primeNums.hasOwnProperty(start)) {
				length += primeNums[start];
				break;
			}

			length ++;
		}

		// Store num and length if number is prime
		if(isPrime(num)) primeNums[num] = length;

		if(length > result[1])
			result = [num, length];

		num++;
	}

	return result;
}


console.log(hailstoneSequence(30));		// [27, 112]
console.log(hailstoneSequence(50000));	// [35655, 324]
console.log(hailstoneSequence(100000));	// [77031, 351]

