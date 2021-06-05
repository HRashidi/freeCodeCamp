function fibonacci(n) {
	if( n < 2) return n;

	let a = 0, b = 1;

	while (n-- >= 2 )
		[a, b] = [b, a + b];

	return b;
}


console.log("0: ", fibonacci(0))
console.log("1: ", fibonacci(1))
console.log("2: ", fibonacci(2))
console.log("3: ", fibonacci(3))
console.log("5: ", fibonacci(5))
console.log("10: ", fibonacci(10))