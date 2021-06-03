'use strict'
// A happy number is defined by the following process:

// Starting with any positive integer, replace the number by the sum of 
// the squares of its digits, and repeat the process until the number equals 1 
// (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers, while those that
// do not end in 1 are unhappy numbers.

function happy(number) {
	
	function squareSumOfNum(number) {
		return `${number}`.split("").reduce((acc, el) => acc + Math.pow(parseInt(el), 2), 0);
	}

	do {
		number = squareSumOfNum(number);
	} while(number > 9)

	return number === 1
}


console.log(happy(7));	// true
console.log(happy(10));	// true
console.log(happy(13));	// true
console.log(happy(33));	// false

