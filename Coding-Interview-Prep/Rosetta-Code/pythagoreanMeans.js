'use strict'

function pythagoreanMeans(rangeArr) {

	function means(arr) {
		let output = {Arithmetic : 0, Geometric : 1, Harmonic : 0}
		output = arr.reduce((acc, el) => {
			acc.Arithmetic += el;
			acc.Geometric *= el;
			acc.Harmonic += 1 / el;
			return acc; 
		}, output);
		
		output.Arithmetic /= arr.length;
		output.Geometric   = Math.pow(output.Geometric, 1 / arr.length);
		output.Harmonic = arr.length / output.Harmonic;

		return output;
	}

	function testValues(values) {
		if(values.Arithmetic >= values.Geometric && values.Geometric >= values.Harmonic )
			return 'is A >= G >= H ? yes';
		else
			return 'is A >= G >= H ? no'
	}

	let values = means(rangeArr);
	let test = testValues(values);
	return { values ,test}
}


console.log(pythagoreanMeans([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))