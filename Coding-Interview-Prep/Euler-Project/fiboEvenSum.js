function fiboEvenSum(n) {

	// calc next fibbo number
	let next = (a,b) => [b, a+b, a+b];

	let a = 1, b = 1, c = 1;
	let sum = 0;
	
	while (c <= n) {
		if(c % 2 == 0) sum += c;
		[ a, b, c] = next(a, b);
	}

	return sum;
}
  
  
let result = fiboEvenSum(8);
console.log(result);