'use strict'

function letterFrequency(txt) {
	let res = {};

	txt.split("").forEach(char => {
		res[char] = res.hasOwnProperty(char) ? res[char]  + 1 : 1;
	});
	
	res = Object.keys(res).map(char => [`${char}`, res[char]]).sort((a, b) => a===b ? 0 : a < b ? -1 : 1);
	return res;

}



console.log(letterFrequency("Not all that Mrs. Bennet, however"))


