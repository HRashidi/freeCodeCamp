function factors(num) {
	if (num === 1) return [1];

	let i = 2
	while(i <= num) {
		if(num % i === 0) {
			let subFactors = factors(num / i);
			[...subFactors].forEach(el => {
				if(!subFactors.includes(el * i)) subFactors.push(el * i);
			});
			subFactors.sort((a,b) => a -b)
			return subFactors
		}
		i++;
	}
}

let result = factors(45)
console.log(result);
