'use strict'
function iteratedSquare(n) {
	let str = n;

	while(str !== 1 && str !== 89 ) {
		str = str.toString()
		str = str.split("").reduce((acc, el) => acc + el * el, 0);
	}
	return str;
}

console.log(iteratedSquare(4));