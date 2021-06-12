'use strict'

function isCusip(string) {
	string = string.toUpperCase();
	
	// length
	if(string.length !== 9)
	return false;
	
	// alphanumeric
	// O and I are not valid but are accounted for in the check digit calculation
	let _alphabet = '0123456789ABCDEFGH JKLMN PQRSTUVWXYZ*@#';
	let invalidChar = !string.split("").every(char => _alphabet.includes(char));
	if(invalidChar) return false;

	function calcCheckSum(string){
		let arr = string.split("").map((el, index) => {
			return [1, 2][index % 2] * _alphabet.indexOf(el);
		});
		return (10 - arr.reduce((acc, el) => acc + Math.floor(el / 10) + el % 10, 0) % 10) % 10;
	}
    
    
	// Check sum
	return calcCheckSum(string.slice(0, 8)) === parseInt(_alphabet.indexOf(string[8]))
}


console.log(isCusip("037833100"));	// true
console.log(isCusip("17275R102"));	// false
console.log(isCusip("38259P508"));	// true