function isPrime(num) {
	let index = 2;
	while(index <= Math.sqrt(num)) {
		if(num % index === 0) return false;
		index++;
	}
	return num > 1;
}

function largestPrimeFactor(number) {
	let largest = 2;
	if(isPrime(number))
		return number;

	let max = number / 2;
	for(let i= 2; i <= max; i++ )
		if(isPrime(i) && number % i === 0) 
			largest = i;

	return largest;
}
  
let result = largestPrimeFactor(6857 * 5);;
console.log(result);