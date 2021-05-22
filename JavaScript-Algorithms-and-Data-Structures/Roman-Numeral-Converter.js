function convertToRoman(num) {

	if (num < 1 ) {
		console.error('Error (fn convertToRoman(num)): Can\'t convert negetive numbers. You provided: ' + num);
		return false;
	}
	if (+num > 3000000) {
		console.error('Error (fn convertToRoman(num)): Can\'t convert numbers greater than 3000000. You provided: ' + num);
		return false;
	}
	if (!+num) {
		console.error('Error (fn convertToRoman(num)): \'num\' must be a number or number in a string. You provided: ' + num);
		return false;
	}

	function num2let(a, b, c, num) {
		if(num < 4) return a.repeat(num);
		else if (num === 4) return a + b;
		else if (num < 9) return b + a.repeat(num - 5);
		else return a + c;
	}

	let romanArray = ["I", "V", "X", "L", "C", "D", "M", "Vb", "Xb", "Lb", "Cb", "Db", "Mb"]; // Xb means Xbar
	
	let arr = String(+num).split('').map(el => +el);
	let len = arr.length;
	let roman = "";
	arr.forEach(el => {
		let index = (len - 1) * 2;
		roman += num2let(romanArray[index], romanArray[index  + 1], romanArray[index + 2], el);
		len--;
	});

	return roman;
}
   


let res = convertToRoman(3999);
console.log(res);