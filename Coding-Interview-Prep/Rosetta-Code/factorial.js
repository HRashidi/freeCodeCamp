'use strict'

function factorial(n) {
	if(n < 1) return 0;
	let res = n;

	while(n-- > 1)
		res *= n
	
	return res;
}


console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));