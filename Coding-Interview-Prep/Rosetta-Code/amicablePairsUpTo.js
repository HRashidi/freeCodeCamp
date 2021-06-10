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

function amicablePairsUpTo(maxNum) {
	let res = [];

	let first = 2;
	while(first < maxNum) {
		let second = sumOfProperFactors(first);
		if(second <= first) {
			first++;
			continue;
		}
		if(sumOfProperFactors(second) === first) {
			res.push([first, second])
		}
		first++;
	}

	return res;
}

console.log(amicablePairsUpTo(300)); // [[220,284]]
console.log(amicablePairsUpTo(3000)); // [[220,284],[1184,1210],[2620,2924]]