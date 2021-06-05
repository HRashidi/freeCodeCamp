'use strict'
// "123456789"

function selection(string) {
	if(string.length === 1 ) return [parseInt(string), -parseInt(string)];

	let allParts = [];
	for(let index=0; index < string.length; index++ ) {
		let curPart = string.slice(0, index  + 1);
		let remainingString = string.slice(index + 1);

		if(remainingString === "") {
			allParts.push([parseInt(curPart)]);
			allParts.push([-parseInt(curPart)]);
		} 

		for(let remainParts of selection(remainingString)){
			allParts.push([parseInt(curPart)].concat(remainParts))
			allParts.push([-parseInt(curPart)].concat(remainParts))
		}
	}
	return allParts;
}

function validate(arr, num) {
	return arr.reduce((acc, el) => acc + el, 0) === num;
}

function num2string(arr) {
	console.log(arr);
	let str = arr.reduce((acc, el) => acc + (el > 0 ? `+${el}` : el), "");
	console.log(str);
	str = str[0] === "+" ? str.slice(1, str.length) : str;
	return str;
}


function sumTo100(num) {

	let res = [];
	let domain = selection("123456789");
	domain = domain.filter(el => validate(el, num));
	domain = domain.map(el => num2string(el));
	domain.sort((a, b) => a < b ? -1 : 1);
	return domain;
}

console.log(sumTo100(199));	// ["-1+2-3+45+67+89", "123-4+5+6+78-9", "123-4+56+7+8+9"]