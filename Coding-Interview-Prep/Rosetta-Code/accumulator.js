'use strict'
function accumulator(init) {
	let sum = init;
	return function(el) {
		sum += el;
		return sum;
	}
}


let myAcc = accumulator(10);
console.log(myAcc(4))
console.log(myAcc(8))