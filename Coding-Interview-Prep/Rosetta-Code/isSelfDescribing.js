'use strict'

function isSelfDescribing(num) {
	let str = num.toString();
	return str.toString().split("").every((el, index) => {
		let re = new RegExp(index.toString(), 'g');
		let matches = str.match(re);
		if(parseInt(el) !== (matches ? matches.length : 0))
			return false;
		return true;
	});
}


console.log(isSelfDescribing(3021));
console.log(isSelfDescribing(2020));