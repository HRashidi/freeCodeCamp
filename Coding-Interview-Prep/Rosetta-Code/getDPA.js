'use strict'

function factors(num) {
	if (num === 1) return [1];

	let i = 2
	while(i <= num) {
		if(num % i === 0) {
			let subFactors = factors(num / i);
			[...subFactors].forEach(el => {
				if(!subFactors.includes(el * i)) subFactors.push(el * i);
			});
			subFactors.sort((a,b) => a - b)
			return subFactors
		}
		i++;
	}
}

function sumOfProperFactors(num) {
	let arr = factors(num);
	arr.splice(arr.length - 1, 1);
	return arr.reduce((acc, el) => acc+ el, 0);
}

function decide(num) {
	let sum = sumOfProperFactors(num);
	return  sum < num ? 0 : sum === num ? 1 : 2; 
}

function getDPA(num) {
	let res = [0, 0, 0]
	while(num > 0) {
		res[decide(num)] += 1;
		num --;
	}	
	return res;
}

console.log(getDPA(5000)); // [3758, 3, 1239]