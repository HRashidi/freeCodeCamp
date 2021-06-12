'use strict'
function fizzBuzz() {
	let res = [...Array(100).keys()].map(el => el + 1);
	res = res.map(el => {
		if(el % 15 === 0)
			return "FizzBuzz";
		else if(el % 3 === 0)
			return "Fizz";
		else if(el % 5 === 0)
			return "Buzz";
		else
		return el;
	})
	return res;
}

console.log(fizzBuzz())