'use strict'

function isBalanced(str) {
	let counter = 0;
	for(let char of str) {
		if(char === "[") counter++;
		if(char === "]") counter--;
		if(counter < 0) return false
	}
	return true;
}

console.log(isBalanced("[[[]]][[]]]][][["));
console.log(isBalanced("[][[[[][][[[]]]]]]"))