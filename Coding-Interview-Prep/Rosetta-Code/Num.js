function Num(n) {
	if(typeof n !== "number") {
		throw new TypeError('Not a Number')
	}

	if(n < 1 || n > 10) {
		throw new TypeError('Out of range')
	}
	this.value = n;
}

Num.prototype.valueOf = function() {
	return this.value;
};

Num.prototype.toString = function() {
	return `${this.value}`;
};

console.log(new Num(6));

console.log(new Num(3) + new Num(4));
console.log(new Num(3) * new Num(4));