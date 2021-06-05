'use strict'

function leftFactorial(n) {
	let sum = 0;
	let curFact = 1;	// fact of 0
	let index = 1;
	while(index <= n){
		sum += curFact
		curFact *= index;
		index ++;
	}

	return sum;
}



console.log("0: ", leftFactorial(0))
console.log("1: ", leftFactorial(1))
console.log("2: ", leftFactorial(2))
console.log("3: ", leftFactorial(3))
console.log("5: ", leftFactorial(5))
console.log("10: ", leftFactorial(10))