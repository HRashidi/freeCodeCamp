function gcd(a, b) {
	[a, b] = [Math.max(a,b), Math.min(a, b)];
	return !b ? a : gcd(b, a % b)
}


let result = gcd(30,48)
console.log(result) // 6