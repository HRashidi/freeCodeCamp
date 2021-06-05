'use strict'
// Sum digits of an integer

function sumDigits(str) {
	return str.split("").reduce((acc, el) => acc + parseInt(el, 36), 0);
}


console.log(sumDigits("fe"));	// 29
console.log(sumDigits("999ABCXYZ"));	// 162